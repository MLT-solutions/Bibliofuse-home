#!/usr/bin/env node
/**
 * Fixes insufficient backlinks to sister app pages in blog articles.
 *
 * Issues fixed:
 * 1. archive articles: "/LANG/" → "/LANG/archive/" in the download CTA link
 * 2. smartdecrypt articles: add second link to /LANG/smartdecrypt/ in closing
 * 3. decrypt-password-protected-cbz-zip: add two links to /LANG/smartdecrypt/
 */

const fs = require('fs');
const path = require('path');

const BLOG_DIR = path.join(__dirname, '../public/blog');
const LANGS = ['en', 'es', 'fr', 'nl', 'pt', 'ru', 'zh', 'ja', 'ko', 'id', 'ms'];

function readFile(slug, lang) {
  const p = path.join(BLOG_DIR, slug, `${lang}.md`);
  return fs.existsSync(p) ? fs.readFileSync(p, 'utf-8') : null;
}

function writeFile(slug, lang, content) {
  fs.writeFileSync(path.join(BLOG_DIR, slug, `${lang}.md`), content, 'utf-8');
}

function countLinks(content, pattern) {
  return (content.match(pattern) || []).length;
}

let fixedFiles = 0;

// ─── FIX 1: Archive articles — replace generic homepage link with /archive/ ──
// Pattern: [Download Archive Duplicate Scanner](/LANG/) → /LANG/archive/
// Also handles "[Archive Duplicate Scanner](/LANG/)" in closings
const archiveArticles = [
  'best-duplicate-file-finder-mac',
  'find-duplicate-photos-mac',
  'find-duplicate-comics-cbz-mac',
];

for (const slug of archiveArticles) {
  for (const lang of LANGS) {
    const content = readFile(slug, lang);
    if (!content) continue;

    // Replace homepage link in download CTA, only if it's pointing to the wrong place
    // Pattern: (/<lang>/) where it should be (/<lang>/archive/)
    const homePattern = new RegExp(`\\]\\(/${lang}/\\)`, 'g');
    const archivePattern = new RegExp(`\\]\\(/${lang}/archive/\\)`, 'g');

    const alreadyHasArchiveLink = archivePattern.test(content);
    const hasWrongLink = homePattern.test(content);

    if (!alreadyHasArchiveLink && hasWrongLink) {
      // Only fix the Download CTA, not every homepage link
      // The CTA contains "Archive Duplicate Scanner" or "Archive" right before the link
      const fixed = content.replace(
        /(\[(?:Download )?Archive Duplicate Scanner\])\(\/(\w+)\/\)/g,
        (match, linkText, l) => `${linkText}(/${l}/archive/)`
      );
      if (fixed !== content) {
        writeFile(slug, lang, fixed);
        fixedFiles++;
        console.log(`✓ ${slug}/${lang}.md — fixed archive download link`);
      }
    }
  }
}

// ─── FIX 2: decrypt-password-protected-cbz-zip — add SmartDecrypt links ──────
// This article has 0 links to /smartdecrypt/ — add 2: one in intro, one in closing
{
  const slug = 'decrypt-password-protected-cbz-zip';
  for (const lang of LANGS) {
    const content = readFile(slug, lang);
    if (!content) continue;

    const sdPattern = new RegExp(`/${lang}/smartdecrypt/`);
    if (sdPattern.test(content)) continue; // already has link

    // Add link in the intro: first mention of "SmartDecrypt PDF ZIP CBZ" → link it
    // The intro line starts with "SmartDecrypt PDF ZIP CBZ opens..."
    let fixed = content.replace(
      /^(SmartDecrypt PDF ZIP CBZ)([ \n](?:opens|déverrouille|öffnet|abre|apre|открывает|打开|開きます|열어|membuka|membuka))/m,
      `[$1](/${lang}/smartdecrypt/)$2`
    );

    // Fallback: if the above didn't match (non-EN locales may have different text),
    // find the first line of the file that mentions SmartDecrypt and link it
    if (!sdPattern.test(fixed)) {
      fixed = content.replace(
        /\n(SmartDecrypt PDF ZIP CBZ)( (?:abre|descifra|déchiffre|ontsleutelt|descriptografa|расшифровывает|解密|解読します|복호화하여|mendekripsi|menyahsulit))/m,
        `\n[$1](/${lang}/smartdecrypt/)$2`
      );
    }

    // Closing: "Search for **SmartDecrypt PDF ZIP CBZ** on the App Store" → add link
    fixed = fixed.replace(
      /\*\*SmartDecrypt PDF ZIP CBZ\*\* (on the App Store to get started)/,
      `[SmartDecrypt PDF ZIP CBZ](/${lang}/smartdecrypt/) $1`
    );

    // Generic fallback for closing in other locales: wrap the last bold SmartDecrypt mention
    fixed = fixed.replace(
      /\*\*SmartDecrypt PDF ZIP CBZ\*\*(?!\])/g,
      (match, offset) => {
        // Only link if we don't already have 2 links
        const linksBefore = (fixed.slice(0, offset).match(new RegExp(`/${lang}/smartdecrypt/`, 'g')) || []).length;
        return linksBefore < 2 ? `[SmartDecrypt PDF ZIP CBZ](/${lang}/smartdecrypt/)` : match;
      }
    );

    if (fixed !== content) {
      writeFile(slug, lang, fixed);
      fixedFiles++;
      console.log(`✓ ${slug}/${lang}.md — added SmartDecrypt links`);
    }
  }
}

// ─── FIX 3: SmartDecrypt articles needing a 2nd link in closing ──────────────
// Pattern: closing paragraph ends with "on the App Store to get started/start"
// with **SmartDecrypt PDF ZIP CBZ** bold — replace bold with linked version
const sdClosingArticles = [
  'pdf-zip-password-manager-profiles',
  'batch-decrypt-password-protected-files',
  'unlock-password-protected-pdf-iphone',
];

for (const slug of sdClosingArticles) {
  for (const lang of LANGS) {
    const content = readFile(slug, lang);
    if (!content) continue;

    const sdPattern = new RegExp(`/${lang}/smartdecrypt/`, 'g');
    const linkCount = (content.match(sdPattern) || []).length;
    if (linkCount >= 2) continue; // already fine

    // Replace bold SmartDecrypt mention in closing with a link
    const fixed = content.replace(
      /\*\*SmartDecrypt PDF ZIP CBZ\*\*(?: is available)? on the App Store/,
      `[SmartDecrypt PDF ZIP CBZ](/${lang}/smartdecrypt/) on the App Store`
    );

    if (fixed !== content) {
      writeFile(slug, lang, fixed);
      fixedFiles++;
      console.log(`✓ ${slug}/${lang}.md — added 2nd SmartDecrypt link in closing`);
    } else {
      // Try alternate closing pattern
      const fixed2 = content.replace(
        /Search for \*\*SmartDecrypt PDF ZIP CBZ\*\*/,
        `Download [SmartDecrypt PDF ZIP CBZ](/${lang}/smartdecrypt/)`
      );
      if (fixed2 !== content) {
        writeFile(slug, lang, fixed2);
        fixedFiles++;
        console.log(`✓ ${slug}/${lang}.md — added 2nd SmartDecrypt link (alt pattern)`);
      }
    }
  }
}

// ─── FIX 4: smartdecrypt-language-update — add 2nd /smartdecrypt/ page link ──
{
  const slug = 'smartdecrypt-language-update';
  for (const lang of LANGS) {
    const content = readFile(slug, lang);
    if (!content) continue;

    const sdPattern = new RegExp(`/${lang}/smartdecrypt/`, 'g');
    const linkCount = (content.match(sdPattern) || []).length;
    if (linkCount >= 2) continue;

    // Add a link in the intro where App Store link is — add before App Store link
    // "The app unlocks password-protected PDFs..." — link "SmartDecrypt page" before App Store link
    const fixed = content.replace(
      /(Visit the \[SmartDecrypt section on bibliofuse\.com\]\(\/en\/smartdecrypt\/\))/,
      `Visit the [SmartDecrypt page](/${lang}/smartdecrypt/)`
    );

    // If that didn't match (non-EN, already has locale link), try adding it in another spot
    let finalFixed = fixed;
    if (!new RegExp(`/${lang}/smartdecrypt/`, 'g').test(finalFixed)) {
      finalFixed = content.replace(
        /(full feature overview before downloading\.)/,
        `$1 See the [SmartDecrypt page](/${lang}/smartdecrypt/) for full details.`
      );
    }

    // Also: the intro mentions the App Store link — add a sister page link nearby
    const linkCountAfter = (finalFixed.match(new RegExp(`/${lang}/smartdecrypt/`, 'g')) || []).length;
    if (linkCountAfter >= 2) {
      writeFile(slug, lang, finalFixed);
      fixedFiles++;
      console.log(`✓ ${slug}/${lang}.md — added 2nd SmartDecrypt page link`);
    } else {
      console.log(`⚠ ${slug}/${lang}.md — could not add 2nd link automatically (${linkCountAfter} links)`);
    }
  }
}

console.log(`\nDone. Fixed ${fixedFiles} files.`);
