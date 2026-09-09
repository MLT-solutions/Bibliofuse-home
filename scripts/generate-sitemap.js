import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configuration
const BASE_URL = 'https://bibliofuse.com';
// Mirrors src/i18n.js INDEXED_LANGUAGES — keep in sync (see docs/gsc-cloudflare-findings.md
// 2026-07-20 reaudit). Locales outside this set still render for visitors but are kept out
// of the sitemap; SEO.jsx also noindexes them by default.
const INDEXED_LANGUAGES = ['en', 'es', 'fr', 'ja'];
const ARTICLE_SLUGS = ['best-komga-kavita-alternatives', 'reading-ebooks-offline-iphone', 'convert-cbr-to-cbz-online', 'find-duplicate-comics-different-names', 'open-bank-statement-pdf-iphone', 'contentcue-11-languages', 'archive-duplicate-scanner-11-languages', 'smartdecrypt-11-languages', 'airdrop-books-to-iphone', 'change-reading-direction-comics', 'bibliofuse-ipad-reading-tips', 'read-pdf-comics-iphone', 'read-webtoons-on-iphone', 'convert-zip-to-cbz-online', 'pc-home-library-streaming-iphone', 'sideload-comics-iphone-without-itunes', 'ebook-formats-long-term-library', 'backup-comic-library-mac', 'double-page-spreads-comics', 'extract-images-from-cbz', 'comic-bookmarks-iphone', 'organize-manga-series-iphone', 'epub-to-pdf-online', 'night-reading-comics-iphone', 'cbz-to-pdf-online', 'tailscale-remote-library-access', 'webp-vs-png-for-comics', 'reading-progress-sync-no-cloud-account', 'cbz-cbr-rar-zip-which-format-best', 'smartdecrypt-language-update', 'digital-comic-library-management-guide', 'build-perfect-digital-manga-collection', 'best-duplicate-file-finder-mac', 'find-duplicate-photos-mac', 'perceptual-hashing-duplicate-detection', 'clean-up-duplicate-manga-library', 'find-duplicate-comics-cbz-mac', 'pdf-zip-password-manager-profiles', 'batch-decrypt-password-protected-files', 'decrypt-password-protected-cbz-zip', 'read-manga-online-iphone', 'unlock-password-protected-pdf-iphone', 'privacy-first-ebook-tools', 'merge-epub-files-online', 'compress-epub-online', 'archive-duplicate-scanner-language-update', 'merge-cbz-files-online', 'convert-pdf-to-cbz-online', 'bibliofuse-tools-tab-guide', 'epub-reader-iphone-no-drm', 'ocr-comics-extract-text-iphone', 'mac-home-library-streaming-iphone', 'icloud-sync-reading-progress', 'best-comic-reader-iphone-ipad', 'how-to-read-manga-on-iphone', 'wifi-transfer-comics-to-iphone', 'cbz-vs-cbr-vs-epub-formats-explained', 'read-cbz-cbr-on-iphone', 'manage-your-bibliofuse-library', 'reduce-comic-ebook-file-size', 'getting-started-with-bibliofuse'];
const ROUTES = [
    { path: '/', priority: '1.0', changefreq: 'weekly' },
    { path: '/comicreader/', priority: '0.8', changefreq: 'monthly' },
    // /smartdecrypt/ and /contentcue/ retired 2026-07-20 — full pages moved to
    // mlogictech.com (0 clicks/90 days here; see docs/gsc-cloudflare-findings.md).
    // Left out of the sitemap; the routes still exist as noindexed "moved" stubs.
    { path: '/about/', priority: '0.6', changefreq: 'monthly' },
    { path: '/privacy/', priority: '0.4', changefreq: 'yearly' },
    { path: '/tools/', priority: '0.8', changefreq: 'monthly' },
    { path: '/tools/cbz-reducer/', priority: '0.8', changefreq: 'monthly' },
    { path: '/tools/epub-reducer/', priority: '0.8', changefreq: 'monthly' },
    { path: '/tools/pdf-to-cbz/', priority: '0.8', changefreq: 'monthly' },
    { path: '/tools/pdf-to-jpg/', priority: '0.8', changefreq: 'monthly' },
    { path: '/tools/qr-generator/', priority: '0.8', changefreq: 'monthly' },
    { path: '/blog/', priority: '0.7', changefreq: 'weekly' },
    { path: '/changelog/', priority: '0.6', changefreq: 'monthly' },
    { path: '/features/', priority: '0.7', changefreq: 'monthly' },
    { path: '/smartdecrypt/changelog/', priority: '0.5', changefreq: 'monthly' },
    { path: '/smartdecrypt/privacy/', priority: '0.4', changefreq: 'yearly' },
    { path: '/contentcue/changelog/', priority: '0.5', changefreq: 'monthly' },
    { path: '/contentcue/privacy/', priority: '0.4', changefreq: 'yearly' },
    ...ARTICLE_SLUGS.map(s => ({ path: `/blog/${s}/`, priority: '0.6', changefreq: 'monthly' })),
];

// Sister-app changelog/privacy pages: non-English locale variants are noindex'd
// (see docs/gsc-cloudflare-findings.md) — keep them out of the sitemap. English stays indexed.
const NOINDEX_NON_EN_ROUTES = new Set([
    '/tools/',
    '/tools/cbz-reducer/',
    '/tools/epub-reducer/',
    '/tools/pdf-to-cbz/',
    '/tools/pdf-to-jpg/',
    '/tools/qr-generator/',
    '/smartdecrypt/changelog/', '/smartdecrypt/privacy/',
    '/contentcue/changelog/', '/contentcue/privacy/',
]);

function generateSitemap() {
    const urls = [];

    // Generate URL entries for each route in each language
    ROUTES.forEach(route => {
        INDEXED_LANGUAGES.forEach(lang => {
            if (lang !== 'en' && NOINDEX_NON_EN_ROUTES.has(route.path)) return;

            const url = `${BASE_URL}/${lang}${route.path}`;

            // Alternate links only to other indexed locales — pointing hreflang at a
            // noindexed page sends a mixed signal for no benefit. That has to be decided
            // per route, not just per locale: a route in NOINDEX_NON_EN_ROUTES has real
            // pages in every locale, but only the English one is indexable, so it must
            // advertise itself as English-only rather than listing siblings that all
            // carry a noindex tag.
            const altLangs = NOINDEX_NON_EN_ROUTES.has(route.path)
                ? ['en']
                : INDEXED_LANGUAGES;
            const alternates = altLangs.map(altLang =>
                `    <xhtml:link rel="alternate" hreflang="${altLang}" href="${BASE_URL}/${altLang}${route.path}" />`
            ).join('\n');

            // Add x-default pointing to English
            const xDefault = `    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE_URL}/en${route.path}" />`;

            urls.push(`  <url>
    <loc>${url}</loc>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
${alternates}
${xDefault}
  </url>`);
        });
    });

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>`;

    // Write sitemap to dist directory
    const outputPath = join(__dirname, '..', 'dist', 'sitemap.xml');
    writeFileSync(outputPath, sitemap, 'utf-8');
    console.log(`✅ Sitemap generated successfully at: ${outputPath}`);
    console.log(`📊 Total URLs: ${urls.length} (${ROUTES.length} routes × up to ${INDEXED_LANGUAGES.length} indexed languages, minus noindex exclusions)`);
}

// Run the script
generateSitemap();
