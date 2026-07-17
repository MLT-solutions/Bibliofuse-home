import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import SEO from '../components/SEO';
import { ENTRIES as ARCHIVE_ENTRIES, KNOWN_ISSUES as ARCHIVE_ISSUES, ROADMAP as ARCHIVE_ROADMAP } from '../data/changelog-archive';
import { ENTRIES as GREPREADER_ENTRIES, KNOWN_ISSUES as GREPREADER_ISSUES, ROADMAP as GREPREADER_ROADMAP } from '../data/changelog-grepreader';
import { ENTRIES as SMARTDECRYPT_ENTRIES, KNOWN_ISSUES as SMARTDECRYPT_ISSUES, ROADMAP as SMARTDECRYPT_ROADMAP } from '../data/changelog-smartdecrypt';
import { ENTRIES as CONTENTCUE_ENTRIES, KNOWN_ISSUES as CONTENTCUE_ISSUES, ROADMAP as CONTENTCUE_ROADMAP } from '../data/changelog-contentcue';

const ALL_PLATFORM_META = {
  ios: { label: 'iOS & macOS', color: 'bg-blue-100 text-blue-700',    dot: 'bg-blue-500' },
  iosOnly: { label: 'iOS', color: 'bg-blue-100 text-blue-700', dot: 'bg-blue-500' },
  iosVision: { label: 'iOS & visionOS', color: 'bg-blue-100 text-blue-700', dot: 'bg-blue-500' },
  mac: { label: 'macOS',       color: 'bg-blue-100 text-blue-700',    dot: 'bg-blue-500' },
  pc:  { label: 'PC (Windows)', color: 'bg-violet-100 text-violet-700', dot: 'bg-violet-500' },
  all: { label: 'All platforms', color: 'bg-slate-100 text-slate-600', dot: 'bg-slate-400' },
};

const TYPE_META = {
  release: { label: 'Release', color: 'bg-slate-900 text-white' },
  feature: { label: 'Feature', color: 'bg-blue-600 text-white' },
  fix:     { label: 'Fix',     color: 'bg-amber-500 text-white' },
};

const ROADMAP_STATUS = {
  pending:   { label: 'Pending approval', color: 'bg-amber-100 text-amber-700' },
  parked:    { label: 'Parked',           color: 'bg-slate-100 text-slate-500' },
  exploring: { label: 'Exploring',        color: 'bg-blue-100 text-blue-700' },
};

const APP_CONFIGS = {
  archive: {
    appName: 'Comic Duplicate Scanner',
    logo: '/image/archive-logo.png',
    accent: 'text-orange-600',
    ENTRIES: ARCHIVE_ENTRIES,
    KNOWN_ISSUES: ARCHIVE_ISSUES,
    ROADMAP: ARCHIVE_ROADMAP,
    platforms: ['all', 'mac', 'pc'],
    storeUrl: 'https://apps.apple.com/eg/app/archive-duplicate-scanner/id6762779449',
    appCategory: 'UtilitiesApplication',
    operatingSystem: 'macOS, Windows',
    shortDesc: 'Finds duplicate comic archives and photos using perceptual hashing. Scans Mac and Windows.',
  },
  grepreader: {
    appName: 'GrepTag Reader',
    logo: '/image/grepreader-logo.png',
    accent: 'text-blue-600',
    ENTRIES: GREPREADER_ENTRIES,
    KNOWN_ISSUES: GREPREADER_ISSUES,
    ROADMAP: GREPREADER_ROADMAP,
    platforms: ['all', 'ios', 'pc'],
    storeUrl: 'https://apps.apple.com/app/id6779977609',
    appCategory: 'BookApplication',
    operatingSystem: 'iOS, iPadOS, macOS',
    shortDesc: 'Grep-scan your EPUB and TXT library with Boolean logic. Tag books from search results.',
  },
  smartdecrypt: {
    appName: 'SmartDecrypt PDF ZIP',
    logo: '/image/smartdecrypt-logo.png',
    accent: 'text-violet-600',
    ENTRIES: SMARTDECRYPT_ENTRIES,
    KNOWN_ISSUES: SMARTDECRYPT_ISSUES,
    ROADMAP: SMARTDECRYPT_ROADMAP,
    platforms: ['all', 'ios', 'pc'],
    storeUrl: 'https://apps.apple.com/ca/app/smartdecrypt-pdf-zip/id6763979229',
    appCategory: 'UtilitiesApplication',
    operatingSystem: 'iOS, iPadOS, macOS, Windows',
    shortDesc: 'Unlock password-protected PDF, ZIP, and 7z files entirely on-device. Save password patterns by filename.',
  },
  contentcue: {
    appName: 'ContentCue',
    logo: '/image/contentcue-logo.png',
    accent: 'text-blue-600',
    ENTRIES: CONTENTCUE_ENTRIES,
    KNOWN_ISSUES: CONTENTCUE_ISSUES,
    ROADMAP: CONTENTCUE_ROADMAP,
    platforms: ['ios'],
    storeUrl: 'https://apps.apple.com/us/app/contentcue-read-listen/id6770080864',
    appCategory: 'LifestyleApplication',
    operatingSystem: 'iOS, iPadOS, visionOS',
    shortDesc: 'Read-and-listen app for iPhone, iPad, and Apple Vision Pro: position-restore browser, RSS audio briefings, podcasts, website TTS, and CarPlay.',
  },
};

function PlatformBadge({ platform }) {
  const m = ALL_PLATFORM_META[platform] || ALL_PLATFORM_META.all;
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[10px] font-semibold ${m.color}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${m.dot}`} />
      {m.label}
    </span>
  );
}

const getStr = (val, lang) =>
  val && typeof val === 'object' ? (val[lang] || val.en) : val;

export default function AppChangelog({ appSlug }) {
  const { i18n } = useTranslation();
  const { lang } = useParams();
  const language = lang || i18n.language || 'en';

  const config = APP_CONFIGS[appSlug];
  if (!config) return null;

  const { appName, logo, accent, ENTRIES, KNOWN_ISSUES, ROADMAP, platforms, storeUrl, appCategory, operatingSystem, shortDesc } = config;
  const showFilter = platforms.length > 1;

  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all' ? ENTRIES : ENTRIES.filter(e => e.platform === filter);
  const filteredIssues = filter === 'all' ? KNOWN_ISSUES : KNOWN_ISSUES.filter(i => i.platform === filter || i.platform === 'all');
  const filteredRoadmap = filter === 'all' ? ROADMAP : ROADMAP.filter(r => r.platform === filter || r.platform === 'all');

  const baseUrl = 'https://bibliofuse.com';
  const latestReleased = ENTRIES.find(e => e.released !== false);
  const latestVersion = latestReleased?.version;
  const latestDate = latestReleased?.date;
  const changelogUrl = `${baseUrl}/en/${appSlug}/changelog/`;

  const seoDescription = latestVersion
    ? `${appName} version history and release notes. Latest: v${latestVersion} (${latestDate}). ${shortDesc}`
    : `${appName} version history and release notes. ${shortDesc}`;

  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: appName,
    applicationCategory: appCategory,
    operatingSystem,
    url: storeUrl,
    releaseNotes: changelogUrl,
    ...(latestVersion && { softwareVersion: latestVersion }),
    ...(latestDate && { dateModified: latestDate }),
    description: shortDesc,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    publisher: { '@type': 'Organization', name: 'BiblioFuse', url: baseUrl },
  };

  const faqItems = latestVersion ? [
    {
      q: `What is the latest version of ${appName}?`,
      a: `The latest released version is ${latestVersion}, updated on ${latestDate}.`,
    },
    {
      q: `When was ${appName} last updated?`,
      a: `${appName} was last updated on ${latestDate} (v${latestVersion}).`,
    },
    {
      q: `Is ${appName} still being actively updated?`,
      a: `Yes. ${appName} is actively maintained. The most recent update was on ${latestDate}.`,
    },
  ] : [];

  return (
    <div className="min-h-screen bg-[#F6F8FC] px-4 pb-24 pt-28 text-slate-950 sm:px-6 lg:px-8">
      <SEO
        title={`${appName} — Version History & Release Notes`}
        description={seoDescription}
        canonical={`/${appSlug}/changelog`}
        schemaType="website"
        faqItems={faqItems}
        additionalSchemas={[softwareSchema]}
        breadcrumbs={[
          { name: 'BiblioFuse', url: `${baseUrl}/en/` },
          { name: appName, url: `${baseUrl}/en/${appSlug}/` },
          { name: 'Changelog', url: changelogUrl },
        ]}
        noindex={language !== 'en'}
      />

      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-10 text-center">
          {logo && (
            <img src={logo} alt={appName} className="mx-auto mb-4 h-16 w-16 rounded-2xl shadow-sm" />
          )}
          <div className={`mb-3 text-xs font-bold uppercase tracking-[0.18em] ${accent}`}>
            Changelog
          </div>
          <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-black leading-tight tracking-tight text-slate-950">
            {appName}
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-500">
            Release history, known issues, and what&apos;s coming next.
          </p>
        </div>

        {/* Platform filter — only when app has multiple platforms */}
        {showFilter && (
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {platforms.map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${
                  filter === f
                    ? 'bg-slate-900 text-white shadow'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-slate-900'
                }`}
              >
                {f === 'all' ? 'All platforms' : (ALL_PLATFORM_META[f]?.label || f)}
              </button>
            ))}
          </div>
        )}

        {/* Timeline */}
        <div className="mb-12 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
          <div className="divide-y divide-slate-100">
            {filtered.map((entry, i) => {
              const typeMeta = TYPE_META[entry.type];
              const unreleased = entry.released === false;
              return (
                <div key={i} className={`flex gap-4 px-6 py-5 ${unreleased ? 'bg-amber-50/40' : ''}`}>
                  <div className="flex w-24 shrink-0 flex-col items-end gap-1 pt-0.5">
                    <span className="text-[11px] font-mono text-slate-400">{entry.date}</span>
                    {entry.version && (
                      <span className="text-[10px] font-bold text-slate-500">{entry.version}</span>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="mb-1.5 flex flex-wrap items-center gap-2">
                      <PlatformBadge platform={entry.platform} />
                      {typeMeta && !unreleased && (
                        <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${typeMeta.color}`}>
                          {typeMeta.label}
                        </span>
                      )}
                      {unreleased && (
                        <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-amber-700">
                          Unreleased
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-bold text-slate-900">{getStr(entry.title, language)}</p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-500">{getStr(entry.desc, language)}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Known Issues */}
        {filteredIssues.length > 0 && (
          <div className="mb-10">
            <h2 className="mb-4 text-lg font-black tracking-tight text-slate-900">Known Issues</h2>
            <div className="space-y-3">
              {filteredIssues.map((issue, i) => (
                <div key={i} className="flex gap-4 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                    <line x1="12" y1="9" x2="12" y2="13" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                  <div>
                    <div className="mb-1"><PlatformBadge platform={issue.platform} /></div>
                    <p className="text-sm font-bold text-slate-800">{getStr(issue.title, language)}</p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{getStr(issue.desc, language)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Roadmap */}
        {filteredRoadmap.length > 0 && (
          <div>
            <h2 className="mb-4 text-lg font-black tracking-tight text-slate-900">Roadmap</h2>
            <div className="space-y-3">
              {filteredRoadmap.map((item, i) => {
                const s = ROADMAP_STATUS[item.status] || ROADMAP_STATUS.exploring;
                return (
                  <div key={i} className="flex gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-4">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                    </svg>
                    <div>
                      <div className="mb-1 flex flex-wrap items-center gap-2">
                        <PlatformBadge platform={item.platform} />
                        <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${s.color}`}>
                          {s.label}
                        </span>
                      </div>
                      <p className="text-sm font-bold text-slate-800">{getStr(item.title, language)}</p>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">{getStr(item.desc, language)}</p>
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
