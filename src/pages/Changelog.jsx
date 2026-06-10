import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import { ENTRIES, KNOWN_ISSUES, ROADMAP } from '../data/changelog';

const PLATFORM_META = {
  ios:     { label: 'iOS & macOS', color: 'bg-blue-100 text-blue-700',    dot: 'bg-blue-500' },
  pc:      { label: 'PC (Windows)', color: 'bg-violet-100 text-violet-700', dot: 'bg-violet-500' },
  android: { label: 'Android',      color: 'bg-emerald-100 text-emerald-700', dot: 'bg-emerald-500' },
  all:     { label: 'All platforms', color: 'bg-slate-100 text-slate-600',  dot: 'bg-slate-400' },
};

const TYPE_META = {
  release: { label: 'Release',  color: 'bg-slate-900 text-white' },
  feature: { label: 'Feature',  color: 'bg-blue-600 text-white' },
  fix:     { label: 'Fix',      color: 'bg-amber-500 text-white' },
};

const ROADMAP_STATUS = {
  pending:   { label: 'Pending approval', color: 'bg-amber-100 text-amber-700' },
  parked:    { label: 'Parked',           color: 'bg-slate-100 text-slate-500' },
  exploring: { label: 'Exploring',        color: 'bg-blue-100 text-blue-700' },
};

function PlatformBadge({ platform, small }) {
  const m = PLATFORM_META[platform] || PLATFORM_META.all;
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold ${m.color} ${small ? 'text-[10px]' : ''}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${m.dot}`} />
      {m.label}
    </span>
  );
}

const FILTERS = ['all', 'ios', 'pc', 'android'];

const getStr = (val, lang) =>
  val && typeof val === 'object' ? (val[lang] || val.en) : val;

export default function Changelog() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all' ? ENTRIES : ENTRIES.filter(e => e.platform === filter);

  return (
    <div className="min-h-screen bg-[#F6F8FC] px-4 pb-24 pt-28 text-slate-950 sm:px-6 lg:px-8">
      <SEO
        title={t('redesign.changelog.seo.title')}
        description={t('redesign.changelog.seo.desc')}
        canonical="/changelog"
        schemaType="website"
      />

      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-10 text-center">
          <div className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
            {t('redesign.changelog.eyebrow')}
          </div>
          <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-black leading-tight tracking-tight text-slate-950">
            {t('redesign.changelog.title')}
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-500">
            {t('redesign.changelog.subtitle')}
          </p>
        </div>

        {/* Platform filter */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${
                filter === f
                  ? 'bg-slate-900 text-white shadow'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-slate-900'
              }`}
            >
              {f === 'all' ? t('redesign.changelog.filterAll') : PLATFORM_META[f].label}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="mb-12 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
          <div className="divide-y divide-slate-100">
            {filtered.map((entry, i) => {
              const typeMeta = TYPE_META[entry.type];
              return (
                <div key={i} className="flex gap-4 px-6 py-5">
                  <div className="flex w-24 shrink-0 flex-col items-end gap-1 pt-0.5">
                    <span className="text-[11px] font-mono text-slate-400">{entry.date}</span>
                    {entry.version && (
                      <span className="text-[10px] font-bold text-slate-500">{entry.version}</span>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="mb-1.5 flex flex-wrap items-center gap-2">
                      <PlatformBadge platform={entry.platform} small />
                      {typeMeta && (
                        <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${typeMeta.color}`}>
                          {typeMeta.label}
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-bold text-slate-900">{getStr(entry.title, lang)}</p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-500">{getStr(entry.desc, lang)}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Known Issues */}
        {(filter === 'all' || KNOWN_ISSUES.some(i => i.platform === filter)) && (
          <div className="mb-10">
            <h2 className="mb-4 text-lg font-black tracking-tight text-slate-900">
              {t('redesign.changelog.knownIssuesTitle')}
            </h2>
            <div className="space-y-3">
              {(filter === 'all' ? KNOWN_ISSUES : KNOWN_ISSUES.filter(i => i.platform === filter)).map((issue, i) => (
                <div key={i} className="flex gap-4 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                    <line x1="12" y1="9" x2="12" y2="13" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                  <div>
                    <div className="mb-1">
                      <PlatformBadge platform={issue.platform} small />
                    </div>
                    <p className="text-sm font-bold text-slate-800">{getStr(issue.title, lang)}</p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{getStr(issue.desc, lang)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Roadmap */}
        {(filter === 'all' || ROADMAP.some(r => r.platform === filter || r.platform === 'all')) && (
          <div>
            <h2 className="mb-4 text-lg font-black tracking-tight text-slate-900">
              {t('redesign.changelog.roadmapTitle')}
            </h2>
            <div className="space-y-3">
              {(filter === 'all'
                ? ROADMAP
                : ROADMAP.filter(r => r.platform === filter || r.platform === 'all')
              ).map((item, i) => {
                const s = ROADMAP_STATUS[item.status] || ROADMAP_STATUS.exploring;
                return (
                  <div key={i} className="flex gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-4">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" /><path d="m12 8 4 4-4 4M8 12h8" />
                    </svg>
                    <div>
                      <div className="mb-1.5 flex flex-wrap items-center gap-2">
                        <PlatformBadge platform={item.platform} small />
                        <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${s.color}`}>
                          {s.label}
                        </span>
                      </div>
                      <p className="text-sm font-bold text-slate-800">{getStr(item.title, lang)}</p>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">{getStr(item.desc, lang)}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
