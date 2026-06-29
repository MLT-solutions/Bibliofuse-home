import fs from 'fs';
import path from 'path';
import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic();
const base = path.join(path.dirname(new URL(import.meta.url).pathname), '..', 'src', 'locales');

const LANGS = { es:'Spanish', fr:'French', nl:'Dutch', pt:'Portuguese', ru:'Russian', zh:'Simplified Chinese', ja:'Japanese', ko:'Korean', id:'Indonesian', ms:'Malay' };

const EN = {
  bullet4: "Matches across resolutions and color modes — a 1200px grayscale scan and a 3000px color scan of the same page are still flagged",
  faq7q: "Can it match a color scan with a black-and-white version of the same content?",
  faq7a: "Yes. The dHash algorithm works on luminance gradients, not color values. A full-color scan and a grayscale version of the same page produce nearly identical hashes and will be flagged as duplicates.",
  faq8q: "Does image resolution affect duplicate detection?",
  faq8a: "No. dHash resizes every image to a small fixed grid before comparing, so a 1200px and a 3000px scan of the same page hash to the same value. Resolution differences between sources are completely ignored.",
};

async function translate(langCode, langName) {
  const prompt = `Translate the following UI strings from English to ${langName} for a Mac/Windows app called "Archive Duplicate Scanner" that finds duplicate comic book archives and photos using perceptual hashing (dHash algorithm).

Keep technical terms like "dHash", "CBZ", "CBR", "grayscale", "hash" as-is or use natural equivalents for the target language. Keep the tone factual and concise.

Return ONLY a JSON object with these exact keys:
{
  "bullet4": "...",
  "faq7q": "...",
  "faq7a": "...",
  "faq8q": "...",
  "faq8a": "..."
}

Strings to translate:
bullet4: "${EN.bullet4}"
faq7q: "${EN.faq7q}"
faq7a: "${EN.faq7a}"
faq8q: "${EN.faq8q}"
faq8a: "${EN.faq8a}"`;

  const msg = await client.messages.create({
    model: 'claude-haiku-4-5-20251001',
    max_tokens: 1024,
    messages: [{ role: 'user', content: prompt }],
  });

  const text = msg.content[0].text.trim();
  const json = text.match(/\{[\s\S]*\}/)?.[0];
  return JSON.parse(json);
}

for (const [langCode, langName] of Object.entries(LANGS)) {
  process.stdout.write(`Translating ${langCode}...`);
  try {
    const t = await translate(langCode, langName);
    const filePath = path.join(base, langCode, 'translation.json');
    const d = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    d.redesign.archivePage.scanning.bullet4 = t.bullet4;

    // Append or replace last 2 FAQ entries if they're still in English
    const faq = d.redesign.archivePage.faq;
    // Remove any already-appended English stubs for these 2 questions
    while (faq.length > 6 || (faq.length > 0 && faq[faq.length-1].q === EN.faq7q) || (faq.length > 0 && faq[faq.length-1].q === EN.faq8q)) {
      faq.pop();
      if (faq.length <= 6) break;
    }
    faq.push({ q: t.faq7q, a: t.faq7a });
    faq.push({ q: t.faq8q, a: t.faq8a });

    fs.writeFileSync(filePath, JSON.stringify(d, null, 2) + '\n', 'utf8');
    console.log(' done');
  } catch (e) {
    console.log(` ERROR: ${e.message}`);
  }
}

console.log('All done.');
