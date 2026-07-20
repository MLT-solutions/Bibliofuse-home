import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function ArrowRightIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

// Shared "Why two apps?" comparison table — was local to ComicReader.jsx
// (id="why-two-apps") only; extracted 2026-07-20 so Home.jsx can use the same
// table right after the two flagship hero banners, instead of the separate
// card-based TwoAppsSection it used to render.
function ReaderComparisonTable({ lang }) {
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

export default ReaderComparisonTable;
