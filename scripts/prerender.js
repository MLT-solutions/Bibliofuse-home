// Prerenders every static route with headless Chrome so crawlers that don't run
// JavaScript (Googlebot's first crawl pass, curl, etc.) see the real per-page
// title/description/canonical/hreflang/JSON-LD/content instead of the blank SPA
// shell. See docs/gsc-cloudflare-findings.md for why this exists.
//
// Runs after generate-static-routes.js: that script has already written one
// index.html per route/language (all identical copies of the built shell,
// except the 80 noindex'd sister-app pages). This script overwrites each file
// with what a real browser actually renders for that URL.
import puppeteer from 'puppeteer';
import sirv from 'sirv';
import { createServer } from 'http';
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const distDir = join(__dirname, '..', 'dist');

const SUPPORTED_LANGUAGES = ['en', 'es', 'fr', 'nl', 'pt', 'ru', 'zh', 'ja', 'ko', 'id', 'ms'];
const ARTICLE_SLUGS = ['reading-ebooks-offline-iphone', 'convert-cbr-to-cbz-online', 'organize-ebooks-by-content-not-metadata', 'find-duplicate-comics-different-names', 'open-bank-statement-pdf-iphone', 'contentcue-11-languages', 'archive-duplicate-scanner-11-languages', 'smartdecrypt-11-languages', 'airdrop-books-to-iphone', 'change-reading-direction-comics', 'bibliofuse-ipad-reading-tips', 'read-pdf-comics-iphone', 'read-webtoons-on-iphone', 'convert-zip-to-cbz-online', 'pc-home-library-streaming-iphone', 'sideload-comics-iphone-without-itunes', 'ebook-formats-long-term-library', 'backup-comic-library-mac', 'double-page-spreads-comics', 'extract-images-from-cbz', 'comic-bookmarks-iphone', 'organize-manga-series-iphone', 'epub-to-pdf-online', 'night-reading-comics-iphone', 'cbz-to-pdf-online', 'tailscale-remote-library-access', 'webp-vs-png-for-comics', 'reading-progress-sync-no-cloud-account', 'cbz-cbr-rar-zip-which-format-best', 'smartdecrypt-language-update', 'digital-comic-library-management-guide', 'build-perfect-digital-manga-collection', 'best-duplicate-file-finder-mac', 'find-duplicate-photos-mac', 'perceptual-hashing-duplicate-detection', 'clean-up-duplicate-manga-library', 'find-duplicate-comics-cbz-mac', 'pdf-zip-password-manager-profiles', 'batch-decrypt-password-protected-files', 'decrypt-password-protected-cbz-zip', 'read-manga-online-iphone', 'unlock-password-protected-pdf-iphone', 'privacy-first-ebook-tools', 'merge-epub-files-online', 'compress-epub-online', 'archive-duplicate-scanner-language-update', 'merge-cbz-files-online', 'convert-pdf-to-cbz-online', 'bibliofuse-tools-tab-guide', 'epub-reader-iphone-no-drm', 'ocr-comics-extract-text-iphone', 'mac-home-library-streaming-iphone', 'icloud-sync-reading-progress', 'best-comic-reader-iphone-ipad', 'how-to-read-manga-on-iphone', 'wifi-transfer-comics-to-iphone', 'cbz-vs-cbr-vs-epub-formats-explained', 'read-cbz-cbr-on-iphone', 'manage-your-bibliofuse-library', 'reduce-comic-ebook-file-size', 'getting-started-with-bibliofuse'];
const ROUTES = ['/', '/comicreader', '/webapp', '/grepreader', '/grepreader/changelog', '/grepreader/privacy', '/archive', '/archive/changelog', '/archive/privacy', '/smartdecrypt', '/smartdecrypt/changelog', '/smartdecrypt/privacy', '/contentcue', '/contentcue/changelog', '/contentcue/privacy', '/androidrequest', '/about', '/privacy', '/blog', '/changelog', ...ARTICLE_SLUGS.map(s => `/blog/${s}`)];

const CONCURRENCY = 3;
const MAX_RETRIES = 3;
const SEO_READY_TIMEOUT_MS = 30000;

const jobs = [];
for (const lang of SUPPORTED_LANGUAGES) {
    for (const route of ROUTES) {
        const urlPath = route === '/' ? `/${lang}/` : `/${lang}${route}/`;
        const file = route === '/' ? join(distDir, lang, 'index.html') : join(distDir, lang, route.slice(1), 'index.html');
        jobs.push({ urlPath, file });
    }
}

// Every SEO-managed title is `${title} | BiblioFuse` (see src/components/SEO.jsx
// fullTitle) while the unrendered shell's static title has no " | " separator at
// all — so waiting for that substring is a reliable, app-data-driven proxy for
// "Helmet has committed its updates for this specific page," regardless of how
// long a heavier page (Home, blog posts with data fetches) takes to settle.
// (networkidle0 alone isn't enough: it can fire before Helmet's effect commits
// on pages with more component/effect depth.)
async function renderJob(browser, baseUrl, { urlPath, file }) {
    for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
        const page = await browser.newPage();
        try {
            await page.goto(`${baseUrl}${urlPath}`, { waitUntil: 'networkidle0', timeout: 30000 });
            await page.waitForFunction(() => document.title.includes(' | BiblioFuse'), { timeout: SEO_READY_TIMEOUT_MS });
            // Small buffer so any Helmet tags that commit alongside title (canonical,
            // hreflang, JSON-LD) are flushed too.
            await new Promise((resolve) => setTimeout(resolve, 150));

            const html = await page.content();
            const rendered = html.includes(' | BiblioFuse</title>') && !/<div id="root">\s*<\/div>/.test(html);
            if (!rendered && attempt < MAX_RETRIES) {
                await page.close();
                continue; // retry: Helmet never committed or root never mounted
            }
            if (!rendered) {
                await page.close();
                return { urlPath, ok: false, error: 'SEO title/root readiness check failed' };
            }
            writeFileSync(file, html, 'utf-8');
            await page.close();
            return { urlPath, ok: rendered };
        } catch (err) {
            await page.close();
            if (attempt === MAX_RETRIES) {
                return { urlPath, ok: false, error: err.message };
            }
        }
    }
    return { urlPath, ok: false };
}

async function runPool(browser, baseUrl, allJobs) {
    const results = [];
    let index = 0;
    let completed = 0;
    async function worker() {
        while (index < allJobs.length) {
            const job = allJobs[index++];
            results.push(await renderJob(browser, baseUrl, job));
            completed += 1;
            if (completed % 50 === 0 || completed === allJobs.length) {
                console.log(`   ${completed}/${allJobs.length} pages processed`);
            }
        }
    }
    await Promise.all(Array.from({ length: CONCURRENCY }, worker));
    return results;
}

async function main() {
    const serve = sirv(distDir, { single: false, etag: true });
    const server = createServer(serve);
    await new Promise((resolve) => server.listen(0, resolve));
    const { port } = server.address();
    const baseUrl = `http://localhost:${port}`;

    const browser = await puppeteer.launch({ headless: true });

    console.log(`🖨  Prerendering ${jobs.length} pages (concurrency ${CONCURRENCY})...`);
    const results = await runPool(browser, baseUrl, jobs);

    await browser.close();
    server.close();

    const failed = results.filter((r) => !r.ok);
    console.log(`✅ Prerendered ${results.length - failed.length}/${results.length} pages`);
    if (failed.length > 0) {
        console.error(`❌ ${failed.length} pages failed prerender; refusing to publish incomplete SEO HTML:`);
        failed.slice(0, 20).forEach((f) => console.log(`   ${f.urlPath}${f.error ? ` — ${f.error}` : ''}`));
        process.exit(1);
    }
}

main().catch((err) => {
    console.error('Prerender failed:', err);
    process.exit(1);
});
