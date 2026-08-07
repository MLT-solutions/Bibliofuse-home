import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

function QrForm() {
  const { t } = useTranslation();
  const page = t('redesign.qrGeneratorPage', { returnObjects: true });
  const f = page.form;
  const [name, setName] = useState('');
  const [kind, setKind] = useState('kavita');
  const [url, setUrl] = useState('http://192.168.0.123:5000');
  const [apiKey, setApiKey] = useState('');
  const [showKey, setShowKey] = useState(false);
  const [qrHtml, setQrHtml] = useState('');
  const qrLoaded = useRef(false);

  useEffect(() => {
    if (window.qrcode) { qrLoaded.current = true; return; }
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js';
    script.onload = () => { qrLoaded.current = true; };
    document.head.appendChild(script);
    return () => { if (script.parentNode) script.parentNode.removeChild(script); };
  }, []);

  const generateQr = useCallback(() => {
    const trimmedUrl = url.trim();
    if (!trimmedUrl) return;
    if (!window.qrcode) return;

    const params = new URLSearchParams();
    params.set('address', trimmedUrl);
    if (name.trim()) params.set('name', name.trim());
    params.set('kind', kind);
    if (apiKey.trim()) params.set('apikey', apiKey.trim());
    const data = 'bibliofuse://add-server?' + params.toString();

    const qr = window.qrcode(0, 'M');
    qr.addData(data);
    qr.make();

    const size = 260;
    const cellSize = 4;
    const mods = qr.getModuleCount();
    const drawSize = mods * cellSize;
    const offset = Math.floor((size - drawSize) / 2);

    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, size, size);
    ctx.save();
    ctx.translate(offset, offset);
    qr.renderTo2dContext(ctx, cellSize);
    ctx.restore();

    setQrHtml(`<div style="text-align:center;margin-top:16px"><canvas width="${size}" height="${size}"></canvas><p style="margin-top:8px;font-size:11px;word-break:break-all;color:#64748b">${trimmedUrl}</p></div>`);

    setTimeout(() => {
      const container = document.getElementById('qr-output');
      if (container) {
        container.innerHTML = '';
        container.appendChild(canvas);
        const addr = document.createElement('p');
        addr.className = 'mt-2 text-[11px] break-all text-slate-400';
        addr.textContent = trimmedUrl;
        container.appendChild(addr);
      }
    }, 0);
  }, [url, name, kind, apiKey]);

  const clearQr = () => {
    setQrHtml('');
    const container = document.getElementById('qr-output');
    if (container) container.innerHTML = '';
  };

  const handleKindChange = (e) => {
    const v = e.target.value;
    setKind(v);
    setUrl(v === 'kavita' ? 'http://192.168.0.123:5000' : 'http://192.168.0.123:25600');
  };

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-black text-slate-950">{f.generatorTitle}</h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.generatorDesc}</p>
      </div>

      <div className="grid gap-0 lg:grid-cols-[1fr_auto_auto] lg:items-end">
        <div className="space-y-4">
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-slate-600">{f.displayNameLabel}</label>
            <input
              maxLength={64}
              placeholder={f.displayNamePlaceholder}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-950 outline-none transition focus:border-slate-400 focus:bg-white"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-slate-600">{f.serviceTypeLabel}</label>
            <select
              value={kind}
              onChange={handleKindChange}
              className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-950 outline-none transition focus:border-slate-400 focus:bg-white"
            >
              <option value="kavita">{f.kavitaOption}</option>
              <option value="komga">{f.komgaOption}</option>
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-slate-600">{f.serverUrlLabel}</label>
            <input
              placeholder={f.serverUrlPlaceholder}
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 font-mono text-sm text-slate-950 outline-none transition focus:border-slate-400 focus:bg-white"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-slate-600">{f.apiKeyLabel}</label>
            <div className="flex gap-2">
              <input
                type={showKey ? 'text' : 'password'}
                autoComplete="off"
                placeholder={f.apiKeyPlaceholder}
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 font-mono text-sm text-slate-950 outline-none transition focus:border-slate-400 focus:bg-white"
              />
              <button
                type="button"
                onClick={() => setShowKey((v) => !v)}
                className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-xs font-semibold text-slate-600 transition hover:bg-slate-100"
              >
                {showKey ? f.hide : f.show}
              </button>
            </div>
            <span className="mt-1 text-[11px] text-slate-400">{f.apiKeyHint}</span>
          </div>
        </div>

        <div className="mx-6 hidden w-px self-stretch bg-slate-200 lg:block" />

        <div className="flex flex-col items-center gap-4 lg:min-w-[280px]">
          <div id="qr-output" className="flex min-h-[280px] w-full flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-white" />
          <p className="text-center text-[11px] leading-relaxed text-amber-700">{f.warning}</p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={generateQr}
              className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              {f.generate}
            </button>
            <button
              type="button"
              onClick={clearQr}
              className="rounded-xl border border-slate-200 bg-slate-50 px-5 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-100"
            >
              {f.clear}
            </button>
          </div>
          <a href="https://github.com/kazuhikoarase/qrcode-generator" target="_blank" rel="noopener noreferrer" className="mt-2 text-[10px] text-slate-400 underline-offset-2 hover:text-slate-600 hover:underline">
            {f.qrCredit}
          </a>
        </div>
      </div>
    </div>
  );
}

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

          <div className="mb-10 rounded-3xl border border-slate-200 bg-[#f7f9fe] p-6 sm:p-8">
            <QrForm />
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
