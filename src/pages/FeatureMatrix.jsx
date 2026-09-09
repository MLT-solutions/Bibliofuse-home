import React, { useMemo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import {
  FEATURES,
  PLATFORMS,
  GROUPS,
  searchFeatures,
  searchIndex,
  releaseFor,
  SPECS,
  STORES,
} from '../data/feature-matrix';

// English fallbacks. The live strings come from src/locales/<lang>/translation.json
// under `featureMatrix`; every read goes through tr() below, which passes the value here
// as i18next's defaultValue. A missing key therefore degrades to readable English rather
// than to a raw key like "featureMatrix.searchLabel".
const COPY = {
  eyebrow: 'Feature matrix',
  title: 'What runs where',
  subtitle:
    'Every BiblioFuse feature, on every platform, with the release it arrived in. Search or filter to find the one you care about.',
  searchLabel: 'Search features',
  searchPlaceholder: 'Try "manga translation", "tategaki", "RTL", "Komga"…',
  platformsLabel: 'Platforms',
  groupsLabel: 'Category',
  sinceLabel: 'Changed since',
  sinceAny: 'Any time',
  proOnly: 'Pro features only',
  showUnreleased: 'Include features built but not yet released',
  all: 'All',
  reset: 'Reset',
  noResults: 'No features match those filters.',
  noResultsHint: 'Try a shorter search, or reset the filters.',
  countAll: '{{n}} features',
  countFiltered: '{{n}} of {{total}} features',
  legendShipped: 'Available',
  legendPartial: 'Partly available',
  legendMerged: 'Not yet released',
  legendNa: 'Not on this platform',
  proBadge: 'Pro',
  featureColumn: 'Feature',
  essentials: 'Platform essentials',
  whereToGet: 'Where to get it',
  notYet: 'not yet',
  mergedNote:
    'Rows marked “not yet” are built but are not in a public release for that platform.',
  coverage:
    'Covers the native apps from May 2026 onward. Earlier Flutter-era releases are not listed.',
};

// "Changed since" presets, resolved against today rather than hard-coded dates.
const SINCE_PRESETS = [
  { id: '', key: 'sinceAny', days: null },
  { id: '30d', key: 'since30', days: 30 },
  { id: '90d', key: 'since90', days: 90 },
  { id: '180d', key: 'since180', days: 180 },
];

function isoDaysAgo(days) {
  const d = new Date();
  d.setDate(d.getDate() - days);
  return d.toISOString().slice(0, 10);
}

const CELL = {
  shipped: { glyph: '●', className: 'text-emerald-500', labelKey: 'legendShipped' },
  partial: { glyph: '◐', className: 'text-amber-500', labelKey: 'legendPartial' },
  merged: { glyph: '·', className: 'text-slate-300', labelKey: 'legendMerged' },
  na: { glyph: '—', className: 'text-slate-200', labelKey: 'legendNa' },
};

/** One cell. Title carries the version, date and any per-cell caveat. */
function Cell({ cell, platformId, platformLabel, featureLabel, highlighted, tr }) {
  const meta = CELL[cell.status] ?? CELL.na;
  const version = releaseFor(platformId, cell.since);
  const statusLabel = tr(meta.labelKey);

  const detail = [];
  if (cell.status === 'shipped' || cell.status === 'partial') {
    detail.push(
      version
        ? tr('sinceVersion', null, { version, date: cell.since })
        : tr('sinceDate', null, { date: cell.since }),
    );
  } else if (cell.status === 'merged') {
    detail.push(tr('builtDate', null, { date: cell.since }));
  }
  if (cell.noteKey) detail.push(tr(`cellNotes.${cell.noteKey}`));

  const tooltip = [`${featureLabel} — ${platformLabel}`, statusLabel, ...detail].join('\n');

  return (
    <td
      className={`px-2 py-3 text-center align-middle ${highlighted ? 'bg-blue-50/60' : ''}`}
    >
      <abbr title={tooltip} className="cursor-help no-underline">
        <span className={`text-lg leading-none ${meta.className}`} aria-hidden="true">
          {meta.glyph}
        </span>
        <span className="sr-only">{`${statusLabel}${detail.length ? `. ${detail.join('. ')}` : ''}`}</span>
      </abbr>
      {cell.status === 'merged' && (
        <span className="mt-0.5 block text-[10px] font-medium uppercase tracking-wide text-slate-400">
          {tr('notYet')}
        </span>
      )}
      {(cell.status === 'shipped' || cell.status === 'partial') && version && (
        <span className="mt-0.5 block text-[10px] tabular-nums text-slate-400">
          {version}
        </span>
      )}
    </td>
  );
}

// Same badge art and sizing as the /comicreader comparison table, so the two pages
// read as one product rather than two designs.
function StoreLink({ platformId }) {
  const store = STORES[platformId];
  if (!store) return null;
  if (store.kind === 'link') {
    return (
      <a
        href={store.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[11px] font-semibold text-blue-600 hover:text-blue-700"
      >
        {store.label} →
      </a>
    );
  }
  const src =
    store.kind === 'microsoft'
      ? '/image/Microsoft_Store_badge.svg'
      : store.kind === 'play'
        ? '/image/Playstore.png'
        : '/image/Download_on_the_App_Store_Badge.svg.png';
  const alt =
    store.kind === 'microsoft'
      ? 'Get it from Microsoft'
      : store.kind === 'play'
        ? 'Get it on Google Play'
        : 'Download on the App Store';
  return (
    <a
      href={store.url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex transition hover:-translate-y-0.5"
    >
      <img src={src} alt={alt} className="h-8 w-auto object-contain" />
    </a>
  );
}

/** A text-valued cell from SPECS. Renders "—" for a null value. */
function SpecCell({ value, note }) {
  if (!value) {
    return (
      <td className="px-2 py-3 text-center align-middle">
        <span className="text-lg leading-none text-slate-200" aria-hidden="true">—</span>
        <span className="sr-only">—</span>
      </td>
    );
  }
  return (
    <td className="px-2 py-3 text-center align-middle">
      <span className="block text-[11px] font-medium leading-snug text-slate-700">{value}</span>
      {note && <span className="mt-0.5 block text-[10px] leading-tight text-slate-400">{note}</span>}
    </td>
  );
}

function Chip({ active, children, onClick, title }) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={title}
      aria-pressed={active}
      className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
        active
          ? 'bg-slate-900 text-white'
          : 'bg-white text-slate-500 ring-1 ring-slate-200 hover:text-slate-900'
      }`}
    >
      {children}
    </button>
  );
}

export default function FeatureMatrix() {
  const { t } = useTranslation();
  const [params, setParams] = useSearchParams();

  // Every visible string goes through here: locale value first, English COPY as fallback.
  const tr = useCallback(
    (key, fallback, values) =>
      t(`featureMatrix.${key}`, {
        defaultValue: fallback ?? COPY[key] ?? key,
        ...values,
      }),
    [t],
  );

  // All filter state lives in the query string, so any view is a shareable link.
  const query = params.get('q') ?? '';
  const since = params.get('since') ?? '';
  const proOnly = params.get('pro') === '1';
  const showMerged = params.get('unreleased') === '1';
  const activePlatforms = params.get('platforms')?.split(',').filter(Boolean) ?? [];
  const activeGroups = params.get('groups')?.split(',').filter(Boolean) ?? [];

  const setParam = useCallback(
    (key, value) => {
      const next = new URLSearchParams(params);
      if (!value) next.delete(key);
      else next.set(key, value);
      setParams(next, { replace: true });
    },
    [params, setParams],
  );

  const toggleInList = useCallback(
    (key, id) => {
      const current = params.get(key)?.split(',').filter(Boolean) ?? [];
      const next = current.includes(id)
        ? current.filter((x) => x !== id)
        : [...current, id];
      setParam(key, next.join(','));
    },
    [params, setParam],
  );

  const columns = activePlatforms.length
    ? PLATFORMS.filter((p) => activePlatforms.includes(p.id))
    : PLATFORMS;

  // Resolve the "changed since" preset to a date once per render.
  const sinceDate = useMemo(() => {
    const preset = SINCE_PRESETS.find((p) => p.id === since);
    if (preset?.days) return isoDaysAgo(preset.days);
    // Accept a raw ISO date too, so ?since=2026-08-01 works as a deep link.
    return /^\d{4}-\d{2}-\d{2}$/.test(since) ? since : null;
  }, [since]);

  const rows = useMemo(() => {
    let out = FEATURES;

    if (activeGroups.length) out = out.filter((f) => activeGroups.includes(f.group));
    if (proOnly) out = out.filter((f) => f.pro);
    out = searchFeatures(out, query);

    // A cell counts only if it is on a visible column — narrowing platforms should
    // drop rows that do nothing on the platforms you actually own.
    const visible = new Set(columns.map((c) => c.id));
    const counts = (cell) =>
      cell.status === 'shipped' ||
      cell.status === 'partial' ||
      (showMerged && cell.status === 'merged');

    out = out.filter((f) =>
      Object.entries(f.platforms).some(([pid, cell]) => visible.has(pid) && counts(cell)),
    );

    if (sinceDate) {
      out = out.filter((f) =>
        Object.entries(f.platforms).some(
          ([pid, cell]) => visible.has(pid) && cell.since && cell.since >= sinceDate,
        ),
      );
    }

    return out;
  }, [query, activeGroups, proOnly, showMerged, columns, sinceDate]);

  // Specs answer "what is this edition" and are filtered by the same search, so a
  // query for "EPUB" or "iCloud" surfaces them alongside the boolean rows.
  const specRows = useMemo(() => {
    const visible = new Set(columns.map((c) => c.id));
    let out = SPECS;
    if (proOnly) out = out.filter((sp) => sp.pro);
    const q = query.trim().toLowerCase();
    if (q) {
      const terms = q.split(/\s+/).filter(Boolean);
      out = out.filter((sp) => {
        const hay = [
          sp.label,
          sp.note ?? '',
          ...sp.aliases,
          ...Object.values(sp.values).filter(Boolean),
        ]
          .join(' ')
          .toLowerCase();
        return terms.every((t) =>
          new RegExp(`(^|[^a-z0-9])${t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`, 'i').test(hay),
        );
      });
    }
    // A date filter is asking "what changed"; specs carry no dates, so they drop out.
    if (sinceDate) return [];
    // Narrowing to a category is asking about the boolean groups only.
    if (activeGroups.length) return [];
    return out.filter((sp) => Object.entries(sp.values).some(([pid, v]) => visible.has(pid) && v));
  }, [query, proOnly, columns, sinceDate, activeGroups]);

  const grouped = useMemo(
    () =>
      GROUPS.map((g) => ({ ...g, features: rows.filter((f) => f.group === g.id) })).filter(
        (g) => g.features.length,
      ),
    [rows],
  );

  const isFiltered =
    Boolean(query) || Boolean(since) || proOnly || activePlatforms.length > 0 || activeGroups.length > 0;
  const shownCount = rows.length + specRows.length;
  const totalCount = FEATURES.length + SPECS.length;

  const highlight = sinceDate
    ? (cell) => Boolean(cell.since && cell.since >= sinceDate)
    : () => false;

  return (
    <div className="min-h-screen bg-[#F6F8FC] px-4 pb-24 pt-28 text-slate-950 sm:px-6 lg:px-8">
      <SEO
        title={tr('title')}
        description={tr('subtitle')}
        canonical="/features"
        schemaType="website"
      />

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
            {tr('eyebrow')}
          </div>
          <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-black leading-tight tracking-tight text-slate-950">
            {tr('title')}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-500">
            {tr('subtitle')}
          </p>
        </div>

        {/* Controls */}
        <div className="mb-6 rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-100 sm:p-6">
          <label className="block">
            <span className="sr-only">{tr('searchLabel')}</span>
            <input
              type="search"
              value={query}
              onChange={(e) => setParam('q', e.target.value)}
              placeholder={tr('searchPlaceholder')}
              className="w-full rounded-2xl border-0 bg-slate-50 px-4 py-3 text-base text-slate-900 ring-1 ring-slate-200 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-blue-500"
            />
          </label>

          <div className="mt-4 space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="mr-1 text-xs font-bold uppercase tracking-wider text-slate-400">
                {tr('platformsLabel')}
              </span>
              <Chip active={!activePlatforms.length} onClick={() => setParam('platforms', '')}>
                {tr('all')}
              </Chip>
              {PLATFORMS.map((p) => (
                <Chip
                  key={p.id}
                  active={activePlatforms.includes(p.id)}
                  onClick={() => toggleInList('platforms', p.id)}
                  title={p.sublabel ?? undefined}
                >
                  {p.label}
                </Chip>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="mr-1 text-xs font-bold uppercase tracking-wider text-slate-400">
                {tr('groupsLabel')}
              </span>
              <Chip active={!activeGroups.length} onClick={() => setParam('groups', '')}>
                {tr('all')}
              </Chip>
              {GROUPS.map((g) => (
                <Chip
                  key={g.id}
                  active={activeGroups.includes(g.id)}
                  onClick={() => toggleInList('groups', g.id)}
                >
                  {tr(`groups.${g.id}`, g.label)}
                </Chip>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="mr-1 text-xs font-bold uppercase tracking-wider text-slate-400">
                {tr('sinceLabel')}
              </span>
              {SINCE_PRESETS.map((p) => (
                <Chip key={p.id} active={since === p.id} onClick={() => setParam('since', p.id)}>
                  {tr(p.key)}
                </Chip>
              ))}
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-slate-100 pt-4">
            <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-600">
              <input
                type="checkbox"
                checked={proOnly}
                onChange={(e) => setParam('pro', e.target.checked ? '1' : '')}
                className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
              />
              {tr('proOnly')}
            </label>
            <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-600">
              <input
                type="checkbox"
                checked={showMerged}
                onChange={(e) => setParam('unreleased', e.target.checked ? '1' : '')}
                className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
              />
              {tr('showUnreleased')}
            </label>

            <span className="ml-auto flex items-center gap-3 text-sm text-slate-400">
              <span className="tabular-nums">
                {isFiltered
                  ? t('featureMatrix.countFiltered', {
                      defaultValue: COPY.countFiltered,
                      n: shownCount,
                      total: totalCount,
                    })
                  : t('featureMatrix.countAll', {
                      defaultValue: COPY.countAll,
                      n: totalCount,
                    })}
              </span>
              {isFiltered && (
                <button
                  type="button"
                  onClick={() => setParams(new URLSearchParams(), { replace: true })}
                  className="font-semibold text-blue-600 hover:text-blue-700"
                >
                  {tr('reset')}
                </button>
              )}
            </span>
          </div>
        </div>

        {/* Table */}
        {grouped.length === 0 && specRows.length === 0 ? (
          <div className="rounded-3xl bg-white p-12 text-center shadow-sm ring-1 ring-slate-100">
            <p className="text-base font-semibold text-slate-900">{tr('noResults')}</p>
            <p className="mt-1 text-sm text-slate-500">{tr('noResultsHint')}</p>
          </div>
        ) : (
          <div className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-100">
            {/* The table is its own scroll region on BOTH axes. `overflow-x: auto`
                computes `overflow-y` to `auto` as well, so a header sticking against
                the viewport can never work here — it sticks to this container instead.
                Giving the container a viewport-relative height makes that the useful
                behaviour: the header pins while the rows scroll under it. */}
            <div className="max-h-[calc(100vh-7rem)] overflow-auto">
              <table className="w-full min-w-[720px] border-collapse text-left">
                <thead>
                  {/* sticky-top keeps the platform names visible for the whole scroll;
                      top-16 clears the fixed site navigation. */}
                  <tr className="shadow-[0_1px_0_0_rgb(241_245_249)]">
                    <th
                      scope="col"
                      className="sticky left-0 top-0 z-30 bg-white px-5 py-4 text-xs font-bold uppercase tracking-wider text-slate-400"
                    >
                      {tr('featureColumn')}
                    </th>
                    {columns.map((p) => (
                      <th
                        key={p.id}
                        scope="col"
                        className="sticky top-0 z-20 bg-white px-2 py-4 text-center text-xs font-bold text-slate-600"
                      >
                        {p.label}
                        <span className="mt-0.5 block text-[10px] font-medium tabular-nums text-slate-400">
                          {p.version}
                        </span>
                        {p.sublabel && (
                          <span className="block text-[9px] font-medium text-slate-400">{p.sublabel}</span>
                        )}
                      </th>
                    ))}
                  </tr>
                </thead>

                {/* Store links, then the text-valued essentials, then the boolean grid. */}
                <tbody>
                  <tr className="border-t border-slate-50">
                    <th
                      scope="row"
                      className="sticky left-0 z-10 bg-white px-5 py-3 text-left text-xs font-bold uppercase tracking-wider text-slate-400"
                    >
                      {tr('whereToGet')}
                    </th>
                    {columns.map((p) => (
                      <td key={p.id} className="px-2 py-3 text-center align-middle">
                        <StoreLink platformId={p.id} />
                      </td>
                    ))}
                  </tr>
                </tbody>

                {specRows.length > 0 && (
                  <tbody>
                    <tr>
                      <th
                        scope="colgroup"
                        colSpan={columns.length + 1}
                        className="sticky left-0 z-10 bg-slate-50 px-5 py-2 text-left text-[11px] font-bold uppercase tracking-[0.12em] text-slate-400"
                      >
                        {tr('essentials')}
                      </th>
                    </tr>
                    {specRows.map((sp) => (
                      <tr key={sp.id} className="border-t border-slate-50 hover:bg-slate-50/50">
                        <th
                          scope="row"
                          className="sticky left-0 z-10 max-w-xs bg-white px-5 py-3 text-left font-normal hover:bg-slate-50/50"
                        >
                          <span className="flex flex-wrap items-center gap-1.5">
                            <span className="text-sm font-semibold text-slate-900">
                              {tr(`specs.${sp.id}.label`, sp.label)}
                            </span>
                            {sp.pro && (
                              <span className="rounded bg-blue-50 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-blue-700 ring-1 ring-blue-100">
                                {tr('proBadge')}
                              </span>
                            )}
                          </span>
                          {sp.note && (
                            <span className="mt-0.5 block text-xs leading-snug text-slate-400">
                              {tr(`specs.${sp.id}.note`, sp.note)}
                            </span>
                          )}
                        </th>
                        {columns.map((p) => (
                          <SpecCell
                            key={p.id}
                            value={tr(`specs.${sp.id}.values.${p.id}`, sp.values[p.id] ?? '')}
                            note={sp.notes?.[p.id] ? tr(`specs.${sp.id}.notes.${p.id}`, sp.notes[p.id]) : null}
                          />
                        ))}
                      </tr>
                    ))}
                  </tbody>
                )}

                {grouped.map((group) => (
                  <tbody key={group.id}>
                    <tr>
                      <th
                        scope="colgroup"
                        colSpan={columns.length + 1}
                        className="sticky left-0 z-10 bg-slate-50 px-5 py-2 text-left text-[11px] font-bold uppercase tracking-[0.12em] text-slate-400"
                      >
                        {tr(`groups.${group.id}`, group.label)}
                      </th>
                    </tr>
                    {group.features.map((f) => (
                      <tr key={f.id} className="border-t border-slate-50 hover:bg-slate-50/50">
                        <th
                          scope="row"
                          className="sticky left-0 z-10 max-w-xs bg-white px-5 py-3 text-left font-normal hover:bg-slate-50/50"
                        >
                          <span className="flex flex-wrap items-center gap-1.5">
                            <span className="text-sm font-semibold text-slate-900">
                              {tr(`features.${f.id}.label`, f.label)}
                            </span>
                            {f.pro && (
                              <span className="rounded bg-blue-50 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-blue-700 ring-1 ring-blue-100">
                                {tr('proBadge')}
                              </span>
                            )}
                          </span>
                          {f.note && (
                            <span className="mt-0.5 block text-xs leading-snug text-slate-400">
                              {tr(`features.${f.id}.note`, f.note)}
                            </span>
                          )}
                        </th>
                        {columns.map((p) => (
                          <Cell
                            key={p.id}
                            cell={f.platforms[p.id]}
                            platformId={p.id}
                            platformLabel={p.label}
                            featureLabel={tr(`features.${f.id}.label`, f.label)}
                            highlighted={highlight(f.platforms[p.id])}
                            tr={tr}
                          />
                        ))}
                      </tr>
                    ))}
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        )}

        {/* Legend */}
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 px-2 text-xs text-slate-500">
          <span className="flex items-center gap-1.5">
            <span className="text-base leading-none text-emerald-500">●</span>
            {tr('legendShipped')}
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-base leading-none text-amber-500">◐</span>
            {tr('legendPartial')}
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-[10px] font-medium uppercase tracking-wide text-slate-400">
              {tr('notYet')}
            </span>
            {tr('legendMerged')}
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-base leading-none text-slate-300">—</span>
            {tr('legendNa')}
          </span>
        </div>

        <p className="mt-3 px-2 text-xs leading-relaxed text-slate-400">
          {`${tr('coverage')} ${tr('mergedNote')}`}
        </p>
      </div>
    </div>
  );
}
