/**
 * One-off: translate the 4 new Wi-Fi Sync FAQ entries (indices 6–9) into all 10 locales.
 * Usage: node scripts/translate-grepreader-sync-faq.cjs
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
const enData = JSON.parse(fs.readFileSync(path.join(base, 'en', 'translation.json'), 'utf8'));
// The 4 new entries are at indices 6–9
const sourceItems = enData.redesign.grepTagPage.faq.slice(6);

function callClaude(prompt) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 2000,
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

async function translateItems(lang) {
  const langName = LANG_NAMES[lang];
  const prompt = `Translate these 4 FAQ entries from English to ${langName}.

Rules:
- Keep all JSON keys in English exactly as-is
- Keep proper nouns unchanged: GrepTag, BiblioFuse, iCloud, iPhone, iPad, Mac, PC, Windows, Wi-Fi Sync, Pro
- Return ONLY a JSON array of 4 objects with "q" and "a" keys, no markdown fences, no explanation

Source:
${JSON.stringify(sourceItems, null, 2)}`;

  const result = await callClaude(prompt);
  const cleaned = result.replace(/^```(?:json)?\n?/, '').replace(/\n?```$/, '').trim();
  return JSON.parse(cleaned);
}

async function main() {
  for (const lang of LANGS) {
    process.stdout.write(`Translating ${lang}... `);
    try {
      const translated = await translateItems(lang);
      const localePath = path.join(base, lang, 'translation.json');
      const data = JSON.parse(fs.readFileSync(localePath, 'utf8'));
      // Keep existing 6 entries (0–5), append the 4 translated entries
      data.redesign.grepTagPage.faq = [
        ...data.redesign.grepTagPage.faq.slice(0, 6),
        ...translated
      ];
      fs.writeFileSync(localePath, JSON.stringify(data, null, 2) + '\n');
      console.log(`✅ (${data.redesign.grepTagPage.faq.length} FAQ entries)`);
    } catch (e) {
      console.log(`❌ ${e.message}`);
    }
  }
  console.log('\n🎉 Done!');
}

main();
