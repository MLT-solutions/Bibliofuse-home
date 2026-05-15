const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '..', 'src', 'locales');
const en = JSON.parse(fs.readFileSync(path.join(baseDir, 'en', 'translation.json'), 'utf8'));

const langs = ['es', 'fr', 'nl', 'pt', 'ru', 'zh', 'ja', 'ko', 'id', 'ms'];

// Proper nouns / identifiers that should NOT be translated
const exemptExact = [
  'BiblioFuse',
  'BiblioFuse Reader',
  'BiblioFuse Web App',
  'Android Reader',
  'Apple App Store',
  'Google Play',
  'Google Play Store',
  'Microsoft Store',
  'iOS App Store',
  'Windows',
  'macOS',
  'Linux',
  'ChromeOS',
  'iPhone',
  'iPad',
  'Mac',
  'Android',
  'iCloud',
  'WebAssembly',
  'WASM',
  'Web App',
  'Tailscale',
  'SwiftUI',
  'CBZ',
  'CBR',
  'EPUB',
  'PDF',
  'ZIP',
  'TXT',
  'RAR',
  'EULA',
];

const exemptContains = [
  'iPhone · iPad · Mac',
  'Mac · Windows',
  'Universal · iCloud',
  'TTS ·',
  'auto-scroll',
  'Apple App Store · Google Play · Microsoft Store',
  'Apple App Store, Google Play Store',
  '202503109774',
  '003722143-P',
  'Modern Logic Tech Solutions',
  'Jalan SK 13/12',
  '43300 Seri Kembangan',
  'Selangor',
  'Malaysia',
  'Malaisie',
  'Maleisië',
  'Malasia',
  'Малайзия',
  '马来西亚',
  '말레이시아',
  '서울',
];

function isExempt(value) {
  if (typeof value !== 'string') return true;
  if (value.length < 3) return true;
  if (/^\d/.test(value) && value.length < 30) return true; // numbers, versions
  if (/^[✔✅✓✗✘✖\-—–·•]+$/.test(value.trim())) return true;
  if (exemptExact.includes(value)) return true;
  for (const pat of exemptContains) {
    if (value.includes(pat)) return true;
  }
  // Skip pure formatting/technical strings
  if (value === 'Tool only' || value === 'English' || value === 'Local') return true;
  return false;
}

function walkDiff(enObj, otherObj, prefix, results) {
  for (const key of Object.keys(enObj)) {
    const enVal = enObj[key];
    const otherVal = otherObj[key];
    const fullKey = prefix ? `${prefix}.${key}` : key;

    if (otherVal === undefined) {
      results.push({ key: fullKey, en: JSON.stringify(enVal), issue: 'MISSING_KEY' });
      continue;
    }

    if (typeof enVal === 'object' && enVal !== null && !Array.isArray(enVal)) {
      if (typeof otherVal === 'object' && otherVal !== null && !Array.isArray(otherVal)) {
        walkDiff(enVal, otherVal, fullKey, results);
      } else {
        results.push({ key: fullKey, en: JSON.stringify(enVal), issue: 'TYPE_MISMATCH' });
      }
    } else if (Array.isArray(enVal)) {
      if (!Array.isArray(otherVal)) {
        results.push({ key: fullKey, en: JSON.stringify(enVal), issue: 'TYPE_MISMATCH' });
      } else {
        // Compare array elements
        for (let i = 0; i < enVal.length; i++) {
          const arrKey = `${fullKey}[${i}]`;
          if (i >= otherVal.length) {
            results.push({ key: arrKey, en: JSON.stringify(enVal[i]), issue: 'MISSING_ARRAY_ITEM' });
          } else if (typeof enVal[i] === 'object') {
            walkDiff(enVal[i], otherVal[i], arrKey, results);
          } else if (typeof enVal[i] === 'string' && enVal[i] === otherVal[i]) {
            if (!isExempt(enVal[i])) {
              results.push({ key: arrKey, en: enVal[i], issue: 'UNTRANSLATED' });
            }
          }
        }
      }
    } else if (typeof enVal === 'string') {
      if (enVal === otherVal) {
        if (!isExempt(enVal)) {
          results.push({ key: fullKey, en: enVal, issue: 'UNTRANSLATED' });
        }
      }
    }
  }
}

console.log('🔍 Scanning all languages for untranslated English strings...\n');

for (const lang of langs) {
  const filePath = path.join(baseDir, lang, 'translation.json');
  const other = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const results = [];
  walkDiff(en, other, '', results);

  const untranslated = results.filter(r => r.issue === 'UNTRANSLATED');

  if (untranslated.length > 0) {
    console.log(`\n━━━ ${lang.toUpperCase()} — ${untranslated.length} untranslated strings ━━━`);
    for (const r of untranslated) {
      // Truncate long strings for display
      const display = r.en.length > 80 ? r.en.substring(0, 77) + '...' : r.en;
      console.log(`  ${r.key}`);
      console.log(`    → "${display}"`);
    }
  } else {
    console.log(`✅ ${lang}: All strings translated`);
  }
}

console.log('\n🏁 Scan complete.');
