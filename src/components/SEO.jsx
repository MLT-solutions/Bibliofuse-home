import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useParams, useLocation } from 'react-router-dom';
import { SUPPORTED_LANGUAGES } from '../i18n';

const SEO = ({ title, description, canonical, type = 'website' }) => {
    const { i18n } = useTranslation();
    const { lang } = useParams();
    const location = useLocation();

    const currentLang = i18n.language;
    const siteName = 'BiblioFuse';
    const fullTitle = `${title} | ${siteName}`;
    const baseUrl = 'https://bibliofuse.github.io/Bibliofuse-home';

    // Get current path without language prefix
    const pathWithoutLang = location.pathname.replace(`/${lang}`, '') || '/';

    // Structured Data for SoftwareApplication
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "BiblioFuse",
        "applicationCategory": "ReferenceApplication",
        "operatingSystem": "Windows, Android, iOS, Web",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        },
        "description": description
    };

    return (
        <Helmet>
            {/* Standard Metadata */}
            <html lang={currentLang} />
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonical ? `${baseUrl}${canonical}` : `${baseUrl}/${lang}${pathWithoutLang}`} />

            {/* Hreflang tags for multilingual SEO */}
            {SUPPORTED_LANGUAGES.map((langCode) => (
                <link
                    key={langCode}
                    rel="alternate"
                    hrefLang={langCode}
                    href={`${baseUrl}/${langCode}${pathWithoutLang}`}
                />
            ))}
            {/* x-default points to English */}
            <link
                rel="alternate"
                hrefLang="x-default"
                href={`${baseUrl}/en${pathWithoutLang}`}
            />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:site_name" content={siteName} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={canonical ? `${baseUrl}${canonical}` : `${baseUrl}/${lang}${pathWithoutLang}`} />
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
