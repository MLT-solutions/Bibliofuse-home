import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import SEO from '../components/SEO';

const Privacy = () => {
    const { lang } = useParams();
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPrivacyPolicy = async () => {
            try {
                setLoading(true);
                const response = await fetch(`${import.meta.env.BASE_URL}privacy/${lang || 'en'}.md`);
                const text = await response.text();
                setContent(text);
            } catch (error) {
                console.error('Error loading privacy policy:', error);
                setContent('# Privacy Policy\n\nError loading privacy policy. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchPrivacyPolicy();
    }, [lang]);

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
