const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'pages', 'Home.jsx');
let src = fs.readFileSync(filePath, 'utf8');

// ============ ADD useTranslation TO COMPONENTS THAT NEED IT ============

// ProductFamily
src = src.replace(
  'function ProductFamily() {',
  'function ProductFamily() {\n  const { t } = useTranslation();'
);

// ReaderSection
src = src.replace(
  'function ReaderSection() {',
  'function ReaderSection() {\n  const { t } = useTranslation();'
);

// ToolsHighlight
src = src.replace(
  'function ToolsHighlight() {',
  'function ToolsHighlight() {\n  const { t } = useTranslation();'
);

// ArchiveScannerSection
src = src.replace(
  'function ArchiveScannerSection() {',
  'function ArchiveScannerSection() {\n  const { t } = useTranslation();'
);

// SmartDecryptSection
src = src.replace(
  'function SmartDecryptSection() {',
  'function SmartDecryptSection() {\n  const { t } = useTranslation();'
);

// PrivacyStrip
src = src.replace(
  'function PrivacyStrip() {',
  'function PrivacyStrip() {\n  const { t } = useTranslation();'
);

// FinalCTA
src = src.replace(
  'function FinalCTA({ lang }) {',
  'function FinalCTA({ lang }) {\n  const { t } = useTranslation();'
);

// StickyDownloadBar
src = src.replace(
  'function StickyDownloadBar() {',
  'function StickyDownloadBar() {\n  const { t } = useTranslation();'
);

// ============ PRODUCT FAMILY SECTION ============
const pf = (k) => `t('redesign.productFamily.${k}')`;

// Section header
src = src.replace(`<div className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">The BiblioFuse family</div>`,
  `<div className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">{${pf('eyebrow')}}</div>`);

src = src.replace(`One ecosystem.`,
  `{${pf('titleA')}}`);

src = src.replace(`Tools for owning your files.`,
  `{${pf('titleB')}}`);

// Description
src = src.replace(
  `Built by Modern Logic Tech Solutions for readers and collectors who keep their library on their own devices - not behind someone else's login.`,
  `{${pf('desc')}}`
);

// Product card data - replace the entire products array
const pr = (p, k) => `t('redesign.productFamily.products.${p}.${k}')`;

// Reader product
src = src.replace(`tag: 'Flagship',`, `tag: ${pr('reader','tag')},`);
src = src.replace(`desc: 'Native reader & library manager for personal e-book and comic collections.',`, `desc: ${pr('reader','desc')},`);
src = src.replace(`'EPUB, PDF, CBZ, CBR, RAR, ZIP & TXT'`, `${pr('reader','bullet1')}`);
src = src.replace(`'Tags, ratings, progress & bookmarks'`, `${pr('reader','bullet2')}`);
src = src.replace(`'iCloud library across iPhone, iPad & Mac'`, `${pr('reader','bullet3')}`);
src = src.replace(`cta: 'Get on App Store',`, `cta: ${pr('reader','cta')},`);
src = src.replace(`secondary: 'Google Play',`, `secondary: ${pr('reader','secondary')},`);

// Web Tool product
src = src.replace(`tag: 'Free',`, `tag: ${pr('webTool','tag')},`);
src = src.replace(`desc: 'Convert, merge and compress e-book files in your browser - no install, fully on-device.',`, `desc: ${pr('webTool','desc')},`);
src = src.replace(`'EPUB / PDF / CBZ / ZIP merge & convert'`, `${pr('webTool','bullet1')}`);
src = src.replace(`'Powered by WebAssembly - 100% private'`, `${pr('webTool','bullet2')}`);
src = src.replace(`'Works on any platform with a browser'`, `${pr('webTool','bullet3')}`);
src = src.replace(`cta: 'Launch Web Tool',`, `cta: ${pr('webTool','cta')},`);

// Archive product
src = src.replace(`tag: 'Mac · Windows',`, `tag: ${pr('archive','tag')},`);
src = src.replace(`desc: 'Finds and removes duplicate comic book archives, photos, and files - even when renamed, recompressed, or saved in different folders.',`, `desc: ${pr('archive','desc')},`);
src = src.replace(`'Perceptual hashing for CBZ/CBR/ZIP/RAR'`, `${pr('archive','bullet1')}`);
src = src.replace(`'Smart auto-select & safe-delete to Trash'`, `${pr('archive','bullet2')}`);
src = src.replace(`'Hash cache for fast repeat scans'`, `${pr('archive','bullet3')}`);
src = src.replace(`cta: 'Mac App Store',`, `cta: ${pr('archive','cta')},`);
src = src.replace(`secondary: 'Microsoft Store',`, `secondary: ${pr('archive','secondary')},`);

// SmartDecrypt product
src = src.replace(`tag: 'iOS · Mac · Windows',`, `tag: ${pr('smartdecrypt','tag')},`);
src = src.replace(`desc: 'Unlocks password-protected PDFs and archives using saved filename patterns.',`, `desc: ${pr('smartdecrypt','desc')},`);
src = src.replace(`'PDF, ZIP & 7z support'`, `${pr('smartdecrypt','bullet1')}`);
src = src.replace(`'Pattern match for recurring files'`, `${pr('smartdecrypt','bullet2')}`);
src = src.replace(`'Passwords stored in system Keychain'`, `${pr('smartdecrypt','bullet3')}`);
src = src.replace(`cta: 'iOS · Mac App Store',`, `cta: ${pr('smartdecrypt','cta')},`);
src = src.replace(`secondary: 'Microsoft Store',`, `secondary: ${pr('smartdecrypt','secondary')},`);

// "also on" in ProductCard
src = src.replace(`also on {secondary} →`, `{${pf('alsoOn')}} {secondary} →`);

// ============ READER SECTION ============
const rs = (k) => `t('redesign.readerSection.${k}')`;
const rsf = (f, k) => `t('redesign.readerSection.features.${f}.${k}')`;

// Section header
src = src.replace(`<div className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">BiblioFuse Reader</div>`,
  `<div className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">{${rs('eyebrow')}}</div>`);

src = src.replace(`Built for long reading sessions.`,
  `{${rs('title')}}`);

// Reader description (long paragraph)
const readerDescOld = `A focused reader with the library tools you actually use: formats, folders, tags, ratings, progress, and bookmarks. The same library on iPhone, iPad and Mac, kept in sync through your iCloud.`;
src = src.replace(readerDescOld, `{${rs('desc')}}`);

// LIBRARY feature
src = src.replace(`eyebrow="Library"`, `eyebrow={${rsf('library','eyebrow')}}`);
src = src.replace(`title="One shelf for every format."`, `title={${rsf('library','title')}}`);
const libDescOld = `EPUB, PDF, CBZ, CBR, RAR, ZIP and TXT - read in a single library with folders, search and recent books. Import from Files, document picker, or your iCloud Drive.`;
src = src.replace(`desc="${libDescOld}"`, `desc={${rsf('library','desc')}}`);
src = src.replace(`title: 'Tags & ratings'`, `title: ${rsf('library','bullet1Title')}`);
src = src.replace(`body: 'organize without folders if you want to.'`, `body: ${rsf('library','bullet1Body')}`);
src = src.replace(`title: 'Reading progress'`, `title: ${rsf('library','bullet2Title')}`);
src = src.replace(`body: 'every book remembers where you left off.'`, `body: ${rsf('library','bullet2Body')}`);
src = src.replace(`title: 'iCloud cross-device'`, `title: ${rsf('library','bullet3Title')}`);
src = src.replace(`body: 'pick up on iPhone where you stopped on iPad.'`, `body: ${rsf('library','bullet3Body')}`);
src = src.replace(`alt="BiblioFuse library with tags, ratings and reading progress"`, `alt={${rsf('library','imageAlt')}}`);

// READING feature
src = src.replace(`eyebrow="Read your way"`, `eyebrow={${rsf('reading','eyebrow')}}`);
src = src.replace(`title="TTS, auto-scroll & peek zoom."`, `title={${rsf('reading','title')}}`);
const readDescOld = `A distraction-free reader with the controls that matter for long sessions. Text-to-speech for EPUB and TXT. Auto-scroll for comics and webtoons. Peek zoom to inspect a panel without losing your place.`;
src = src.replace(`desc="${readDescOld}"`, `desc={${rsf('reading','desc')}}`);
src = src.replace(`title: 'Text-to-speech'`, `title: ${rsf('reading','bullet1Title')}`);
src = src.replace(`body: 'hands-free narration for EPUB and TXT.'`, `body: ${rsf('reading','bullet1Body')}`);
src = src.replace(`title: 'Auto-scroll'`, `title: ${rsf('reading','bullet2Title')}`);
src = src.replace(`body: 'paged or continuous, tuned for image archives.'`, `body: ${rsf('reading','bullet2Body')}`);
src = src.replace(`title: 'Peek zoom'`, `title: ${rsf('reading','bullet3Title')}`);
src = src.replace(`body: 'double-tap to inspect dense panels and small text.'`, `body: ${rsf('reading','bullet3Body')}`);
src = src.replace(`alt="BiblioFuse reading view with TTS, auto-scroll and peek zoom"`, `alt={${rsf('reading','imageAlt')}}`);

// STREAMING feature
src = src.replace(`eyebrow="Mac streams to mobile"`, `eyebrow={${rsf('streaming','eyebrow')}}`);
src = src.replace(`title="Library hub. Streams to your iPhone."`, `title={${rsf('streaming','title')}}`);
src = src.replace(`badge="No third-party server · No subscription"`, `badge={${rsf('streaming','badge')}}`);
const streamDescOld = `On Mac, BiblioFuse becomes a desktop library hub: manage local folders, iCloud folders and SMB network shares in a split-view library/reader interface. Then stream books straight to BiblioFuse on iPhone and iPad over local Wi-Fi at home, or remotely over 5G when you're out.`;
src = src.replace(`desc="${streamDescOld}"`, `desc={${rsf('streaming','desc')}}`);
src = src.replace(`title: 'Local Wi-Fi streaming'`, `title: ${rsf('streaming','bullet1Title')}`);
src = src.replace(`body: 'instant browse from any Mac source.'`, `body: ${rsf('streaming','bullet1Body')}`);
src = src.replace(`title: 'Remote 5G streaming'`, `title: ${rsf('streaming','bullet2Title')}`);
src = src.replace(`body: 'open your home library from anywhere with Tailscale.'`, `body: ${rsf('streaming','bullet2Body')}`);
src = src.replace(`title: 'Local, iCloud & SMB sources'`, `title: ${rsf('streaming','bullet3Title')}`);
src = src.replace(`body: 'one Mac library, every folder you already have.'`, `body: ${rsf('streaming','bullet3Body')}`);
src = src.replace(`title: 'Optional PIN'`, `title: ${rsf('streaming','bullet4Title')}`);
src = src.replace(`body: 'lock streaming access on shared networks.'`, `body: ${rsf('streaming','bullet4Body')}`);
src = src.replace(`alt="BiblioFuse Mac library with split-view reader"`, `alt={${rsf('streaming','imageAlt')}}`);
const footnoteOld = `Remote access requires iCloud signed in and Tailscale connected on both Mac and iOS.`;
src = src.replace(`footnote="${footnoteOld}"`, `footnote={${rsf('streaming','footnote')}}`);

// ============ TOOLS HIGHLIGHT ============
const th = (k) => `t('redesign.toolsHighlight.${k}')`;
const tht = (t, k) => `t('redesign.toolsHighlight.tools.${t}.${k}')`;

src = src.replace(`<span className="inline-flex self-start items-center gap-2 rounded-full bg-teal-50 px-3 py-1.5 text-xs font-black uppercase tracking-wider text-teal-700">Built-in tools</span>`,
  `<span className="inline-flex self-start items-center gap-2 rounded-full bg-teal-50 px-3 py-1.5 text-xs font-black uppercase tracking-wider text-teal-700">{${th('badge')}}</span>`);

src = src.replace(`Compress & merge without leaving the app.`,
  `{${th('title')}}`);

src = src.replace(`<span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">Supports</span>`,
  `<span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">{${th('supports')}}</span>`);

src = src.replace(`All processing runs on-device. Nothing uploaded.`,
  `{${th('onDevice')}}`);

// Tool cards
src = src.replace(`title: 'Resize to shortest side'`, `title: ${tht('resize','title')}`);
src = src.replace(`body: 'Set a target shortest dimension and re-page every image in your archive.'`, `body: ${tht('resize','body')}`);
src = src.replace(`kpi: '1080 px'`, `kpi: ${tht('resize','kpi')}`);
src = src.replace(`label: 'Typical preset'`, `label: ${tht('resize','label')}`);

src = src.replace(`title: 'Convert to WebP or JPG'`, `title: ${tht('convert','title')}`);
src = src.replace(`body: 'Re-encode pages to WebP or JPG for smaller archives that still look crisp.'`, `body: ${tht('convert','body')}`);
src = src.replace(`kpi: 'Up to 50%'`, `kpi: ${tht('convert','kpi')}`);
src = src.replace(`label: 'Smaller files'`, `label: ${tht('convert','label')}`);

src = src.replace(`title: 'Merge chapters & series'`, `title: ${tht('merge','title')}`);
src = src.replace(`body: 'Combine chapters, volumes or split downloads into one clean CBZ, ZIP or PDF.'`, `body: ${tht('merge','body')}`);
src = src.replace(`kpi: 'Many to 1'`, `kpi: ${tht('merge','kpi')}`);
src = src.replace(`label: 'One pass'`, `label: ${tht('merge','label')}`);

console.log('✅ Home.jsx partially refactored. Continuing...');
console.log('⚠️  ArchiveScannerSection, SmartDecryptSection, PrivacyStrip, FinalCTA, StickyDownloadBar still need refactoring');

fs.writeFileSync(filePath, src, 'utf8');
