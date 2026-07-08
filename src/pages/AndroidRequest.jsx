import React, { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

const scriptUrl = import.meta.env.VITE_ANDROID_REQUEST_SCRIPT_URL || '';

const appOptions = [
  'BiblioFuse GrepTag Reader',
  'SmartDecrypt PDF ZIP',
  'ContentCue',
  'other',
];

function AndroidRequest() {
  const { lang } = useParams();
  const { t, i18n } = useTranslation();
  const copy = t('redesign.androidRequestPage', { returnObjects: true });
  const currentLang = lang || i18n.language || 'en';
  const browserLanguage = typeof navigator !== 'undefined' ? navigator.language : '';
  const [selectedApp, setSelectedApp] = useState(appOptions[0]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const pageMeta = useMemo(() => ({
    siteLanguage: currentLang,
    browserLanguage,
    pagePath: typeof window !== 'undefined' ? window.location.pathname : '',
    referrer: typeof document !== 'undefined' ? document.referrer : '',
  }), [browserLanguage, currentLang]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    if (!scriptUrl) {
      setStatus('config-missing');
      return;
    }

    const form = event.currentTarget;
    const payload = new URLSearchParams(new FormData(form));
    payload.set('submittedAt', new Date().toISOString());
    Object.entries(pageMeta).forEach(([key, value]) => payload.set(key, value || ''));

    try {
      setStatus('submitting');
      await fetch(scriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: payload,
      });
      form.reset();
      setSelectedApp(appOptions[0]);
      setStatus('success');
    } catch (err) {
      setError(err instanceof Error ? err.message : copy.errorFallback);
      setStatus('error');
    }
  };

  return (
    <div className="bg-white text-slate-950">
      <SEO
        title={copy.seoTitle}
        description={copy.seoDesc}
        canonical="/androidrequest"
        schemaType="website"
        noindex
      />

      <section className="bg-gradient-to-b from-emerald-50 to-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Link to={`/${currentLang}/`} className="text-sm font-semibold text-emerald-700 underline-offset-4 hover:underline">
            {copy.back}
          </Link>
          <div className="mt-8 max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-700">{copy.eyebrow}</p>
            <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">{copy.title}</h1>
            <p className="mt-5 text-base leading-8 text-slate-700 sm:text-lg">{copy.desc}</p>
            <div className="mt-6 inline-flex flex-wrap items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-xs font-bold text-emerald-800 shadow-sm">
              <span>{copy.flow.website}</span>
              <span aria-hidden="true">→</span>
              <span>{copy.flow.appsScript}</span>
              <span aria-hidden="true">→</span>
              <span>{copy.flow.googleSheet}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-[1fr_280px]">
          <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <input type="hidden" name="siteLanguage" value={pageMeta.siteLanguage} readOnly />
            <input type="hidden" name="browserLanguage" value={pageMeta.browserLanguage} readOnly />
            <input type="hidden" name="pagePath" value={pageMeta.pagePath} readOnly />
            <input type="hidden" name="referrer" value={pageMeta.referrer} readOnly />

            <div>
              <label htmlFor="email" className="block text-sm font-bold text-slate-900">{copy.fields.email}</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="mt-2 h-12 w-full rounded-xl border border-slate-300 px-4 text-sm outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                placeholder={copy.placeholders.email}
              />
            </div>

            <fieldset>
              <legend className="text-sm font-bold text-slate-900">{copy.fields.appInterested}</legend>
              <div className="mt-3 grid gap-3">
                {appOptions.map((option) => {
                  const value = option === 'other' ? copy.options.otherValue : option;
                  const label = option === 'other' ? copy.options.otherLabel : option;
                  return (
                    <label key={option} className="flex items-center gap-3 rounded-xl border border-slate-200 p-3 text-sm font-semibold text-slate-800 transition hover:border-emerald-300 hover:bg-emerald-50/50">
                      <input
                        type="radio"
                        name="appInterested"
                        value={value}
                        checked={selectedApp === option}
                        onChange={() => setSelectedApp(option)}
                        className="h-4 w-4 accent-emerald-600"
                      />
                      <span>{label}</span>
                    </label>
                  );
                })}
              </div>
              {selectedApp === 'other' && (
                <input
                  name="otherApp"
                  type="text"
                  required
                  className="mt-3 h-12 w-full rounded-xl border border-slate-300 px-4 text-sm outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                  placeholder={copy.placeholders.otherApp}
                />
              )}
            </fieldset>

            <div>
              <label htmlFor="deviceType" className="block text-sm font-bold text-slate-900">{copy.fields.deviceType}</label>
              <select id="deviceType" name="deviceType" required className="mt-2 h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-sm outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100">
                <option value="">{copy.placeholders.select}</option>
                <option value="phone">{copy.options.phone}</option>
                <option value="tablet">{copy.options.tablet}</option>
                <option value="both">{copy.options.both}</option>
              </select>
            </div>

            <fieldset>
              <legend className="text-sm font-bold text-slate-900">{copy.fields.canTest}</legend>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <label className="flex items-center gap-3 rounded-xl border border-slate-200 p-3 text-sm font-semibold text-slate-800">
                  <input type="radio" name="canTest14Days" value="yes" required className="h-4 w-4 accent-emerald-600" />
                  <span>{copy.options.yes}</span>
                </label>
                <label className="flex items-center gap-3 rounded-xl border border-slate-200 p-3 text-sm font-semibold text-slate-800">
                  <input type="radio" name="canTest14Days" value="no" required className="h-4 w-4 accent-emerald-600" />
                  <span>{copy.options.no}</span>
                </label>
              </div>
            </fieldset>

            <div>
              <label htmlFor="mostImportantFeature" className="block text-sm font-bold text-slate-900">{copy.fields.feature}</label>
              <textarea
                id="mostImportantFeature"
                name="mostImportantFeature"
                required
                rows={4}
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                placeholder={copy.placeholders.feature}
              />
            </div>

            <div>
              <label htmlFor="comments" className="block text-sm font-bold text-slate-900">{copy.fields.comments}</label>
              <textarea
                id="comments"
                name="comments"
                rows={5}
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                placeholder={copy.placeholders.comments}
              />
            </div>

            {status === 'success' && (
              <div role="status" className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-800">{copy.success}</div>
            )}
            {status === 'config-missing' && (
              <div role="status" className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-semibold text-amber-900">{copy.configMissing}</div>
            )}
            {status === 'error' && (
              <div role="alert" className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-800">{error || copy.errorFallback}</div>
            )}

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-emerald-600 px-5 text-sm font-bold text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:bg-emerald-300 sm:w-auto"
            >
              {status === 'submitting' ? copy.submitting : copy.submit}
            </button>
          </form>

          <aside className="h-fit rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-base font-black text-slate-950">{copy.sideTitle}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700">{copy.sideDesc}</p>
            <dl className="mt-5 space-y-4 text-sm">
              <div>
                <dt className="font-bold text-slate-900">{copy.languageLabel}</dt>
                <dd className="mt-1 text-slate-600">{currentLang}</dd>
              </div>
              <div>
                <dt className="font-bold text-slate-900">{copy.browserLanguageLabel}</dt>
                <dd className="mt-1 text-slate-600">{browserLanguage || copy.unknown}</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>
    </div>
  );
}

export default AndroidRequest;
