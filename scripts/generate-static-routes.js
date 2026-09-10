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
    '/guide', '/tools',
    '/tools/cbz-reducer',
    '/tools/epub-reducer',
    '/tools/pdf-to-cbz',
    '/tools/pdf-to-jpg',
    '/tools/qr-generator',
    '/smartdecrypt/changelog', '/smartdecrypt/privacy',
    '/contentcue/changelog', '/contentcue/privacy',
]);
// /smartdecrypt and /contentcue retired 2026-07-20 — now noindexed "moved" stubs
// pointing at mlogictech.com (see SmartDecrypt.jsx / ContentCue.jsx). Their
// /changelog and /privacy sub-routes are untouched (still real, indexed-in-en
// App Store compliance pages).
// /changelog added 2026-09-10: 45 impressions and 0 clicks across all locales in five
// months. It stays as a trust signal for existing users (linked from the footer) but is
// thin content for discovery — see docs/site-showcase-audit.md.
const NOINDEX_ALL_LOCALES_ROUTES = new Set(['/androidrequest', '/smartdecrypt', '/contentcue', '/changelog']);
const NOINDEX_TAG = '<meta name="robots" content="noindex, follow" />\n</head>';
const ARTICLE_SLUGS = ['epub-reader-iphone-no-drm', 'cbz-cbr-rar-zip-which-format-best', 'best-comic-reader-iphone-ipad', 'how-to-read-manga-on-iphone', 'read-cbz-cbr-on-iphone', 'digital-comic-library-management-guide', 'cbz-vs-cbr-vs-epub-formats-explained', 'ocr-comics-extract-text-iphone', 'getting-started-with-bibliofuse', 'bibliofuse-tools-tab-guide'];
const ROUTES = ['/', '/comicreader', '/smartdecrypt', '/smartdecrypt/changelog', '/smartdecrypt/privacy', '/contentcue', '/contentcue/changelog', '/contentcue/privacy', '/androidrequest', '/about', '/privacy', '/guide', '/tools', '/tools/cbz-reducer', '/tools/epub-reducer', '/tools/pdf-to-cbz', '/tools/pdf-to-jpg', '/tools/qr-generator', '/blog', '/changelog', '/features', ...ARTICLE_SLUGS.map(s => `/blog/${s}`)];

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
