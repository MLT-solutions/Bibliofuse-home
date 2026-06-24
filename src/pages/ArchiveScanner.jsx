import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

const macAppStoreUrl = 'https://apps.apple.com/eg/app/archive-duplicate-scanner/id6762779449';
const msStoreUrl = 'https://apps.microsoft.com/detail/9n2jb4k5wvcq';

function CheckIncluded() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

function Dash() {
  return <span className="text-slate-300 text-lg font-light">—</span>;
}

function FeatureSection({ eyebrow, title, desc, bullets, badge, accent = 'amber', reverse = false, screenshot, screenshotAlt }) {
  const accentText = accent === 'amber' ? 'text-amber-600' : 'text-orange-600';
  const accentBg = accent === 'amber' ? 'bg-amber-50' : 'bg-orange-50';
  const accentIcon = accent === 'amber' ? '#d97706' : '#ea580c';

  return (
    <div className={`py-16 sm:py-20 ${reverse ? 'bg-[#fffbf0]' : 'bg-white'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16 ${reverse ? 'lg:flex-row-reverse' : ''}`}>
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
          {screenshot && (
            <div className="flex flex-1 items-center justify-center lg:max-w-sm">
              <img src={screenshot} alt={screenshotAlt || title} className="w-full max-w-[340px] rounded-2xl shadow-2xl" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const ArchiveScanner = () => {
  const { t } = useTranslation();
  const { lang } = useParams();

  const pricingRows = [
    { label: t('redesign.archivePage.pricing.feat1'), free: t('redesign.archivePage.pricing.feat1free'), pro: t('redesign.archivePage.pricing.feat1pro') },
    { label: t('redesign.archivePage.pricing.feat2'), free: t('redesign.archivePage.pricing.feat2free'), pro: t('redesign.archivePage.pricing.feat2pro') },
    { label: t('redesign.archivePage.pricing.feat3'), free: t('redesign.archivePage.pricing.feat3free'), pro: t('redesign.archivePage.pricing.feat3pro') },
    { label: t('redesign.archivePage.pricing.feat4'), free: true, pro: true },
    { label: t('redesign.archivePage.pricing.feat5'), free: false, pro: true },
    { label: t('redesign.archivePage.pricing.feat6'), free: false, pro: true },
    { label: t('redesign.archivePage.pricing.feat7'), free: true, pro: true },
    { label: t('redesign.archivePage.pricing.feat8'), free: true, pro: true },
  ];

  function renderCell(val) {
    if (val === true) return <CheckIncluded />;
    if (val === false) return <Dash />;
    return <span className="text-sm font-semibold text-slate-800">{val}</span>;
  }

  const breadcrumbs = [
    { name: 'Home', url: 'https://bibliofuse.com/en/' },
    { name: 'Archive Duplicate Scanner', url: `https://bibliofuse.com/${lang || 'en'}/archive/` },
  ];

  return (
    <>
      <SEO
        title={t('redesign.archivePage.seo.title')}
        description={t('redesign.archivePage.seo.desc')}
        canonical="/archive"
        schemaType="suite"
        schemaName="Archive Duplicate Scanner"
        faqItems={t('redesign.archivePage.faq', { returnObjects: true })}
        breadcrumbs={breadcrumbs}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#431407] via-[#7c2d12] to-[#1c0a02] pt-28 pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(251,146,60,0.25),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(234,88,12,0.15),transparent_50%)]" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-3 py-1.5 text-xs font-semibold text-amber-200">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-amber-400" />
              <span className="relative h-2 w-2 rounded-full bg-amber-400" />
            </span>
            {t('redesign.archivePage.hero.badge')}
          </div>

          <div className="mb-6 flex justify-center">
            <img src="/image/archive-logo.png" alt="Archive Duplicate Scanner" className="h-20 w-20 rounded-2xl shadow-2xl" />
          </div>

          <h1 className="mb-5 text-[clamp(2.4rem,5vw,4rem)] font-black leading-tight tracking-tight text-white">
            {t('redesign.archivePage.hero.title')}
          </h1>
          <p className="mx-auto mb-8 max-w-xl text-lg leading-relaxed text-amber-200">
            {t('redesign.archivePage.hero.desc')}
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <a href={macAppStoreUrl} target="_blank" rel="noopener noreferrer" className="inline-flex">
              <img src="/image/Download_on_the_App_Store_Badge.svg.png" alt={t('redesign.archivePage.hero.macStore')} className="h-10 w-auto" />
            </a>
            <a href={msStoreUrl} target="_blank" rel="noopener noreferrer" className="inline-flex">
              <img src="/image/Microsoft_Store_badge.svg" alt={t('redesign.archivePage.hero.winStore')} className="h-10 w-auto" />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-medium text-amber-300">
            {[t('redesign.archivePage.hero.trust1'), t('redesign.archivePage.hero.trust2'), t('redesign.archivePage.hero.trust3')].map((s) => (
              <span key={s} className="flex items-center gap-1.5">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg>
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Feature: Archive Scanning */}
      <FeatureSection
        eyebrow={t('redesign.archivePage.scanning.eyebrow')}
        title={t('redesign.archivePage.scanning.title')}
        desc={t('redesign.archivePage.scanning.desc')}
        bullets={[t('redesign.archivePage.scanning.bullet1'), t('redesign.archivePage.scanning.bullet2'), t('redesign.archivePage.scanning.bullet3')]}
        badge={t('redesign.archivePage.scanning.badge')}
        accent="amber"
        screenshot="/image/archivescan/mac-1.png"
        screenshotAlt="Archive Duplicate Scanner — scan setup"
      />

      {/* Feature: Photos & Filenames */}
      <FeatureSection
        eyebrow={t('redesign.archivePage.photos.eyebrow')}
        title={t('redesign.archivePage.photos.title')}
        desc={t('redesign.archivePage.photos.desc')}
        bullets={[t('redesign.archivePage.photos.bullet1'), t('redesign.archivePage.photos.bullet2'), t('redesign.archivePage.photos.bullet3')]}
        accent="orange"
        reverse
        screenshot="/image/archivescan/mac-2.png"
        screenshotAlt="Archive Duplicate Scanner — photo and filename scan"
      />

      {/* Feature: Smart Auto-Select */}
      <FeatureSection
        eyebrow={t('redesign.archivePage.autoselect.eyebrow')}
        title={t('redesign.archivePage.autoselect.title')}
        desc={t('redesign.archivePage.autoselect.desc')}
        bullets={[t('redesign.archivePage.autoselect.bullet1'), t('redesign.archivePage.autoselect.bullet2'), t('redesign.archivePage.autoselect.bullet3')]}
        badge={t('redesign.archivePage.autoselect.badge')}
        accent="amber"
        screenshot="/image/archivescan/mac-3.png"
        screenshotAlt="Archive Duplicate Scanner — auto-select results"
      />

      {/* Feature: Export Reports */}
      <FeatureSection
        eyebrow={t('redesign.archivePage.export.eyebrow')}
        title={t('redesign.archivePage.export.title')}
        desc={t('redesign.archivePage.export.desc')}
        bullets={[t('redesign.archivePage.export.bullet1'), t('redesign.archivePage.export.bullet2'), t('redesign.archivePage.export.bullet3')]}
        accent="orange"
        reverse
        screenshot="/image/archivescan/mac-4.png"
        screenshotAlt="Archive Duplicate Scanner — export reports"
      />

      {/* Pricing */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <div className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-amber-600">{t('redesign.archivePage.pricing.eyebrow')}</div>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black tracking-tight text-slate-950">
              {t('redesign.archivePage.pricing.title')}
            </h2>
            <p className="mt-2 text-sm text-slate-500">{t('redesign.archivePage.pricing.trial')}</p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
            <div className="grid grid-cols-3 bg-slate-50">
              <div className="px-5 py-4 text-xs font-bold uppercase tracking-wider text-slate-400" />
              <div className="border-l border-slate-200 px-5 py-4 text-center">
                <div className="text-sm font-black text-slate-950">{t('redesign.archivePage.pricing.freeTitle')}</div>
              </div>
              <div className="border-l border-amber-200 bg-amber-50 px-5 py-4 text-center">
                <div className="text-sm font-black text-amber-900">{t('redesign.archivePage.pricing.proTitle')}</div>
              </div>
            </div>
            {pricingRows.map((row, i) => (
              <div key={row.label} className={`grid grid-cols-3 border-t border-slate-100 ${i % 2 === 1 ? 'bg-slate-50/50' : 'bg-white'}`}>
                <div className="px-5 py-3.5 text-sm text-slate-700">{row.label}</div>
                <div className="flex items-center justify-center border-l border-slate-100 px-5 py-3.5">
                  {renderCell(row.free)}
                </div>
                <div className="flex items-center justify-center border-l border-amber-100 bg-amber-50/40 px-5 py-3.5">
                  {renderCell(row.pro)}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={macAppStoreUrl} target="_blank" rel="noopener noreferrer" className="inline-flex">
              <img src="/image/Download_on_the_App_Store_Badge.svg.png" alt="Mac App Store" className="h-10 w-auto" />
            </a>
            <a href={msStoreUrl} target="_blank" rel="noopener noreferrer" className="inline-flex">
              <img src="/image/Microsoft_Store_badge.svg" alt="Microsoft Store" className="h-10 w-auto" />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#fffbf0] py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <div className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-amber-600">FAQ</div>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black tracking-tight text-slate-950">
              {t('redesign.archivePage.faqTitle')}
            </h2>
          </div>
          <div className="space-y-4">
            {(t('redesign.archivePage.faq', { returnObjects: true }) || []).map((item) => (
              <details key={item.q} className="group rounded-2xl border border-slate-200 bg-white shadow-sm">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 px-5 py-4 text-sm font-semibold text-slate-900">
                  {item.q}
                  <svg className="flex-shrink-0 transition-transform group-open:rotate-180" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
                </summary>
                <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* App links */}
      <div className="flex justify-center gap-5 py-6 text-xs text-slate-400">
        <Link to={`/${lang}/archive/changelog`} className="hover:text-slate-700">Changelog</Link>
        <Link to={`/${lang}/archive/privacy`} className="hover:text-slate-700">Privacy Policy</Link>
      </div>

      {/* Back to BiblioFuse */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-4 text-sm text-slate-500">{t('redesign.archivePage.backDesc')}</p>
          <Link
            to={`/${lang}/`}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-[#f7f9fe] px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:shadow-md"
          >
            ← {t('redesign.archivePage.backCta')}
          </Link>
        </div>
      </section>
    </>
  );
};

export default ArchiveScanner;
