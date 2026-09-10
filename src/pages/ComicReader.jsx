import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import StickyDownloadBar from '../components/StickyDownloadBar';
import DevicePills from '../components/DevicePills';
import ReaderFamilyGuide from '../components/ReaderFamilyGuide';

const appStoreUrl = 'https://apps.apple.com/kw/app/bibliofuse-reader-compress/id6758330093';
const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.MLOGICTECH.bibliofusereader&hl=en-US&ah=423jBOeRoug68zOF2xwCeFuKVQQ';
const bibliofusePcUrl = 'https://apps.microsoft.com/store/detail/9N77MZ509ML2';
const nasRepoUrl = 'https://github.com/MLT-solutions/bibliofuse-nas-distribution';
// The hero's Docker and Synology badges point at the two install guides rather
// than at the repo root, which is what people actually need first. The repo
// root and the releases list are reachable from the "NAS on GitHub" badge and
// from HOSTS.docker/synology.appLink in ReaderFamilyGuide.jsx — those two are
// deliberately different targets now, so they are no longer kept in sync.
//
// Both guides are translated in the repo as docs/<guide>.<lang>.md, with
// English at docs/<guide>.md and Chinese at docs/<guide>.zh-CN.md. Verified
// against the repo's docs/ listing on 2026-09-10 — every site locale except en
// has a file. If a locale is ever dropped upstream this silently 404s, so
// re-check the listing before adding a locale here.
const NAS_DOC_LOCALES = { es: 'es', fr: 'fr', nl: 'nl', pt: 'pt', ru: 'ru', zh: 'zh-CN', ja: 'ja', ko: 'ko', id: 'id', ms: 'ms' };
function nasDocUrl(guide, lang) {
  const suffix = NAS_DOC_LOCALES[lang] ? `.${NAS_DOC_LOCALES[lang]}` : '';
  return `${nasRepoUrl}/blob/main/docs/${guide}${suffix}.md`;
}
// Deliberately our own path, not a discord.gg URL. The invite code lives in exactly one
// place — public/_redirects — so the apps, the store listing and the NAS README can all
// link bibliofuse.com/discord and a dead invite becomes a one-line fix. Do not inline an
// invite code here again.
const discordUrl = '/discord';
const imageBase = '/image/offline-apps/bibliofuse';
const featureMediaBase = '/image/comicreader/feature-summary';

// The four outbound "where do I get the host / where do I ask for help" links
// under the store badges. `docker` and `synology` use stroke icons; `github`
// and `discord` use their filled brand marks, hence the two render paths.
const HOST_BADGES = {
  docker: {
    sub: 'Self-host free',
    label: 'Docker',
    icon: (
      <>
        <rect x="3" y="3" width="7.5" height="7.5" rx="1.2" />
        <rect x="13.5" y="3" width="7.5" height="7.5" rx="1.2" />
        <rect x="3" y="13.5" width="7.5" height="7.5" rx="1.2" />
        <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.2" />
      </>
    ),
  },
  synology: {
    sub: 'Package Center',
    label: 'Synology',
    icon: (
      <>
        <rect x="5" y="2.5" width="14" height="19" rx="1.8" />
        <path d="M8 7h8M8 12h8M8 17h8" />
      </>
    ),
  },
  github: {
    sub: 'Source & releases',
    label: 'NAS on GitHub',
    filled: 'M12 .5a11.5 11.5 0 00-3.64 22.42c.57.1.78-.25.78-.55v-1.94c-3.2.7-3.87-1.54-3.87-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 015.74 0c2.18-1.49 3.14-1.18 3.14-1.18.63 1.59.23 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.06.78 2.14v3.17c0 .3.2.66.79.55A11.5 11.5 0 0012 .5z',
  },
  discord: {
    sub: 'Community & support',
    label: 'Discord',
    filled: 'M20.32 4.57A19.8 19.8 0 0015.43 3l-.36.76a14.7 14.7 0 014.2 1.42 13.9 13.9 0 00-11.7 0 14.6 14.6 0 014.2-1.42L11.41 3a19.8 19.8 0 00-4.89 1.57C3.4 9.3 2.56 13.96 2.98 18.55a19.7 19.7 0 006.02 3.05l.79-1.24a12.9 12.9 0 01-2.15-1.04l.53-.42a14.1 14.1 0 0011.5 0l.53.42a12.9 12.9 0 01-2.16 1.05l.79 1.23a19.7 19.7 0 006.03-3.05c.5-5.31-.85-9.93-3.54-13.98zM8.9 15.67c-1.16 0-2.11-1.06-2.11-2.37 0-1.31.93-2.38 2.11-2.38 1.19 0 2.14 1.08 2.12 2.38 0 1.31-.94 2.37-2.12 2.37zm6.2 0c-1.16 0-2.11-1.06-2.11-2.37 0-1.31.93-2.38 2.11-2.38 1.19 0 2.14 1.08 2.12 2.38 0 1.31-.93 2.37-2.12 2.37z',
  },
};

function HostBadge({ type, href }) {
  const { sub, label, icon, filled } = HOST_BADGES[type];
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex h-12 items-center gap-2.5 rounded-xl border border-slate-300 bg-white px-4 text-left transition hover:-translate-y-0.5 hover:border-slate-400"
    >
      <span className="grid h-7 w-7 flex-shrink-0 place-items-center rounded-lg bg-slate-100 text-slate-600">
        {filled ? (
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d={filled} />
          </svg>
        ) : (
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            {icon}
          </svg>
        )}
      </span>
      <span className="leading-tight">
        <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">{sub}</span>
        <span className="block text-sm font-bold text-slate-900">{label}</span>
      </span>
    </a>
  );
}

function StoreBadge({ type, href, size = 'lg' }) {
  const sizes = size === 'sm' ? 'h-10' : 'h-12';
  const src = type === 'microsoft' ? '/image/Microsoft_Store_badge.svg' : type === 'play' ? '/image/Playstore.png' : '/image/Download_on_the_App_Store_Badge.svg.png';
  const alt = type === 'microsoft' ? 'Get it from Microsoft' : type === 'play' ? 'Get it on Google Play' : 'Download on the App Store';
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex transition hover:-translate-y-0.5">
      <img src={src} alt={alt} className={`${sizes} w-auto object-contain`} />
    </a>
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

function tintClass(tint) {
  if (tint === 'blue') return 'bg-blue-50 text-blue-700';
  if (tint === 'teal') return 'bg-teal-50 text-teal-700';
  if (tint === 'violet') return 'bg-violet-50 text-violet-700';
  return 'bg-orange-50 text-orange-700';
}

function renderLocalizedTableCell(cell) {
  if (cell === '-') return <DashIcon />;
  const str = String(cell);
  if (str.includes('||')) {
    return (
      <div className="flex flex-col items-center gap-1.5">
        {str.split('||').map((line, i) => {
          const [main, sub] = line.split('|');
          return (
            <div key={i} className="text-center leading-snug">
              <span className={`text-xs ${i === 0 ? 'font-semibold text-slate-900' : 'text-slate-500'}`}>{main}</span>
              {sub && <span className="block text-[10px] text-slate-400">{sub}</span>}
            </div>
          );
        })}
      </div>
    );
  }
  const [big, note] = str.split('|');
  return (
    <span className="leading-snug text-slate-800">
      <span className={note ? 'block font-bold text-slate-950' : ''}>{big}</span>
      {note && <span className="mt-1 block text-[11px] leading-tight text-slate-500">{note}</span>}
    </span>
  );
}

// Which edition to download. This replaced an 11-row feature comparison on 2026-09-10:
// 8 of those rows were already in /features/ more granularly (27 features x 8 platforms,
// with status and since-dates), so the table was mostly duplication. What it did uniquely
// was carry the purchase model per edition — that is what survives here, plus a link out
// to the matrix for the per-feature detail.
// Store URLs live here, not in the translation files. They used to be an `href` on each
// item in all 11 locale JSONs, which meant 11 copies of every link and no way to notice
// when one rotted: on 2026-09-10 the PC card was returning 410 and the Android card 404
// (a stale Store ID and a wrong package name) while the same two links in the hero above
// were fine. One constant per store, shared with the hero, is the fix.
const EDITION_HREFS = {
  apple: appStoreUrl,
  pc: bibliofusePcUrl,
  android: playStoreUrl,
  nas: nasRepoUrl,
};

// Cropped from the four wide "family" device-lineup renders supplied 2026-09-10
// (source: /Users/mattclaw/Downloads/bibliofuse family/*.png, 1586x992 each — mostly
// empty gradient background around the actual device art). Cropped to the device
// grouping and downsized to 900px wide JPEGs (62-102 KB) rather than used as full
// backgrounds: these cards are small (~250x150 in the 4-column grid), so a photographic
// background behind the card text would need a heavy scrim for legibility and would
// mostly show empty gradient once fit to that size. A thumbnail strip keeps the
// per-platform visual identity the images add without either problem.
const EDITION_THUMBS = {
  apple: '/image/comicreader/editions/apple.jpg',
  pc: '/image/comicreader/editions/pc.jpg',
  android: '/image/comicreader/editions/android.jpg',
  nas: '/image/comicreader/editions/nas.jpg',
};

function EditionChooser({ lang }) {
  const { t } = useTranslation();
  const e = t('redesign.comicReaderPage.editions', { returnObjects: true });
  const items = (Array.isArray(e.items) ? e.items : []).filter((it) => EDITION_HREFS[it.key]);
  const tints = {
    blue: 'border-blue-200 bg-blue-50/60',
    orange: 'border-orange-200 bg-orange-50/60',
    teal: 'border-teal-200 bg-teal-50/60',
    violet: 'border-violet-200 bg-violet-50/60',
  };
  return (
    <section className="border-y border-slate-200/70 bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-2xl">
          <div className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">{e.eyebrow}</div>
          <h2 className="text-xl font-black tracking-tight text-slate-950">{e.title}</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">{e.desc}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <a
              key={it.key}
              href={EDITION_HREFS[it.key]}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col overflow-hidden rounded-2xl border transition hover:-translate-y-0.5 hover:shadow-lg ${tints[it.tint] || tints.blue}`}
            >
              {EDITION_THUMBS[it.key] && (
                <span className="block aspect-[16/10] w-full overflow-hidden bg-white">
                  <img
                    src={EDITION_THUMBS[it.key]}
                    alt=""
                    width="900"
                    height="500"
                    loading="lazy"
                    className="h-full w-full object-cover object-bottom transition duration-300 group-hover:scale-[1.03]"
                  />
                </span>
              )}
              <span className="flex flex-1 flex-col p-5">
              <span className="mb-2 inline-flex w-fit rounded-md bg-white/80 px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-slate-600">
                {it.badge}
              </span>
              <span className="text-sm font-black leading-snug text-slate-950">{it.name}</span>
              <span className="mt-1 flex-1 text-xs leading-relaxed text-slate-600">{it.subtitle}</span>
              <span className="mt-4 text-xs font-bold text-slate-900 group-hover:text-blue-700">↗</span>
              </span>
            </a>
          ))}
        </div>
        <Link to={`/${lang}/features/`} className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 hover:text-blue-700">
          {e.matrixCta} →
        </Link>
      </div>
    </section>
  );
}

function FeatureVideo({ alt }) {
  const videoRef = React.useRef(null);
  const [isPlaying, setIsPlaying] = React.useState(false);

  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return undefined;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    }, { threshold: 0.35 });

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  };

  return (
    <div className="relative mx-auto w-full max-w-[680px]">
      <div className="absolute -inset-10 -z-10 rounded-full bg-[radial-gradient(circle,rgba(20,194,166,0.16),transparent_70%)]" />
      <video
        ref={videoRef}
        aria-label={alt}
        className="block aspect-[4/3] w-full object-contain [clip-path:inset(0_0.5%_0_0)]"
        loop
        muted
        playsInline
        preload="metadata"
        poster={`${featureMediaBase}/navigation-demo-poster.jpg`}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src={`${featureMediaBase}/navigation-demo-alpha.mp4`} type='video/mp4; codecs="hvc1"' />
        <source src={`${featureMediaBase}/navigation-demo-fallback.mp4`} type='video/mp4; codecs="avc1.640028"' />
      </video>
      <button
        type="button"
        onClick={togglePlayback}
        className="absolute bottom-3 right-3 inline-flex h-10 items-center gap-2 rounded-full border border-slate-200/80 bg-white/95 px-3.5 text-xs font-bold text-slate-800 shadow-lg backdrop-blur transition hover:-translate-y-0.5 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
        aria-label={isPlaying ? 'Pause navigation demo' : 'Play navigation demo'}
      >
        {isPlaying ? (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 5h4v14H7zM13 5h4v14h-4z" /></svg>
        ) : (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
        )}
        {isPlaying ? 'Pause' : 'Play demo'}
      </button>
    </div>
  );
}

function ReaderFeatureRow({ eyebrow, title, desc, bullets, image, alt, reverse, kind = 'portrait', accent = 'blue', footnote, badge }) {
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
        <h2 className="mt-3 text-[clamp(1.6rem,2.8vw,2.25rem)] font-black leading-[1.05] tracking-tight text-slate-950">{title}</h2>
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
        {kind === 'portrait' ? (
          <div className="relative mx-auto max-w-[430px]">
            <div className="absolute -inset-12 -z-10 rounded-full bg-[radial-gradient(circle,rgba(45,124,246,0.16),transparent_70%)]" />
            <div className="overflow-hidden rounded-[2rem] border border-blue-100 bg-[#edf5ff] shadow-2xl">
              <img src={image} alt={alt} className="block h-auto w-full" loading="lazy" />
            </div>
          </div>
        ) : kind === 'video' ? (
          <FeatureVideo alt={alt} />
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
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl sm:p-10">
      <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-center">
        <span className="inline-flex self-start items-center gap-2 rounded-full bg-teal-50 px-3 py-1.5 text-xs font-black uppercase tracking-wider text-teal-700">{t('redesign.toolsHighlight.badge')}</span>
        <h2 className="text-2xl font-black tracking-tight text-slate-950">{t('redesign.toolsHighlight.title')}</h2>
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
            <h3 className="mb-1.5 font-black text-slate-950">{tool.title}</h3>
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

function VisionProSection() {
  const { t } = useTranslation();
  const v = t('redesign.comicReaderPage.vision', { returnObjects: true });
  const modes = [
    { key: 'shelves', icon: <path d="M4 6h16M4 12h16M4 18h16" /> },
    { key: 'grid', icon: <><rect x="4" y="4" width="7" height="7" rx="1" /><rect x="13" y="4" width="7" height="7" rx="1" /><rect x="4" y="13" width="7" height="7" rx="1" /><rect x="13" y="13" width="7" height="7" rx="1" /></> },
    { key: 'wall', icon: <path d="M4 8l16-3v11L4 19z" /> },
  ];
  const inputs = [
    { key: 'eyes', icon: <><circle cx="12" cy="12" r="3" /><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6z" /></> },
    { key: 'lookScroll', icon: <><path d="M12 4v9" /><path d="M8.5 8l3.5-4 3.5 4" /><path d="M6 16.5c1.5 2 4 3.5 6 3.5s4.5-1.5 6-3.5" /></> },
    { key: 'devices', icon: <><rect x="6" y="3" width="12" height="18" rx="6" /><path d="M12 7v4" /></> },
    { key: 'window', icon: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18" /></> },
  ];

  return (
    <section id="apple-vision-pro" className="relative overflow-hidden bg-[#0a0f1e] py-20 sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(45,124,246,0.22),transparent_45%),radial-gradient(circle_at_85%_80%,rgba(20,194,166,0.16),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-200">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            {v.eyebrow}
          </div>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-black leading-[1.05] tracking-tight text-white">{v.title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-300">{v.desc}</p>
          <div className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-white">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8 5.8 21.3l2.4-7.4L2 9.4h7.6z" /></svg>
            {v.badge}
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
          <img src={`/image/comicreader/vision/spatial-modes.jpg`} alt={v.imageAltModes} className="block w-full" loading="lazy" />
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {modes.map((m) => (
            <div key={m.key} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <span className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-blue-500/15 text-blue-300">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">{m.icon}</svg>
              </span>
              <h3 className="mb-1.5 text-base font-black text-white">{v.modes[m.key].title}</h3>
              <p className="text-sm leading-relaxed text-slate-400">{v.modes[m.key].body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="order-2 lg:order-1">
            <h3 className="text-[clamp(1.5rem,2.6vw,2rem)] font-black tracking-tight text-white">{v.inputTitle}</h3>
            <ul className="mt-6 space-y-4">
              {inputs.map((it) => (
                <li key={it.key} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-8 w-8 flex-shrink-0 place-items-center rounded-lg bg-white/[0.06] text-teal-300">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">{it.icon}</svg>
                  </span>
                  <span className="leading-snug text-slate-200"><strong className="font-bold text-white">{v.input[it.key].title}</strong> <span className="text-slate-400">— {v.input[it.key].body}</span></span>
                </li>
              ))}
            </ul>
            <p className="mt-6 max-w-md border-l-2 border-blue-400/40 pl-3 text-sm leading-relaxed text-slate-400">{v.streamNote}</p>
          </div>
          <div className="order-1 overflow-hidden rounded-3xl border border-white/10 shadow-2xl lg:order-2">
            <img src={`/image/comicreader/vision/designed-for-vision-pro.jpg`} alt={v.imageAltReading} className="block w-full" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}

// Apple TV, added 2026-09-10. Kept lighter than VisionProSection above it: the artwork is
// a single wide infographic that already carries the Siri Remote map and the feature
// legend, so the text beside it says the four things the picture cannot — and the LAN-only
// caveat, which matters because someone will otherwise buy expecting to read away from
// home. That limit is real and documented: tvOS has no iCloud Documents entitlement and
// the Tailscale path ships disabled (see ReaderFamilyGuide.jsx's CLIENTS.appletv note).
function AppleTvSection() {
  const { t } = useTranslation();
  const a = t('redesign.comicReaderPage.appletv', { returnObjects: true });
  const steps = Array.isArray(a.steps) ? a.steps : [];
  const features = Array.isArray(a.features) ? a.features : [];
  const icons = [
    <><rect x="3" y="4" width="18" height="12" rx="1.6" /><path d="M8 20h8M12 16v4" /></>,
    <><path d="M12 20v-9" /><path d="M8.5 14.5L12 11l3.5 3.5" /><circle cx="12" cy="4.5" r="1.6" /></>,
    <><path d="M4 7h16M4 12h10M4 17h16" /></>,
    <><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8.5 11V8a3.5 3.5 0 017 0v3" /></>,
  ];

  return (
    <section id="apple-tv" className="relative overflow-hidden bg-[#070b16] py-20 sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_12%,rgba(139,92,246,0.20),transparent_42%),radial-gradient(circle_at_10%_85%,rgba(45,124,246,0.16),transparent_38%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-violet-200">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
            {a.eyebrow}
          </div>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-black leading-[1.05] tracking-tight text-white">{a.title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-300">{a.desc}</p>
          <div className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-white">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h16v11H4z" opacity="0.7" /><path d="M9 20l3-3 3 3z" /></svg>
            {a.badge}
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
          <img
            src="/image/comicreader/appletv/controls.jpg"
            alt={a.imageAlt}
            width="2000"
            height="1125"
            loading="lazy"
            className="block w-full"
          />
        </div>

        <ol className="mt-8 grid gap-5 sm:grid-cols-3">
          {steps.map((step, i) => (
            <li key={step.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <span className="mb-3 grid h-8 w-8 place-items-center rounded-full bg-violet-500/20 text-sm font-black text-violet-200">
                {i + 1}
              </span>
              <h3 className="mb-1.5 text-base font-black text-white">{step.title}</h3>
              <p className="text-sm leading-relaxed text-slate-400">{step.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {features.map((f, i) => (
            <div key={f.title} className="flex items-start gap-3.5 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <span className="mt-0.5 grid h-9 w-9 flex-shrink-0 place-items-center rounded-xl bg-white/[0.06] text-teal-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">{icons[i] || icons[0]}</svg>
              </span>
              <span className="leading-snug">
                <strong className="block text-sm font-black text-white">{f.title}</strong>
                <span className="mt-1 block text-sm leading-relaxed text-slate-400">{f.body}</span>
              </span>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-3xl border-l-2 border-violet-400/40 pl-3.5 text-sm leading-relaxed text-slate-400">
          {a.lanNote}
        </p>
      </div>
    </section>
  );
}

const USAGE_GUIDE_ITEMS = [
  {
    key: 'mobile',
    image: '/image/comicreader/usage-guide/mobile.jpg',
    icon: <><rect x="7" y="3" width="10" height="18" rx="2.4" /><path d="M11 18h2" /></>,
  },
  {
    key: 'biggerScreen',
    image: '/image/comicreader/usage-guide/bigger-screen.jpg',
    icon: <><rect x="3" y="4" width="18" height="12" rx="1.6" /><path d="M8 20h8M12 16v4" /></>,
  },
  {
    key: 'stream',
    image: '/image/comicreader/usage-guide/stream.jpg',
    icon: <><path d="M12 20a8 8 0 10-8-8" /><path d="M12 20v-5M9 17l3 3 3-3" /></>,
  },
  {
    key: 'tv',
    image: '/image/comicreader/usage-guide/tv.jpg',
    icon: <><rect x="2" y="4" width="20" height="13" rx="1.8" /><path d="M8 21l4-3 4 3" /></>,
  },
  {
    key: 'icloud',
    image: '/image/comicreader/usage-guide/icloud.jpg',
    icon: <><path d="M7 18a4.5 4.5 0 01-.5-8.98A5.5 5.5 0 0117 8.5a4 4 0 01-1 7.5H7z" /><path d="M12 11v6M9.5 14.5L12 17l2.5-2.5" /></>,
  },
];

function UsageGuide() {
  const { t } = useTranslation();
  const g = t('redesign.comicReaderPage.usageGuide', { returnObjects: true });

  return (
    <section id="usage-guide" className="bg-[#f5f8ff] py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">{g.eyebrow}</div>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black leading-tight tracking-tight text-slate-950">{g.title}</h2>
          <p className="mt-4 text-slate-600">{g.desc}</p>
        </div>

        <div className="space-y-4">
          {USAGE_GUIDE_ITEMS.map((item) => {
            const entry = g.items[item.key];
            return (
              <details key={item.key} className="group rounded-2xl border border-slate-200 bg-white shadow-sm">
                <summary className="flex cursor-pointer list-none items-center gap-4 px-5 py-4">
                  <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-600">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">{item.icon}</svg>
                  </span>
                  <span className="flex-1 text-sm font-semibold text-slate-900">{entry.q}</span>
                  <svg className="flex-shrink-0 transition-transform group-open:rotate-180" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 pl-[4.75rem] text-sm leading-relaxed text-slate-600">
                  <p>{entry.a}</p>
                  <a
                    href={item.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700"
                  >
                    {g.viewImageLabel}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M9 7h8v8" /></svg>
                  </a>
                </div>
              </details>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const ComicReader = () => {
  const { t } = useTranslation();
  const { lang = 'en' } = useParams();
  // The FAQPage graph is built from the "Five ways to read" answers (UsageGuide)
  // — they are the only Q&A left on this page. The deeper setup FAQs moved to
  // /guide/ and the purchase question to the homepage FAQ on 2026-09-10, so
  // nothing here would otherwise be marked up.
  const usageItems = t('redesign.comicReaderPage.usageGuide.items', { returnObjects: true });
  const faqItemsForSchema = USAGE_GUIDE_ITEMS
    .map(({ key }) => usageItems?.[key])
    .filter((item) => item?.q && item?.a)
    .map((item) => ({ q: item.q, a: item.a }));

  return (
    <div className="overflow-x-hidden bg-white">
      <SEO
        title={`BiblioFuse Reader - ${t('redesign.readerSection.title')}`}
        description={t('redesign.readerSection.desc')}
        canonical="/comicreader"
        schemaType="suite"
        schemaName="BiblioFuse Reader"
        operatingSystem="iOS, iPadOS, macOS, visionOS, Android, Windows"
        softwareVersion="2.1.4"
        storeLinks={[appStoreUrl, playStoreUrl, bibliofusePcUrl]}
        featureList={[
          t('redesign.readerSection.features.library.title'),
          t('redesign.readerSection.features.reading.title'),
          t('redesign.readerSection.features.streaming.title'),
          t('redesign.toolsHighlight.title'),
          t('redesign.comicReaderPage.vision.title'),
          t('redesign.comicReaderPage.appletv.title'),
          t('redesign.readerSection.bullet1'),
          t('redesign.readerSection.bullet2'),
          t('redesign.readerSection.bullet3'),
        ]}
        faqItems={faqItemsForSchema}
        breadcrumbs={[
          { name: 'BiblioFuse', url: `https://bibliofuse.com/${lang}/` },
          { name: 'BiblioFuse Reader', url: `https://bibliofuse.com/${lang}/comicreader/` },
        ]}
      />

      <section className="relative overflow-hidden bg-[#f5f8ff] pt-28 pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(45,124,246,0.14),transparent_34%),radial-gradient(circle_at_85%_18%,rgba(20,194,166,0.13),transparent_28%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.08fr] lg:gap-8 lg:px-8">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-700 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
              {t('redesign.productFamily.products.reader.tag')}
            </div>
            <div className="mb-5">
              <img src="/image/bibliofuse-logo.png" alt="BiblioFuse Reader" className="h-20 w-20 rounded-2xl shadow-xl" />
            </div>
            <h1 className="max-w-3xl text-[clamp(2.5rem,5vw,4rem)] font-black leading-[0.98] tracking-tight text-slate-950">
              BiblioFuse Reader
              <span className="mt-3 block bg-gradient-to-r from-[#1e5fd3] to-[#14c2a6] bg-clip-text text-transparent">{t('redesign.readerSection.title')}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              {t('redesign.readerSection.desc')}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <StoreBadge type="apple" href={appStoreUrl} />
              <StoreBadge type="play" href={playStoreUrl} />
              <StoreBadge type="microsoft" href={bibliofusePcUrl} />
            </div>
            <div className="mt-3">
              <div className="mb-2 text-xs font-semibold text-slate-500">Or self-host on a NAS:</div>
              <div className="flex flex-wrap items-center gap-3">
                <HostBadge type="docker" href={nasDocUrl('docker-install', lang)} />
                <HostBadge type="synology" href={nasDocUrl('synology-package', lang)} />
                <HostBadge type="github" href={nasRepoUrl} />
              </div>
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-3">
              <HostBadge type="discord" href={discordUrl} />
            </div>
            <DevicePills devices={['iphone', 'ipad', 'mac', 'visionpro', 'appletv', 'android', 'windows', 'docker', 'synology']} tone="light" align="start" className="mt-5" />
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-slate-600">
              {[t('redesign.common.noAds'), t('redesign.common.noTracking'), t('redesign.common.onDevice')].map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg>
                  {item}
                </span>
              ))}
            </div>
            <Link to={`/${lang}/tools/`} className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 transition hover:text-blue-700">
              Prefer no install? Try the web version →
            </Link>
          </div>

          <div className="relative mx-auto w-full max-w-[760px] lg:justify-self-end">
            <div className="absolute -inset-8 -z-0 rounded-full bg-[radial-gradient(circle,rgba(45,124,246,0.18),transparent_70%)]" />
            <img
              src={`${featureMediaBase}/cover2.png`}
              alt="BiblioFuse Reader across iPhone, iPad, Mac, Vision Pro and Apple TV"
              className="relative z-10 block h-auto w-full [filter:drop-shadow(0_24px_34px_rgba(15,23,42,0.22))]"
              fetchpriority="high"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl space-y-24 px-4 sm:px-6 lg:space-y-32 lg:px-8">
          <ReaderFeatureRow
            eyebrow={t('redesign.readerSection.features.library.eyebrow')}
            title={t('redesign.readerSection.features.library.title')}
            desc={t('redesign.readerSection.features.library.desc')}
            bullets={[
              { title: t('redesign.readerSection.features.library.bullet1Title'), body: t('redesign.readerSection.features.library.bullet1Body') },
              { title: t('redesign.readerSection.features.library.bullet2Title'), body: t('redesign.readerSection.features.library.bullet2Body') },
              { title: t('redesign.readerSection.features.library.bullet3Title'), body: t('redesign.readerSection.features.library.bullet3Body') },
              { title: t('redesign.readerSection.features.library.bullet4Title'), body: t('redesign.readerSection.features.library.bullet4Body') },
              { title: t('redesign.readerSection.features.library.bullet5Title'), body: t('redesign.readerSection.features.library.bullet5Body') },
            ]}
            image={`${featureMediaBase}/library-shelf.jpg`}
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
              { title: t('redesign.readerSection.features.reading.bullet4Title'), body: t('redesign.readerSection.features.reading.bullet4Body') },
              { title: t('redesign.readerSection.features.reading.bullet5Title'), body: t('redesign.readerSection.features.reading.bullet5Body') },
            ]}
            image={`${featureMediaBase}/navigation-demo-alpha.mp4`}
            alt={t('redesign.readerSection.features.reading.videoAlt', 'BiblioFuse navigation demo showing page curl, continuous reading, minimap and multiple reading styles')}
            kind="video"
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

          <ToolsHighlight />
        </div>
      </section>

      <VisionProSection />

      <AppleTvSection />

      <EditionChooser lang={lang} />

      <UsageGuide />

      <ReaderFamilyGuide lang={lang} />

      {/* The hand-rolled Changelog/Privacy row and "Back to home" button that
          used to sit here were this page's stand-in for a footer, because
          AppLayout deliberately withheld the real one. It no longer does, so
          both were dropped rather than duplicated above it. */}

      <StickyDownloadBar
        logo="/image/bibliofuse-logo.png"
        appName="BiblioFuse Reader"
        appStoreUrl={appStoreUrl}
        msStoreUrl={bibliofusePcUrl}
      />
    </div>
  );
};

export default ComicReader;
