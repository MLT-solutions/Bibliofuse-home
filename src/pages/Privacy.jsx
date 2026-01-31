import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import SEO from '../components/SEO';

const Privacy = () => {
    const { lang } = useParams();
    const { i18n } = useTranslation();
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
                    setContent('# Privacy Policy\n\nError loading privacy policy. Please try again later.');
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
                title="Privacy Policy"
                description="BiblioFuse Reader privacy policy - Learn how we protect your data and privacy."
            />
            <div className="min-h-screen pt-20 px-4 pb-12">
                <div className="max-w-4xl mx-auto">
                    {loading ? (
                        <div className="flex items-center justify-center py-20">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                        </div>
                    ) : (
                        <div className="prose prose-invert prose-lg max-w-none
                            prose-headings:text-white prose-headings:font-bold
                            prose-h1:text-4xl prose-h1:mb-6
                            prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
                            prose-p:text-slate-300 prose-p:leading-relaxed
                            prose-a:text-blue-400 prose-a:no-underline hover:prose-a:text-blue-300
                            prose-strong:text-white prose-strong:font-semibold
                            prose-ul:text-slate-300 prose-li:my-1
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
