// /tools/ — the section index. Cards only, deliberately no working tool here: a live
// tool on the hub would compete with the individual tool pages for the same queries and
// make them harder to rank, which is the whole reason this section exists.
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../../components/SEO';
import MicrosoftStoreBadge from '../../components/MicrosoftStoreBadge';
import { TOOLS } from '../../data/tools';

const ACCENTS = {
    blue: 'bg-blue-50 text-blue-700',
    violet: 'bg-violet-50 text-violet-700',
    orange: 'bg-orange-50 text-orange-700',
    teal: 'bg-teal-50 text-teal-700',
    emerald: 'bg-emerald-50 text-emerald-700',
};

export default function ToolsHub() {
    const { t } = useTranslation();
    const { lang = 'en' } = useParams();
    const hub = t('redesign.toolsHub', { returnObjects: true });
    const trust = t('redesign.toolsPages.trust', { returnObjects: true });
    const offline = t('redesign.toolsHub.offline', { returnObjects: true });

    return (
        <div className="min-h-screen bg-white text-slate-950">
            <SEO
                title={hub.seoTitle}
                description={hub.seoDesc}
                canonical="/tools/"
                // English-only until redesign.toolsPages.* is genuinely translated;
                // see NOINDEX_NON_EN_ROUTES in the build scripts and docs/features/tools.md
                hreflangLocales={['en']}
                schemaType="website"
                breadcrumbs={[
                    { name: 'BiblioFuse', url: `https://bibliofuse.com/${lang}/` },
                    { name: hub.h1, url: `https://bibliofuse.com/${lang}/tools/` },
                ]}
            />

            <section className="mx-auto max-w-5xl px-4 pb-10 pt-28 sm:px-6 lg:px-8">
                <h1 className="text-[clamp(1.9rem,4.2vw,2.8rem)] font-black leading-[1.06] tracking-tight text-slate-950">
                    {hub.h1}
                </h1>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">{hub.intro}</p>
                <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-slate-600">
                    {[trust.local, trust.noUpload, trust.noAccount].map((line) => (
                        <li key={line} className="flex items-center gap-1.5">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16a34a"
                                strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M5 13l4 4L19 7" />
                            </svg>
                            {line}
                        </li>
                    ))}
                </ul>
            </section>

            <section className="mx-auto max-w-5xl px-4 pb-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {TOOLS.map((tool) => {
                        const copy = t(`redesign.toolsPages.${tool.slug}`, { returnObjects: true });
                        return (
                            <Link
                                key={tool.slug}
                                to={`/${lang}/tools/${tool.slug}/`}
                                className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-lg"
                            >
                                <span className={`mb-3 inline-flex w-fit rounded-lg px-2 py-1 text-[11px] font-bold uppercase tracking-wider ${ACCENTS[tool.accent]}`}>
                                    {copy.tag}
                                </span>
                                <h2 className="text-base font-black tracking-tight text-slate-950">{copy.h1}</h2>
                                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{copy.cardDesc}</p>
                                <span className="mt-4 text-sm font-semibold text-slate-900 group-hover:text-blue-700">
                                    {hub.openCta} →
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </section>

            {/* The two Windows Store apps, moved here when the homepage's "Standalone
                tools" section was retired. Same jobs as the browser tools above, for
                people who would rather not work in a browser. */}
            <section className="border-t border-slate-100 bg-[#f8fafc] py-12">
                <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-6">
                        <div className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                            {offline.eyebrow}
                        </div>
                        <p className="max-w-2xl text-sm leading-relaxed text-slate-600">{offline.desc}</p>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                        {[
                            { name: offline.cbzName, desc: offline.cbzDesc, logo: '/image/cbz-resizer-logo.png', href: 'https://apps.microsoft.com/detail/9p7b02538tfq' },
                            { name: offline.epubName, desc: offline.epubDesc, logo: '/image/epub-resizer-logo.png', href: 'https://apps.microsoft.com/detail/9pdllhdz6kkl' },
                        ].map((app) => (
                            <div key={app.name} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5">
                                <div className="mb-3 flex items-center gap-2.5">
                                    <span className="grid h-9 w-9 flex-shrink-0 place-items-center overflow-hidden rounded-xl">
                                        <img src={app.logo} alt="" className="h-9 w-9 object-cover" />
                                    </span>
                                    <div>
                                        <div className="text-sm font-black text-slate-950">{app.name}</div>
                                        <div className="text-[10px] text-slate-500">{offline.platform}</div>
                                    </div>
                                </div>
                                <p className="mb-4 flex-1 text-xs leading-relaxed text-slate-600">{app.desc}</p>
                                <MicrosoftStoreBadge href={app.href} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-t border-slate-100 bg-white py-12">
                <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
                    <p className="text-sm text-slate-600">{t('redesign.toolsPages.appPitch')}</p>
                    <Link
                        to={`/${lang}/comicreader/`}
                        className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[#0b1220] px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#152033]"
                    >
                        {t('redesign.toolsPages.appPitchCta')}
                    </Link>
                </div>
            </section>
        </div>
    );
}
