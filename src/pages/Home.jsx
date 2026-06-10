import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../assets/logo.png';
import SEO from '../components/SEO';
import { articles } from '../data/articles';

const appStoreUrl = 'https://apps.apple.com/kw/app/bibliofuse-reader-compress/id6758330093';
const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.MLOGICTECH.bibliofusereader&hl=en-US&ah=423jBOeRoug68zOF2xwCeFuKVQQ';
const archiveMacUrl = 'https://apps.apple.com/eg/app/archive-duplicate-scanner/id6762779449';
const archiveMsUrl = 'https://apps.microsoft.com/detail/9n2jb4k5wvcq';
const smartDecryptUrl = 'https://apps.apple.com/ca/app/smartdecrypt-pdf-zip/id6763979229';
const smartDecryptMsUrl = 'https://apps.microsoft.com/detail/9p9bfkr5zdz8';
const contentCueUrl = 'https://apps.apple.com/us/app/contentcue-reading-browser/id6770080864';
const imageBase = '/image/offline-apps/bibliofuse';

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

function AppStoreImageBadge({ href, alt = 'Download on the App Store', size = 'sm', className = '' }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`inline-flex transition hover:-translate-y-0.5 ${className}`}>
      <img src="/image/Download_on_the_App_Store_Badge.svg.png" alt={alt} className={`${size === 'lg' ? 'h-12' : 'h-10'} w-auto object-contain`} />
    </a>
  );
}

function MicrosoftStoreImageBadge({ href, size = 'sm', className = '' }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`inline-flex transition hover:-translate-y-0.5 ${className}`}>
      <img src="/image/Microsoft_Store_badge.svg" alt="Get it from Microsoft" className={`${size === 'lg' ? 'h-12' : 'h-10'} w-auto object-contain`} />
    </a>
  );
}

function WebToolButton({ lang, children, compact = false }) {
  return (
    <Link
      to={`/${lang}/webapp`}
      className={`inline-flex items-center justify-center gap-2 rounded-xl bg-[#0b1220] font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#152033] ${compact ? 'h-10 px-4 text-sm' : 'h-12 px-5 text-sm'}`}
    >
      <img src="/image/WebAssembly_Logo.svg" alt="" className="h-5 w-5" />
      {children}
      <ArrowRightIcon />
    </Link>
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

function ArrowRightIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function ProductIcon({ kind }) {
  const props = { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2.2, strokeLinecap: 'round', strokeLinejoin: 'round' };
  if (kind === 'book') return <svg {...props}><path d="M4 19V5a2 2 0 012-2h3v18H6a2 2 0 01-2-2z" /><path d="M11 3h3v18h-3z" /><path d="M16 5l4 1-3.5 14-4-1z" /></svg>;
  if (kind === 'globe') return <svg {...props}><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3a13 13 0 010 18 13 13 0 010-18" /></svg>;
  if (kind === 'folder') return <svg {...props}><path d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><path d="M8 13h8" /></svg>;
  if (kind === 'lock') return <svg {...props}><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V8a4 4 0 018 0v3" /></svg>;
  if (kind === 'browser') return <svg {...props}><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M2 9h20" /><circle cx="6" cy="6.5" r="0.8" fill="currentColor" stroke="none" /><circle cx="9" cy="6.5" r="0.8" fill="currentColor" stroke="none" /></svg>;
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
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-teal-300 animate-ping" />
              <span className="relative h-2 w-2 rounded-full bg-teal-500" />
            </span>
            {t('redesign.home.hero.version')}
          </div>

          <h1 className="mt-5 max-w-3xl text-[clamp(2.75rem,5.6vw,4.75rem)] font-black leading-[0.98] tracking-tight text-[#0b1220]">
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
            <WebToolButton lang={lang}>{t('redesign.common.tryWebTool')}</WebToolButton>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-slate-600">
            {signals.map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg>
                {item}
              </span>
            ))}
          </div>

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
          <img src={`${imageBase}/iphone/1.png`} alt={t('redesign.altTexts.heroImage')} className="relative z-10 block w-full drop-shadow-2xl motion-safe:animate-[float_7s_ease-in-out_infinite]" />
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

function ProductFamily() {
  const { t } = useTranslation();
  const products = [
    {
      tag: t('redesign.productFamily.products.reader.tag'),
      icon: 'book',
      name: 'BiblioFuse Reader',
      desc: t('redesign.productFamily.products.reader.desc'),
      bullets: [t('redesign.productFamily.products.reader.bullet1'), t('redesign.productFamily.products.reader.bullet2'), t('redesign.productFamily.products.reader.bullet3')],
      cta: t('redesign.productFamily.products.reader.cta'),
      href: appStoreUrl,
      secondary: t('redesign.productFamily.products.reader.secondary'),
      secondaryHref: playStoreUrl,
      accent: 'blue',
    },
    {
      tag: t('redesign.productFamily.products.webTool.tag'),
      icon: 'globe',
      name: 'BiblioFuse Web Tool',
      desc: t('redesign.productFamily.products.webTool.desc'),
      bullets: [t('redesign.productFamily.products.webTool.bullet1'), t('redesign.productFamily.products.webTool.bullet2'), t('redesign.productFamily.products.webTool.bullet3')],
      cta: t('redesign.productFamily.products.webTool.cta'),
      href: 'https://bibliofuse-web.netlify.app/',
      accent: 'teal',
    },
    {
      tag: t('redesign.productFamily.products.archive.tag'),
      icon: 'folder',
      name: 'Archive Duplicate Scanner',
      desc: t('redesign.productFamily.products.archive.desc'),
      bullets: [t('redesign.productFamily.products.archive.bullet1'), t('redesign.productFamily.products.archive.bullet2'), t('redesign.productFamily.products.archive.bullet3')],
      cta: t('redesign.productFamily.products.archive.cta'),
      href: archiveMacUrl,
      secondary: t('redesign.productFamily.products.archive.secondary'),
      secondaryHref: archiveMsUrl,
      accent: 'orange',
    },
    {
      tag: t('redesign.productFamily.products.smartdecrypt.tag'),
      icon: 'lock',
      name: 'SmartDecrypt PDF ZIP',
      desc: t('redesign.productFamily.products.smartdecrypt.desc'),
      bullets: [t('redesign.productFamily.products.smartdecrypt.bullet1'), t('redesign.productFamily.products.smartdecrypt.bullet2'), t('redesign.productFamily.products.smartdecrypt.bullet3')],
      cta: t('redesign.productFamily.products.smartdecrypt.cta'),
      href: smartDecryptUrl,
      secondary: t('redesign.productFamily.products.smartdecrypt.secondary'),
      secondaryHref: smartDecryptMsUrl,
      accent: 'violet',
      dark: true,
    },
    {
      tag: t('redesign.productFamily.products.contentcue.tag'),
      icon: 'browser',
      name: 'ContentCue',
      desc: t('redesign.productFamily.products.contentcue.desc'),
      bullets: [t('redesign.productFamily.products.contentcue.bullet1'), t('redesign.productFamily.products.contentcue.bullet2'), t('redesign.productFamily.products.contentcue.bullet3')],
      cta: t('redesign.productFamily.products.contentcue.cta'),
      href: contentCueUrl,
      accent: 'green',
    },
  ];

  return (
    <section id="family" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <div className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">{t('redesign.productFamily.eyebrow')}</div>
            <h2 className="max-w-2xl text-[clamp(1.8rem,3.4vw,2.75rem)] font-black leading-[1.05] tracking-tight text-slate-950">
              {t('redesign.productFamily.titleA')}
              <br />
              <span className="font-semibold text-slate-500">{t('redesign.productFamily.titleB')}</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-slate-600">
            {t('redesign.productFamily.desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ tag, icon, name, desc, bullets, cta, href, to, secondary, secondaryHref, accent, dark }) {
  const { t } = useTranslation();
  const accents = {
    blue: 'bg-blue-50 text-blue-600',
    teal: 'bg-teal-50 text-teal-600',
    orange: 'bg-orange-50 text-orange-600',
    violet: 'bg-violet-50 text-violet-600',
    green: 'bg-green-50 text-green-600',
  };
  const ctaClass = dark ? 'bg-violet-600 text-white hover:bg-violet-700' : 'bg-[#0b1220] text-white hover:bg-[#152033]';
  const cardClass = dark
    ? 'bg-[#0b1220] text-white shadow-[0_28px_70px_-36px_rgba(15,23,42,0.9)]'
    : 'border border-slate-200 bg-[#f7f9fe] text-slate-950';
  const linkContent = (
    <>
      {cta}
      <ArrowRightIcon />
    </>
  );

  return (
    <article className={`relative flex h-full flex-col rounded-3xl p-6 transition hover:-translate-y-1 hover:shadow-xl ${cardClass}`}>
      {dark && <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_80%_0%,rgba(139,92,246,0.27),transparent_55%)]" />}
      <div className="relative">
        <div className="mb-5 flex items-center justify-between">
          <span className={`grid h-11 w-11 place-items-center rounded-xl ${dark ? 'bg-white/10 text-violet-200' : accents[accent]}`}>
            <ProductIcon kind={icon} />
          </span>
          <span className={`rounded-full px-2.5 py-1 text-[10px] font-black uppercase tracking-wider ${dark ? 'bg-white/10 text-violet-100' : accents[accent]}`}>{tag}</span>
        </div>
        <h3 className={`mb-2 text-xl font-black tracking-tight ${dark ? 'text-white' : 'text-slate-950'}`}>{name}</h3>
        <p className={`mb-5 text-sm leading-relaxed ${dark ? 'text-white/70' : 'text-slate-600'}`}>{desc}</p>
        <ul className="mb-6 space-y-2.5">
          {bullets.map((bullet) => (
            <li key={bullet} className={`flex items-start gap-2.5 text-sm ${dark ? 'text-white/85' : 'text-slate-800'}`}>
              <svg className="mt-0.5 flex-shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={dark ? '#a78bfa' : '#2d7cf6'} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg>
              {bullet}
            </li>
          ))}
        </ul>
      </div>
      <div className="relative mt-auto">
        {to ? (
          <Link to={to} className={`inline-flex h-10 w-full items-center justify-center gap-2 rounded-xl px-4 text-sm font-semibold transition ${ctaClass}`}>
            {linkContent}
          </Link>
        ) : (
          <a href={href} target={href?.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className={`inline-flex h-10 w-full items-center justify-center gap-2 rounded-xl px-4 text-sm font-semibold transition ${ctaClass}`}>
            {linkContent}
          </a>
        )}
        {secondary && (
          <a href={secondaryHref} target="_blank" rel="noopener noreferrer" className={`mt-2 block rounded-lg py-1.5 text-center text-xs font-semibold transition ${dark ? 'text-white/70 hover:text-white' : 'text-ink-muted hover:text-ink'}`}>
            {t('redesign.productFamily.alsoOn')} {secondary} →
          </a>
        )}
      </div>
    </article>
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
        <h3 className="mt-3 text-[clamp(1.6rem,2.8vw,2.25rem)] font-black leading-[1.05] tracking-tight text-slate-950">{title}</h3>
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

function ReaderSection() {
  const { t } = useTranslation();
  return (
    <section id="reader" className="scroll-mt-16 bg-[#f5f8ff] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-20 max-w-2xl text-center">
          <div className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">{t('redesign.readerSection.eyebrow')}</div>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-black leading-[1.05] tracking-tight text-slate-950">{t('redesign.readerSection.title')}</h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            {t('redesign.readerSection.desc')}
          </p>
        </div>

        <div className="space-y-24 lg:space-y-32">
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
        </div>

        <ToolsHighlight />
      </div>
    </section>
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
    <div className="mt-24 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl sm:p-10">
      <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-center">
        <span className="inline-flex self-start items-center gap-2 rounded-full bg-teal-50 px-3 py-1.5 text-xs font-black uppercase tracking-wider text-teal-700">{t('redesign.toolsHighlight.badge')}</span>
        <h4 className="text-2xl font-black tracking-tight text-slate-950">{t('redesign.toolsHighlight.title')}</h4>
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
            <h5 className="mb-1.5 font-black text-slate-950">{tool.title}</h5>
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

function ComparisonTable() {
  const { t } = useTranslation();
  const table = t('redesign.home.table', { returnObjects: true });
  const editions = [
    { key: 'apple',   name: table.editions.apple,   subtitle: table.subtitles.apple,   badge: table.badges.universal, tint: 'blue' },
    { key: 'pc',      name: table.editions.pc,      subtitle: table.subtitles.pc,      badge: table.badges.comingSoon, tint: 'orange' },
    { key: 'android', name: table.editions.android, subtitle: table.subtitles.android, badge: table.badges.edition,   tint: 'teal' },
  ];
  const rows = table.rows.map((row, index) => ({
    label: row[0],
    highlight: index === 4,
    cells: { apple: row[1], pc: row[2], android: row[3] },
  }));

  return (
    <section id="comparison-table" className="bg-white py-20 sm:py-24">
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
                      <StoreBadge type="apple" size="sm" />
                      <span className="text-[10px] text-slate-400">{table.iosNote}</span>
                    </div>
                  </td>
                  <td className="px-4 py-5 text-center align-middle">
                    <a
                      href="mailto:support@mlogictech.com?subject=Notify%20me%3A%20BiblioFuse%20PC%20Reader"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-orange-50 px-3 py-2 text-xs font-bold text-orange-700 transition hover:bg-orange-100"
                    >
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                      {table.pcNotify}
                    </a>
                  </td>
                  <td className="px-4 py-5 text-center align-middle">
                    <StoreBadge type="play" size="sm" />
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

function StandaloneToolsSection({ lang }) {
  const { t } = useTranslation();
  const s = t('redesign.home.toolsSection', { returnObjects: true });
  return (
    <section className="bg-slate-50 py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <div className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">{s.eyebrow}</div>
          <h2 className="text-xl font-black tracking-tight text-slate-950">{s.title}</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5">
            <div className="mb-3 flex items-center gap-2.5">
              <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-xl bg-violet-50 text-violet-600"><ProductIcon kind="globe" /></span>
              <div>
                <div className="text-sm font-black text-slate-950">{s.web.name}</div>
                <div className="text-[10px] text-slate-500">{s.web.subtitle}</div>
              </div>
            </div>
            <p className="mb-4 flex-1 text-xs leading-relaxed text-slate-600">{s.web.desc}</p>
            <WebToolButton lang={lang} compact>{s.web.cta}</WebToolButton>
          </div>
          <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5">
            <div className="mb-3 flex items-center gap-2.5">
              <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-xl bg-orange-50 text-orange-600"><ProductIcon kind="folder" /></span>
              <div>
                <div className="text-sm font-black text-slate-950">{s.pcCbz.name}</div>
                <div className="text-[10px] text-slate-500">{s.pcCbz.subtitle}</div>
              </div>
            </div>
            <p className="mb-4 flex-1 text-xs leading-relaxed text-slate-600">{s.pcCbz.desc}</p>
            <MicrosoftStoreImageBadge href="https://apps.microsoft.com/detail/9p7b02538tfq" />
          </div>
          <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5">
            <div className="mb-3 flex items-center gap-2.5">
              <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-xl bg-orange-50 text-orange-600"><ProductIcon kind="book" /></span>
              <div>
                <div className="text-sm font-black text-slate-950">{s.pcEpub.name}</div>
                <div className="text-[10px] text-slate-500">{s.pcEpub.subtitle}</div>
              </div>
            </div>
            <p className="mb-4 flex-1 text-xs leading-relaxed text-slate-600">{s.pcEpub.desc}</p>
            <MicrosoftStoreImageBadge href="https://apps.microsoft.com/detail/9pdllhdz6kkl" />
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
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
                <div className="px-6 pb-5 text-sm leading-relaxed text-slate-600">{item.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function tintClass(tint) {
  if (tint === 'blue') return 'bg-blue-50 text-blue-700';
  if (tint === 'teal') return 'bg-teal-50 text-teal-700';
  if (tint === 'violet') return 'bg-violet-50 text-violet-700';
  return 'bg-orange-50 text-orange-700';
}

function renderTableCell(cell, strong) {
  if (typeof cell === 'string') return <span className={`leading-snug ${strong === 'green' ? 'font-semibold text-emerald-600' : 'text-slate-800'}`}>{cell}</span>;
  if (cell?.yes === true) {
    return (
      <div className="flex flex-col items-center gap-1 text-center">
        {cell.big ? <span className="font-bold text-slate-950">{cell.big}</span> : <CheckIcon />}
        {cell.note && <span className="text-[11px] leading-tight text-slate-500">{cell.note}</span>}
      </div>
    );
  }
  if (cell?.yes === false) {
    return (
      <div className="flex flex-col items-center gap-1 text-center">
        <DashIcon />
        {cell.note && <span className="text-[11px] leading-tight text-slate-500">{cell.note}</span>}
      </div>
    );
  }
  return null;
}

function renderLocalizedTableCell(cell, strong) {
  if (cell === '-') return <DashIcon />;
  const [big, note] = String(cell).split('|');
  return (
    <span className={`leading-snug ${strong === 'green' ? 'font-semibold text-emerald-600' : 'text-slate-800'}`}>
      <span className={note ? 'block font-bold text-slate-950' : ''}>{big}</span>
      {note && <span className="mt-1 block text-[11px] leading-tight text-slate-500">{note}</span>}
    </span>
  );
}

function ArchiveScannerSection() {
  const { t } = useTranslation();
  return (
    <section id="archive" className="relative overflow-hidden py-24 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#FFFFFF_0%,#FFF7EE_60%,#FFFFFF_100%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-warm/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-warm-deep">
              <span className="h-1.5 w-1.5 rounded-full bg-warm" />
              {t('redesign.archiveSection.badge')}
            </div>
            <h2 className="font-display tighter mt-5 text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.05] text-ink">
              {t('redesign.archiveSection.titleA')}
              <br />
              <span className="text-warm-deep">{t('redesign.archiveSection.titleB')}</span>
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink-muted">
              {t('redesign.archiveSection.desc')}
            </p>

            <div className="mt-8 grid max-w-lg gap-4 sm:grid-cols-2">
              {[
                { title: t('redesign.archiveSection.features.scanning.title'), body: t('redesign.archiveSection.features.scanning.body') },
                { title: t('redesign.archiveSection.features.photo.title'), body: t('redesign.archiveSection.features.photo.body') },
                { title: t('redesign.archiveSection.features.select.title'), body: t('redesign.archiveSection.features.select.body') },
                { title: t('redesign.archiveSection.features.delete.title'), body: t('redesign.archiveSection.features.delete.body') },
              ].map((feature) => (
                <div key={feature.title} className="flex items-start gap-2.5">
                  <span className="mt-0.5 grid h-5 w-5 flex-shrink-0 place-items-center rounded-md bg-warm/15 text-warm-deep">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg>
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-ink">{feature.title}</span>
                    <span className="block text-xs leading-snug text-ink-muted">{feature.body}</span>
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <AppStoreImageBadge href={archiveMacUrl} alt={t('redesign.archiveSection.altBadge')} size="lg" />
              <MicrosoftStoreImageBadge href={archiveMsUrl} size="lg" />
            </div>

            <p className="mt-5 text-xs text-ink-soft">
              {t('redesign.archiveSection.pricing')}
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 -z-10 rounded-3xl bg-[radial-gradient(closest-side,rgba(255,138,58,.25),transparent)] opacity-60" />
            <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-deep">
              <img src="/image/offline-apps/archivescan/v1.png" alt={t('redesign.archiveSection.altImage')} className="block w-full" />
            </div>

            <div className="absolute -bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-6 rounded-2xl border border-line bg-white px-5 py-3 shadow-float sm:flex">
              <div>
                <div className="font-display tighter text-xl font-bold text-ink">90%</div>
                <div className="text-[10px] uppercase tracking-wider text-ink-soft">{t('redesign.archiveSection.stats.threshold')}</div>
              </div>
              <div className="h-8 w-px bg-line" />
              <div>
                <div className="font-display tighter text-xl font-bold text-ink">x3</div>
                <div className="text-[10px] uppercase tracking-wider text-ink-soft">{t('redesign.archiveSection.stats.sampled')}</div>
              </div>
              <div className="h-8 w-px bg-line" />
              <div>
                <div className="font-display tighter text-xl font-bold text-emerald-600">{t('redesign.archiveSection.stats.local')}</div>
                <div className="text-[10px] uppercase tracking-wider text-ink-soft">{t('redesign.archiveSection.stats.noCloud')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SmartDecryptSection() {
  const { t } = useTranslation();
  return (
    <section
      id="smartdecrypt"
      className="relative isolate overflow-hidden py-24 text-white sm:py-28"
      style={{
        background:
          'radial-gradient(60% 80% at 20% 0%, rgba(45,124,246,.2), transparent 55%), radial-gradient(70% 80% at 90% 100%, rgba(139,92,246,.28), transparent 55%), linear-gradient(180deg, #0A0F1F 0%, #050714 100%)',
      }}
    >
      <div className="grain absolute inset-0 -z-10 opacity-[0.08]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-violet/15 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#C4B5FD]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#A78BFA]" />
              {t('redesign.decryptSection.badge')}
            </div>
            <h2 className="font-display tighter mt-5 text-[clamp(2rem,4.5vw,3.25rem)] font-bold leading-[1.02] text-white">
              {t('redesign.decryptSection.titleA')}
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">{t('redesign.decryptSection.titleB')}</span>
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/70">
              {t('redesign.decryptSection.desc')}
            </p>

            <div className="mt-8 grid max-w-lg gap-4 sm:grid-cols-2">
              {[
                { title: t('redesign.decryptSection.features.formats.title'), body: t('redesign.decryptSection.features.formats.body') },
                { title: t('redesign.decryptSection.features.patterns.title'), body: t('redesign.decryptSection.features.patterns.body') },
                { title: t('redesign.decryptSection.features.batch.title'), body: t('redesign.decryptSection.features.batch.body') },
                { title: t('redesign.decryptSection.features.keychain.title'), body: t('redesign.decryptSection.features.keychain.body') },
              ].map((feature) => (
                <div key={feature.title} className="flex items-start gap-2.5">
                  <span className="mt-0.5 grid h-5 w-5 flex-shrink-0 place-items-center rounded-md bg-violet-400/20 text-violet-200">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg>
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-white">{feature.title}</span>
                    <span className="block text-xs leading-snug text-white/60">{feature.body}</span>
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <AppStoreImageBadge href={smartDecryptUrl} alt={t('redesign.decryptSection.altBadge')} size="lg" />
              <MicrosoftStoreImageBadge href={smartDecryptMsUrl} size="lg" />
            </div>

            <p className="mt-5 text-xs text-white/50">
              {t('redesign.decryptSection.pricing')}
            </p>
            <p className="mt-3 rounded-lg bg-violet-400/10 px-3 py-2 text-xs text-violet-200">
              <span className="font-semibold">{t('redesign.decryptSection.langNote')}</span>
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-12 -z-10 rounded-full bg-[radial-gradient(closest-side,rgba(167,139,250,.4),transparent)] opacity-70" />
            <div className="hairline-dark rounded-3xl bg-[linear-gradient(160deg,rgba(255,255,255,.04),rgba(255,255,255,.01))] p-8">
              <div className="grid grid-cols-3 items-center gap-3">
                {[
                  { n: 1, label: t('redesign.decryptSection.steps.drop'), icon: 'file' },
                  { n: 2, label: t('redesign.decryptSection.steps.match'), icon: 'wand' },
                  { n: 3, label: t('redesign.decryptSection.steps.unlock'), icon: 'unlock' },
                ].map((step, index) => (
                  <div key={step.n} className="flex flex-col items-center text-center">
                    <div className={`relative mb-2 grid h-14 w-14 place-items-center rounded-2xl ${index === 0 ? 'bg-blue-400/20' : index === 1 ? 'bg-violet-400/25' : 'bg-emerald-400/20'}`}>
                      <div className={`absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full text-[10px] font-bold text-night ${index === 0 ? 'bg-blue-400' : index === 1 ? 'bg-violet-400' : 'bg-emerald-400'}`}>{step.n}</div>
                      <SmartStepIcon kind={step.icon} />
                    </div>
                    <div className="text-xs font-semibold text-white">{step.label}</div>
                  </div>
                ))}
              </div>

              <div className="hairline-dark mt-7 rounded-2xl bg-white/[.03] p-4">
                <div className="mb-3 flex items-center justify-between">
                  <div className="text-xs font-semibold uppercase tracking-wider text-white/50">{t('redesign.decryptSection.queueTitle')}</div>
                  <div className="text-xs text-white/40">{t('redesign.decryptSection.queueStatus')}</div>
                </div>
                <div className="space-y-2">
                  {[
                    { name: 'statement-2026-04.pdf', state: 'unlocked' },
                    { name: 'payslip-2026-04.zip', state: 'matching' },
                    { name: 'archive-trusted.7z', state: 'queued' },
                  ].map((file) => (
                    <div key={file.name} className="flex items-center justify-between gap-3 rounded-xl bg-white/[.03] p-2.5">
                      <div className="flex min-w-0 items-center gap-2.5">
                        <span className="grid h-7 w-7 flex-shrink-0 place-items-center rounded-lg bg-blue-400/10 text-blue-300">
                          <span className="text-[9px] font-bold">{file.name.split('.').pop().toUpperCase()}</span>
                        </span>
                        <span className="truncate text-sm text-white">{file.name}</span>
                      </div>
                      <span className={`flex-shrink-0 rounded-full px-2 py-1 text-[10px] font-bold uppercase tracking-wider ${file.state === 'unlocked' ? 'bg-emerald-400/15 text-emerald-400' : file.state === 'matching' ? 'bg-violet-400/20 text-violet-200' : 'bg-white/[.06] text-white/50'}`}>
                        {t('redesign.decryptSection.states.' + file.state)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContentCueSection() {
  const { t } = useTranslation();
  return (
    <section id="contentcue" className="relative overflow-hidden py-24 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#FFFFFF_0%,#F0FDF4_60%,#FFFFFF_100%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-green-700">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
              {t('redesign.contentcueSection.badge')}
            </div>
            <h2 className="font-display tighter mt-5 text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.05] text-ink">
              {t('redesign.contentcueSection.titleA')}
              <br />
              <span className="text-green-600">{t('redesign.contentcueSection.titleB')}</span>
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink-muted">
              {t('redesign.contentcueSection.desc')}
            </p>

            <div className="mt-8 grid max-w-lg gap-4 sm:grid-cols-2">
              {[
                { title: t('redesign.contentcueSection.features.resume.title'), body: t('redesign.contentcueSection.features.resume.body') },
                { title: t('redesign.contentcueSection.features.adOutlines.title'), body: t('redesign.contentcueSection.features.adOutlines.body') },
                { title: t('redesign.contentcueSection.features.mute.title'), body: t('redesign.contentcueSection.features.mute.body') },
                { title: t('redesign.contentcueSection.features.bookmarks.title'), body: t('redesign.contentcueSection.features.bookmarks.body') },
              ].map((feature) => (
                <div key={feature.title} className="flex items-start gap-2.5">
                  <span className="mt-0.5 grid h-5 w-5 flex-shrink-0 place-items-center rounded-md bg-green-100 text-green-700">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg>
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-ink">{feature.title}</span>
                    <span className="block text-xs leading-snug text-ink-muted">{feature.body}</span>
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <AppStoreImageBadge href={contentCueUrl} alt={t('redesign.contentcueSection.altBadge')} size="lg" />
            </div>

            <p className="mt-5 text-xs text-ink-soft">{t('redesign.contentcueSection.pricing')}</p>
            <p className="mt-3 rounded-lg bg-green-50 px-3 py-2 text-xs text-green-700">
              <span className="font-semibold">{t('redesign.contentcueSection.langNote')}</span>
              <br />
              {t('redesign.contentcueSection.platformNote')}
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 -z-10 rounded-3xl bg-[radial-gradient(closest-side,rgba(34,197,94,.2),transparent)] opacity-60" />
            <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-deep">
              <div className="border-b border-slate-200 bg-slate-50 px-4 py-3">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-red-400" />
                    <div className="h-3 w-3 rounded-full bg-yellow-400" />
                    <div className="h-3 w-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 truncate rounded-md border border-slate-200 bg-white px-3 py-1 text-xs text-slate-400">
                    en.wikipedia.org/wiki/Manga
                  </div>
                </div>
              </div>
              <div className="relative bg-white px-6 py-5">
                <div className="absolute right-4 top-4">
                  <div className="flex items-center gap-1.5 rounded-lg bg-green-500 px-3 py-1.5 text-xs font-bold text-white shadow-sm">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    Resume
                  </div>
                </div>
                <div className="space-y-3 pr-20">
                  <div className="h-4 w-3/4 rounded bg-slate-200" />
                  <div className="h-3 w-full rounded bg-slate-100" />
                  <div className="h-3 w-5/6 rounded bg-slate-100" />
                  <div className="flex h-10 w-full items-center justify-center rounded border-2 border-dashed border-amber-300 bg-amber-50">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-amber-500">Ad</span>
                  </div>
                  <div className="h-3 w-full rounded bg-slate-100" />
                  <div className="h-3 w-4/5 rounded bg-slate-100" />
                  <div className="h-3 w-full rounded bg-slate-100" />
                  <div className="h-3 w-2/3 rounded bg-slate-100" />
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-6 rounded-2xl border border-line bg-white px-5 py-3 shadow-float sm:flex">
              <div>
                <div className="font-display tighter text-xl font-bold text-ink">iOS 16+</div>
                <div className="text-[10px] uppercase tracking-wider text-ink-soft">{t('redesign.contentcueSection.stats.requires')}</div>
              </div>
              <div className="h-8 w-px bg-line" />
              <div>
                <div className="font-display tighter text-xl font-bold text-green-600">$2.99</div>
                <div className="text-[10px] uppercase tracking-wider text-ink-soft">{t('redesign.contentcueSection.stats.oneTimePro')}</div>
              </div>
              <div className="h-8 w-px bg-line" />
              <div>
                <div className="font-display tighter text-xl font-bold text-ink">5</div>
                <div className="text-[10px] uppercase tracking-wider text-ink-soft">{t('redesign.contentcueSection.stats.appLangs')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SmartStepIcon({ kind }) {
  const props = { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', stroke: '#fff', strokeWidth: 2.2, strokeLinecap: 'round', strokeLinejoin: 'round' };
  if (kind === 'file') return <svg {...props}><path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8z" /><path d="M14 3v5h5" /></svg>;
  if (kind === 'wand') return <svg {...props}><path d="M15 4l5 5" /><path d="M3 21l12-12" /><path d="M18 11l3-3" /><path d="M5 4l1 1" /><path d="M19 14l1 1" /></svg>;
  if (kind === 'unlock') return <svg {...props}><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V8a4 4 0 017.5-2" /></svg>;
  return null;
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
            to={`/${currentLang}/blog`}
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
                to={`/${currentLang}/blog/${article.slug}`}
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

function FinalCTA({ lang }) {
  const { t } = useTranslation();
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#2d7cf6] to-[#14c2a6] p-10 text-white sm:p-16">
          <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(rgba(255,255,255,.6)_1px,transparent_1px)] [background-size:24px_24px]" />
          <img src={logo} alt="" className="absolute bottom-[-40px] right-[-20px] hidden w-80 rounded-[52px] opacity-20 md:block" />
          <div className="relative max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1.5 text-xs font-bold uppercase tracking-wider">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              {t('redesign.finalCta.badge')}
            </div>
            <h2 className="text-[clamp(2rem,4.5vw,3.25rem)] font-black leading-[1.02] tracking-tight">{t('redesign.finalCta.title')}</h2>
            <p className="mt-4 text-lg leading-relaxed text-white/90">
              {t('redesign.finalCta.desc')}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <StoreBadge type="apple" />
              <StoreBadge type="play" />
              <WebToolButton lang={lang}>{t('redesign.finalCta.button')}</WebToolButton>
            </div>
          </div>
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
      </div>
    </div>
  );
}

const Home = () => {
  const { lang = 'en' } = useParams();
  const { t } = useTranslation();

  return (
    <div className="bf-home min-h-screen overflow-x-hidden bg-white text-slate-950">
      <SEO
        title={t('redesign.seo.homeTitle')}
        description={t('redesign.seo.homeDesc')}
        canonical="/"
      />
      <Hero lang={lang} />
      <ProductFamily lang={lang} />
      <ReaderSection />
      <ComparisonTable />
      <StandaloneToolsSection lang={lang} />
      <FaqSection />
      <ArchiveScannerSection />
      <SmartDecryptSection />
      <ContentCueSection />
      <PrivacyStrip />
      <BlogPreview lang={lang} />
      <FinalCTA lang={lang} />
      <StickyDownloadBar />
    </div>
  );
};

export default Home;
