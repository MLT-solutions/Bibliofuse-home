// The QR generator's form, extracted from the old standalone /qr-generator/ page so it
// slots into the shared /tools/ skeleton like every other tool. The library is bundled
// rather than pulled from a CDN: /*/tools/* is served cross-origin isolated, and a
// third-party script would contradict the page's own "nothing leaves your device" line.
import React, { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import qrcode from 'qrcode-generator';

export default function QrCodeGenerator() {
  const { t } = useTranslation();
  const page = t('redesign.qrGeneratorPage', { returnObjects: true });
  const f = page.form;
  const [name, setName] = useState('');
  const [kind, setKind] = useState('kavita');
  const [url, setUrl] = useState('http://192.168.0.123:5000');
  const [apiKey, setApiKey] = useState('');
  const [showKey, setShowKey] = useState(false);
  const [qrHtml, setQrHtml] = useState('');
  const generateQr = useCallback(() => {
    const trimmedUrl = url.trim();
    if (!trimmedUrl) return;
    const params = new URLSearchParams();
    params.set('address', trimmedUrl);
    if (name.trim()) params.set('name', name.trim());
    params.set('kind', kind);
    if (apiKey.trim()) params.set('apikey', apiKey.trim());
    const data = 'bibliofuse://add-server?' + params.toString();

    const qr = qrcode(0, 'M');
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
