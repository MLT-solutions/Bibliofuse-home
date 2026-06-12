/**
 * One-off: translate the new streaming-troubleshoot FAQ item (index 4) into all 10 locales.
 * Usage: node scripts/translate-new-faq-item.cjs
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

const base = path.join(__dirname, '..', 'src', 'locales');

const enPath = path.join(base, 'en', 'translation.json');
const enData = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const sourceItem = enData.redesign.home.faq.items[4];

function callClaude(prompt) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 4096,
      messages: [{ role: 'user', content: prompt }]
    });
    const url = new URL(`${BASE_URL}/v1/messages`);
    const transport = url.protocol === 'https:' ? https : http;
    const req = transport.request({
      hostname: url.hostname,
      port: url.port || (url.protocol === 'https:' ? 443 : 80),
      path: url.pathname,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': AUTH_TOKEN,
        'anthropic-version': '2023-06-01',
        'Content-Length': Buffer.byteLength(body)
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          if (!parsed.content || !parsed.content[0]) {
            reject(new Error(`Bad response: ${data.slice(0, 200)}`));
          } else {
            resolve(parsed.content[0].text);
          }
        } catch (e) { reject(new Error(`Parse error: ${data.slice(0, 200)}`)); }
      });
    });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

async function translateItem(lang) {
  const langName = LANG_NAMES[lang];
  const prompt = `Translate the following JSON FAQ item from English to ${langName}.

Rules:
- Keep all JSON keys in English exactly as-is
- Keep all HTML tags (<code>, etc.) exactly as-is — do not translate tag names or attributes
- Keep the → arrow and — em-dash characters as-is
- Keep proper nouns unchanged: BiblioFuse, iCloud, Tailscale, Finder, iPhone, Mac, PC, Files app, iCloud Drive
- Return ONLY the translated JSON object, no markdown fences, no explanation

Source JSON:
${JSON.stringify(sourceItem, null, 2)}`;

  const result = await callClaude(prompt);
  // Strip any markdown code fences if present
  const cleaned = result.replace(/^```(?:json)?\n?/, '').replace(/\n?```$/, '').trim();
  return JSON.parse(cleaned);
}

async function main() {
  for (const lang of LANGS) {
    process.stdout.write(`Translating ${lang}... `);
    try {
      const translated = await translateItem(lang);
      const localePath = path.join(base, lang, 'translation.json');
      const data = JSON.parse(fs.readFileSync(localePath, 'utf8'));
      data.redesign.home.faq.items[4] = translated;
      fs.writeFileSync(localePath, JSON.stringify(data, null, 2) + '\n');
      console.log('✅');
    } catch (e) {
      console.log(`❌ ${e.message}`);
    }
  }
  console.log('\n🎉 Done!');
}

main();
