// Targeted re-render of pages that flaked in the full prerender run.
// Usage: node prerender-one.mjs /fr/blog/some-slug/
import puppeteer from 'puppeteer';
import sirv from 'sirv';
import { createServer } from 'http';
import { writeFileSync } from 'fs';
import { join } from 'path';

const distDir = '/Users/mattclaw/GitHub/Bibliofuse-home/dist';
const urlPath = process.argv[2];
if (!urlPath) { console.error('pass a url path'); process.exit(1); }
const file = join(distDir, urlPath.replace(/^\//, '').replace(/\/$/, ''), 'index.html');

const serve = sirv(distDir, { single: false, dev: true });
const server = createServer(serve);
await new Promise((r) => server.listen(0, r));
const port = server.address().port;

const browser = await puppeteer.launch({ headless: 'new' });
const page = await browser.newPage();
await page.goto(`http://localhost:${port}${urlPath}`, { waitUntil: 'networkidle0', timeout: 120000 });
await page.waitForFunction(() => document.title.includes(' | BiblioFuse'), { timeout: 120000 });
await new Promise((r) => setTimeout(r, 300));
const html = await page.content();
const ok = html.includes(' | BiblioFuse</title>') && !/<div id="root">\s*<\/div>/.test(html);
if (!ok) { console.error('❌ still not rendered'); process.exit(1); }
writeFileSync(file, html);
console.log(`✅ re-rendered ${urlPath} → ${file}`);
await browser.close();
server.close();
