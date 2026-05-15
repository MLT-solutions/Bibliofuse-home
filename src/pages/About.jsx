import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

const About = () => {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen bg-[#F6F8FC] px-4 pb-20 pt-28 text-slate-950 sm:px-6 lg:px-8">
            <SEO
                title={t('redesign.seo.aboutTitle')}
                description={t('redesign.seo.aboutDesc')}
                canonical="/about"
                schemaType="website"
            />
            <div className="mx-auto max-w-4xl">
                <div className="mb-10 text-center">
                    <div className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">{t('redesign.aboutPage.eyebrow')}</div>
                    <h1 className="font-display text-[clamp(2.4rem,5vw,4.5rem)] font-black leading-[0.98] tracking-tight text-slate-950">{t('about.title')}</h1>
                    <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
                        {t('redesign.aboutPage.lead')}
                    </p>
                </div>

                <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
                    <div className="grid gap-0 md:grid-cols-[1fr_0.78fr]">
                        <div className="space-y-6 p-7 text-base leading-relaxed text-slate-600 sm:p-10">
                            <p>{t('about.intro_1')}</p>
                            <p>{t('about.intro_2')}</p>
                        </div>

                        <aside className="border-t border-slate-200 bg-slate-50 p-7 sm:p-10 md:border-l md:border-t-0">
                            <div className="space-y-4">
                                {t('redesign.aboutPage.pills', { returnObjects: true }).map((item) => (
                                    <div key={item} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-800">
                                        <span className="grid h-7 w-7 place-items-center rounded-full bg-emerald-50 text-emerald-600">
                                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M20 6 9 17l-5-5" />
                                            </svg>
                                        </span>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </aside>
                    </div>

                    <div className="border-t border-slate-200 p-7 sm:p-10">
                        <h2 className="font-display text-2xl font-black tracking-tight text-slate-950">{t('about.work_title')}</h2>
                        <p className="mt-4 text-base leading-relaxed text-slate-600">{t('about.work_text')}</p>
                    </div>
                </div>

                <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-7 shadow-lg sm:p-8">
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <h3 className="font-display text-xl font-black tracking-tight text-slate-950">{t('about.connect_title')}</h3>
                            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">{t('about.connect_text')}</p>
                        </div>
                        <a href="mailto:support@mlogictech.com" className="inline-flex h-11 shrink-0 items-center justify-center rounded-xl bg-[#0B1220] px-5 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#162033]">
                            support@mlogictech.com
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
