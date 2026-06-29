// One-time script to translate GrepTag keys for all 10 locales using Claude API
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

// Keys to translate — extracted from en locale
const en = JSON.parse(readFileSync(join(localesDir, 'en', 'translation.json'), 'utf8'));

const keysToTranslate = {
  grepreader: en.redesign.productFamily.products.grepreader,
  twoAppsSection: en.redesign.twoAppsSection,
  grepTagPage: en.redesign.grepTagPage,
};

// Keys that should NOT be translated (proper nouns, technical terms, brand names)
const SKIP_PATTERNS = ['iOS', 'macOS', 'Windows', 'EPUB', 'TXT', 'CBZ', 'PDF', 'Wi-Fi', 'AND', 'OR', 'NOT', 'App Store', 'BiblioFuse', 'GrepTag', 'iCloud', 'CJK'];

function shouldSkip(value) {
  if (typeof value !== 'string') return false;
  // Skip very short strings that are proper nouns or unchanged across languages
  if (value === value.toUpperCase() && value.length < 10) return true;
  return false;
}

function flattenKeys(obj, prefix = '') {
  const result = {};
  for (const [k, v] of Object.entries(obj)) {
    const key = prefix ? `${prefix}.${k}` : k;
    if (v && typeof v === 'object' && !Array.isArray(v)) {
      Object.assign(result, flattenKeys(v, key));
    } else {
      result[key] = v;
    }
  }
  return result;
}

function setNestedValue(obj, dotPath, value) {
  const parts = dotPath.split('.');
  let cur = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    if (!cur[parts[i]]) cur[parts[i]] = {};
    cur = cur[parts[i]];
  }
  cur[parts[parts.length - 1]] = value;
}

async function translateForLang(langCode, langName) {
  const flat = flattenKeys(keysToTranslate);
  const toTranslate = {};
  for (const [k, v] of Object.entries(flat)) {
    if (typeof v === 'string' && v.trim() && !shouldSkip(v)) {
      toTranslate[k] = v;
    }
  }

  const prompt = `You are a professional translator for a mobile app marketing website. Translate the following JSON values from English to ${langName}.

Rules:
- Keep brand names unchanged: BiblioFuse, GrepTag, App Store, iCloud, Wi-Fi
- Keep technical abbreviations unchanged: EPUB, TXT, CBZ, PDF, CBR, RAR, ZIP, iOS, macOS, Windows, AND, OR, NOT, CJK
- Keep punctuation style (dashes, dots, arrows →) consistent
- Keep the same tone: direct, clear, marketing-friendly
- Translate only the values, keep the keys exactly as-is
- Return ONLY valid JSON with the same keys

${JSON.stringify(toTranslate, null, 2)}`;

  const msg = await client.messages.create({
    model: 'claude-haiku-4-5-20251001',
    max_tokens: 4096,
    messages: [{ role: 'user', content: prompt }],
  });

  const text = msg.content[0].text;
  const jsonMatch = text.match(/\{[\s\S]*\}/);
  if (!jsonMatch) throw new Error(`No JSON in response for ${langCode}`);

  return JSON.parse(jsonMatch[0]);
}

async function main() {
  for (const [langCode, langName] of Object.entries(LANGS)) {
    process.stdout.write(`Translating ${langCode} (${langName})... `);
    try {
      const translations = await translateForLang(langCode, langName);

      const filePath = join(localesDir, langCode, 'translation.json');
      const data = JSON.parse(readFileSync(filePath, 'utf8'));

      // Apply translations
      for (const [dotKey, value] of Object.entries(translations)) {
        // dotKey is like "grepreader.desc" or "twoAppsSection.eyebrow" or "grepTagPage.hero.title"
        // Map back to redesign.* namespace
        const fullKey = dotKey.startsWith('grepreader.')
          ? `redesign.productFamily.products.${dotKey}`
          : dotKey.startsWith('twoAppsSection.')
          ? `redesign.${dotKey}`
          : dotKey.startsWith('grepTagPage.')
          ? `redesign.${dotKey}`
          : null;

        if (fullKey) setNestedValue(data, fullKey, value);
      }

      writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
      console.log('✅');
    } catch (e) {
      console.log(`❌ ${e.message}`);
    }
  }
  console.log('\n🎉 GrepTag key translations complete.');
}

main();
