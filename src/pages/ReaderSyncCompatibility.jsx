import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowDownUp, Cloud, FolderOpen, Server, Smartphone, Tablet } from 'lucide-react';
import SEO from '../components/SEO';

const SOURCES = [
  { id: 'icloud', icon: '☁' },
  { id: 'opds', icon: '▤' },
  { id: 'kavita', icon: 'K' },
  { id: 'komga', icon: '▥' },
  { id: 'calibre', icon: '▤' },
  { id: 'bibliofuse-host', icon: '▦' },
];

const FORMATS = ['TXT', 'EPUB', 'PDF', 'CBZ', 'CBR'];
const OVERVIEW_IMAGE = '/image/comicreader/sync-compatibility/en/sync-overview.png';
const SIDECAR_FILES = ['Book.epub', 'Book.epub.meta', 'Book.epub.annotations.json',
  'Book.epub.annotations.rich-v1.json', 'Book.epub.reading-stats.json', 'Book.epub.annotations-assets-v1/'];
const ACTION_IDS = ['progress', 'bookmark', 'annotation', 'tags', 'rating'];
const ALL_FORMATS = [...FORMATS];

// Keep this text-readable matrix aligned with the localized source cards.
// Empty arrays mean the source integration does not provide that sync action.
const MATRIX = {
  icloud: { progress: ALL_FORMATS, bookmark: ALL_FORMATS, annotation: ALL_FORMATS, tags: ALL_FORMATS, rating: ALL_FORMATS },
  opds: { progress: [], bookmark: [], annotation: [], tags: [], rating: [] },
  kavita: { progress: ['EPUB', 'PDF', 'CBZ', 'CBR'], bookmark: ['EPUB', 'PDF', 'CBZ', 'CBR'], annotation: ['EPUB'], tags: [], rating: [] },
  komga: { progress: ['EPUB', 'PDF', 'CBZ', 'CBR'], bookmark: [], annotation: [], tags: [], rating: [] },
  calibre: { progress: ['TXT', 'EPUB', 'CBZ', 'CBR'], bookmark: ['TXT', 'EPUB', 'CBZ', 'CBR'], annotation: ['TXT', 'EPUB'], tags: [], rating: [] },
  'bibliofuse-host': { progress: ALL_FORMATS, bookmark: ALL_FORMATS, annotation: ALL_FORMATS, tags: ALL_FORMATS, rating: ALL_FORMATS },
};

function SyncOverview({ copy }) {
  const overview = copy.overview;
  return (
    <section aria-labelledby="sync-overview-heading" className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-8">
      <h2 id="sync-overview-heading" className="text-2xl font-black tracking-tight">{overview.heading}</h2>
      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        <div className="flex flex-col justify-center rounded-2xl bg-blue-50 p-4 text-center">
          <Cloud className="mx-auto text-blue-700" size={32} aria-hidden="true" />
          <p className="mt-2 font-bold">{overview.remote}</p>
          <ArrowDownUp className="mx-auto my-3 text-teal-700" size={24} aria-hidden="true" />
          <div className="grid grid-cols-2 gap-2">
            {[[Smartphone, overview.direct], [Tablet, overview.download]].map(([Icon, label]) => (
              <div key={label} className="rounded-xl bg-white p-3 text-sm font-bold">
                <Icon className="mx-auto mb-2 text-blue-700" size={24} aria-hidden="true" />
                {label}
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm text-slate-700">{overview.reconnect}</p>
        </div>
        <div className="space-y-3">
          <div className="rounded-2xl bg-amber-50 p-4">
            <h3 className="flex items-center gap-2 font-bold"><FolderOpen size={20} aria-hidden="true" />{overview.sidecars}</h3>
            <p className="mt-1 text-sm font-semibold">{copy.sources[0]}</p>
            <p className="mt-2 text-sm text-slate-700">{overview.keepTogether}</p>
            <ul className="mt-2 space-y-1 break-all font-mono text-xs text-slate-800">
              {SIDECAR_FILES.map(file => <li key={file}>{file}</li>)}
            </ul>
            <p className="mt-2 text-xs text-slate-700">{overview.optional}</p>
          </div>
          <div className="rounded-2xl bg-teal-50 p-4">
            <h3 className="flex items-center gap-2 font-bold"><Server size={20} aria-hidden="true" />{overview.api}</h3>
            <p className="mt-1 text-sm font-semibold">{copy.sources.slice(2).join(' · ')}</p>
            <p className="mt-2 text-sm text-slate-700">{overview.apiDetail}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SyncTable({ source, copy, visible = false }) {
  const matrix = MATRIX[source.id];

  const table = (
    <div className="overflow-x-auto px-2 pb-4 sm:px-4">
      <table className={`w-full border-collapse text-left ${visible ? 'text-xs sm:text-sm' : 'min-w-[650px] text-sm'}`} aria-label={`${copy.sources[SOURCES.indexOf(source)]} ${copy.tableLabel}`}>
        <thead>
          <tr className="border-b border-slate-200 text-xs uppercase tracking-wide text-slate-500">
            <th scope="col" className="py-3 pr-2 sm:pr-4">{copy.actionHeader}</th>
            {FORMATS.map((format) => <th key={format} scope="col" className="px-1 py-3 text-center sm:px-3">{format}</th>)}
          </tr>
        </thead>
        <tbody>
          {ACTION_IDS.map((actionId, rowIndex) => (
            <tr key={actionId} className="border-b border-slate-100 last:border-0">
              <th scope="row" className="py-3 pr-2 font-semibold text-slate-800 sm:pr-4">{copy.actions[rowIndex]}</th>
              {FORMATS.map((format) => {
                const supported = matrix[actionId].includes(format);
                return (
                  <td key={format} className={`px-1 py-3 text-center font-bold sm:px-3 ${supported ? 'text-emerald-700' : 'text-slate-400'}`}>
                    <span aria-label={supported ? copy.supported : copy.notSupported}>{supported ? '✓' : '—'}</span>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  if (visible) return <div className="rounded-xl border border-slate-200 bg-slate-50">{table}</div>;

  return (
    <details className="mt-4 rounded-xl border border-slate-200 bg-white">
      <summary className="cursor-pointer px-4 py-3 text-sm font-bold text-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-700">
        {copy.tableSummary}
      </summary>
      {table}
    </details>
  );
}

export default function ReaderSyncCompatibility() {
  const { t } = useTranslation();
  const { lang = 'en' } = useParams();
  const copy = t('redesign.comicReaderPage.syncCompatibility', { returnObjects: true, lng: lang });
  const imagePath = (sourceIndex) => `/image/comicreader/sync-compatibility/${lang}/${sourceIndex + 1}-${SOURCES[sourceIndex].id}.png`;

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: copy.title,
    itemListElement: SOURCES.map((source, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: copy.sources[index],
      url: `https://bibliofuse.com/${lang}/comicreader/sync/#${source.id}`,
    })),
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <SEO
        title={copy.title}
        description={copy.description}
        canonical="/comicreader/sync"
        schemaType="website"
        schemaName="BiblioFuse Reader Sync Compatibility"
        faqItems={copy.faqs}
        additionalSchemas={[itemListSchema]}
        image={lang === 'en' ? imagePath(0) : imagePath(1)}
        imageWidth={1600}
        imageHeight={1000}
        breadcrumbs={[
          { name: 'BiblioFuse', url: `https://bibliofuse.com/${lang}/` },
          { name: 'BiblioFuse Reader', url: `https://bibliofuse.com/${lang}/comicreader/` },
          { name: copy.title, url: `https://bibliofuse.com/${lang}/comicreader/sync/` },
        ]}
      />

      <section className="bg-gradient-to-br from-blue-50 via-white to-teal-50 px-4 pb-12 pt-28 sm:px-6 sm:pb-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <nav aria-label={copy.breadcrumbLabel} className="mb-6 text-sm text-slate-600">
            <Link to={`/${lang}/comicreader/`} className="font-semibold text-blue-700 hover:text-blue-900">BiblioFuse Reader</Link>
            <span className="px-2" aria-hidden="true">/</span>
            <span aria-current="page">{copy.breadcrumbCurrent}</span>
          </nav>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-700">{copy.eyebrow}</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-5xl">{copy.title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-700">{copy.intro}</p>
          <div className="mt-6 max-w-4xl rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
            <h2 className="text-lg font-bold text-slate-950">{copy.platformHeading}</h2>
            <dl className="mt-3 grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {copy.platforms.map(({ devices, sources }) => (
                <div key={devices}>
                  <dt className="text-sm font-bold text-slate-900">{devices}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-slate-700">{sources}</dd>
                </div>
              ))}
            </dl>
          </div>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-600">{copy.note}</p>
          <p className="mt-5 text-sm font-semibold text-slate-600">{copy.formatList}</p>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8" aria-labelledby="sync-sources-heading">
        <div className="mx-auto max-w-7xl">
          <h2 id="sync-sources-heading" className="sr-only">{copy.sourcesHeading}</h2>
          <div className="space-y-10 sm:space-y-14">
            {lang === 'en' ? (
              <figure>
                <a href={OVERVIEW_IMAGE} target="_blank" rel="noreferrer" aria-label={copy.openOverview}
                  className="block overflow-hidden rounded-2xl border border-slate-200 bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700">
                  <img src={OVERVIEW_IMAGE} alt={copy.overviewAlt} width="1672" height="941"
                    decoding="async" className="block h-auto w-full" />
                </a>
                <figcaption className="mt-3 text-sm text-slate-700">{copy.overviewCaption}</figcaption>
              </figure>
            ) : <SyncOverview copy={copy} />}
            {SOURCES.map((source, index) => {
              const src = imagePath(index);
              const sourceName = copy.sources[index];
              const showImage = lang === 'en' || index !== 0;
              return (
                <article key={source.id} id={source.id} className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6 lg:p-8">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-blue-50 text-xl font-black text-blue-800" aria-hidden="true">{source.icon}</span>
                    <div>
                      <h2 className="text-xl font-black tracking-tight sm:text-2xl">{sourceName}</h2>
                      <p className="mt-1 text-sm text-slate-600">{copy.imageCaption}</p>
                    </div>
                  </div>
                  {showImage && <a href={src} target="_blank" rel="noreferrer" className="group block overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700" aria-label={`${copy.openImage}: ${sourceName}`}>
                    <img
                      src={src}
                      alt={copy.imageAlt.replace('{{source}}', sourceName)}
                      width="1600"
                      height="1000"
                      loading={lang !== 'en' && index < 2 ? 'eager' : 'lazy'}
                      className="block h-auto w-full transition group-hover:brightness-[0.99]"
                    />
                  </a>}
                  <SyncTable source={source} copy={copy} visible={!showImage} />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8" aria-labelledby="sync-faq-heading">
        <div className="mx-auto max-w-4xl">
          <h2 id="sync-faq-heading" className="text-3xl font-black tracking-tight">{copy.faqHeading}</h2>
          <div className="mt-6 space-y-3">
            {copy.faqs.map((faq) => (
              <details key={faq.q} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <summary className="cursor-pointer font-bold text-slate-900">{faq.q}</summary>
                <p className="mt-3 max-w-3xl leading-relaxed text-slate-700">{faq.a}</p>
              </details>
            ))}
          </div>
          <Link to={`/${lang}/comicreader/`} className="mt-8 inline-flex min-h-11 items-center rounded-xl border border-blue-700 px-5 py-3 text-sm font-bold text-blue-800 hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700">
            {copy.backToReader}
          </Link>
        </div>
      </section>
    </div>
  );
}
