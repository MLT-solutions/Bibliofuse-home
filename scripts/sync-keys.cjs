const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '..', 'src', 'locales');
const langs = ['es','fr','nl','pt','ru','zh','ja','ko','id','ms'];

// Read English as reference (already has new keys)
const en = JSON.parse(fs.readFileSync(path.join(baseDir, 'en', 'translation.json'), 'utf8'));

// Deep copy English to all languages, preserving existing translations
for (const lang of langs) {
  const filePath = path.join(baseDir, lang, 'translation.json');
  const existing = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  // Deep merge: keep existing translations, add new keys from English
  function deepMerge(target, source, enSource) {
    for (const key of Object.keys(source)) {
      if (!(key in target)) {
        // Key doesn't exist yet - add from source (reference)
        target[key] = JSON.parse(JSON.stringify(source[key]));
      } else if (typeof source[key] === 'object' && source[key] !== null && !Array.isArray(source[key])) {
        if (typeof target[key] === 'object' && target[key] !== null && !Array.isArray(target[key])) {
          deepMerge(target[key], source[key], enSource ? enSource[key] : source[key]);
        } else {
          target[key] = JSON.parse(JSON.stringify(source[key]));
        }
      }
      // If string or array already exists in target, keep it (it's already translated)
    }
  }
  
  deepMerge(existing, en, en);
  fs.writeFileSync(filePath, JSON.stringify(existing, null, 2) + '\n', 'utf8');
}

console.log('✅ All language files now have the new key structure (with English fallbacks)');
console.log('⚠️  New keys need manual translation - currently in English');
