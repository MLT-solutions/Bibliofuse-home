import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
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

function SyncTable({ source, copy }) {
  const matrix = MATRIX[source.id];

  return (
    <details className="mt-4 rounded-xl border border-slate-200 bg-white">
      <summary className="cursor-pointer px-4 py-3 text-sm font-bold text-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-700">
        {copy.tableSummary}
      </summary>
      <div className="overflow-x-auto px-4 pb-4">
        <table className="w-full min-w-[650px] border-collapse text-left text-sm" aria-label={`${copy.sources[SOURCES.indexOf(source)]} ${copy.tableLabel}`}>
          <thead>
            <tr className="border-b border-slate-200 text-xs uppercase tracking-wide text-slate-500">
              <th scope="col" className="py-3 pr-4">{copy.actionHeader}</th>
              {FORMATS.map((format) => <th key={format} scope="col" className="px-3 py-3 text-center">{format}</th>)}
            </tr>
          </thead>
          <tbody>
            {ACTION_IDS.map((actionId, rowIndex) => (
              <tr key={actionId} className="border-b border-slate-100 last:border-0">
                <th scope="row" className="py-3 pr-4 font-semibold text-slate-800">{copy.actions[rowIndex]}</th>
                {FORMATS.map((format) => {
                  const supported = matrix[actionId].includes(format);
                  return (
                    <td key={format} className={`px-3 py-3 text-center font-bold ${supported ? 'text-emerald-700' : 'text-slate-400'}`}>
                      <span aria-label={supported ? copy.supported : copy.notSupported}>{supported ? '✓' : '—'}</span>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </details>
  );
}

export default function ReaderSyncCompatibility() {
  const { t } = useTranslation();
  const { lang = 'en' } = useParams();
  const copy = t('redesign.comicReaderPage.syncCompatibility', { returnObjects: true });
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
        image={imagePath(0)}
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
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-600">{copy.note}</p>
          <p className="mt-5 text-sm font-semibold text-slate-600">{copy.formatList}</p>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8" aria-labelledby="sync-sources-heading">
        <div className="mx-auto max-w-7xl">
          <h2 id="sync-sources-heading" className="sr-only">{copy.sourcesHeading}</h2>
          <div className="space-y-10 sm:space-y-14">
            {SOURCES.map((source, index) => {
              const src = imagePath(index);
              const sourceName = copy.sources[index];
              return (
                <article key={source.id} id={source.id} className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6 lg:p-8">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-blue-50 text-xl font-black text-blue-800" aria-hidden="true">{source.icon}</span>
                    <div>
                      <h2 className="text-xl font-black tracking-tight sm:text-2xl">{sourceName}</h2>
                      <p className="mt-1 text-sm text-slate-600">{copy.imageCaption}</p>
                    </div>
                  </div>
                  <a href={src} target="_blank" rel="noreferrer" className="group block overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700" aria-label={`${copy.openImage}: ${sourceName}`}>
                    <img
                      src={src}
                      alt={copy.imageAlt.replace('{{source}}', sourceName)}
                      width="1600"
                      height="1000"
                      loading={index < 2 ? 'eager' : 'lazy'}
                      className="block h-auto w-full transition group-hover:brightness-[0.99]"
                    />
                  </a>
                  <SyncTable source={source} copy={copy} />
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
