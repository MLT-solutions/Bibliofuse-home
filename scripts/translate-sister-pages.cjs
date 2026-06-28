/**
 * Translates archivePage, smartdecryptPage, contentcuePage into 10 languages.
 * Calls Claude API for each page×language combination, deep-merges results.
 * Usage: node scripts/translate-sister-pages.cjs [page]
 *   page = archive | smartdecrypt | contentcue | all (default: all)
 */
const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

// Always call Anthropic directly for translation (local router routes haiku→MLX)
const BASE_URL = 'https://api.anthropic.com';
const routerConfig = (() => {
  try { return JSON.parse(require('fs').readFileSync(require('os').homedir() + '/.claude-code-router/config.json', 'utf8')); }
  catch { return null; }
})();
const AUTH_TOKEN = routerConfig?.Providers?.find(p => p.name === 'anthropic')?.api_key
  || process.env.ANTHROPIC_API_KEY
  || process.env.ANTHROPIC_AUTH_TOKEN
  || '';
const LOCALES_DIR = path.join(__dirname, '..', 'src', 'locales');
const LANGS = ['es', 'fr', 'nl', 'pt', 'ru', 'zh', 'ja', 'ko', 'id', 'ms'];
const LANG_NAMES = {
  es: 'Spanish', fr: 'French', nl: 'Dutch', pt: 'Portuguese',
  ru: 'Russian', zh: 'Simplified Chinese', ja: 'Japanese',
  ko: 'Korean', id: 'Indonesian', ms: 'Malay'
};

function deepMerge(target, source) {
  const out = Object.assign({}, target);
  for (const key of Object.keys(source)) {
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key]) &&
        target[key] && typeof target[key] === 'object' && !Array.isArray(target[key])) {
      out[key] = deepMerge(target[key], source[key]);
    } else if (!(key in target) || target[key] === '' || target[key] === null) {
      out[key] = source[key];
    } else {
      out[key] = target[key]; // keep existing non-empty values
    }
  }
  return out;
}

function callClaude(prompt) {
  const body = JSON.stringify({
    model: 'claude-haiku-4-5',
    max_tokens: 4096,
    messages: [{ role: 'user', content: prompt }]
  });
  const url = new URL('/v1/messages', BASE_URL);
  const lib = https; // always HTTPS for direct Anthropic API
  return new Promise((resolve, reject) => {
    const req = lib.request({
      hostname: url.hostname,
      port: url.port || 443,
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
        try {
          const parsed = JSON.parse(data);
          if (parsed.error) return reject(new Error(parsed.error.message));
          resolve(parsed.content[0].text);
        } catch (e) { reject(e); }
      });
    });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

// ─── Page definitions ──────────────────────────────────────────────────────────

const EN = JSON.parse(fs.readFileSync(path.join(LOCALES_DIR, 'en', 'translation.json'), 'utf8'));

const PAGES = {
  archive: {
    key: 'archivePage',
    enData: EN.redesign.archivePage,
    prompt: (lang, langName) => `Translate the following JSON object from English to ${langName}.
Rules:
- Translate all string values naturally and fluently. Do NOT translate JSON keys.
- Keep brand names unchanged: "Archive Duplicate Scanner", "BiblioFuse", "Mac App Store", "Microsoft Store", "CBZ", "CBR", "ZIP", "RAR", "JPG", "PNG", "HEIC", "WEBP", "BMP", "GIF", "RapidFuzz", "dHash", "Mac", "Windows", "iCloud".
- Keep UI element names natural in ${langName}.
- For the "faq" array, translate all "q" and "a" values.
- Return ONLY valid JSON, no markdown fences, no extra text.
- For zh (Chinese): use Simplified Chinese characters.
- For ja (Japanese): use natural Japanese, mix kanji/hiragana/katakana as appropriate.
- For ko (Korean): use natural Korean with Hangul.
- Keep prices unchanged: "$19.99", "1,000".
- The locale code is: ${lang}
- For internal links like /en/archive/ → change to /${lang}/archive/ (but there are none in this JSON).
- "backDesc" and "backCta" are links to the main BiblioFuse reader app.

JSON to translate:
${JSON.stringify(EN.redesign.archivePage, null, 2)}`
  },
  smartdecrypt: {
    key: 'smartdecryptPage',
    enData: EN.redesign.smartdecryptPage,
    prompt: (lang, langName) => `Translate the following JSON object from English to ${langName}.
Rules:
- Translate all string values naturally and fluently. Do NOT translate JSON keys.
- Keep brand names unchanged: "SmartDecrypt", "SmartDecrypt PDF ZIP CBZ", "BiblioFuse", "PDF", "ZIP", "7z", "App Store", "Microsoft Store", "iOS", "macOS", "iPhone", "iPad", "Mac", "Windows", "Apple Keychain", "Share Sheet".
- Keep UI element names natural in ${langName}.
- For the "faq" array, translate all "q" and "a" values.
- Return ONLY valid JSON, no markdown fences, no extra text.
- Keep prices unchanged: "$9.99".
- "backDesc" and "backCta" are links to the main BiblioFuse reader app.
- The locale code is: ${lang}

JSON to translate:
${JSON.stringify(EN.redesign.smartdecryptPage, null, 2)}`
  },
  contentcue: {
    key: 'contentcuePage',
    enData: EN.redesign.contentcuePage,
    prompt: (lang, langName) => `Translate the following JSON object from English to ${langName}.
Rules:
- Translate all string values naturally and fluently. Do NOT translate JSON keys.
- Keep brand names unchanged: "ContentCue", "BiblioFuse", "App Store", "iOS", "iPhone", "iPad", "WebKit", "Webtoons", "Tapas", "LINE Webtoon", "WordPress".
- Keep UI element names natural in ${langName}.
- For the "faq" array, translate all "q" and "a" values.
- Return ONLY valid JSON, no markdown fences, no extra text.
- Keep prices unchanged: "$2.99".
- "backDesc" and "backCta" are links to the main BiblioFuse reader app.
- The locale code is: ${lang}

JSON to translate:
${JSON.stringify(EN.redesign.contentcuePage, null, 2)}`
  }
};

// ─── Main ──────────────────────────────────────────────────────────────────────

async function translatePage(pageKey) {
  const pageDef = PAGES[pageKey];
  console.log(`\n=== Translating ${pageDef.key} ===`);

  for (const lang of LANGS) {
    const localeFile = path.join(LOCALES_DIR, lang, 'translation.json');
    const locale = JSON.parse(fs.readFileSync(localeFile, 'utf8'));
    const existing = (locale.redesign && locale.redesign[pageDef.key]) || {};

    // Check if content is actually translated (not just EN content copied verbatim)
    const enFlat = JSON.stringify(pageDef.enData);
    const exFlat = JSON.stringify(existing);

    // If the existing content is identical to EN (modulo whitespace), it's not translated
    const isUntranslated = exFlat === '{}' || exFlat === enFlat ||
      // Compare a few hero strings — if they match EN, not translated
      (existing.hero && pageDef.enData.hero &&
       existing.hero.title === pageDef.enData.hero.title &&
       existing.hero.badge === pageDef.enData.hero.badge);

    if (!isUntranslated) {
      console.log(`  ✓ ${lang} — already translated, skipping`);
      continue;
    }

    console.log(`  → ${lang} (${LANG_NAMES[lang]}) — translating...`);

    try {
      const prompt = pageDef.prompt(lang, LANG_NAMES[lang]);
      let result = await callClaude(prompt);

      // Strip markdown fences if present
      result = result.replace(/^```(?:json)?\n?/, '').replace(/\n?```$/, '').trim();

      let translated;
      try {
        translated = JSON.parse(result);
      } catch (e) {
        console.error(`    ✗ JSON parse failed for ${lang}: ${e.message}`);
        console.error(`    Raw: ${result.slice(0, 200)}`);
        continue;
      }

      // Use translated result directly (existing was EN verbatim copy, not translated)
      const merged = translated;

      if (!locale.redesign) locale.redesign = {};
      locale.redesign[pageDef.key] = merged;

      fs.writeFileSync(localeFile, JSON.stringify(locale, null, 2) + '\n', 'utf8');
      console.log(`    ✓ ${lang} saved`);

      await sleep(500); // Rate limit courtesy pause
    } catch (e) {
      console.error(`    ✗ Error for ${lang}: ${e.message}`);
    }
  }
}

async function main() {
  const arg = process.argv[2] || 'all';
  const toRun = arg === 'all' ? Object.keys(PAGES) : [arg];

  for (const pageKey of toRun) {
    if (!PAGES[pageKey]) {
      console.error(`Unknown page: ${pageKey}. Valid: archive, smartdecrypt, contentcue, all`);
      process.exit(1);
    }
    await translatePage(pageKey);
  }

  console.log('\nDone.');
}

main().catch(e => { console.error(e); process.exit(1); });
