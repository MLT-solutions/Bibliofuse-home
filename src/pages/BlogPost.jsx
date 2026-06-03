import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import SEO from '../components/SEO';
import { articles } from '../data/articles';

const TAG_COLORS = {
  guide: 'bg-blue-50 text-blue-600',
  news: 'bg-teal-50 text-teal-600',
  tips: 'bg-violet-50 text-violet-600',
  update: 'bg-green-50 text-green-600',
};

const BlogPost = () => {
  const { lang, slug } = useParams();
  const { i18n, t } = useTranslation();
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);

  const currentLang = lang || i18n.language || 'en';
  const article = articles.find(a => a.slug === slug);

  useEffect(() => {
    if (!article) {
      setLoading(false);
      return;
    }

    const fetchContent = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${import.meta.env.BASE_URL}blog/${slug}/${currentLang}.md`);
        if (!res.ok) throw new Error('not found');
        setContent(await res.text());
      } catch {
        try {
          const fallback = await fetch(`${import.meta.env.BASE_URL}blog/${slug}/en.md`);
          setContent(await fallback.text());
        } catch {
          setContent('');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [slug, currentLang, article]);

  if (!article) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-[#F6F8FC] px-4 pt-28 text-center">
        <p className="text-slate-600">{t('redesign.blog.notFound')}</p>
        <Link
          to={`/${currentLang}/blog`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M11 6l-6 6 6 6" />
          </svg>
          {t('redesign.blog.backToBlog')}
        </Link>
      </div>
    );
  }

  const title = t(`redesign.blog.posts.${slug}.title`, { defaultValue: slug });
  const excerpt = t(`redesign.blog.posts.${slug}.excerpt`, { defaultValue: '' });
  const seoDescription = t(`redesign.blog.posts.${slug}.seoDescription`, { defaultValue: excerpt });
  const dateStr = new Date(article.date).toLocaleDateString(currentLang, {
    year: 'numeric', month: 'long', day: 'numeric',
  });

  // Build FAQPage JSON-LD from bold Q&A pairs in the FAQ section
  const faqSchema = React.useMemo(() => {
    if (!content) return null;
    const faqStart = content.search(/^## (Frequently Asked Questions|FAQ)/m);
    if (faqStart === -1) return null;
    const faqSection = content.slice(faqStart);
    const pairs = [];
    const qRegex = /\*\*(.+\?)\*\*\n+([\s\S]+?)(?=\n\n\*\*|\n\n##|$)/g;
    let match;
    while ((match = qRegex.exec(faqSection)) !== null) {
      pairs.push({ question: match[1].trim(), answer: match[2].trim().replace(/\n/g, ' ') });
    }
    if (pairs.length === 0) return null;
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": pairs.map(({ question, answer }) => ({
        "@type": "Question",
        "name": question,
        "acceptedAnswer": { "@type": "Answer", "text": answer }
      }))
    };
  }, [content]);

  return (
    <>
      <SEO
        title={title}
        description={seoDescription}
        canonical={`/blog/${slug}`}
        schemaType="article"
        image={article.coverImage}
        datePublished={article.date}
      />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}
      <div className="min-h-screen bg-[#F6F8FC] px-4 pb-20 pt-28 text-slate-950 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Link
            to={`/${currentLang}/blog`}
            className="mb-8 inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 transition-colors hover:text-slate-950"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M11 6l-6 6 6 6" />
            </svg>
            {t('redesign.blog.backToBlog')}
          </Link>

          {article.coverImage && (
            <div className="mb-10 overflow-hidden rounded-3xl border border-slate-200 shadow-xl">
              <img
                src={article.coverImage}
                alt={title}
                className="h-auto w-full object-cover"
              />
            </div>
          )}

          <div className="mb-10">
            <div className="mb-4 flex flex-wrap gap-2">
              {article.tags.map(tag => (
                <span
                  key={tag}
                  className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${TAG_COLORS[tag] ?? TAG_COLORS.guide}`}
                >
                  {t(`redesign.blog.tags.${tag}`, { defaultValue: tag })}
                </span>
              ))}
            </div>
            <h1 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-black leading-[1.02] tracking-tight text-slate-950">
              {title}
            </h1>
            <p className="mt-3 text-sm text-slate-400">{dateStr}</p>
          </div>

          {loading ? (
            <div className="flex items-center justify-center rounded-3xl border border-slate-200 bg-white py-24 shadow-xl">
              <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-100 border-b-blue-600" />
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
              prose-ol:text-slate-600
              prose-table:text-sm prose-th:text-slate-950 prose-td:text-slate-600
              prose-code:rounded prose-code:bg-slate-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm prose-code:text-slate-800 prose-code:font-mono prose-code:before:content-none prose-code:after:content-none
            ">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BlogPost;
