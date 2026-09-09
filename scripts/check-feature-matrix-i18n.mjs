// Fails when the feature matrix's English source and the en locale disagree.
//
// The page resolves labels as t('featureMatrix.features.<id>.label', { defaultValue }).
// i18next prefers the locale value, so editing `label` in feature-matrix.js has no
// visible effect once the key exists — the stale translation keeps rendering. That is
// silent: no error, no missing key, just the old wording live on the site. This check
// makes the divergence loud, and also catches locale keys orphaned by a removed row.
import { readFileSync } from 'node:fs';
import { FEATURES, SPECS } from '../src/data/feature-matrix.js';

const en = JSON.parse(readFileSync(new URL('../src/locales/en/translation.json', import.meta.url), 'utf8'));
const fm = en.featureMatrix ?? {};
const problems = [];

for (const f of FEATURES) {
  const loc = fm.features?.[f.id];
  if (!loc) { problems.push(`features.${f.id}: no en locale entry`); continue; }
  if (loc.label !== f.label) problems.push(`features.${f.id}.label\n    data:   ${f.label}\n    locale: ${loc.label}`);
  if ((f.note ?? null) !== (loc.note ?? null)) problems.push(`features.${f.id}.note\n    data:   ${f.note}\n    locale: ${loc.note}`);
}
for (const id of Object.keys(fm.features ?? {})) {
  if (!FEATURES.some((f) => f.id === id)) problems.push(`features.${id}: locale key for a feature that no longer exists`);
}
for (const sp of SPECS) {
  const loc = fm.specs?.[sp.id];
  if (!loc) { problems.push(`specs.${sp.id}: no en locale entry`); continue; }
  if (loc.label !== sp.label) problems.push(`specs.${sp.id}.label\n    data:   ${sp.label}\n    locale: ${loc.label}`);
}
for (const id of Object.keys(fm.specs ?? {})) {
  if (!SPECS.some((sp) => sp.id === id)) problems.push(`specs.${id}: locale key for a spec that no longer exists`);
}

if (problems.length) {
  console.error(`❌ feature matrix and en locale disagree in ${problems.length} place(s):\n`);
  problems.forEach((p) => console.error(`  ${p}`));
  console.error('\nUpdate src/locales/*/translation.json to match, or revert the data-file edit.');
  process.exit(1);
}
console.log(`✅ feature matrix i18n in sync (${FEATURES.length} features, ${SPECS.length} specs)`);
