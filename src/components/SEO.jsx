import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const SEO = ({ title, description, canonical, type = 'website' }) => {
    const { i18n } = useTranslation();
    const currentLang = i18n.language;
    const siteName = 'BiblioFuse';
    const fullTitle = `${title} | ${siteName}`;
    const baseUrl = 'https://bibliofuse.com'; // Replace with actual domain when deployed

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
            <link rel="canonical" href={canonical ? `${baseUrl}${canonical}` : baseUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:site_name" content={siteName} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={canonical ? `${baseUrl}${canonical}` : baseUrl} />
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
