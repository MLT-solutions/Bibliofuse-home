// Translate the updated product page copy keys to all 10 locales via Claude API
import Anthropic from '@anthropic-ai/sdk';
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const localesDir = join(__dirname, '..', 'src', 'locales');
const client = new Anthropic();

const LANGS = {
  es: 'Spanish', fr: 'French', nl: 'Dutch', pt: 'Portuguese',
  ru: 'Russian', zh: 'Simplified Chinese', ja: 'Japanese',
  ko: 'Korean', id: 'Indonesian', ms: 'Malay'
};

const en = JSON.parse(readFileSync(join(localesDir, 'en', 'translation.json'), 'utf8'));
const r = en.redesign;

const keysToTranslate = {
  // GrepTag page
  'grepTagPage.seo.desc': r.grepTagPage.seo.desc,
  'grepTagPage.hero.desc': r.grepTagPage.hero.desc,
  'grepTagPage.hero.trust1': r.grepTagPage.hero.trust1,
  'grepTagPage.grep.desc': r.grepTagPage.grep.desc,
  'grepTagPage.grep.bullet3': r.grepTagPage.grep.bullet3,
  'grepTagPage.tags.desc': r.grepTagPage.tags.desc,
  'grepTagPage.tags.bullet2': r.grepTagPage.tags.bullet2,
  'grepTagPage.tags.bullet3': r.grepTagPage.tags.bullet3,
  // SmartDecrypt page
  'smartdecryptPage.seo.desc': r.smartdecryptPage.seo.desc,
  'smartdecryptPage.patterns.desc': r.smartdecryptPage.patterns.desc,
  'smartdecryptPage.patterns.bullet1': r.smartdecryptPage.patterns.bullet1,
  'smartdecryptPage.patterns.bullet2': r.smartdecryptPage.patterns.bullet2,
  // Archive page
  'archivePage.hero.desc': r.archivePage.hero.desc,
  'archivePage.scanning.desc': r.archivePage.scanning.desc,
  'archivePage.scanning.bullet1': r.archivePage.scanning.bullet1,
  // ContentCue page
  'contentcuePage.seo.desc': r.contentcuePage.seo.desc,
  'contentcuePage.hero.desc': r.contentcuePage.hero.desc,
  'contentcuePage.hero.trust1': r.contentcuePage.hero.trust1,
};

function setNestedValue(obj, dotPath, value) {
  const parts = dotPath.split('.');
  let cur = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    if (!cur[parts[i]]) cur[parts[i]] = {};
    cur = cur[parts[i]];
  }
  cur[parts[parts.length - 1]] = value;
}

async function translateForLang(lang, langName) {
  const prompt = `You are a professional UI/app-store copywriter translating app page copy into ${langName}.

Rules:
- Keep brand names unchanged: BiblioFuse, GrepTag Reader, SmartDecrypt, Archive Duplicate Scanner, ContentCue
- Keep format names unchanged: EPUB, TXT, CBZ, CBR, PDF, ZIP, 7z, RAR
- Keep platform names unchanged: iOS, macOS, Windows, iPhone, iPad, Mac, App Store, Microsoft Store, iCloud, Keychain
- Keep technical terms unchanged: Wi-Fi, AND, OR, NOT, NRIC, URL, TTS, DBS_Statement_*
- Translate naturally for native ${langName} speakers — app store quality
- Keep bullet points concise (same length as English)
- Return ONLY a valid JSON object with the same keys as the input, no extra text

Translate these UI strings from English to ${langName}:
${JSON.stringify(keysToTranslate, null, 2)}`;

  const msg = await client.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 2000,
    messages: [{ role: 'user', content: prompt }],
  });

  const raw = msg.content[0].text.trim();
  const jsonStr = raw.startsWith('```') ? raw.replace(/^```json?\n?/, '').replace(/\n?```$/, '') : raw;
  return JSON.parse(jsonStr);
}

for (const [lang, langName] of Object.entries(LANGS)) {
  process.stdout.write(`Translating ${lang} (${langName})...`);
  try {
    const translations = await translateForLang(lang, langName);
    const fp = join(localesDir, lang, 'translation.json');
    const t = JSON.parse(readFileSync(fp, 'utf8'));
    for (const [key, val] of Object.entries(translations)) {
      setNestedValue(t.redesign, key, val);
    }
    writeFileSync(fp, JSON.stringify(t, null, 2));
    console.log(' ✅');
  } catch (e) {
    console.log(' ❌ ' + e.message);
  }
}

console.log('\nDone!');
