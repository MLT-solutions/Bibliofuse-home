import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import immersiveReadingImg from '../assets/immersive_reading.png';
import continuousWebtoonModeImg from '../assets/continuous_webtoon_mode.png';
import peekZoomImg from '../assets/peek_zoom.png';
import smartTaggingRatingsImg from '../assets/smart_tagging_ratings.png';
import compressionToolsImg from '../assets/compression_tools.png';
import cloudSyncImg from '../assets/cloud_sync.png';
import languagesSupportImg from '../assets/languages_support.png';

const FeatureCard = ({ title, description, icon, image }) => (
    <div className="glass-panel rounded-xl overflow-hidden hover:bg-white/10 transition-colors flex flex-col h-full group">
        <div className="w-full aspect-[3/5] overflow-hidden relative">
            {image ? (
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
            ) : (
                <div className="w-full h-full bg-slate-800/50 flex items-center justify-center text-slate-600">
                    No Preview
                </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80"></div>
        </div>
        <div className="p-6 flex-1 flex flex-col">
            <div className="mb-4 text-blue-400 flex items-center gap-2">
                {icon}
                <span className="h-px bg-white/10 flex-1"></span>
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
            <p className="text-slate-300 text-sm leading-relaxed">{description}</p>
        </div>
    </div>
);

const Reader = () => {
    const { t } = useTranslation();

    const features = [
        {
            title: t('reader.features.immersive.title'),
            description: t('reader.features.immersive.desc'),
            icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
            image: immersiveReadingImg
        },
        {
            title: t('reader.features.webtoon.title'),
            description: t('reader.features.webtoon.desc'),
            icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-7 7-7-7m14-8l-7 7-7-7" /></svg>,
            image: continuousWebtoonModeImg
        },
        {
            title: t('reader.features.peek.title'),
            description: t('reader.features.peek.desc'),
            icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>,
            image: peekZoomImg
        },
        {
            title: t('reader.features.smart.title'),
            description: t('reader.features.smart.desc'),
            icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>,
            image: smartTaggingRatingsImg
        },
        {
            title: t('reader.features.compress.title'),
            description: t('reader.features.compress.desc'),
            icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>,
            image: compressionToolsImg
        },
        {
            title: t('reader.features.cloud.title'),
            description: t('reader.features.cloud.desc'),
            icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>,
            image: cloudSyncImg
        },
        {
            title: t('reader.features.lang.title'),
            description: t('reader.features.lang.desc'),
            icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.204 8.842l-2.244-2.715a2 2 0 112.613-2.614l2.614 2.614M11 14h10m-5-5l5 5m-5 5l5-5" /></svg>,
            image: languagesSupportImg
        }
    ];

    return (
        <div className="pt-24 pb-12 px-4 max-w-7xl mx-auto">
            <SEO
                title={t('seo.reader.title')}
                description={t('seo.reader.desc')}
                canonical="/reader"
            />
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-green-300">
                    {t('reader.title')}
                </h2>
                <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                    {t('reader.subtitle')}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <FeatureCard key={index} {...feature} />
                ))}
            </div>
        </div>
    );
};

export default Reader;
