// /guide/ — the one place setup questions and how-tos live.
//
// Assembled from content that already exists and already ranks, not newly written thin
// pages: the detailed FAQs that used to sit on /comicreader/, plus links out to the
// surviving guide-style articles at their existing /blog/ URLs. Those articles are
// deliberately NOT re-pathed under /guide/ — they are the only URLs on the site still
// earning clicks, and putting 301s in front of them to tidy the information architecture
// would risk the last things that rank. See docs/features/guide.md.
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

function RichText({ text }) {
    // FAQ answers carry <strong>/<em> from the comicreader copy
    if (!text) return null;
    return <span dangerouslySetInnerHTML={{ __html: text }} />;
}

export default function Guide() {
    const { t } = useTranslation();
    const { lang = 'en' } = useParams();
    const g = t('redesign.guidePage', { returnObjects: true });
    const sections = Array.isArray(g.sections) ? g.sections : [];

    // Flatten every Q&A into one FAQPage graph — this page is the site's FAQ home now.
    const faqItems = sections.flatMap((s) =>
        (s.items || []).map((it) => ({
            q: it.q,
            a: (it.a || '').replace(/<[^>]+>/g, ''),
        })),
    );

    return (
        <div className="min-h-screen bg-white text-slate-950">
            <SEO
                title={g.seoTitle}
                description={g.seoDesc}
                canonical="/guide/"
                schemaType="website"
                hreflangLocales={['en']}
                faqItems={faqItems}
                breadcrumbs={[
                    { name: 'BiblioFuse', url: `https://bibliofuse.com/${lang}/` },
                    { name: g.h1, url: `https://bibliofuse.com/${lang}/guide/` },
                ]}
            />

            <section className="mx-auto max-w-4xl px-4 pb-8 pt-28 sm:px-6 lg:px-8">
                <h1 className="text-[clamp(1.9rem,4.2vw,2.8rem)] font-black leading-[1.06] tracking-tight text-slate-950">
                    {g.h1}
                </h1>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">{g.intro}</p>

                <nav className="mt-7 flex flex-wrap gap-2" aria-label={g.h1}>
                    {sections.map((s) => (
                        <a
                            key={s.id}
                            href={`#${s.id}`}
                            className="rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-xs font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-white"
                        >
                            {s.title}
                        </a>
                    ))}
                </nav>
            </section>

            {sections.map((s, i) => (
                <section
                    key={s.id}
                    id={s.id}
                    className={`scroll-mt-24 border-t border-slate-100 py-12 ${i % 2 ? 'bg-[#f8fafc]' : 'bg-white'}`}
                >
                    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                        <h2 className="text-lg font-black tracking-tight text-slate-950">{s.title}</h2>
                        {s.desc && <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.desc}</p>}

                        {Array.isArray(s.items) && s.items.length > 0 && (
                            <div className="mt-5 space-y-3">
                                {s.items.map((item) => (
                                    <details key={item.q} className="rounded-xl border border-slate-200 bg-white p-4">
                                        <summary className="cursor-pointer text-sm font-semibold text-slate-900 marker:content-['']">
                                            {item.q}
                                        </summary>
                                        <div className="mt-2 text-sm leading-relaxed text-slate-600">
                                            <RichText text={item.a} />
                                        </div>
                                    </details>
                                ))}
                            </div>
                        )}

                        {Array.isArray(s.links) && s.links.length > 0 && (
                            <ul className="mt-5 space-y-2">
                                {s.links.map((l) => (
                                    <li key={l.to}>
                                        <Link
                                            to={`/${lang}${l.to}`}
                                            className="group flex items-start gap-2 text-sm font-semibold text-slate-900 hover:text-blue-700"
                                        >
                                            <span className="mt-0.5 text-slate-400 group-hover:text-blue-700">→</span>
                                            <span>
                                                {l.label}
                                                {l.note && (
                                                    <span className="mt-0.5 block text-xs font-normal text-slate-500">{l.note}</span>
                                                )}
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </section>
            ))}

            <section className="border-t border-slate-100 bg-white py-12">
                <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
                    <p className="text-sm text-slate-600">{g.footerNote}</p>
                    <a
                        href="mailto:support@mlogictech.com"
                        className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[#0b1220] px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#152033]"
                    >
                        {g.footerCta}
                    </a>
                </div>
            </section>
        </div>
    );
}
