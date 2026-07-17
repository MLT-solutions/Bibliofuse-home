import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import StickyDownloadBar from '../components/StickyDownloadBar';
import DevicePills from '../components/DevicePills';

const appStoreUrl = 'https://apps.apple.com/ca/app/smartdecrypt-pdf-zip/id6763979229';
const msStoreUrl = 'https://apps.microsoft.com/detail/9p9bfkr5zdz8';

function CheckIncluded() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

function Dash() {
  return <span className="text-slate-300 text-lg font-light">—</span>;
}

function FeatureSection({ eyebrow, title, desc, bullets, badge, accent = 'violet', reverse = false, screenshot, screenshotAlt }) {
  const accentText = accent === 'violet' ? 'text-violet-600' : 'text-indigo-600';
  const accentBg = accent === 'violet' ? 'bg-violet-50' : 'bg-indigo-50';
  const accentIcon = accent === 'violet' ? '#7c3aed' : '#4f46e5';

  return (
    <div className={`py-16 sm:py-20 ${reverse ? 'bg-[#f8f7ff]' : 'bg-white'}`}>
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
            <div className="flex flex-1 items-center justify-center lg:max-w-xs">
              <img src={screenshot} alt={screenshotAlt || title} className="w-full max-w-[260px] drop-shadow-xl" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const SmartDecrypt = () => {
  const { t } = useTranslation();
  const { lang } = useParams();

  const pricingRows = [
    { label: t('redesign.smartdecryptPage.pricing.feat1'), free: t('redesign.smartdecryptPage.pricing.feat1free'), pro: t('redesign.smartdecryptPage.pricing.feat1pro') },
    { label: t('redesign.smartdecryptPage.pricing.feat2'), free: t('redesign.smartdecryptPage.pricing.feat2free'), pro: t('redesign.smartdecryptPage.pricing.feat2pro') },
    { label: t('redesign.smartdecryptPage.pricing.feat3'), free: false, pro: true },
    { label: t('redesign.smartdecryptPage.pricing.feat4'), free: true, pro: true },
    { label: t('redesign.smartdecryptPage.pricing.feat5'), free: true, pro: true },
    { label: t('redesign.smartdecryptPage.pricing.feat6'), free: true, pro: true },
  ];

  function renderCell(val) {
    if (val === true) return <CheckIncluded />;
    if (val === false) return <Dash />;
    return <span className="text-sm font-semibold text-slate-800">{val}</span>;
  }

  const breadcrumbs = [
    { name: 'Home', url: 'https://bibliofuse.com/en/' },
    { name: 'SmartDecrypt PDF ZIP', url: `https://bibliofuse.com/${lang || 'en'}/smartdecrypt/` },
  ];

  return (
    <>
      <SEO
        title={t('redesign.smartdecryptPage.seo.title')}
        description={t('redesign.smartdecryptPage.seo.desc')}
        canonical="/smartdecrypt"
        schemaType="suite"
        schemaName="SmartDecrypt PDF ZIP"
        operatingSystem="iOS, iPadOS, macOS, Windows"
        storeLinks={[appStoreUrl, msStoreUrl]}
        featureList={[
          t('redesign.smartdecryptPage.patterns.title'),
          t('redesign.smartdecryptPage.formats.title'),
          t('redesign.smartdecryptPage.mobile.title'),
        ]}
        faqItems={t('redesign.smartdecryptPage.faq', { returnObjects: true })}
        breadcrumbs={breadcrumbs}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#130d1f] via-[#1e0b3a] to-[#0e1527] pt-28 pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(139,92,246,0.3),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(99,102,241,0.2),transparent_50%)]" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1.5 text-xs font-semibold text-violet-200">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-violet-400" />
              <span className="relative h-2 w-2 rounded-full bg-violet-400" />
            </span>
            {t('redesign.smartdecryptPage.hero.badge')}
          </div>

          <div className="mb-6 flex justify-center">
            <img src="/image/smartdecrypt-logo.png" alt="SmartDecrypt PDF ZIP" className="h-20 w-20 rounded-2xl shadow-2xl" />
          </div>

          <h1 className="mb-5 text-[clamp(2.4rem,5vw,4rem)] font-black leading-tight tracking-tight text-white">
            {t('redesign.smartdecryptPage.hero.title')}
          </h1>
          <p className="mx-auto mb-6 max-w-xl text-lg leading-relaxed text-violet-200">
            {t('redesign.smartdecryptPage.hero.desc')}
          </p>

          <DevicePills devices={['iphone', 'ipad', 'mac', 'windows']} tone="dark" className="mb-8" />

          <div className="flex flex-wrap justify-center gap-3">
            <a href={appStoreUrl} target="_blank" rel="noopener noreferrer" className="inline-flex">
              <img src="/image/Download_on_the_App_Store_Badge.svg.png" alt={t('redesign.smartdecryptPage.hero.appStore')} className="h-10 w-auto" />
            </a>
            <a href={msStoreUrl} target="_blank" rel="noopener noreferrer" className="inline-flex">
              <img src="/image/Microsoft_Store_badge.svg" alt={t('redesign.smartdecryptPage.hero.winStore')} className="h-10 w-auto" />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-medium text-violet-300">
            {[t('redesign.smartdecryptPage.hero.trust1'), t('redesign.smartdecryptPage.hero.trust2'), t('redesign.smartdecryptPage.hero.trust3'), t('redesign.smartdecryptPage.hero.trust4')].map((s) => (
              <span key={s} className="flex items-center gap-1.5">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg>
                {s}
              </span>
            ))}
          </div>
          <p className="mt-4 text-xs text-violet-200/70">{t('redesign.smartdecryptPage.languages')}</p>
        </div>
      </section>

      {/* Feature: Pattern-Based Auto-Unlock */}
      <FeatureSection
        eyebrow={t('redesign.smartdecryptPage.patterns.eyebrow')}
        title={t('redesign.smartdecryptPage.patterns.title')}
        desc={t('redesign.smartdecryptPage.patterns.desc')}
        bullets={[t('redesign.smartdecryptPage.patterns.bullet1'), t('redesign.smartdecryptPage.patterns.bullet2'), t('redesign.smartdecryptPage.patterns.bullet3')]}
        badge={t('redesign.smartdecryptPage.patterns.badge')}
        accent="violet"
        screenshot="/image/smartdecrypt/1.png"
        screenshotAlt="SmartDecrypt — saved password patterns"
      />

      {/* Feature: Formats */}
      <FeatureSection
        eyebrow={t('redesign.smartdecryptPage.formats.eyebrow')}
        title={t('redesign.smartdecryptPage.formats.title')}
        desc={t('redesign.smartdecryptPage.formats.desc')}
        bullets={[t('redesign.smartdecryptPage.formats.bullet1'), t('redesign.smartdecryptPage.formats.bullet2'), t('redesign.smartdecryptPage.formats.bullet3')]}
        accent="indigo"
        reverse
        screenshot="/image/smartdecrypt/2.png"
        screenshotAlt="SmartDecrypt — PDF ZIP 7z unlock"
      />

      {/* Feature: Mobile & Keychain */}
      <FeatureSection
        eyebrow={t('redesign.smartdecryptPage.mobile.eyebrow')}
        title={t('redesign.smartdecryptPage.mobile.title')}
        desc={t('redesign.smartdecryptPage.mobile.desc')}
        bullets={[t('redesign.smartdecryptPage.mobile.bullet1'), t('redesign.smartdecryptPage.mobile.bullet2'), t('redesign.smartdecryptPage.mobile.bullet3')]}
        accent="violet"
        screenshot="/image/smartdecrypt/3.png"
        screenshotAlt="SmartDecrypt — iOS Share Sheet and Keychain"
      />

      {/* Pricing */}
      <section className="bg-[#f8f7ff] py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <div className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-violet-600">{t('redesign.smartdecryptPage.pricing.eyebrow')}</div>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black tracking-tight text-slate-950">
              {t('redesign.smartdecryptPage.pricing.title')}
            </h2>
            <p className="mt-2 text-sm text-slate-500">{t('redesign.smartdecryptPage.pricing.universalNote')}</p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
            <div className="grid grid-cols-3 bg-slate-50">
              <div className="px-5 py-4 text-xs font-bold uppercase tracking-wider text-slate-400" />
              <div className="border-l border-slate-200 px-5 py-4 text-center">
                <div className="text-sm font-black text-slate-950">{t('redesign.smartdecryptPage.pricing.freeTitle')}</div>
              </div>
              <div className="border-l border-violet-200 bg-violet-50 px-5 py-4 text-center">
                <div className="text-sm font-black text-violet-900">{t('redesign.smartdecryptPage.pricing.proTitle')}</div>
              </div>
            </div>
            {pricingRows.map((row, i) => (
              <div key={row.label} className={`grid grid-cols-3 border-t border-slate-100 ${i % 2 === 1 ? 'bg-slate-50/50' : 'bg-white'}`}>
                <div className="px-5 py-3.5 text-sm text-slate-700">{row.label}</div>
                <div className="flex items-center justify-center border-l border-slate-100 px-5 py-3.5">
                  {renderCell(row.free)}
                </div>
                <div className="flex items-center justify-center border-l border-violet-100 bg-violet-50/40 px-5 py-3.5">
                  {renderCell(row.pro)}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={appStoreUrl} target="_blank" rel="noopener noreferrer" className="inline-flex">
              <img src="/image/Download_on_the_App_Store_Badge.svg.png" alt="App Store" className="h-10 w-auto" />
            </a>
            <a href={msStoreUrl} target="_blank" rel="noopener noreferrer" className="inline-flex">
              <img src="/image/Microsoft_Store_badge.svg" alt="Microsoft Store" className="h-10 w-auto" />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <div className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-violet-600">FAQ</div>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black tracking-tight text-slate-950">
              {t('redesign.smartdecryptPage.faqTitle')}
            </h2>
          </div>
          <div className="space-y-4">
            {(t('redesign.smartdecryptPage.faq', { returnObjects: true }) || []).map((item) => (
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
        <Link to={`/${lang}/smartdecrypt/changelog/`} className="hover:text-slate-700">Changelog</Link>
        <Link to={`/${lang}/smartdecrypt/privacy/`} className="hover:text-slate-700">Privacy Policy</Link>
      </div>

      {/* Back to BiblioFuse */}
      <section className="bg-[#f8f7ff] py-14">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-4 text-sm text-slate-500">{t('redesign.smartdecryptPage.backDesc')}</p>
          <Link
            to={`/${lang}/`}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:shadow-md"
          >
            ← {t('redesign.smartdecryptPage.backCta')}
          </Link>
        </div>
      </section>

      <StickyDownloadBar
        logo="/image/smartdecrypt-logo.png"
        appName="SmartDecrypt PDF ZIP"
        appStoreUrl={appStoreUrl}
        msStoreUrl={msStoreUrl}
      />
    </>
  );
};

export default SmartDecrypt;
