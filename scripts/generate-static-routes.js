import { mkdirSync, copyFileSync, existsSync, readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const SUPPORTED_LANGUAGES = ['en', 'es', 'fr', 'nl', 'pt', 'ru', 'zh', 'ja', 'ko', 'id', 'ms'];
// Mirrors src/i18n.js INDEXED_LANGUAGES — keep in sync (see docs/gsc-cloudflare-findings.md
// 2026-07-20 reaudit). Routes still render for visitors in every locale below; only these
// four ask Google to index them.
const INDEXED_LANGUAGES = ['en', 'es', 'fr', 'ja'];

// Sister-app changelog/privacy pages: non-English locale variants are noindex'd
// (see docs/gsc-cloudflare-findings.md). Injected directly into the static HTML
// so Googlebot sees it on the raw crawl, not just after client-side JS renders Helmet.
const NOINDEX_NON_EN_ROUTES = new Set([
    '/archive/changelog', '/archive/privacy',
    '/smartdecrypt/changelog', '/smartdecrypt/privacy',
    '/contentcue/changelog', '/contentcue/privacy',
    '/grepreader/changelog', '/grepreader/privacy',
]);
// /smartdecrypt and /contentcue retired 2026-07-20 — now noindexed "moved" stubs
// pointing at mlogictech.com (see SmartDecrypt.jsx / ContentCue.jsx). Their
// /changelog and /privacy sub-routes are untouched (still real, indexed-in-en
// App Store compliance pages).
const NOINDEX_ALL_LOCALES_ROUTES = new Set(['/androidrequest', '/smartdecrypt', '/contentcue']);
const NOINDEX_TAG = '<meta name="robots" content="noindex, follow" />\n</head>';
const ARTICLE_SLUGS = ['reading-ebooks-offline-iphone', 'convert-cbr-to-cbz-online', 'organize-ebooks-by-content-not-metadata', 'find-duplicate-comics-different-names', 'open-bank-statement-pdf-iphone', 'contentcue-11-languages', 'archive-duplicate-scanner-11-languages', 'smartdecrypt-11-languages', 'airdrop-books-to-iphone', 'change-reading-direction-comics', 'bibliofuse-ipad-reading-tips', 'read-pdf-comics-iphone', 'read-webtoons-on-iphone', 'convert-zip-to-cbz-online', 'pc-home-library-streaming-iphone', 'sideload-comics-iphone-without-itunes', 'ebook-formats-long-term-library', 'backup-comic-library-mac', 'double-page-spreads-comics', 'extract-images-from-cbz', 'comic-bookmarks-iphone', 'organize-manga-series-iphone', 'epub-to-pdf-online', 'night-reading-comics-iphone', 'cbz-to-pdf-online', 'tailscale-remote-library-access', 'webp-vs-png-for-comics', 'reading-progress-sync-no-cloud-account', 'cbz-cbr-rar-zip-which-format-best', 'smartdecrypt-language-update', 'digital-comic-library-management-guide', 'build-perfect-digital-manga-collection', 'best-duplicate-file-finder-mac', 'find-duplicate-photos-mac', 'perceptual-hashing-duplicate-detection', 'clean-up-duplicate-manga-library', 'find-duplicate-comics-cbz-mac', 'pdf-zip-password-manager-profiles', 'batch-decrypt-password-protected-files', 'decrypt-password-protected-cbz-zip', 'read-manga-online-iphone', 'unlock-password-protected-pdf-iphone', 'privacy-first-ebook-tools', 'merge-epub-files-online', 'compress-epub-online', 'archive-duplicate-scanner-language-update', 'merge-cbz-files-online', 'convert-pdf-to-cbz-online', 'bibliofuse-tools-tab-guide', 'epub-reader-iphone-no-drm', 'ocr-comics-extract-text-iphone', 'mac-home-library-streaming-iphone', 'icloud-sync-reading-progress', 'best-comic-reader-iphone-ipad', 'how-to-read-manga-on-iphone', 'wifi-transfer-comics-to-iphone', 'cbz-vs-cbr-vs-epub-formats-explained', 'read-cbz-cbr-on-iphone', 'manage-your-bibliofuse-library', 'reduce-comic-ebook-file-size', 'getting-started-with-bibliofuse'];
const ROUTES = ['/', '/comicreader', '/webapp', '/grepreader', '/grepreader/changelog', '/grepreader/privacy', '/archive', '/archive/changelog', '/archive/privacy', '/smartdecrypt', '/smartdecrypt/changelog', '/smartdecrypt/privacy', '/contentcue', '/contentcue/changelog', '/contentcue/privacy', '/androidrequest', '/about', '/privacy', '/blog', '/changelog', ...ARTICLE_SLUGS.map(s => `/blog/${s}`)];

const distDir = join(__dirname, '..', 'dist');
const sourceIndex = join(distDir, 'index.html');

if (!existsSync(sourceIndex)) {
    throw new Error(`Missing built index.html at ${sourceIndex}`);
}

const baseHtml = readFileSync(sourceIndex, 'utf-8');
const noindexHtml = baseHtml.replace('</head>', NOINDEX_TAG);

let created = 0;
let noindexed = 0;

for (const lang of SUPPORTED_LANGUAGES) {
    for (const route of ROUTES) {
        const routeDir = route === '/' ? join(distDir, lang) : join(distDir, lang, route.slice(1));
        mkdirSync(routeDir, { recursive: true });
        const outFile = join(routeDir, 'index.html');
        if (NOINDEX_ALL_LOCALES_ROUTES.has(route) || (lang !== 'en' && NOINDEX_NON_EN_ROUTES.has(route)) || !INDEXED_LANGUAGES.includes(lang)) {
            writeFileSync(outFile, noindexHtml, 'utf-8');
            noindexed += 1;
        } else {
            copyFileSync(sourceIndex, outFile);
        }
        created += 1;
    }
}

console.log(`✅ Static route fallbacks generated: ${created} localized HTML entrypoints (${noindexed} noindexed)`);
