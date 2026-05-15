import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useParams, useLocation } from 'react-router-dom';
import { SUPPORTED_LANGUAGES } from '../i18n';

const SEO = ({ title, description, canonical, type = 'website', schemaType = 'suite', schemaName = 'BiblioFuse', featureList }) => {
    const { i18n, t } = useTranslation();
    const { lang } = useParams();
    const location = useLocation();

    const currentLang = lang || i18n.language || 'en';
    const siteName = 'BiblioFuse';
    const fullTitle = `${title} | ${siteName}`;
    const baseUrl = 'https://bibliofuse.com';

    // Get current path without language prefix
    const pathWithoutLang = location.pathname.replace(`/${lang}`, '') || '/';
    const canonicalPath = canonical || pathWithoutLang;
    const normalizedPath = canonicalPath === '/' ? '/' : canonicalPath.replace(/\/$/, '');
    const localizedPath = `/${currentLang}${normalizedPath === '/' ? '/' : normalizedPath}`;
    const canonicalUrl = `${baseUrl}${localizedPath}`;
    const alternatePath = normalizedPath === '/' ? '/' : normalizedPath;
    const defaultFeatureList = t('redesign.seo.appFeatures', { returnObjects: true });

    const softwareSuite = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": schemaName,
        "applicationCategory": "UtilitiesApplication",
        "operatingSystem": "iOS, iPadOS, macOS, Android, Windows, Web",
        "url": canonicalUrl,
        "inLanguage": currentLang,
        "description": description,
        "featureList": Array.isArray(featureList) ? featureList : Array.isArray(defaultFeatureList) ? defaultFeatureList : [],
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        }
    };
    const structuredData = schemaType === 'website'
        ? {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": siteName,
            "url": baseUrl,
            "inLanguage": currentLang,
            "description": description
        }
        : softwareSuite;

    return (
        <Helmet>
            {/* Standard Metadata */}
            <html lang={currentLang} />
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonicalUrl} />

            {/* Hreflang tags for multilingual SEO */}
            {SUPPORTED_LANGUAGES.map((langCode) => (
                <link
                    key={langCode}
                    rel="alternate"
                    hrefLang={langCode}
                    href={`${baseUrl}/${langCode}${alternatePath}`}
                />
            ))}
            {/* x-default points to English */}
            <link
                rel="alternate"
                hrefLang="x-default"
                href={`${baseUrl}/en${alternatePath}`}
            />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:site_name" content={siteName} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:image" content={`${baseUrl}/logo_rounded.png`} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={`${baseUrl}/logo_rounded.png`} />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>
        </Helmet>
    );
};

export default SEO;
