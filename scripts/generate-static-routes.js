import { mkdirSync, copyFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const SUPPORTED_LANGUAGES = ['en', 'es', 'fr', 'nl', 'pt', 'ru', 'zh', 'ja', 'ko', 'id', 'ms'];
const ARTICLE_SLUGS = ['how-to-read-manga-on-iphone', 'wifi-transfer-comics-to-iphone', 'cbz-vs-cbr-vs-epub-formats-explained', 'read-cbz-cbr-on-iphone', 'manage-your-bibliofuse-library', 'reduce-comic-ebook-file-size', 'getting-started-with-bibliofuse'];
const ROUTES = ['/', '/webapp', '/about', '/privacy', '/blog', ...ARTICLE_SLUGS.map(s => `/blog/${s}`)];

const distDir = join(__dirname, '..', 'dist');
const sourceIndex = join(distDir, 'index.html');

if (!existsSync(sourceIndex)) {
    throw new Error(`Missing built index.html at ${sourceIndex}`);
}

let created = 0;

for (const lang of SUPPORTED_LANGUAGES) {
    for (const route of ROUTES) {
        const routeDir = route === '/' ? join(distDir, lang) : join(distDir, lang, route.slice(1));
        mkdirSync(routeDir, { recursive: true });
        copyFileSync(sourceIndex, join(routeDir, 'index.html'));
        created += 1;
    }
}

console.log(`✅ Static route fallbacks generated: ${created} localized HTML entrypoints`);
