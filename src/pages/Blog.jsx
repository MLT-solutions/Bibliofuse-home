import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import { articles } from '../data/articles';

const TAG_COLORS = {
  guide: 'bg-blue-50 text-blue-600',
  news: 'bg-teal-50 text-teal-600',
  tips: 'bg-violet-50 text-violet-600',
  update: 'bg-green-50 text-green-600',
};

function ArticleCard({ article, lang }) {
  const { t, i18n } = useTranslation();
  const currentLang = lang || i18n.language || 'en';
  const title = t(`redesign.blog.posts.${article.slug}.title`, { defaultValue: article.slug });
  const excerpt = t(`redesign.blog.posts.${article.slug}.excerpt`, { defaultValue: '' });
  const dateStr = new Date(article.date).toLocaleDateString(currentLang, {
    year: 'numeric', month: 'long', day: 'numeric',
  });

  return (
    <Link
      to={`/${currentLang}/blog/${article.slug}/`}
      className="group flex flex-col rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md overflow-hidden"
    >
      {article.coverImage && (
        <div className="aspect-[16/9] w-full overflow-hidden bg-slate-100">
          <img
            src={article.coverImage}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex flex-wrap gap-2">
          {article.tags.map(tag => (
            <span
              key={tag}
              className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${TAG_COLORS[tag] ?? TAG_COLORS.guide}`}
            >
              {t(`redesign.blog.tags.${tag}`, { defaultValue: tag })}
            </span>
          ))}
        </div>
        <h2 className="mb-2 flex-none text-lg font-black leading-snug text-slate-950 transition-colors group-hover:text-blue-600">
          {title}
        </h2>
        <p className="mb-5 flex-1 text-sm leading-relaxed text-slate-600">{excerpt}</p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-slate-400">{dateStr}</span>
          <span className="flex items-center gap-1 text-xs font-semibold text-blue-600 transition-[gap] group-hover:gap-2">
            {t('redesign.blog.readMore')}
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}

const Blog = () => {
  const { lang = 'en' } = useParams();
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title={t('redesign.seo.blogTitle')}
        description={t('redesign.seo.blogDesc')}
        canonical="/blog"
        schemaType="website"
      />
      <div className="min-h-screen bg-[#F6F8FC] px-4 pb-20 pt-28 text-slate-950 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <div className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              {t('redesign.blog.eyebrow')}
            </div>
            <h1 className="font-display text-[clamp(2.4rem,5vw,4.5rem)] font-black leading-[0.98] tracking-tight text-slate-950">
              {t('redesign.blog.title')}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
              {t('redesign.blog.subtitle')}
            </p>
          </div>

          {articles.length === 0 ? (
            <p className="text-center text-slate-500">{t('redesign.blog.empty', { defaultValue: 'No articles yet — check back soon.' })}</p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {articles.map(article => (
                <ArticleCard key={article.slug} article={article} lang={lang} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Blog;
