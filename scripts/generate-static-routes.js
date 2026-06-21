import { mkdirSync, copyFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const SUPPORTED_LANGUAGES = ['en', 'es', 'fr', 'nl', 'pt', 'ru', 'zh', 'ja', 'ko', 'id', 'ms'];
const ARTICLE_SLUGS = ['airdrop-books-to-iphone', 'change-reading-direction-comics', 'bibliofuse-ipad-reading-tips', 'read-pdf-comics-iphone', 'read-webtoons-on-iphone', 'convert-zip-to-cbz-online', 'pc-home-library-streaming-iphone', 'sideload-comics-iphone-without-itunes', 'ebook-formats-long-term-library', 'backup-comic-library-mac', 'double-page-spreads-comics', 'extract-images-from-cbz', 'comic-bookmarks-iphone', 'organize-manga-series-iphone', 'epub-to-pdf-online', 'night-reading-comics-iphone', 'cbz-to-pdf-online', 'tailscale-remote-library-access', 'webp-vs-png-for-comics', 'reading-progress-sync-no-cloud-account', 'cbz-cbr-rar-zip-which-format-best', 'smartdecrypt-language-update', 'digital-comic-library-management-guide', 'build-perfect-digital-manga-collection', 'best-duplicate-file-finder-mac', 'find-duplicate-photos-mac', 'perceptual-hashing-duplicate-detection', 'clean-up-duplicate-manga-library', 'find-duplicate-comics-cbz-mac', 'pdf-zip-password-manager-profiles', 'batch-decrypt-password-protected-files', 'decrypt-password-protected-cbz-zip', 'read-manga-online-iphone', 'unlock-password-protected-pdf-iphone', 'privacy-first-ebook-tools', 'merge-epub-files-online', 'compress-epub-online', 'archive-duplicate-scanner-language-update', 'merge-cbz-files-online', 'convert-pdf-to-cbz-online', 'bibliofuse-tools-tab-guide', 'epub-reader-iphone-no-drm', 'ocr-comics-extract-text-iphone', 'mac-home-library-streaming-iphone', 'icloud-sync-reading-progress', 'best-comic-reader-iphone-ipad', 'how-to-read-manga-on-iphone', 'wifi-transfer-comics-to-iphone', 'cbz-vs-cbr-vs-epub-formats-explained', 'read-cbz-cbr-on-iphone', 'manage-your-bibliofuse-library', 'reduce-comic-ebook-file-size', 'getting-started-with-bibliofuse'];
const ROUTES = ['/', '/webapp', '/about', '/privacy', '/blog', '/changelog', ...ARTICLE_SLUGS.map(s => `/blog/${s}`)];

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
