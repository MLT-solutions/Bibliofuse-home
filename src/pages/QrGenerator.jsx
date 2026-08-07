import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

const QrGenerator = () => {
  const { t, i18n } = useTranslation();
  const { lang } = useParams();
  const currentLang = lang || i18n.language || 'en';
  const page = t('redesign.qrGeneratorPage', { returnObjects: true });

  return (
    <div className="min-h-screen bg-[#F6F8FC] px-4 pb-20 pt-28 text-slate-950 sm:px-6 lg:px-8">
      <SEO
        title={page.seoTitle}
        description={page.seoDesc}
        canonical="/qr-generator"
        schemaType="website"
      />

      <div className="mx-auto max-w-4xl">
        <Link to={`/${currentLang}/`} className="text-sm font-semibold text-slate-700 underline-offset-4 hover:underline">
          {page.back}
        </Link>

        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl sm:p-10">
          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500">{page.eyebrow}</p>
            <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">{page.title}</h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">{page.desc}</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-black text-slate-950">{page.whatTitle}</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{page.whatDesc}</p>
                <ul className="mt-5 space-y-3 text-sm text-slate-600">
                  {page.whatBullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-slate-900" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-black text-slate-950">{page.stepsTitle}</h2>
                <div className="mt-5 space-y-5">
                  {page.steps.map((step, index) => (
                    <div key={step.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                      <div className="mb-3 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-sm font-bold text-white">{index + 1}</div>
                        <h3 className="text-base font-black text-slate-950">{step.title}</h3>
                      </div>
                      <p className="text-sm leading-relaxed text-slate-600">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-sm leading-relaxed text-slate-600">
                <p className="font-semibold text-slate-950">{page.noteTitle}</p>
                <p className="mt-2">{page.noteDesc}</p>
              </div>
            </div>

            <aside className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-sm leading-relaxed text-slate-600">
              <h2 className="text-base font-black text-slate-950">{page.tipTitle}</h2>
              <div className="mt-4 space-y-4">
                {page.tipBullets.map((bullet) => (
                  <p key={bullet}>{bullet}</p>
                ))}
              </div>
              <Link
                to={`/${currentLang}/`}
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                {page.homeCta}
              </Link>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QrGenerator;
