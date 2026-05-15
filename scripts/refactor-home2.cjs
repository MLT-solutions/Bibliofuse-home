const fs = require('fs');
const path = require('path');
const fp = path.join(__dirname, '..', 'src', 'pages', 'Home.jsx');
let src = fs.readFileSync(fp, 'utf8');

const as = (k) => `t('redesign.archiveSection.${k}')`;
const asf = (k) => `t('redesign.archiveSection.features.${k}')`;

// ArchiveScannerSection - badge
src = src.replace('Sister app · Mac & Windows', `{${as('badge')}}`);

// ArchiveScannerSection - headings
src = src.replace('Find duplicate archives.', `{${as('titleA')}}`);
src = src.replace('Even after renaming.', `{${as('titleB')}}`);

// ArchiveScannerSection - description
const archiveDesc = 'Archive Duplicate Scanner finds and removes duplicate comic book archives, photos, and files - even when they have been renamed, recompressed, or saved in different folders.';
src = src.replace(archiveDesc, `{${as('desc')}}`);

// Archive features
src = src.replace(`title: 'Comic archive scanning', body: 'CBZ, CBR, ZIP and RAR using perceptual hashing.'`, `title: ${asf('scanning.title')}, body: ${asf('scanning.body')}`);
src = src.replace(`title: 'Photo duplicate detection', body: 'JPG, PNG, HEIC, WEBP, BMP and GIF.'`, `title: ${asf('photo.title')}, body: ${asf('photo.body')}`);
src = src.replace(`title: 'Smart auto-select', body: 'Keep largest, smallest, newest, oldest, or most pages.'`, `title: ${asf('select.title')}, body: ${asf('select.body')}`);
src = src.replace(`title: 'Safe deletion', body: 'Marked files move to system Trash only.'`, `title: ${asf('delete.title')}, body: ${asf('delete.body')}`);

// Archive alt text
src = src.replace(`alt="Archive Duplicate Scanner configure and start scan"`, `alt={${as('altImage')}}`);
src = src.replace(`alt="Download Archive Duplicate Scanner on the Mac App Store"`, `alt={${as('altBadge')}}`);

// Archive pricing
const archivePricing = 'Free usage is available forever for scans up to 1,000 files. A 7-day trial unlocks full access, and a one-time purchase unlocks unlimited use with no subscription.';
src = src.replace(archivePricing, `{${as('pricing')}}`);

// Archive stats
src = src.replace(`<div className="text-[10px] uppercase tracking-wider text-ink-soft">Default threshold</div>`, `<div className="text-[10px] uppercase tracking-wider text-ink-soft">{${as('stats.threshold')}}</div>`);
src = src.replace(`<div className="text-[10px] uppercase tracking-wider text-ink-soft">Pages sampled</div>`, `<div className="text-[10px] uppercase tracking-wider text-ink-soft">{${as('stats.sampled')}}</div>`);
src = src.replace(`100% local`, `{${as('stats.local')}}`);
src = src.replace(`<div className="text-[10px] uppercase tracking-wider text-ink-soft">No cloud, no tracking</div>`, `<div className="text-[10px] uppercase tracking-wider text-ink-soft">{${as('stats.noCloud')}}</div>`);

// ============ SMARTDECRYPT SECTION ============
const ds = (k) => `t('redesign.decryptSection.${k}')`;
const dsf = (k) => `t('redesign.decryptSection.features.${k}')`;

// Badge
src = src.replace('Sister app · iOS · Mac · Windows', `{${ds('badge')}}`);

// Headings
src = src.replace('Drop the file.', `{${ds('titleA')}}`);
src = src.replace('It unlocks itself.', `{${ds('titleB')}}`);

// Description
const decryptDesc = 'SmartDecrypt helps you unlock password-protected PDFs and archives without hunting through notes, messages, or old emails for the right password.';
src = src.replace(decryptDesc, `{${ds('desc')}}`);

// Features
src = src.replace(`title: 'PDF · ZIP · 7z', body: 'Unlock protected PDFs and extract ZIP/7z archives.'`, `title: ${dsf('formats.title')}, body: ${dsf('formats.body')}`);
src = src.replace(`title: 'Saved patterns', body: 'Match recurring filename formats automatically.'`, `title: ${dsf('patterns.title')}, body: ${dsf('patterns.body')}`);
src = src.replace(`title: 'Batch upgrade', body: 'One-time Pro unlocks batch loading and password cycling.'`, `title: ${dsf('batch.title')}, body: ${dsf('batch.body')}`);
src = src.replace(`title: 'Keychain-safe', body: 'Passwords stay in the Apple Keychain.'`, `title: ${dsf('keychain.title')}, body: ${dsf('keychain.body')}`);

// Alt badge
src = src.replace(`alt="Download SmartDecrypt PDF ZIP on the App Store"`, `alt={${ds('altBadge')}}`);

// Pricing
const decryptPricing = 'Free users can unlock one file at a time with pattern matching. SmartDecrypt Pro is a one-time universal purchase that unlocks batch file loading and automatic password cycling on iOS and macOS.';
src = src.replace(decryptPricing, `{${ds('pricing')}}`);

// Steps
src = src.replace(`label: 'Drop files'`, `label: ${ds('steps.drop')}`);
src = src.replace(`label: 'Match pattern'`, `label: ${ds('steps.match')}`);
src = src.replace(`label: 'Unlocked'`, `label: ${ds('steps.unlock')}`);

// Queue UI
src = src.replace(`<div className="text-xs font-semibold uppercase tracking-wider text-white/50">Queue (3)</div>`, `<div className="text-xs font-semibold uppercase tracking-wider text-white/50">{${ds('queueTitle')}}</div>`);
src = src.replace(`<div className="text-xs text-white/40">Auto-matching active</div>`, `<div className="text-xs text-white/40">{${ds('queueStatus')}}</div>`);

// File states
src = src.replace(`{file.state}`, `{t('redesign.decryptSection.states.' + file.state)}`);

// ============ PRIVACY STRIP ============
const ps = (k) => `t('redesign.privacyStrip.${k}')`;
const psi = (k) => `t('redesign.privacyStrip.items.${k}')`;

src = src.replace(`<div className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Why BiblioFuse</div>`, `<div className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">{${ps('eyebrow')}}</div>`);
src = src.replace(`Built on a few simple principles.`, `{${ps('title')}}`);

// Privacy items
src = src.replace(`title: 'No ads', body: 'Enjoy uninterrupted reading without advertisements.'`, `title: ${psi('noAds.title')}, body: ${psi('noAds.body')}`);
src = src.replace(`title: 'No tracking', body: 'We do not collect or sell your reading data.'`, `title: ${psi('noTracking.title')}, body: ${psi('noTracking.body')}`);
src = src.replace(`title: 'Cloud sync', body: 'Sync your library across Apple devices with iCloud.'`, `title: ${psi('cloudSync.title')}, body: ${psi('cloudSync.body')}`);
src = src.replace(`title: 'Smart compression', body: 'Reduce file size and save storage without leaving the app.'`, `title: ${psi('compression.title')}, body: ${psi('compression.body')}`);

// ============ FINAL CTA ============
const fc = (k) => `t('redesign.finalCta.${k}')`;

src = src.replace('Start here', `{${fc('badge')}}`);
src = src.replace('Your library. Your device. Your rules.', `{${fc('title')}}`);
src = src.replace('Start with the Reader. Add the utilities when you need them. Everything stays on-device.', `{${fc('desc')}}`);
src = src.replace(`children: 'Try the Web Tool'`, `children: ${fc('button')}`);

// ============ STICKY BAR ============
src = src.replace(`Get BiblioFuse`, `{t('redesign.stickyBar.text')}`);

// ============ ALT TEXTS ============
const at = (k) => `t('redesign.altTexts.${k}')`;

// Hero image alt
src = src.replace(`alt="BiblioFuse library on iPhone"`, `alt={${at('heroImage')}}`);

// Store badge alts (in StoreBadge component)
// Note: StoreBadge doesn't have useTranslation, we'll keep these as-is for now

// WebToolButton default
src = src.replace(`children = 'Try the Web Tool'`, `children = {t('redesign.finalCta.button')}`);

// ============ PRODUCT FAMILY SECTION HEADER ============
// These might have been partially done. Let me also add missing fixes.

console.log('✅ ArchiveScannerSection, SmartDecryptSection, PrivacyStrip, FinalCTA, StickyDownloadBar refactored');

fs.writeFileSync(fp, src, 'utf8');
