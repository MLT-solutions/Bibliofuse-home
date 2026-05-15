import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import SEO from '../components/SEO';

const Privacy = () => {
    const { lang } = useParams();
    const { i18n, t } = useTranslation();
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPrivacyPolicy = async () => {
            try {
                setLoading(true);
                const currentLang = lang || i18n.language || 'en';
                const response = await fetch(`${import.meta.env.BASE_URL}privacy/${currentLang}.md`);

                if (!response.ok) {
                    throw new Error('Failed to load privacy policy');
                }

                const text = await response.text();
                setContent(text);
            } catch (error) {
                console.error('Error loading privacy policy:', error);
                // Fallback to English if the language file doesn't exist
                try {
                    const response = await fetch(`${import.meta.env.BASE_URL}privacy/en.md`);
                    const text = await response.text();
                    setContent(text);
                } catch (fallbackError) {
                    setContent(`# ${t('redesign.privacyPage.title')}\n\n${t('redesign.privacyPage.error')}`);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchPrivacyPolicy();
    }, [lang, i18n.language]);

    return (
        <>
            <SEO
                title={t('redesign.privacyPage.title')}
                description={t('seo.reader.desc')}
            />
            <div className="min-h-screen bg-[#F6F8FC] px-4 pb-20 pt-28 text-slate-950 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-4xl">
                    <div className="mb-10 text-center">
                        <div className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">{t('redesign.privacyPage.eyebrow')}</div>
                        <h1 className="font-display text-[clamp(2.4rem,5vw,4.5rem)] font-black leading-[0.98] tracking-tight text-slate-950">{t('redesign.privacyPage.title')}</h1>
                        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
                            {t('redesign.privacyPage.desc')}
                        </p>
                    </div>

                    {loading ? (
                        <div className="flex items-center justify-center rounded-3xl border border-slate-200 bg-white py-24 shadow-xl">
                            <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-100 border-b-blue-600"></div>
                        </div>
                    ) : (
                        <div className="prose prose-lg max-w-none rounded-3xl border border-slate-200 bg-white p-7 shadow-xl sm:p-10
                            prose-headings:font-display prose-headings:font-black prose-headings:tracking-tight prose-headings:text-slate-950
                            prose-h1:hidden
                            prose-h2:mt-10 prose-h2:border-t prose-h2:border-slate-200 prose-h2:pt-8 prose-h2:text-2xl
                            first:prose-h2:mt-0 first:prose-h2:border-t-0 first:prose-h2:pt-0
                            prose-p:leading-relaxed prose-p:text-slate-600
                            prose-a:font-semibold prose-a:text-blue-600 prose-a:no-underline hover:prose-a:text-blue-700
                            prose-strong:font-bold prose-strong:text-slate-950
                            prose-ul:text-slate-600 prose-li:my-1 prose-li:marker:text-blue-500
                        ">
                            <ReactMarkdown>{content}</ReactMarkdown>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Privacy;
