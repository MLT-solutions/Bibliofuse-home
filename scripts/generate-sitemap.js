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
const ARTICLE_SLUGS = ['epub-reader-iphone-no-drm', 'cbz-cbr-rar-zip-which-format-best', 'best-comic-reader-iphone-ipad', 'how-to-read-manga-on-iphone', 'read-cbz-cbr-on-iphone', 'digital-comic-library-management-guide', 'read-manga-online-iphone', 'cbz-vs-cbr-vs-epub-formats-explained', 'ocr-comics-extract-text-iphone', 'getting-started-with-bibliofuse', 'bibliofuse-tools-tab-guide'];
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
