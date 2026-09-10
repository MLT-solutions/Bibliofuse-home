import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../assets/logo.png';
import SEO from '../components/SEO';
import DevicePills from '../components/DevicePills';
import { TOOLS } from '../data/tools';

// Mirrors the card accents in src/pages/tools/ToolsHub.jsx
const TOOL_ACCENTS = {
  blue: 'bg-blue-50 text-blue-700',
  violet: 'bg-violet-50 text-violet-700',
  orange: 'bg-orange-50 text-orange-700',
  teal: 'bg-teal-50 text-teal-700',
  emerald: 'bg-emerald-50 text-emerald-700',
};
import { articles } from '../data/articles';

const appStoreUrl = 'https://apps.apple.com/kw/app/bibliofuse-reader-compress/id6758330093';
const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.MLOGICTECH.bibliofusereader&hl=en-US&ah=423jBOeRoug68zOF2xwCeFuKVQQ';
const bibliofusePcUrl = 'https://apps.microsoft.com/store/detail/9N77MZ509ML2';
const smartDecryptMsUrl = 'https://apps.microsoft.com/detail/9p9bfkr5zdz8';
// Temporary: point straight at the App Store instead of mlogictech.com/products
// until that listing is live — see docs/features/app-pages.md. Swap back to
// mlogictech.com once it's ready.
const smartDecryptAppStoreUrl = 'https://apps.apple.com/ca/app/smartdecrypt-pdf-zip/id6763979229';
const contentCueAppStoreUrl = 'https://apps.apple.com/us/app/contentcue-read-listen/id6770080864';
// Mirrors HOSTS.docker/synology.appLink in ReaderFamilyGuide.jsx — keep in sync.
const dockerUrl = 'https://github.com/MLT-solutions/bibliofuse-nas-distribution';
const synologyUrl = 'https://github.com/MLT-solutions/bibliofuse-nas-distribution/releases';

function StoreBadge({ type, size = 'lg', className = '' }) {
  const sizes = size === 'sm' ? 'h-10' : 'h-12';
  if (type === 'apple') {
    return (
      <a href={appStoreUrl} target="_blank" rel="noopener noreferrer" className={`inline-flex ${className}`}>
        <img src="/image/Download_on_the_App_Store_Badge.svg.png" alt="Download on the App Store" className={`${sizes} w-auto object-contain`} />
      </a>
    );
  }
  if (type === 'play') {
    return (
      <a href={playStoreUrl} target="_blank" rel="noopener noreferrer" className={`inline-flex ${className}`}>
        <img src="/image/Playstore.png" alt="Get it on Google Play" className={`${sizes} w-auto object-contain`} />
      </a>
    );
  }
  return null;
}


function MicrosoftStoreImageBadge({ href, size = 'sm', className = '' }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`inline-flex transition hover:-translate-y-0.5 ${className}`}>
      <img src="/image/Microsoft_Store_badge.svg" alt="Get it from Microsoft" className={`${size === 'lg' ? 'h-12' : 'h-10'} w-auto object-contain`} />
    </a>
  );
}



function CheckIcon({ className = 'text-emerald-600' }) {
  return (
    <span className={`inline-grid h-6 w-6 place-items-center rounded-full bg-emerald-50 ${className}`}>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 13l4 4L19 7" />
      </svg>
    </span>
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


function ProductIcon({ kind }) {
  const props = { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2.2, strokeLinecap: 'round', strokeLinejoin: 'round' };
  if (kind === 'book') return <svg {...props}><path d="M4 19V5a2 2 0 012-2h3v18H6a2 2 0 01-2-2z" /><path d="M11 3h3v18h-3z" /><path d="M16 5l4 1-3.5 14-4-1z" /></svg>;
  if (kind === 'globe') return <svg {...props}><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3a13 13 0 010 18 13 13 0 010-18" /></svg>;
  if (kind === 'folder') return <svg {...props}><path d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><path d="M8 13h8" /></svg>;
  if (kind === 'lock') return <svg {...props}><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V8a4 4 0 018 0v3" /></svg>;
  if (kind === 'browser') return <svg {...props}><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M2 9h20" /><circle cx="6" cy="6.5" r="0.8" fill="currentColor" stroke="none" /><circle cx="9" cy="6.5" r="0.8" fill="currentColor" stroke="none" /></svg>;
  if (kind === 'search') return <svg {...props}><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.35-4.35" /></svg>;
  return null;
}

function Hero({ lang }) {
  const { t } = useTranslation();
  const signals = [t('redesign.common.noAds'), t('redesign.common.noTracking'), t('redesign.common.onDevice')];

  return (
    <section id="top" className="relative overflow-hidden bg-[#f5f8ff] pt-28 pb-16 sm:pb-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(45,124,246,0.14),transparent_34%),radial-gradient(circle_at_85%_18%,rgba(20,194,166,0.13),transparent_28%)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-8 lg:px-8">
        <div className="min-w-0 max-w-full">
          <div className="mb-5">
            <img src="/image/bibliofuse-logo.png" alt="BiblioFuse Reader" className="h-16 w-16 rounded-2xl shadow-lg" />
          </div>
          <h1 className="mt-1 max-w-3xl text-[clamp(2.75rem,5.6vw,4.75rem)] font-black leading-[0.98] tracking-tight text-[#0b1220]">
            {t('redesign.home.hero.titleA')}
            <br />
            <span className="bg-gradient-to-r from-[#1e5fd3] to-[#14c2a6] bg-clip-text text-transparent">{t('redesign.home.hero.titleB')}</span>
          </h1>

          <p className="mt-6 max-w-full text-lg leading-8 text-slate-600 sm:max-w-xl md:text-xl">
            {t('redesign.home.hero.desc')}
          </p>

          <div id="download" className="mt-8 flex flex-wrap items-center gap-3">
            <StoreBadge type="apple" />
            <StoreBadge type="play" />
            <MicrosoftStoreImageBadge href={bibliofusePcUrl} />
          </div>

          <DevicePills devices={['iphone', 'ipad', 'mac', 'visionpro', 'appletv', 'androidphone', 'androidtablet', 'androidtv', 'windows', 'docker', 'synology']} tone="light" align="start" className="mt-5" />

          <Link
            to={`/${lang}/comicreader/`}
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#0b1220] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#152033]"
          >
            {t('redesign.home.hero.readerCta')} →
          </Link>

          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-slate-600">
            {signals.map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg>
                {item}
              </span>
            ))}
          </div>
          <p className="mt-3 text-xs text-slate-500">{t('redesign.home.hero.languages')}</p>

          <div className="mt-7 flex max-w-full items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50/85 px-4 py-3 text-left sm:max-w-xl">
            <svg className="mt-0.5 flex-shrink-0" width="20" height="20" viewBox="0 0 24 24" fill="#d97706"><path d="M13 14h-2v-4h2m0 8h-2v-2h2M1 21h22L12 2 1 21z" /></svg>
            <div className="text-xs leading-relaxed text-amber-950/90">
              <span className="block font-bold">{t('redesign.home.hero.warningTitle')}</span>
              {t('redesign.home.hero.warningBody')}
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[min(380px,100%)] lg:justify-self-end">
          <div className="absolute -inset-10 -z-0 rounded-full bg-[radial-gradient(circle,rgba(45,124,246,0.18),transparent_68%)]" />
          <img src="/image/home/hero-formats.jpg" alt={t('redesign.altTexts.heroImage')} width="416" height="900" className="relative z-10 block w-full drop-shadow-2xl motion-safe:animate-[float_7s_ease-in-out_infinite]" fetchpriority="high" />
          <div className="absolute -left-3 bottom-8 z-20 hidden items-center gap-2.5 rounded-2xl border border-slate-200 bg-white px-3 py-2.5 shadow-xl md:flex lg:-left-6">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-blue-50 text-blue-600">
              <ProductIcon kind="book" />
            </span>
            <span>
              <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">{t('redesign.home.hero.chipA')}</span>
              <span className="block text-xs font-bold text-slate-900">{t('redesign.home.hero.chipB')}</span>
            </span>
          </div>
          <div className="absolute -right-3 top-1/3 z-20 hidden items-center gap-2.5 rounded-2xl border border-slate-200 bg-white px-3 py-2.5 shadow-xl md:flex lg:-right-6">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-teal-50 text-teal-600">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5L6 9H2v6h4l5 4V5z" /><path d="M19 12a3 3 0 00-3-3v6a3 3 0 003-3z" /></svg>
            </span>
            <span>
              <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">{t('redesign.home.hero.chipC')}</span>
              <span className="block text-xs font-bold text-slate-900">{t('redesign.home.hero.chipD')}</span>
            </span>
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-14 flex max-w-7xl flex-wrap items-center gap-x-8 gap-y-3 px-4 text-slate-500 sm:px-6 lg:px-8">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">{t('redesign.home.hero.reads')}</span>
        {['EPUB', 'PDF', 'CBZ', 'CBR', 'RAR', 'ZIP', 'TXT'].map((format) => (
          <span key={format} className="text-base font-black tracking-tight text-slate-700 sm:text-lg">{format}</span>
        ))}
      </div>
    </section>
  );
}










// Second hero: streaming & sync. The three sources it names — a BiblioFuse host app, your
// own iCloud Drive, and a third-party OPDS/Komga/Kavita server — are the three answers to
// "my phone is full", which is the objection that actually stops people buying a comic
// reader. Live translation used to lead here and now has its own hero below; both were
// separated on 2026-09-10 so neither has to carry the other's pitch.
function SecondHero({ lang }) {
  const { t } = useTranslation();
  const s = t('redesign.home.secondHero', { returnObjects: true });
  const bullets = Array.isArray(s.bullets) ? s.bullets : [];
  return (
    <section className="border-y border-slate-200/70 bg-[#0b1220] py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div>
          <div className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-teal-300">{s.eyebrow}</div>
          <h2 className="text-[clamp(1.9rem,3.8vw,2.9rem)] font-black leading-[1.05] tracking-tight text-white">
            {s.titleA}
            <br />
            <span className="bg-gradient-to-r from-[#5ea0ff] to-[#3ddbc4] bg-clip-text text-transparent">{s.titleB}</span>
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300">{s.desc}</p>
          <ul className="mt-6 space-y-2.5">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-200">
                <svg className="mt-1 flex-shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3ddbc4" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg>
                {b}
              </li>
            ))}
          </ul>
          {/* Points at the setup picker, not /features/. The label promises "which
              combination works", and the picker answers exactly that with a concrete
              host + client + connection-mode recommendation; the feature matrix answers
              the different question "does platform X do Y, and since when". ThirdHero's
              CTA below still links /features/, so the matrix keeps its homepage link. */}
          <Link
            to={`/${lang}/comicreader/#setup-guide`}
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#0b1220] transition hover:-translate-y-0.5 hover:bg-slate-100"
          >
            {s.cta} →
          </Link>
        </div>
        <div className="relative mx-auto w-full max-w-[300px] lg:justify-self-end">
          <div className="absolute -inset-10 -z-0 rounded-full bg-[radial-gradient(circle,rgba(61,219,196,0.22),transparent_68%)]" />
          <img src="/image/home/hero-streaming.jpg" alt={t('redesign.altTexts.heroStreaming')} width="416" height="900" className="relative z-10 block w-full drop-shadow-2xl" loading="lazy" />
        </div>
      </div>
    </section>
  );
}

// Third hero: live comic & manga translation, the one thing the field does not have.
// Panels gates OPDS behind a $9.99/yr tier and Komic does native Komga/Kavita, but nobody
// advertises in-place translation. Deliberately a light band between the dark second hero
// and the slate tools strip, with the artwork on the opposite side, so the two heroes do
// not read as one long block. Copy is the previous second hero's, already translated.
function ThirdHero({ lang }) {
  const { t } = useTranslation();
  const s = t('redesign.home.thirdHero', { returnObjects: true });
  const bullets = Array.isArray(s.bullets) ? s.bullets : [];
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(139,92,246,0.10),transparent_38%),radial-gradient(circle_at_88%_75%,rgba(20,194,166,0.10),transparent_34%)]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div className="relative mx-auto w-full max-w-[300px] lg:order-1 lg:justify-self-start">
          <div className="absolute -inset-10 -z-0 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.16),transparent_68%)]" />
          <img
            src="/image/home/hero-translation.jpg"
            alt={t('redesign.altTexts.heroTranslation')}
            width="416"
            height="900"
            loading="lazy"
            className="relative z-10 block w-full rounded-[1.6rem] shadow-[0_18px_40px_rgba(15,23,42,0.18)]"
          />
        </div>
        <div className="lg:order-2">
          <div className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-violet-600">{s.eyebrow}</div>
          <h2 className="text-[clamp(1.9rem,3.8vw,2.9rem)] font-black leading-[1.05] tracking-tight text-slate-950">
            {s.titleA}
            <br />
            <span className="bg-gradient-to-r from-[#7c4dff] to-[#14c2a6] bg-clip-text text-transparent">{s.titleB}</span>
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600">{s.desc}</p>
          <ul className="mt-6 space-y-2.5">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-700">
                <svg className="mt-1 flex-shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7c4dff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg>
                {b}
              </li>
            ))}
          </ul>
          <Link
            to={`/${lang}/features/`}
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#0b1220] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#152033]"
          >
            {s.cta} →
          </Link>
        </div>
      </div>
    </section>
  );
}

// Cards only — deliberately not a live tool. A working tool here would compete with the
// /tools/<slug>/ pages for the same queries and pull ~13 MB of WASM into every branded visit.
function ToolsStrip({ lang }) {
  const { t } = useTranslation();
  const s = t('redesign.home.toolsStrip', { returnObjects: true });
  return (
    <section className="bg-slate-50 py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">{s.eyebrow}</div>
            <h2 className="text-xl font-black tracking-tight text-slate-950">{s.title}</h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-slate-600">{s.desc}</p>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {TOOLS.map((tool) => (
            <Link
              key={tool.slug}
              to={`/${lang}/tools/${tool.slug}/`}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-4 transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-lg"
            >
              <span className={`mb-2.5 inline-flex w-fit items-center rounded-lg px-2 py-1 text-[10px] font-black uppercase tracking-wider ${TOOL_ACCENTS[tool.accent]}`}>
                {tool.badge}
              </span>
              <span className="text-sm font-bold leading-snug text-slate-950">
                {t(`redesign.toolsPages.${tool.slug}.h1`)}
              </span>
            </Link>
          ))}
        </div>
        <Link to={`/${lang}/tools/`} className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 hover:text-blue-700">
          {s.cta} →
        </Link>
      </div>
    </section>
  );
}

function FaqSection({ lang }) {
  const { t } = useTranslation();
  const faq = t('redesign.home.faq', { returnObjects: true });
  const [open, setOpen] = useState(null);
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">{faq.eyebrow}</div>
          <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-black tracking-tight text-slate-950">{faq.title}</h2>
        </div>
        <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200">
          {faq.items.map((item, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="text-sm font-bold text-slate-950">{item.q}</span>
                <svg
                  width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                  strokeLinecap="round" strokeLinejoin="round"
                  className={`flex-shrink-0 text-slate-400 transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-sm leading-relaxed text-slate-600">
                  {item.a && <p className={item.bullets ? 'mb-3' : ''} dangerouslySetInnerHTML={{ __html: item.a }} />}
                  {item.bullets && (
                    <ul className="space-y-2">
                      {item.bullets.map((bullet, bi) => (
                        <li key={bi}>
                          <span className="font-semibold text-slate-800">{bullet.text}</span>
                          {bullet.sub && (
                            <ul className="mt-1 space-y-0.5 pl-4">
                              {bullet.sub.map((s, si) => (
                                <li key={si} className="text-slate-500" dangerouslySetInnerHTML={{ __html: `• ${s}` }} />
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                  {item.link && (
                    <Link
                      to={`/${lang}${item.link.href}`}
                      className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700"
                    >
                      {item.link.label}
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}




function PrivacyStrip() {
  const { t } = useTranslation();
  const items = [
    { title: t('redesign.privacyStrip.items.noAds.title'), body: t('redesign.privacyStrip.items.noAds.body'), tint: 'bg-rose-50 text-rose-600', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18.36 18.36A9 9 0 015.64 5.64m12.72 12.72L5.64 5.64" /></svg> },
    { title: t('redesign.privacyStrip.items.noTracking.title'), body: t('redesign.privacyStrip.items.noTracking.body'), tint: 'bg-emerald-50 text-emerald-600', icon: <ProductIcon kind="lock" /> },
    { title: t('redesign.privacyStrip.items.cloudSync.title'), body: t('redesign.privacyStrip.items.cloudSync.body'), tint: 'bg-blue-50 text-blue-600', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg> },
    { title: t('redesign.privacyStrip.items.compression.title'), body: t('redesign.privacyStrip.items.compression.body'), tint: 'bg-violet-50 text-violet-600', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7" /><path d="M4 7c0 2.21 3.58 4 8 4s8-1.79 8-4" /></svg> },
  ];

  return (
    <section id="about" className="bg-[#f5f8ff] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">{t('redesign.privacyStrip.eyebrow')}</div>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-black leading-[1.05] tracking-tight text-slate-950">{t('redesign.privacyStrip.title')}</h2>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:shadow-xl">
              <div className={`mb-4 grid h-11 w-11 place-items-center rounded-xl ${item.tint}`}>{item.icon}</div>
              <h3 className="mb-1.5 font-black text-slate-950">{item.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const TAG_COLORS = {
  guide: 'bg-blue-50 text-blue-600',
  news: 'bg-teal-50 text-teal-600',
  tips: 'bg-violet-50 text-violet-600',
  update: 'bg-green-50 text-green-600',
};

function BlogPreview({ lang }) {
  const { t, i18n } = useTranslation();
  const currentLang = lang || i18n.language || 'en';
  const preview = articles.slice(0, 3);

  if (preview.length === 0) return null;

  return (
    <section className="bg-[#f5f8ff] py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              {t('redesign.blog.homeSectionEyebrow')}
            </div>
            <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-black leading-tight tracking-tight text-slate-950">
              {t('redesign.blog.homeSectionTitle')}
            </h2>
            <p className="mt-2 text-base text-slate-500">{t('redesign.blog.homeSectionDesc')}</p>
          </div>
          <Link
            to={`/${currentLang}/blog/`}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-950"
          >
            {t('redesign.blog.viewAll')}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {preview.map(article => {
            const title = t(`redesign.blog.posts.${article.slug}.title`, { defaultValue: article.slug });
            const excerpt = t(`redesign.blog.posts.${article.slug}.excerpt`, { defaultValue: '' });
            const dateStr = new Date(article.date).toLocaleDateString(currentLang, {
              year: 'numeric', month: 'short', day: 'numeric',
            });
            return (
              <Link
                key={article.slug}
                to={`/${currentLang}/blog/${article.slug}/`}
                className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-3 flex flex-wrap gap-2">
                  {article.tags.map(tag => (
                    <span
                      key={tag}
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${TAG_COLORS[tag] ?? TAG_COLORS.guide}`}
                    >
                      {t(`redesign.blog.tags.${tag}`, { defaultValue: tag })}
                    </span>
                  ))}
                </div>
                <h3 className="mb-2 flex-1 text-base font-black leading-snug text-slate-950 transition-colors group-hover:text-blue-600">
                  {title}
                </h3>
                <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-slate-500">{excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400">{dateStr}</span>
                  <span className="flex items-center gap-1 text-xs font-semibold text-blue-600 transition-[gap] group-hover:gap-2">
                    {t('redesign.blog.readMore')}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}


function StickyDownloadBar() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 900);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`fixed bottom-5 left-1/2 z-30 -translate-x-1/2 transition-all ${scrolled ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0'}`}>
      <div className="flex max-w-[calc(100vw-2rem)] items-center gap-2 rounded-2xl border border-white/10 bg-[#0b1220]/95 px-3 py-2.5 text-white shadow-2xl backdrop-blur-md sm:gap-3 sm:px-4">
        <img src={logo} alt="" className="h-7 w-7 rounded-lg" />
        <span className="hidden text-sm font-bold sm:inline">{t('redesign.stickyBar.text')}</span>
        <StoreBadge type="apple" size="sm" />
        <StoreBadge type="play" size="sm" />
        <MicrosoftStoreImageBadge href={bibliofusePcUrl} size="sm" />
      </div>
    </div>
  );
}

const Home = () => {
  const { lang = 'en' } = useParams();
  const { t } = useTranslation();

  const faqItems = React.useMemo(() => {
    const items = t('redesign.home.faq.items', { returnObjects: true });
    if (!Array.isArray(items)) return [];
    return items.map(item => {
      const answer = item.a
        ? item.a
        : Array.isArray(item.bullets)
          ? item.bullets.map(b => b.text + (Array.isArray(b.sub) ? ' ' + b.sub.map(s => typeof s === 'string' ? s.replace(/<[^>]+>/g, '') : '').join(' ') : '')).join(' ')
          : '';
      return { q: item.q, a: answer.trim() };
    }).filter(x => x.q && x.a);
  }, [t]);

  return (
    <div className="bf-home min-h-screen overflow-x-hidden bg-white text-slate-950">
      <SEO
        title={t('redesign.seo.homeTitle')}
        description={t('redesign.seo.homeDesc')}
        canonical="/"
        schemaType="home"
        faqItems={faqItems}
      />
      <Hero lang={lang} />
      <SecondHero lang={lang} />
      <ThirdHero lang={lang} />
      <ToolsStrip lang={lang} />
      <FaqSection lang={lang} />
      <PrivacyStrip />
      <BlogPreview lang={lang} />
      <StickyDownloadBar />
    </div>
  );
};

export default Home;
