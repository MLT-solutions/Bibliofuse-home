/**
 * One-off: translate a blog article en.md into 10 language .md files.
 * Usage: node scripts/translate-article-md.cjs <slug>
 */
const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const BASE_URL = process.env.ANTHROPIC_BASE_URL || 'https://api.anthropic.com';
const AUTH_TOKEN = process.env.ANTHROPIC_AUTH_TOKEN || '';
const LANGS = ['es', 'fr', 'nl', 'pt', 'ru', 'zh', 'ja', 'ko', 'id', 'ms'];
const LANG_NAMES = {
  es: 'Spanish', fr: 'French', nl: 'Dutch', pt: 'Portuguese',
  ru: 'Russian', zh: 'Simplified Chinese', ja: 'Japanese',
  ko: 'Korean', id: 'Indonesian', ms: 'Malay'
};

const slug = process.argv[2];
if (!slug) { console.error('Usage: node translate-article-md.cjs <slug>'); process.exit(1); }

const articleDir = path.join(__dirname, '..', 'public', 'blog', slug);
const enContent = fs.readFileSync(path.join(articleDir, 'en.md'), 'utf8');

async function callClaude(prompt) {
  const body = JSON.stringify({
    model: 'claude-haiku-4-5',
    max_tokens: 8192,
    messages: [{ role: 'user', content: prompt }]
  });
  const url = new URL('/v1/messages', BASE_URL);
  const isHttp = url.protocol === 'http:';
  const lib = isHttp ? http : https;
  return new Promise((resolve, reject) => {
    const req = lib.request({
      hostname: url.hostname,
      port: url.port || (isHttp ? 80 : 443),
      path: url.pathname,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': AUTH_TOKEN,
        'anthropic-version': '2023-06-01',
        'Content-Length': Buffer.byteLength(body)
      }
    }, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try { resolve(JSON.parse(data).content[0].text); }
        catch (e) { reject(new Error('Parse error: ' + data.slice(0, 300))); }
      });
    });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

async function translateArticle(lang) {
  const outPath = path.join(articleDir, `${lang}.md`);
  if (fs.existsSync(outPath)) {
    console.log(`⏭  ${lang}: already exists, skipping`);
    return;
  }
  const prompt = `Translate the following Markdown blog article from English to ${LANG_NAMES[lang]}.

Rules:
- Preserve all Markdown formatting exactly (headings, bold, lists, code blocks, links)
- Keep all URLs and link paths exactly as-is (do not translate URLs)
- Keep product names unchanged: BiblioFuse, Tailscale, Windows, iPhone, Mac, iOS, CBZ, CBR, EPUB, PDF, TXT
- Keep technical terms in English: Bonjour, mDNS, Wi-Fi, 5G, HTTP, port numbers, file paths like %APPDATA%
- Translate all prose naturally for a native ${LANG_NAMES[lang]} reader
- Do NOT add any explanation or preamble — output only the translated Markdown

Article:
${enContent}`;

  const translated = await callClaude(prompt);
  fs.writeFileSync(outPath, translated);
  console.log(`✅ ${lang}: written`);
}

(async () => {
  for (const lang of LANGS) {
    await translateArticle(lang);
  }
  console.log('🎉 All language files written');
})();
