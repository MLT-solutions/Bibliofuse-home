import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configuration
const BASE_URL = 'https://bibliofuse.com';
const SUPPORTED_LANGUAGES = ['en', 'es', 'fr', 'nl', 'pt', 'ru', 'zh', 'ja', 'ko', 'id', 'ms'];
const ROUTES = [
    { path: '/', priority: '1.0', changefreq: 'weekly' },
    { path: '/reader', priority: '0.8', changefreq: 'monthly' },
    { path: '/webapp', priority: '0.8', changefreq: 'monthly' },
    { path: '/about', priority: '0.6', changefreq: 'monthly' },
];

function generateSitemap() {
    const urls = [];

    // Generate URL entries for each route in each language
    ROUTES.forEach(route => {
        SUPPORTED_LANGUAGES.forEach(lang => {
            const url = `${BASE_URL}/${lang}${route.path}`;

            // Generate alternate links for all other languages
            const alternates = SUPPORTED_LANGUAGES.map(altLang =>
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
    console.log(`📊 Total URLs: ${urls.length} (${ROUTES.length} routes × ${SUPPORTED_LANGUAGES.length} languages)`);
}

// Run the script
generateSitemap();
