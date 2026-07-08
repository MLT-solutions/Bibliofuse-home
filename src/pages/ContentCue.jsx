import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import StickyDownloadBar from '../components/StickyDownloadBar';

const appStoreUrl = 'https://apps.apple.com/us/app/contentcue-reading-browser/id6770080864';

function CheckIncluded() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

function Dash() {
  return <span className="text-slate-300 text-lg font-light">—</span>;
}

function FeatureSection({ eyebrow, title, desc, bullets, badge, accent = 'green', reverse = false }) {
  const accentText = accent === 'green' ? 'text-green-600' : 'text-emerald-600';
  const accentBg = accent === 'green' ? 'bg-green-50' : 'bg-emerald-50';
  const accentIcon = accent === 'green' ? '#16a34a' : '#059669';

  return (
    <div className={`py-16 sm:py-20 ${reverse ? 'bg-[#f0fdf4]' : 'bg-white'}`}>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
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
    </div>
  );
}

const ContentCue = () => {
  const { t } = useTranslation();
  const { lang } = useParams();

  const pricingRows = [
    { label: t('redesign.contentcuePage.pricing.feat1'), free: true, pro: true },
    { label: t('redesign.contentcuePage.pricing.feat2'), free: true, pro: true },
    { label: t('redesign.contentcuePage.pricing.feat3'), free: true, pro: true },
    { label: t('redesign.contentcuePage.pricing.feat4'), free: t('redesign.contentcuePage.pricing.feat4free'), pro: t('redesign.contentcuePage.pricing.feat4pro') },
    { label: t('redesign.contentcuePage.pricing.feat5'), free: false, pro: true },
    { label: t('redesign.contentcuePage.pricing.feat6'), free: false, pro: true },
    { label: t('redesign.contentcuePage.pricing.feat7'), free: false, pro: true },
    { label: t('redesign.contentcuePage.pricing.feat8'), free: false, pro: true },
  ];

  function renderCell(val) {
    if (val === true) return <CheckIncluded />;
    if (val === false) return <Dash />;
    return <span className="text-sm font-semibold text-slate-800">{val}</span>;
  }

  const breadcrumbs = [
    { name: 'Home', url: 'https://bibliofuse.com/en/' },
    { name: 'ContentCue Reading Browser', url: `https://bibliofuse.com/${lang || 'en'}/contentcue/` },
  ];

  return (
    <>
      <SEO
        title={t('redesign.contentcuePage.seo.title')}
        description={t('redesign.contentcuePage.seo.desc')}
        canonical="/contentcue"
        schemaType="suite"
        schemaName="ContentCue Reading Browser"
        operatingSystem="iOS, iPadOS"
        softwareVersion="1.0.2"
        faqItems={t('redesign.contentcuePage.faq', { returnObjects: true })}
        breadcrumbs={breadcrumbs}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#052e16] via-[#14532d] to-[#022c22] pt-28 pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,197,94,0.2),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(16,185,129,0.15),transparent_50%)]" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-400/30 bg-green-500/10 px-3 py-1.5 text-xs font-semibold text-green-200">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-green-400" />
              <span className="relative h-2 w-2 rounded-full bg-green-400" />
            </span>
            {t('redesign.contentcuePage.hero.badge')}
          </div>

          <div className="mb-6 flex justify-center">
            <img src="/image/contentcue-logo.png" alt="ContentCue Reading Browser" className="h-20 w-20 rounded-2xl shadow-2xl" />
          </div>

          <h1 className="mb-5 text-[clamp(2.4rem,5vw,4rem)] font-black leading-tight tracking-tight text-white">
            {t('redesign.contentcuePage.hero.title')}
          </h1>
          <p className="mx-auto mb-8 max-w-xl text-lg leading-relaxed text-green-200">
            {t('redesign.contentcuePage.hero.desc')}
          </p>

          <a href={appStoreUrl} target="_blank" rel="noopener noreferrer" className="inline-flex justify-center">
            <img src="/image/Download_on_the_App_Store_Badge.svg.png" alt={t('redesign.contentcuePage.hero.appStore')} className="h-10 w-auto" />
          </a>

          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-medium text-green-300">
            {[t('redesign.contentcuePage.hero.trust1'), t('redesign.contentcuePage.hero.trust2'), t('redesign.contentcuePage.hero.trust3'), t('redesign.contentcuePage.hero.trust4')].map((s) => (
              <span key={s} className="flex items-center gap-1.5">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg>
                {s}
              </span>
            ))}
          </div>
          <p className="mt-4 text-xs text-green-200/70">{t('redesign.contentcuePage.languages')}</p>
        </div>
      </section>

      {/* How it works — 3-step */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <div className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-green-600">{t('redesign.contentcuePage.how.eyebrow')}</div>
            <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] font-black tracking-tight text-slate-950">{t('redesign.contentcuePage.how.title')}</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { n: '1', title: t('redesign.contentcuePage.how.step1title'), desc: t('redesign.contentcuePage.how.step1desc'), color: 'bg-green-400' },
              { n: '2', title: t('redesign.contentcuePage.how.step2title'), desc: t('redesign.contentcuePage.how.step2desc'), color: 'bg-emerald-400' },
              { n: '3', title: t('redesign.contentcuePage.how.step3title'), desc: t('redesign.contentcuePage.how.step3desc'), color: 'bg-teal-400' },
            ].map((step) => (
              <div key={step.n} className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className={`mb-4 inline-grid h-9 w-9 place-items-center rounded-xl text-base font-black text-white ${step.color}`}>
                  {step.n}
                </div>
                <h3 className="mb-2 text-base font-bold text-slate-950">{step.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature: RSS Reader */}
      <FeatureSection
        eyebrow={t('redesign.contentcuePage.rss.eyebrow')}
        title={t('redesign.contentcuePage.rss.title')}
        desc={t('redesign.contentcuePage.rss.desc')}
        bullets={[t('redesign.contentcuePage.rss.bullet1'), t('redesign.contentcuePage.rss.bullet2'), t('redesign.contentcuePage.rss.bullet3')]}
        accent="green"
        reverse
      />

      {/* Feature: Podcast Player */}
      <FeatureSection
        eyebrow={t('redesign.contentcuePage.podcast.eyebrow')}
        title={t('redesign.contentcuePage.podcast.title')}
        desc={t('redesign.contentcuePage.podcast.desc')}
        bullets={[t('redesign.contentcuePage.podcast.bullet1'), t('redesign.contentcuePage.podcast.bullet2'), t('redesign.contentcuePage.podcast.bullet3')]}
        accent="emerald"
      />

      {/* Feature: Website TTS */}
      <FeatureSection
        eyebrow={t('redesign.contentcuePage.tts.eyebrow')}
        title={t('redesign.contentcuePage.tts.title')}
        desc={t('redesign.contentcuePage.tts.desc')}
        bullets={[t('redesign.contentcuePage.tts.bullet1'), t('redesign.contentcuePage.tts.bullet2'), t('redesign.contentcuePage.tts.bullet3')]}
        accent="green"
        reverse
      />

      {/* Feature: iCloud Sync + Siri Shortcuts */}
      <FeatureSection
        eyebrow={t('redesign.contentcuePage.icloudSiri.eyebrow')}
        title={t('redesign.contentcuePage.icloudSiri.title')}
        desc={t('redesign.contentcuePage.icloudSiri.desc')}
        bullets={[t('redesign.contentcuePage.icloudSiri.bullet1'), t('redesign.contentcuePage.icloudSiri.bullet2'), t('redesign.contentcuePage.icloudSiri.bullet3')]}
        accent="emerald"
      />

      {/* Feature: Position Restore */}
      <FeatureSection
        eyebrow={t('redesign.contentcuePage.restore.eyebrow')}
        title={t('redesign.contentcuePage.restore.title')}
        desc={t('redesign.contentcuePage.restore.desc')}
        bullets={[t('redesign.contentcuePage.restore.bullet1'), t('redesign.contentcuePage.restore.bullet2'), t('redesign.contentcuePage.restore.bullet3')]}
        accent="green"
        reverse
      />

      {/* Feature: Visual Ad Distinction */}
      <FeatureSection
        eyebrow={t('redesign.contentcuePage.visual.eyebrow')}
        title={t('redesign.contentcuePage.visual.title')}
        desc={t('redesign.contentcuePage.visual.desc')}
        bullets={[t('redesign.contentcuePage.visual.bullet1'), t('redesign.contentcuePage.visual.bullet2'), t('redesign.contentcuePage.visual.bullet3')]}
        badge={t('redesign.contentcuePage.visual.badge')}
        accent="emerald"
      />

      {/* Feature: Extras */}
      <FeatureSection
        eyebrow={t('redesign.contentcuePage.extras.eyebrow')}
        title={t('redesign.contentcuePage.extras.title')}
        desc={t('redesign.contentcuePage.extras.desc')}
        bullets={[t('redesign.contentcuePage.extras.bullet1'), t('redesign.contentcuePage.extras.bullet2'), t('redesign.contentcuePage.extras.bullet3')]}
        accent="green"
        reverse
      />

      {/* Pricing */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <div className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-green-600">{t('redesign.contentcuePage.pricing.eyebrow')}</div>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black tracking-tight text-slate-950">
              {t('redesign.contentcuePage.pricing.title')}
            </h2>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
            <div className="grid grid-cols-3 bg-slate-50">
              <div className="px-5 py-4 text-xs font-bold uppercase tracking-wider text-slate-400" />
              <div className="border-l border-slate-200 px-5 py-4 text-center">
                <div className="text-sm font-black text-slate-950">{t('redesign.contentcuePage.pricing.freeTitle')}</div>
              </div>
              <div className="border-l border-green-200 bg-green-50 px-5 py-4 text-center">
                <div className="text-sm font-black text-green-900">{t('redesign.contentcuePage.pricing.proTitle')}</div>
              </div>
            </div>
            {pricingRows.map((row, i) => (
              <div key={row.label} className={`grid grid-cols-3 border-t border-slate-100 ${i % 2 === 1 ? 'bg-slate-50/50' : 'bg-white'}`}>
                <div className="px-5 py-3.5 text-sm text-slate-700">{row.label}</div>
                <div className="flex items-center justify-center border-l border-slate-100 px-5 py-3.5">
                  {renderCell(row.free)}
                </div>
                <div className="flex items-center justify-center border-l border-green-100 bg-green-50/40 px-5 py-3.5">
                  {renderCell(row.pro)}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-center text-xs leading-relaxed text-slate-500">{t('redesign.contentcuePage.pricing.note')}</p>

          <div className="mt-8 flex justify-center">
            <a href={appStoreUrl} target="_blank" rel="noopener noreferrer" className="inline-flex">
              <img src="/image/Download_on_the_App_Store_Badge.svg.png" alt="App Store" className="h-10 w-auto" />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f0fdf4] py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <div className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-green-600">FAQ</div>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black tracking-tight text-slate-950">
              {t('redesign.contentcuePage.faqTitle')}
            </h2>
          </div>
          <div className="space-y-4">
            {(t('redesign.contentcuePage.faq', { returnObjects: true }) || []).map((item) => (
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
        <Link to={`/${lang}/contentcue/changelog/`} className="hover:text-slate-700">Changelog</Link>
        <Link to={`/${lang}/contentcue/privacy/`} className="hover:text-slate-700">Privacy Policy</Link>
      </div>

      {/* Back to BiblioFuse */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-4 text-sm text-slate-500">{t('redesign.contentcuePage.backDesc')}</p>
          <Link
            to={`/${lang}/`}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-[#f7f9fe] px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:shadow-md"
          >
            ← {t('redesign.contentcuePage.backCta')}
          </Link>
        </div>
      </section>

      <StickyDownloadBar
        logo="/image/contentcue-logo.png"
        appName="ContentCue"
        appStoreUrl={appStoreUrl}
      />
    </>
  );
};

export default ContentCue;
