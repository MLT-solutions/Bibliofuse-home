import React from 'react';
import { Link, useParams } from 'react-router-dom';
import SEO from '../components/SEO';

const MLOGICTECH_URL = 'https://www.mlogictech.com/products#smartdecrypt';
const APP_STORE_URL = 'https://apps.apple.com/ca/app/smartdecrypt-pdf-zip/id6763979229';
const MS_STORE_URL = 'https://apps.microsoft.com/detail/9p9bfkr5zdz8';

// Retired 2026-07-20: the full marketing page moved to mlogictech.com, which
// already carries this app's product listing. See docs/site-showcase-audit.md
// (off-theme apps shouldn't dilute a themed hub) and the 2026-07-20 portfolio
// review (this page drew 0 clicks / 90 days on bibliofuse.com). The
// /smartdecrypt/changelog and /smartdecrypt/privacy routes are untouched —
// those stay on bibliofuse.com as the app's App Store-facing compliance pages.
function SmartDecrypt() {
  const { lang } = useParams();
  const currentLang = lang || 'en';

  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4 py-24 text-slate-950">
      <SEO
        title="SmartDecrypt has moved"
        description="SmartDecrypt PDF ZIP is now listed on Modern Logic Tech's product page."
        canonical="/smartdecrypt"
        schemaType="website"
        noindex
      />
      <div className="max-w-md text-center">
        <img src="/image/smartdecrypt-logo.png" alt="SmartDecrypt" className="mx-auto mb-6 h-16 w-16 rounded-2xl object-cover shadow-sm" />
        <h1 className="mb-3 text-2xl font-black tracking-tight">SmartDecrypt has moved</h1>
        <p className="mb-8 text-sm leading-relaxed text-slate-600">
          SmartDecrypt PDF ZIP is now listed on Modern Logic Tech&rsquo;s product page, alongside the studio&rsquo;s other utility apps.
        </p>
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a href={MLOGICTECH_URL} className="inline-flex h-11 items-center justify-center rounded-xl bg-[#0b1220] px-6 text-sm font-semibold text-white transition hover:bg-[#152033]">
            View on mlogictech.com →
          </a>
          <a href={APP_STORE_URL} target="_blank" rel="noopener" className="inline-flex h-11 items-center justify-center rounded-xl border border-slate-200 px-6 text-sm font-semibold text-slate-800 transition hover:border-slate-300">
            App Store
          </a>
          <a href={MS_STORE_URL} target="_blank" rel="noopener" className="inline-flex h-11 items-center justify-center rounded-xl border border-slate-200 px-6 text-sm font-semibold text-slate-800 transition hover:border-slate-300">
            Microsoft Store
          </a>
        </div>
        <Link to={`/${currentLang}/`} className="mt-8 inline-block text-sm font-semibold text-slate-500 hover:text-slate-800">
          ← Back to BiblioFuse
        </Link>
      </div>
    </div>
  );
}

export default SmartDecrypt;
