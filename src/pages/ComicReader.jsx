import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import StickyDownloadBar from '../components/StickyDownloadBar';
import DevicePills from '../components/DevicePills';
import ReaderFamilyGuide from '../components/ReaderFamilyGuide';

const appStoreUrl = 'https://apps.apple.com/kw/app/bibliofuse-reader-compress/id6758330093';
const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.MLOGICTECH.bibliofusereader&hl=en-US&ah=423jBOeRoug68zOF2xwCeFuKVQQ';
const bibliofusePcUrl = 'https://apps.microsoft.com/store/detail/9N77MZ509ML2';
const imageBase = '/image/offline-apps/bibliofuse';

function ArrowRightIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function StoreBadge({ type, href, size = 'lg' }) {
  const sizes = size === 'sm' ? 'h-10' : 'h-12';
  const src = type === 'microsoft' ? '/image/Microsoft_Store_badge.svg' : type === 'play' ? '/image/Playstore.png' : '/image/Download_on_the_App_Store_Badge.svg.png';
  const alt = type === 'microsoft' ? 'Get it from Microsoft' : type === 'play' ? 'Get it on Google Play' : 'Download on the App Store';
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex transition hover:-translate-y-0.5">
      <img src={src} alt={alt} className={`${sizes} w-auto object-contain`} />
    </a>
  );
}

function DashIcon() {
  return (
    <span className="inline-grid h-6 w-6 place-items-center rounded-full bg-slate-100 text-slate-400">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
        <path d="M6 12h12" />
      </svg>
    </span>
  );
}

function tintClass(tint) {
  if (tint === 'blue') return 'bg-blue-50 text-blue-700';
  if (tint === 'teal') return 'bg-teal-50 text-teal-700';
  if (tint === 'violet') return 'bg-violet-50 text-violet-700';
  return 'bg-orange-50 text-orange-700';
}

function renderLocalizedTableCell(cell) {
  if (cell === '-') return <DashIcon />;
  const str = String(cell);
  if (str.includes('||')) {
    return (
      <div className="flex flex-col items-center gap-1.5">
        {str.split('||').map((line, i) => {
          const [main, sub] = line.split('|');
          return (
            <div key={i} className="text-center leading-snug">
              <span className={`text-xs ${i === 0 ? 'font-semibold text-slate-900' : 'text-slate-500'}`}>{main}</span>
              {sub && <span className="block text-[10px] text-slate-400">{sub}</span>}
            </div>
          );
        })}
      </div>
    );
  }
  const [big, note] = str.split('|');
  return (
    <span className="leading-snug text-slate-800">
      <span className={note ? 'block font-bold text-slate-950' : ''}>{big}</span>
      {note && <span className="mt-1 block text-[11px] leading-tight text-slate-500">{note}</span>}
    </span>
  );
}

function ComparisonTable() {
  const { t } = useTranslation();
  const table = t('redesign.home.table', { returnObjects: true });
  const editions = [
    { key: 'apple',   name: table.editions.apple,   subtitle: table.subtitles.apple,   badge: table.badges.universal, tint: 'blue' },
    { key: 'pc',      name: table.editions.pc,      subtitle: table.subtitles.pc,      badge: table.badges.msStore,    tint: 'orange' },
    { key: 'android', name: table.editions.android, subtitle: table.subtitles.android, badge: table.badges.edition,   tint: 'teal' },
  ];
  const rows = table.rows.map((row, index) => ({
    label: row[0],
    highlight: index === 3,
    cells: { apple: row[1], pc: row[2], android: row[3] },
  }));

  return (
    <section id="comparison-table" className="bg-[#f5f8ff] py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">{table.eyebrow}</div>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-black leading-[1.05] tracking-tight text-slate-950">{table.title}</h2>
          <p className="mt-4 text-slate-600">{table.desc}</p>
        </div>
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] table-fixed border-collapse">
              <colgroup>
                <col className="w-[200px]" />
                <col />
                <col />
                <col />
              </colgroup>
              <thead>
                <tr className="bg-white">
                  <th className="px-6 py-5 text-left text-xs font-bold uppercase tracking-wider text-slate-400">{table.feature}</th>
                  {editions.map((edition) => (
                    <th key={edition.key} className="px-4 py-5 text-center align-bottom">
                      <div className="flex flex-col items-center gap-1">
                        <div className={`inline-flex rounded-full px-2 py-0.5 text-[10px] font-black uppercase tracking-wider ${tintClass(edition.tint)}`}>{edition.badge}</div>
                        <div className="text-base font-black tracking-tight text-slate-950">{edition.name}</div>
                        <div className="text-xs text-slate-500">{edition.subtitle}</div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.label} className={`border-t border-slate-200 ${row.highlight ? 'bg-blue-50/70' : 'bg-white/70'}`}>
                    <td className="px-6 py-4 align-top text-sm font-bold text-slate-950">
                      <div className="flex items-center gap-2">
                        {row.label}
                        {row.highlight && <span className="rounded bg-blue-600 px-1.5 py-0.5 text-[9px] font-black uppercase tracking-wider text-white">{table.unique}</span>}
                      </div>
                    </td>
                    {editions.map((edition) => (
                      <td key={edition.key} className="px-4 py-4 text-center align-top text-sm">
                        {renderLocalizedTableCell(row.cells[edition.key])}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr className="border-t border-slate-200 bg-white">
                  <td className="px-6 py-5 align-middle text-sm font-bold text-slate-950">{table.where}</td>
                  <td className="px-4 py-5 text-center align-middle">
                    <div className="flex flex-col items-center gap-1.5">
                      <StoreBadge type="apple" href={appStoreUrl} size="sm" />
                      <span className="text-[10px] text-slate-400">{table.iosNote}</span>
                    </div>
                  </td>
                  <td className="px-4 py-5 text-center align-middle">
                    <StoreBadge type="microsoft" href={bibliofusePcUrl} size="sm" />
                  </td>
                  <td className="px-4 py-5 text-center align-middle">
                    <StoreBadge type="play" href={playStoreUrl} size="sm" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReaderFeatureRow({ eyebrow, title, desc, bullets, image, alt, reverse, kind = 'iphone', accent = 'blue', footnote, badge }) {
  const accentClasses = {
    blue: 'bg-blue-50 text-blue-600',
    teal: 'bg-teal-50 text-teal-600',
    violet: 'bg-violet-50 text-violet-600',
  };
  const dotClasses = {
    blue: 'bg-blue-600',
    teal: 'bg-teal-500',
    violet: 'bg-violet-600',
  };

  return (
    <div className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${reverse ? 'lg:[&>div:first-child]:order-2' : ''}`}>
      <div>
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
          <span className={`h-1.5 w-1.5 rounded-full ${dotClasses[accent]}`} />
          {eyebrow}
        </div>
        <h2 className="mt-3 text-[clamp(1.6rem,2.8vw,2.25rem)] font-black leading-[1.05] tracking-tight text-slate-950">{title}</h2>
        {badge && (
          <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-blue-700">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8 5.8 21.3l2.4-7.4L2 9.4h7.6z" /></svg>
            {badge}
          </div>
        )}
        <p className="mt-4 text-lg leading-relaxed text-slate-600">{desc}</p>
        <ul className="mt-6 space-y-3">
          {bullets.map((bullet) => (
            <li key={bullet.title} className="flex items-start gap-3">
              <span className={`mt-0.5 grid h-6 w-6 flex-shrink-0 place-items-center rounded-full ${accentClasses[accent]}`}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg>
              </span>
              <span className="leading-snug text-slate-900"><strong className="font-bold">{bullet.title}</strong> <span className="text-slate-600">- {bullet.body}</span></span>
            </li>
          ))}
        </ul>
        {footnote && <p className="mt-5 max-w-md border-l-2 border-slate-200 pl-3 text-xs leading-relaxed text-slate-500">{footnote}</p>}
      </div>

      <div className="relative">
        {kind === 'iphone' ? (
          <div className="relative mx-auto max-w-[360px]">
            <div className="absolute -inset-12 -z-10 rounded-full bg-[radial-gradient(circle,rgba(45,124,246,0.16),transparent_70%)]" />
            <img src={image} alt={alt} className="block w-full drop-shadow-2xl" />
          </div>
        ) : (
          <div className="relative">
            <div className="absolute -inset-10 -z-10 rounded-3xl bg-[radial-gradient(circle,rgba(45,124,246,0.16),transparent_70%)]" />
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
              <div className="flex h-8 items-center gap-1.5 border-b border-slate-200 bg-slate-50 px-3">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              </div>
              <img src={image} alt={alt} className="block w-full" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function ToolsHighlight() {
  const { t } = useTranslation();
  const tools = [
    {
      title: t('redesign.toolsHighlight.tools.resize.title'),
      body: t('redesign.toolsHighlight.tools.resize.body'),
      kpi: t('redesign.toolsHighlight.tools.resize.kpi'),
      label: t('redesign.toolsHighlight.tools.resize.label'),
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 9V5a1 1 0 011-1h4" /><path d="M20 15v4a1 1 0 01-1 1h-4" /><path d="M9 9h6v6H9z" /></svg>,
    },
    {
      title: t('redesign.toolsHighlight.tools.convert.title'),
      body: t('redesign.toolsHighlight.tools.convert.body'),
      kpi: t('redesign.toolsHighlight.tools.convert.kpi'),
      label: t('redesign.toolsHighlight.tools.convert.label'),
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><circle cx="9" cy="11" r="1.5" /><path d="M21 17l-5-5-9 9" /></svg>,
    },
    {
      title: t('redesign.toolsHighlight.tools.merge.title'),
      body: t('redesign.toolsHighlight.tools.merge.body'),
      kpi: t('redesign.toolsHighlight.tools.merge.kpi'),
      label: t('redesign.toolsHighlight.tools.merge.label'),
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3v6a4 4 0 004 4h4" /><path d="M16 21l3-3-3-3" /><path d="M5 13v8" /></svg>,
    },
  ];

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl sm:p-10">
      <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-center">
        <span className="inline-flex self-start items-center gap-2 rounded-full bg-teal-50 px-3 py-1.5 text-xs font-black uppercase tracking-wider text-teal-700">{t('redesign.toolsHighlight.badge')}</span>
        <h2 className="text-2xl font-black tracking-tight text-slate-950">{t('redesign.toolsHighlight.title')}</h2>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {tools.map((tool) => (
          <article key={tool.title} className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <div className="mb-4 flex items-center justify-between">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-teal-50 text-teal-700">{tool.icon}</span>
              <span className="text-right">
                <span className="block text-lg font-black tracking-tight text-slate-950">{tool.kpi}</span>
                <span className="block text-[10px] uppercase tracking-wider text-slate-400">{tool.label}</span>
              </span>
            </div>
            <h3 className="mb-1.5 font-black text-slate-950">{tool.title}</h3>
            <p className="text-sm leading-relaxed text-slate-600">{tool.body}</p>
          </article>
        ))}
      </div>
      <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-slate-200 pt-6 text-xs text-slate-500">
        <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">{t('redesign.toolsHighlight.supports')}</span>
        {['EPUB', 'PDF', 'CBZ', 'CBR', 'RAR', 'ZIP'].map((format) => (
          <span key={format} className="text-base font-black tracking-tight text-slate-800">{format}</span>
        ))}
        <span className="ml-auto text-xs text-slate-400">{t('redesign.toolsHighlight.onDevice')}</span>
      </div>
    </div>
  );
}

function VisionProSection() {
  const { t } = useTranslation();
  const v = t('redesign.comicReaderPage.vision', { returnObjects: true });
  const modes = [
    { key: 'shelves', icon: <path d="M4 6h16M4 12h16M4 18h16" /> },
    { key: 'grid', icon: <><rect x="4" y="4" width="7" height="7" rx="1" /><rect x="13" y="4" width="7" height="7" rx="1" /><rect x="4" y="13" width="7" height="7" rx="1" /><rect x="13" y="13" width="7" height="7" rx="1" /></> },
    { key: 'wall', icon: <path d="M4 8l16-3v11L4 19z" /> },
  ];
  const inputs = [
    { key: 'eyes', icon: <><circle cx="12" cy="12" r="3" /><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6z" /></> },
    { key: 'devices', icon: <><rect x="6" y="3" width="12" height="18" rx="6" /><path d="M12 7v4" /></> },
    { key: 'window', icon: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18" /></> },
  ];

  return (
    <section id="apple-vision-pro" className="relative overflow-hidden bg-[#0a0f1e] py-20 sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(45,124,246,0.22),transparent_45%),radial-gradient(circle_at_85%_80%,rgba(20,194,166,0.16),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-200">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            {v.eyebrow}
          </div>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-black leading-[1.05] tracking-tight text-white">{v.title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-300">{v.desc}</p>
          <div className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-white">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8 5.8 21.3l2.4-7.4L2 9.4h7.6z" /></svg>
            {v.badge}
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
          <img src={`/image/comicreader/vision/spatial-modes.jpg`} alt={v.imageAltModes} className="block w-full" loading="lazy" />
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {modes.map((m) => (
            <div key={m.key} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <span className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-blue-500/15 text-blue-300">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">{m.icon}</svg>
              </span>
              <h3 className="mb-1.5 text-base font-black text-white">{v.modes[m.key].title}</h3>
              <p className="text-sm leading-relaxed text-slate-400">{v.modes[m.key].body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="order-2 lg:order-1">
            <h3 className="text-[clamp(1.5rem,2.6vw,2rem)] font-black tracking-tight text-white">{v.inputTitle}</h3>
            <ul className="mt-6 space-y-4">
              {inputs.map((it) => (
                <li key={it.key} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-8 w-8 flex-shrink-0 place-items-center rounded-lg bg-white/[0.06] text-teal-300">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">{it.icon}</svg>
                  </span>
                  <span className="leading-snug text-slate-200"><strong className="font-bold text-white">{v.input[it.key].title}</strong> <span className="text-slate-400">— {v.input[it.key].body}</span></span>
                </li>
              ))}
            </ul>
            <p className="mt-6 max-w-md border-l-2 border-blue-400/40 pl-3 text-sm leading-relaxed text-slate-400">{v.streamNote}</p>
          </div>
          <div className="order-1 overflow-hidden rounded-3xl border border-white/10 shadow-2xl lg:order-2">
            <img src={`/image/comicreader/vision/designed-for-vision-pro.jpg`} alt={v.imageAltReading} className="block w-full" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ReaderChooser({ lang }) {
  const { t } = useTranslation();
  const rows = [
    { label: t('redesign.grepTagPage.whySeparate.row1Label'), col1: t('redesign.grepTagPage.whySeparate.row1col1'), col2: t('redesign.grepTagPage.whySeparate.row1col2') },
    { label: t('redesign.grepTagPage.whySeparate.row2Label'), col1: t('redesign.grepTagPage.whySeparate.row2col1'), col2: t('redesign.grepTagPage.whySeparate.row2col2') },
    { label: t('redesign.grepTagPage.whySeparate.row3Label'), col1: t('redesign.grepTagPage.whySeparate.row3col1'), col2: t('redesign.grepTagPage.whySeparate.row3col2') },
    { label: t('redesign.grepTagPage.whySeparate.row4Label'), col1: t('redesign.grepTagPage.whySeparate.row4col1'), col2: t('redesign.grepTagPage.whySeparate.row4col2') },
    { label: t('redesign.grepTagPage.whySeparate.row5Label'), col1: t('redesign.grepTagPage.whySeparate.row5col1'), col2: t('redesign.grepTagPage.whySeparate.row5col2') },
  ];

  return (
    <section id="why-two-apps" className="bg-[#f8f7ff] py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">{t('redesign.grepTagPage.whySeparate.eyebrow')}</div>
          <h2 className="mb-4 text-[clamp(1.6rem,3vw,2.4rem)] font-black tracking-tight text-slate-950">
            {t('redesign.grepTagPage.whySeparate.title')}
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-600">
            {t('redesign.grepTagPage.whySeparate.desc')}
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
          <div className="grid grid-cols-3 bg-slate-800 text-white">
            <div className="px-5 py-4 text-xs font-bold uppercase tracking-wider text-slate-400" />
            <div className="border-l border-blue-500/40 bg-blue-900/40 px-5 py-4 text-center text-sm font-bold text-blue-200">
              {t('redesign.grepTagPage.whySeparate.col1')}
            </div>
            <div className="border-l border-slate-700 px-5 py-4 text-center text-sm font-bold">
              {t('redesign.grepTagPage.whySeparate.col2')}
            </div>
          </div>
          {rows.map((row, i) => (
            <div key={row.label} className={`grid grid-cols-3 border-t border-slate-100 ${i % 2 === 1 ? 'bg-slate-50' : 'bg-white'}`}>
              <div className="px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-400">{row.label}</div>
              <div className="border-l border-blue-100 bg-blue-50/50 px-5 py-3.5 text-sm font-medium text-blue-900">{row.col1}</div>
              <div className="border-l border-slate-100 px-5 py-3.5 text-sm text-slate-700">{row.col2}</div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <Link to={`/${lang}/grepreader/`} className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700">
            {t('redesign.twoAppsSection.textCta')}
            <ArrowRightIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}

function stripHtml(value) {
  return String(value || '').replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
}

function faqToPlainText(item) {
  const parts = [stripHtml(item.a)];
  if (Array.isArray(item.bullets)) {
    item.bullets.forEach((bullet) => {
      parts.push(stripHtml(bullet.text));
      if (Array.isArray(bullet.sub)) {
        bullet.sub.forEach((sub) => parts.push(stripHtml(sub)));
      }
    });
  }
  return parts.filter(Boolean).join(' ');
}

function RichText({ text, className }) {
  return (
    <span
      className={className}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
}

function FaqAnswer({ item, lang }) {
  const linkHref = item.link?.href?.startsWith('/')
    ? `/${lang}${item.link.href.endsWith('/') ? item.link.href : `${item.link.href}/`}`
    : item.link?.href;

  return (
    <div className="px-5 pb-5 text-sm leading-relaxed text-slate-600">
      <p>
        <RichText text={item.a} />
      </p>
      {item.link && (
        <Link to={linkHref} className="mt-3 inline-flex font-semibold text-blue-600 hover:text-blue-700">
          {item.link.label}
        </Link>
      )}
      {Array.isArray(item.bullets) && item.bullets.length > 0 && (
        <ul className="mt-4 space-y-3">
          {item.bullets.map((bullet) => (
            <li key={bullet.text} className="rounded-xl bg-slate-50 px-4 py-3">
              <RichText text={bullet.text} className="font-semibold text-slate-800" />
              {Array.isArray(bullet.sub) && bullet.sub.length > 0 && (
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-slate-600">
                  {bullet.sub.map((sub) => (
                    <li key={sub}>
                      <RichText text={sub} />
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const ComicReader = () => {
  const { t } = useTranslation();
  const { lang = 'en' } = useParams();
  const faqItemsRaw = t('redesign.comicReaderPage.faq', { returnObjects: true });
  const faqItems = Array.isArray(faqItemsRaw) ? faqItemsRaw : [];
  const faqItemsForSchema = faqItems.map((item) => ({
    q: item.q,
    a: faqToPlainText(item),
  }));

  return (
    <div className="overflow-x-hidden bg-white">
      <SEO
        title={`BiblioFuse Reader - ${t('redesign.readerSection.title')}`}
        description={t('redesign.readerSection.desc')}
        canonical="/comicreader"
        schemaType="suite"
        schemaName="BiblioFuse Reader"
        operatingSystem="iOS, iPadOS, macOS, visionOS, Android, Windows"
        softwareVersion="2.1.4"
        storeLinks={[appStoreUrl, playStoreUrl, bibliofusePcUrl]}
        featureList={[
          t('redesign.readerSection.features.library.title'),
          t('redesign.readerSection.features.reading.title'),
          t('redesign.readerSection.features.streaming.title'),
          t('redesign.toolsHighlight.title'),
          t('redesign.comicReaderPage.vision.title'),
          t('redesign.twoAppsSection.comicBullet1'),
          t('redesign.twoAppsSection.comicBullet2'),
          t('redesign.twoAppsSection.comicBullet3'),
        ]}
        faqItems={faqItemsForSchema}
        breadcrumbs={[
          { name: 'BiblioFuse', url: `https://bibliofuse.com/${lang}/` },
          { name: 'BiblioFuse Reader', url: `https://bibliofuse.com/${lang}/comicreader/` },
        ]}
      />

      <section className="relative overflow-hidden bg-[#f5f8ff] pt-28 pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(45,124,246,0.14),transparent_34%),radial-gradient(circle_at_85%_18%,rgba(20,194,166,0.13),transparent_28%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:gap-10 lg:px-8">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-700 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
              {t('redesign.productFamily.products.reader.tag')}
            </div>
            <div className="mb-5">
              <img src="/image/bibliofuse-logo.png" alt="BiblioFuse Reader" className="h-20 w-20 rounded-2xl shadow-xl" />
            </div>
            <h1 className="max-w-3xl text-[clamp(2.5rem,5vw,4rem)] font-black leading-[0.98] tracking-tight text-slate-950">
              BiblioFuse Reader
              <span className="mt-3 block bg-gradient-to-r from-[#1e5fd3] to-[#14c2a6] bg-clip-text text-transparent">{t('redesign.readerSection.title')}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              {t('redesign.readerSection.desc')}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <StoreBadge type="apple" href={appStoreUrl} />
              <StoreBadge type="play" href={playStoreUrl} />
              <StoreBadge type="microsoft" href={bibliofusePcUrl} />
            </div>
            <DevicePills devices={['iphone', 'ipad', 'mac', 'visionpro', 'android', 'windows']} tone="light" align="start" className="mt-5" />
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-slate-600">
              {[t('redesign.common.noAds'), t('redesign.common.noTracking'), t('redesign.common.onDevice')].map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[min(390px,100%)] lg:justify-self-end">
            <div className="absolute -inset-10 -z-0 rounded-full bg-[radial-gradient(circle,rgba(45,124,246,0.18),transparent_68%)]" />
            <img src={`${imageBase}/iphone/1.png`} alt={t('redesign.altTexts.heroImage')} className="relative z-10 block w-full drop-shadow-2xl" />
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl space-y-24 px-4 sm:px-6 lg:space-y-32 lg:px-8">
          <ReaderFeatureRow
            eyebrow={t('redesign.readerSection.features.library.eyebrow')}
            title={t('redesign.readerSection.features.library.title')}
            desc={t('redesign.readerSection.features.library.desc')}
            bullets={[
              { title: t('redesign.readerSection.features.library.bullet1Title'), body: t('redesign.readerSection.features.library.bullet1Body') },
              { title: t('redesign.readerSection.features.library.bullet2Title'), body: t('redesign.readerSection.features.library.bullet2Body') },
              { title: t('redesign.readerSection.features.library.bullet3Title'), body: t('redesign.readerSection.features.library.bullet3Body') },
            ]}
            image={`${imageBase}/iphone/2.png`}
            alt={t('redesign.readerSection.features.library.imageAlt')}
          />

          <ReaderFeatureRow
            reverse
            eyebrow={t('redesign.readerSection.features.reading.eyebrow')}
            title={t('redesign.readerSection.features.reading.title')}
            desc={t('redesign.readerSection.features.reading.desc')}
            bullets={[
              { title: t('redesign.readerSection.features.reading.bullet1Title'), body: t('redesign.readerSection.features.reading.bullet1Body') },
              { title: t('redesign.readerSection.features.reading.bullet2Title'), body: t('redesign.readerSection.features.reading.bullet2Body') },
              { title: t('redesign.readerSection.features.reading.bullet3Title'), body: t('redesign.readerSection.features.reading.bullet3Body') },
            ]}
            image={`${imageBase}/iphone/3.png`}
            alt={t('redesign.readerSection.features.reading.imageAlt')}
            accent="teal"
          />

          <ReaderFeatureRow
            eyebrow={t('redesign.readerSection.features.streaming.eyebrow')}
            title={t('redesign.readerSection.features.streaming.title')}
            badge={t('redesign.readerSection.features.streaming.badge')}
            desc={t('redesign.readerSection.features.streaming.desc')}
            bullets={[
              { title: t('redesign.readerSection.features.streaming.bullet1Title'), body: t('redesign.readerSection.features.streaming.bullet1Body') },
              { title: t('redesign.readerSection.features.streaming.bullet2Title'), body: t('redesign.readerSection.features.streaming.bullet2Body') },
              { title: t('redesign.readerSection.features.streaming.bullet3Title'), body: t('redesign.readerSection.features.streaming.bullet3Body') },
              { title: t('redesign.readerSection.features.streaming.bullet4Title'), body: t('redesign.readerSection.features.streaming.bullet4Body') },
            ]}
            image={`${imageBase}/mac/1.png`}
            alt={t('redesign.readerSection.features.streaming.imageAlt')}
            kind="mac"
            footnote={t('redesign.readerSection.features.streaming.footnote')}
          />

          <ToolsHighlight />
        </div>
      </section>

      <VisionProSection />

      <ReaderChooser lang={lang} />

      <ComparisonTable />

      <ReaderFamilyGuide />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <div className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">FAQ</div>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black tracking-tight text-slate-950">
              {t('redesign.comicReaderPage.faqTitle', 'Frequently Asked Questions')}
            </h2>
          </div>
          <div className="space-y-4">
            {faqItems.map((item) => (
              <details key={item.q} className="group rounded-2xl border border-slate-200 bg-white shadow-sm">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 px-5 py-4 text-sm font-semibold text-slate-900">
                  {item.q}
                  <svg className="flex-shrink-0 transition-transform group-open:rotate-180" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </summary>
                <FaqAnswer item={item} lang={lang} />
              </details>
            ))}
          </div>
        </div>
      </section>

      <div className="flex justify-center gap-5 py-6 text-xs text-slate-400">
        <Link to={`/${lang}/changelog/`} className="hover:text-slate-700">Changelog</Link>
        <Link to={`/${lang}/privacy/`} className="hover:text-slate-700">Privacy Policy</Link>
      </div>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-4 text-sm text-slate-500">
            {t('redesign.grepTagPage.whySeparate.desc')}
          </p>
          <Link
            to={`/${lang}/`}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-[#f7f9fe] px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:shadow-md"
          >
            Back to home
          </Link>
        </div>
      </section>

      <StickyDownloadBar
        logo="/image/bibliofuse-logo.png"
        appName="BiblioFuse Reader"
        appStoreUrl={appStoreUrl}
        msStoreUrl={bibliofusePcUrl}
      />
    </div>
  );
};

export default ComicReader;
