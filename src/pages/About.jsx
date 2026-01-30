import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

const About = () => {
    const { t } = useTranslation();

    return (
        <div className="pt-24 pb-12 px-4 max-w-3xl mx-auto min-h-screen">
            <SEO
                title={t('seo.about.title')}
                description={t('seo.about.desc')}
                canonical="/about"
            />
            <div className="glass-panel p-8 md:p-12 rounded-2xl">
                <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">{t('about.title')}</h1>

                <div className="space-y-6 text-slate-300 leading-relaxed">
                    <p>
                        {t('about.intro_1')}
                    </p>
                    <p>
                        {t('about.intro_2')}
                    </p>

                    <hr className="border-white/10 my-8" />

                    <h2 className="text-2xl font-bold mb-4 text-white">{t('about.work_title')}</h2>
                    <p>
                        {t('about.work_text')}
                    </p>

                    <div className="mt-8">
                        <h3 className="text-lg font-semibold text-white mb-2">{t('about.connect_title')}</h3>
                        <p>
                            {t('about.connect_text')}
                        </p>
                        {/* Placeholder contact info or link */}
                        <a href="mailto:support@mlogictech.com" className="inline-block mt-4 text-blue-400 hover:text-blue-300 transition-colors">
                            support@mlogictech.com
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
