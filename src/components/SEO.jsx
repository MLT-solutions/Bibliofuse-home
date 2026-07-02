import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useParams, useLocation } from 'react-router-dom';
import { SUPPORTED_LANGUAGES } from '../i18n';

const FALLBACK_OG_IMAGE = '/image/blog/Getting Started with BiblioFuse.jpg';
const FALLBACK_OG_W = 2816;
const FALLBACK_OG_H = 1536;

const ORGANIZATION = {
    "@type": "Organization",
    "name": "BiblioFuse",
    "url": "https://bibliofuse.com",
    "logo": {
        "@type": "ImageObject",
        "url": "https://bibliofuse.com/app-icon.png",
        "width": 300,
        "height": 300
    },
    "sameAs": [
        "https://apps.apple.com/app/bibliofuse-reader-compress/id6758330093",
        "https://play.google.com/store/apps/details?id=com.modernlogic.bibliofuse",
        "https://apps.microsoft.com/store/detail/9N77MZ509ML2"
    ]
};

const SEO = ({
    title,
    description,
    canonical,
    type = 'website',
    schemaType = 'suite',
    schemaName = 'BiblioFuse',
    operatingSystem,
    featureList,
    image,
    imageWidth,
    imageHeight,
    datePublished,
    author,
    faqItems,         // [{ q, a }] — plain text only
    howToSchema,      // pre-built HowTo JSON-LD object
    breadcrumbs,      // [{ name, url }]
    additionalSchemas, // [JSON-LD object] — extra schemas rendered after primary
    noindex = false,  // true → render <meta name="robots" content="noindex, follow">
}) => {
    const { i18n, t } = useTranslation();
    const { lang } = useParams();
    const location = useLocation();

    const currentLang = lang || i18n.language || 'en';
    const siteName = 'BiblioFuse';
    const fullTitle = `${title} | ${siteName}`;
    const baseUrl = 'https://bibliofuse.com';

    const pathWithoutLang = location.pathname.replace(`/${lang}`, '') || '/';
    const canonicalPath = canonical || pathWithoutLang;
    const normalizedPath = canonicalPath === '/' ? '/' : `${canonicalPath.replace(/\/$/, '')}/`;
    const localizedPath = `/${currentLang}${normalizedPath === '/' ? '/' : normalizedPath}`;
    const canonicalUrl = `${baseUrl}${localizedPath}`;
    const alternatePath = normalizedPath === '/' ? '/' : normalizedPath;
    const defaultFeatureList = t('redesign.seo.appFeatures', { returnObjects: true });

    const ogImage = image ? `${baseUrl}${image}` : `${baseUrl}${FALLBACK_OG_IMAGE}`;
    const ogImageW = imageWidth || (image ? null : FALLBACK_OG_W);
    const ogImageH = imageHeight || (image ? null : FALLBACK_OG_H);

    // ── Structured data schemas ──────────────────────────────────────────
    const softwareSuite = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": schemaName,
        "applicationCategory": "UtilitiesApplication",
        "operatingSystem": operatingSystem || "iOS, iPadOS, macOS, Android, Windows, Web",
        "url": canonicalUrl,
        "inLanguage": currentLang,
        "description": description,
        "featureList": Array.isArray(featureList) ? featureList : Array.isArray(defaultFeatureList) ? defaultFeatureList : [],
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
        "publisher": ORGANIZATION,
    };

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": title,
        "description": description,
        "url": canonicalUrl,
        "inLanguage": currentLang,
        "datePublished": datePublished || null,
        "image": {
            "@type": "ImageObject",
            "url": ogImage,
            ...(ogImageW && { "width": ogImageW }),
            ...(ogImageH && { "height": ogImageH }),
        },
        "author": { "@type": "Person", "name": author || "BiblioFuse" },
        "publisher": ORGANIZATION,
    };

    const homeSchema = [
        {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": siteName,
            "url": baseUrl,
            "description": description,
            "potentialAction": {
                "@type": "SearchAction",
                "target": { "@type": "EntryPoint", "urlTemplate": `${baseUrl}/en/blog?q={search_term_string}` },
                "query-input": "required name=search_term_string"
            }
        },
        { "@context": "https://schema.org", ...ORGANIZATION },
    ];

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": title,
        "url": canonicalUrl,
        "inLanguage": currentLang,
        "description": description,
        "isPartOf": { "@type": "WebSite", "name": siteName, "url": baseUrl },
    };

    const primarySchema = schemaType === 'home'
        ? homeSchema
        : schemaType === 'article'
        ? articleSchema
        : schemaType === 'website'
        ? websiteSchema
        : softwareSuite;

    const faqSchema = faqItems && faqItems.length > 0 ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqItems.map(({ q, a }) => ({
            "@type": "Question",
            "name": q,
            "acceptedAnswer": { "@type": "Answer", "text": a }
        }))
    } : null;

    const breadcrumbSchema = breadcrumbs && breadcrumbs.length > 0 ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((crumb, i) => ({
            "@type": "ListItem",
            "position": i + 1,
            "name": crumb.name,
            "item": crumb.url
        }))
    } : null;

    return (
        <Helmet>
            {/* Standard */}
            <html lang={currentLang} />
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            {noindex && <meta name="robots" content="noindex, follow" />}
            <link rel="canonical" href={canonicalUrl} />

            {/* Hreflang */}
            {SUPPORTED_LANGUAGES.map((langCode) => (
                <link key={langCode} rel="alternate" hrefLang={langCode} href={`${baseUrl}/${langCode}${alternatePath}`} />
            ))}
            <link rel="alternate" hrefLang="x-default" href={`${baseUrl}/en${alternatePath}`} />

            {/* Open Graph */}
            <meta property="og:type" content={type} />
            <meta property="og:site_name" content={siteName} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:locale" content={currentLang} />
            <meta property="og:image" content={ogImage} />
            {ogImageW && <meta property="og:image:width" content={String(ogImageW)} />}
            {ogImageH && <meta property="og:image:height" content={String(ogImageH)} />}
            <meta property="og:image:alt" content={title} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />
            <meta name="twitter:image:alt" content={title} />

            {/* Primary schema */}
            <script type="application/ld+json">
                {JSON.stringify(primarySchema)}
            </script>

            {/* FAQPage schema (home page FAQ section, also used in blog posts) */}
            {faqSchema && (
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            )}

            {/* HowTo schema (blog articles with numbered steps) */}
            {howToSchema && (
                <script type="application/ld+json">
                    {JSON.stringify(howToSchema)}
                </script>
            )}

            {/* BreadcrumbList schema */}
            {breadcrumbSchema && (
                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbSchema)}
                </script>
            )}

            {/* Additional schemas */}
            {additionalSchemas && additionalSchemas.map((schema, i) => (
                <script key={`extra-${i}`} type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            ))}
        </Helmet>
    );
};

export default SEO;
