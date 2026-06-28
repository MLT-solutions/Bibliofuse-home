#!/usr/bin/env node
/**
 * Fix sister app links in blog MD files.
 * Replaces homepage/hash-anchor links with dedicated app page links.
 */
const fs = require('fs');
const path = require('path');

const blogDir = path.join(__dirname, '../public/blog');
const langs = ['en', 'es', 'fr', 'nl', 'pt', 'ru', 'zh', 'ja', 'ko', 'id', 'ms'];

// For each lang, build replacement pairs: [regex, replacement]
function buildReplacements(lang) {
  return [
    // SmartDecrypt: /{lang}/#smartdecrypt → /{lang}/smartdecrypt/
    [new RegExp(`\\(/${lang}/#smartdecrypt\\)`, 'g'), `(/${lang}/smartdecrypt/)`],
    // SmartDecrypt: plain homepage link when linked as SmartDecrypt text
    // We match [SmartDecrypt...](/{lang}/) but NOT App Store links
    [new RegExp(`(\\[SmartDecrypt[^\\]]*\\])\\(/${lang}/\\)`, 'g'), `$1(/${lang}/smartdecrypt/)`],
    // Archive Duplicate Scanner: /{lang}/#archive → /{lang}/archive/
    [new RegExp(`\\(/${lang}/#archive\\)`, 'g'), `(/${lang}/archive/)`],
    // Archive Duplicate Scanner: plain homepage link
    [new RegExp(`(\\[Archive Duplicate Scanner[^\\]]*\\])\\(/${lang}/\\)`, 'g'), `$1(/${lang}/archive/)`],
  ];
}

let totalFiles = 0;
let totalChanges = 0;

for (const slug of fs.readdirSync(blogDir)) {
  const slugDir = path.join(blogDir, slug);
  if (!fs.statSync(slugDir).isDirectory()) continue;

  for (const lang of langs) {
    const file = path.join(slugDir, `${lang}.md`);
    if (!fs.existsSync(file)) continue;

    let content = fs.readFileSync(file, 'utf8');
    const original = content;

    for (const [regex, replacement] of buildReplacements(lang)) {
      content = content.replace(regex, replacement);
    }

    if (content !== original) {
      fs.writeFileSync(file, content, 'utf8');
      totalFiles++;
      // Count changes roughly
      const changes = (content.match(/\/smartdecrypt\/|\/archive\//g) || []).length
        - (original.match(/\/smartdecrypt\/|\/archive\//g) || []).length;
      totalChanges += changes;
      console.log(`Updated: ${slug}/${lang}.md (+${changes} link fixes)`);
    }
  }
}

console.log(`\nDone. ${totalFiles} files updated, ~${totalChanges} links fixed.`);
