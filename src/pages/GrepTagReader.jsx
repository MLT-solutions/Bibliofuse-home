import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import StickyDownloadBar from '../components/StickyDownloadBar';

const grepTagAppStoreUrl = 'https://apps.apple.com/app/bibliofuse-grep-tag-reader/id6779977609';
const grepTagMsStoreUrl = 'https://apps.microsoft.com/store/detail/9MT6VDXXZ3RH';

function CheckGreen() {
  return (
    <svg className="flex-shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

function CheckIncluded() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

function Dash() {
  return <span className="text-slate-300 text-lg font-light">—</span>;
}

function FeatureSection({ eyebrow, title, desc, bullets, badge, accent = 'indigo', reverse = false, screenshot }) {
  const accentText = accent === 'indigo' ? 'text-indigo-600' : 'text-violet-600';
  const accentBg = accent === 'indigo' ? 'bg-indigo-50' : 'bg-violet-50';
  const accentIcon = accent === 'indigo' ? '#4f46e5' : '#7c3aed';

  return (
    <div className={`py-16 sm:py-20 ${reverse ? 'bg-[#f8f7ff]' : 'bg-white'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16 ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          {/* Text */}
          <div className="flex-1">
            <div className={`mb-3 text-xs font-bold uppercase tracking-[0.18em] ${accentText}`}>{eyebrow}</div>
            <h2 className="mb-4 text-[clamp(1.6rem,3vw,2.4rem)] font-black leading-tight tracking-tight text-slate-950">
              {title}
            </h2>
            <p className="mb-6 text-base leading-relaxed text-slate-600">{desc}</p>
            <ul className="space-y-3">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-slate-800">
                  <svg className="mt-0.5 flex-shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={accentIcon} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg>
                  {b}
                </li>
              ))}
            </ul>
            {badge && (
              <div className={`mt-6 inline-flex items-center gap-2 rounded-full ${accentBg} px-3 py-1.5 text-xs font-bold ${accentText}`}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg>
                {badge}
              </div>
            )}
          </div>
          {/* Screenshot */}
          <div className="flex flex-1 items-center justify-center lg:max-w-xs">
            <img
              src={screenshot}
              alt={title}
              className="w-full max-w-[260px] drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const GrepTagReader = () => {
  const { t } = useTranslation();
  const { lang } = useParams();
  const faqItemsRaw = t('redesign.grepTagPage.faq', { returnObjects: true });
  const faqItems = Array.isArray(faqItemsRaw) ? faqItemsRaw : [];

  const pricingRows = [
    { label: t('redesign.grepTagPage.pricing.feat1', 'Grep scan'), free: t('redesign.grepTagPage.pricing.feat1free', 'Unlimited'), pro: true },
    { label: t('redesign.grepTagPage.pricing.feat2', 'Grep profiles'), free: '2', pro: t('redesign.grepTagPage.pricing.feat2pro', 'Unlimited') },
    { label: t('redesign.grepTagPage.pricing.feat3', 'Tags'), free: '5', pro: t('redesign.grepTagPage.pricing.feat3pro', 'Unlimited') },
    { label: t('redesign.grepTagPage.pricing.feat4', 'EPUB covers'), free: true, pro: true },
    { label: t('redesign.grepTagPage.pricing.feat5', 'TXT covers'), free: false, pro: true },
    { label: t('redesign.grepTagPage.pricing.feat6', 'Move & organise files'), free: false, pro: true },
    { label: t('redesign.grepTagPage.pricing.feat7', 'Wi-Fi sync'), free: false, pro: true },
    { label: t('redesign.grepTagPage.pricing.feat8', 'Export Tag DB'), free: false, pro: true },
  ];

  const whyRows = [
    { label: t('redesign.grepTagPage.whySeparate.row1Label'), col1: t('redesign.grepTagPage.whySeparate.row1col1'), col2: t('redesign.grepTagPage.whySeparate.row1col2') },
    { label: t('redesign.grepTagPage.whySeparate.row2Label'), col1: t('redesign.grepTagPage.whySeparate.row2col1'), col2: t('redesign.grepTagPage.whySeparate.row2col2') },
    { label: t('redesign.grepTagPage.whySeparate.row3Label'), col1: t('redesign.grepTagPage.whySeparate.row3col1'), col2: t('redesign.grepTagPage.whySeparate.row3col2') },
    { label: t('redesign.grepTagPage.whySeparate.row4Label'), col1: t('redesign.grepTagPage.whySeparate.row4col1'), col2: t('redesign.grepTagPage.whySeparate.row4col2') },
    { label: t('redesign.grepTagPage.whySeparate.row5Label'), col1: t('redesign.grepTagPage.whySeparate.row5col1'), col2: t('redesign.grepTagPage.whySeparate.row5col2') },
  ];

  function renderCell(val) {
    if (val === true) return <CheckIncluded />;
    if (val === false) return <Dash />;
    return <span className="text-sm font-semibold text-slate-800">{val}</span>;
  }

  return (
    <>
      <SEO
        title={t('redesign.grepTagPage.seo.title')}
        description={t('redesign.grepTagPage.seo.desc')}
        canonical="/grepreader"
        schemaType="suite"
        schemaName="BiblioFuse GrepTag Reader"
        operatingSystem="iOS, iPadOS, macOS, Windows"
        featureList={[
          'Search inside ebooks — find any word across your entire EPUB or TXT library',
          'Keyword search with AND, OR, NOT logic — save searches as reusable profiles',
          'Tag ebooks by genre and filter your library instantly',
          t('redesign.grepTagPage.sync.title'),
          t('redesign.grepTagPage.covers.title'),
          'Works fully offline — no internet connection required',
          t('redesign.grepTagPage.pricing.feat8', 'Export Tag DB'),
        ]}
        faqItems={faqItems}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1e1b4b] via-[#312e81] to-[#1e1b4b] pt-28 pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.3),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(139,92,246,0.2),transparent_50%)]" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-3 py-1.5 text-xs font-semibold text-indigo-200">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-indigo-400" />
              <span className="relative h-2 w-2 rounded-full bg-indigo-400" />
            </span>
            {t('redesign.grepTagPage.hero.badge')}
          </div>

          <div className="mb-6 flex justify-center">
            <img src="/image/grepreader-logo.png" alt="GrepTag Reader" className="h-20 w-20 rounded-2xl shadow-2xl" />
          </div>

          <h1 className="mb-5 text-[clamp(2.4rem,5vw,4rem)] font-black leading-tight tracking-tight text-white">
            {t('redesign.grepTagPage.hero.title')}
          </h1>
          <p className="mx-auto mb-8 max-w-xl text-lg leading-relaxed text-indigo-200">
            {t('redesign.grepTagPage.hero.desc')}
          </p>

          <div className="flex flex-col items-center gap-3">
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={grepTagAppStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <img src="/image/Download_on_the_App_Store_Badge.svg.png" alt={t('redesign.grepTagPage.hero.appStoreCta')} className="h-10 w-auto" />
              </a>
              <a
                href={grepTagMsStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <img src="/image/Microsoft_Store_badge.svg" alt={t('redesign.grepTagPage.hero.msStoreCta')} className="h-10 w-auto" />
              </a>
            </div>
            <span className="text-xs font-medium text-indigo-300">{t('redesign.grepTagPage.hero.macInReview')}</span>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-medium text-indigo-300">
            {[t('redesign.grepTagPage.hero.trust1'), t('redesign.grepTagPage.hero.trust2'), t('redesign.grepTagPage.hero.trust3')].map((s) => (
              <span key={s} className="flex items-center gap-1.5">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg>
                {s}
              </span>
            ))}
          </div>
          <p className="mt-4 text-xs text-indigo-200/70">{t('redesign.grepTagPage.languages')}</p>
        </div>
      </section>

      {/* Feature: Grep */}
      <FeatureSection
        eyebrow={t('redesign.grepTagPage.grep.eyebrow')}
        title={t('redesign.grepTagPage.grep.title')}
        desc={t('redesign.grepTagPage.grep.desc')}
        bullets={[t('redesign.grepTagPage.grep.bullet1'), t('redesign.grepTagPage.grep.bullet2'), t('redesign.grepTagPage.grep.bullet3')]}
        badge={t('redesign.grepTagPage.grep.badge')}
        accent="indigo"
        screenshot="/image/grepreader/grep-profiles.png"
      />

      {/* Feature: Tags */}
      <FeatureSection
        eyebrow={t('redesign.grepTagPage.tags.eyebrow')}
        title={t('redesign.grepTagPage.tags.title')}
        desc={t('redesign.grepTagPage.tags.desc')}
        bullets={[t('redesign.grepTagPage.tags.bullet1'), t('redesign.grepTagPage.tags.bullet2'), t('redesign.grepTagPage.tags.bullet3')]}
        accent="violet"
        reverse
        screenshot="/image/grepreader/tags-results.png"
      />

      {/* Feature: Wi-Fi Sync */}
      <FeatureSection
        eyebrow={t('redesign.grepTagPage.sync.eyebrow')}
        title={t('redesign.grepTagPage.sync.title')}
        desc={t('redesign.grepTagPage.sync.desc')}
        bullets={[t('redesign.grepTagPage.sync.bullet1'), t('redesign.grepTagPage.sync.bullet2'), t('redesign.grepTagPage.sync.bullet3')]}
        accent="indigo"
        screenshot="/image/grepreader/wifi-sync.png"
      />

      {/* Feature: Covers & Reader */}
      <FeatureSection
        eyebrow={t('redesign.grepTagPage.covers.eyebrow')}
        title={t('redesign.grepTagPage.covers.title')}
        desc={t('redesign.grepTagPage.covers.desc')}
        bullets={[t('redesign.grepTagPage.covers.bullet1'), t('redesign.grepTagPage.covers.bullet2'), t('redesign.grepTagPage.covers.bullet3')]}
        accent="violet"
        reverse
        screenshot="/image/grepreader/library.png"
      />

      {/* Pricing */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <div className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">{t('redesign.grepTagPage.pricing.eyebrow')}</div>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black tracking-tight text-slate-950">
              {t('redesign.grepTagPage.pricing.title')}
            </h2>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
            {/* Header */}
            <div className="grid grid-cols-3 bg-slate-50">
              <div className="px-5 py-4 text-xs font-bold uppercase tracking-wider text-slate-400" />
              <div className="border-l border-slate-200 px-5 py-4 text-center">
                <div className="text-sm font-black text-slate-950">{t('redesign.grepTagPage.pricing.freeTitle')}</div>
              </div>
              <div className="border-l border-indigo-200 bg-indigo-50 px-5 py-4 text-center">
                <div className="text-sm font-black text-indigo-900">{t('redesign.grepTagPage.pricing.proTitle')}</div>
              </div>
            </div>
            {/* Rows */}
            {pricingRows.map((row, i) => (
              <div key={row.label} className={`grid grid-cols-3 border-t border-slate-100 ${i % 2 === 1 ? 'bg-slate-50/50' : 'bg-white'}`}>
                <div className="px-5 py-3.5 text-sm text-slate-700">{row.label}</div>
                <div className="flex items-center justify-center border-l border-slate-100 px-5 py-3.5">
                  {renderCell(row.free)}
                </div>
                <div className="flex items-center justify-center border-l border-indigo-100 bg-indigo-50/40 px-5 py-3.5">
                  {renderCell(row.pro)}
                </div>
              </div>
            ))}
            {/* Approval notice */}
            <div className="col-span-3 border-t border-slate-200 bg-slate-50 px-5 py-4 text-center text-xs text-slate-500">
              {t('redesign.grepTagPage.pricing.approvalNote')}
            </div>
          </div>
        </div>
      </section>

      {/* Why a separate app */}
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
              <div className="border-l border-slate-700 px-5 py-4 text-center text-sm font-bold">
                {t('redesign.grepTagPage.whySeparate.col1')}
              </div>
              <div className="border-l border-indigo-500/40 bg-indigo-900/40 px-5 py-4 text-center text-sm font-bold text-indigo-200">
                {t('redesign.grepTagPage.whySeparate.col2')}
              </div>
            </div>
            {whyRows.map((row, i) => (
              <div key={row.label} className={`grid grid-cols-3 border-t border-slate-100 ${i % 2 === 1 ? 'bg-slate-50' : 'bg-white'}`}>
                <div className="px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-400">{row.label}</div>
                <div className="border-l border-slate-100 px-5 py-3.5 text-sm text-slate-700">{row.col1}</div>
                <div className="border-l border-indigo-100 bg-indigo-50/50 px-5 py-3.5 text-sm font-medium text-indigo-900">{row.col2}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <div className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">FAQ</div>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black tracking-tight text-slate-950">
              {t('redesign.grepTagPage.faqTitle', 'Frequently Asked Questions')}
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
                <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* App links */}
      <div className="flex justify-center gap-5 py-6 text-xs text-slate-400">
        <Link to={`/${lang}/grepreader/changelog`} className="hover:text-slate-700">Changelog</Link>
        <Link to={`/${lang}/grepreader/privacy`} className="hover:text-slate-700">Privacy Policy</Link>
      </div>

      {/* Back to main app */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-4 text-sm text-slate-500">
            Also reading comics and manga?
          </p>
          <Link
            to={`/${lang}/`}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-[#f7f9fe] px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:shadow-md"
          >
            ← Back to BiblioFuse Reader
          </Link>
        </div>
      </section>

      <StickyDownloadBar
        logo="/image/grepreader-logo.png"
        appName="GrepTag Reader"
        appStoreUrl={grepTagAppStoreUrl}
        msStoreUrl={grepTagMsStoreUrl}
      />
    </>
  );
};

export default GrepTagReader;
