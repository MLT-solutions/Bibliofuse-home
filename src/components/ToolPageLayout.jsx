// Shared skeleton for every /tools/<slug>/ page.
//
// The ordering is the entire point of this section, so it is enforced here rather than
// left to each page: the working tool sits above the fold, the explanation comes after
// it, and the app pitch is last. The pages this replaces did the opposite — an essay,
// then a landing page, then a button to a different domain — which is why they ran at
// 0.25–0.7% CTR from positions 8–10 (see docs/gsc-cloudflare-findings.md).
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from './SEO';

function CheckIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16a34a"
            strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 13l4 4L19 7" />
        </svg>
    );
}

export default function ToolPageLayout({ slug, children }) {
    const { t } = useTranslation();
    const { lang = 'en' } = useParams();
    const page = t(`redesign.toolsPages.${slug}`, { returnObjects: true });
    const trust = t('redesign.toolsPages.trust', { returnObjects: true });
    const faq = Array.isArray(page.faq) ? page.faq : [];

    return (
        <div className="min-h-screen bg-white text-slate-950">
            <SEO
                title={page.seoTitle}
                description={page.seoDesc}
                canonical={`/tools/${slug}/`}
                // English-only until redesign.toolsPages.* is genuinely translated;
                // see NOINDEX_NON_EN_ROUTES in the build scripts and docs/features/tools.md
                hreflangLocales={['en']}
                // Not 'suite' (the SEO default): these are browser utilities, not the
                // BiblioFuse app, and declaring each one as SoftwareApplication would
                // claim five copies of the product. 'website' yields a WebPage schema.
                schemaType="website"
                faqItems={faq.map((f) => ({ q: f.q, a: f.a }))}
                breadcrumbs={[
                    { name: 'BiblioFuse', url: `https://bibliofuse.com/${lang}/` },
                    { name: t('redesign.toolsHub.h1'), url: `https://bibliofuse.com/${lang}/tools/` },
                    { name: page.h1, url: `https://bibliofuse.com/${lang}/tools/${slug}/` },
                ]}
            />

            {/* 1 — the job, then the tool. Nothing between them. */}
            <section className="mx-auto max-w-4xl px-4 pb-4 pt-28 sm:px-6 lg:px-8">
                <nav className="mb-4 text-xs text-slate-500">
                    <Link to={`/${lang}/tools/`} className="hover:text-slate-800">
                        {t('redesign.toolsHub.h1')}
                    </Link>
                    <span className="mx-1.5">/</span>
                    <span className="text-slate-700">{page.h1}</span>
                </nav>

                <h1 className="text-[clamp(1.75rem,4vw,2.6rem)] font-black leading-[1.08] tracking-tight text-slate-950">
                    {page.h1}
                </h1>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-600">{page.intro}</p>

                <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-slate-600">
                    {[trust.local, trust.noUpload, trust.noAccount].map((line) => (
                        <li key={line} className="flex items-center gap-1.5">
                            <CheckIcon />
                            {line}
                        </li>
                    ))}
                </ul>
            </section>

            <section className="mx-auto max-w-4xl px-4 pb-12 sm:px-6 lg:px-8">
                <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-4 sm:p-6">
                    {children}
                </div>
            </section>

            {/* 2 — the explanation, after the tool has already been usable */}
            {Array.isArray(page.sections) && page.sections.length > 0 && (
                <section className="border-t border-slate-100 bg-white py-12">
                    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                        {page.sections.map((s) => (
                            <div key={s.title} className="mb-8 last:mb-0">
                                <h2 className="text-lg font-black tracking-tight text-slate-950">{s.title}</h2>
                                <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.body}</p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {faq.length > 0 && (
                <section className="border-t border-slate-100 bg-[#f8fafc] py-12">
                    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                        <h2 className="mb-6 text-lg font-black tracking-tight text-slate-950">
                            {t('redesign.toolsPages.faqTitle')}
                        </h2>
                        <div className="space-y-3">
                            {faq.map((item) => (
                                <details key={item.q} className="group rounded-xl border border-slate-200 bg-white p-4">
                                    <summary className="cursor-pointer text-sm font-semibold text-slate-900 marker:content-['']">
                                        {item.q}
                                    </summary>
                                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.a}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* 3 — the app pitch, last, to someone who already got what they came for */}
            <section className="border-t border-slate-100 bg-white py-12">
                <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
                    <p className="text-sm text-slate-600">{t('redesign.toolsPages.appPitch')}</p>
                    <Link
                        to={`/${lang}/comicreader/`}
                        className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[#0b1220] px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#152033]"
                    >
                        {t('redesign.toolsPages.appPitchCta')}
                    </Link>
                    <p className="mt-6 text-xs text-slate-400">
                        <Link to={`/${lang}/tools/`} className="underline underline-offset-2 hover:text-slate-600">
                            {t('redesign.toolsHub.backCta')}
                        </Link>
                    </p>
                </div>
            </section>
        </div>
    );
}
