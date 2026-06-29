import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import SEO from '../components/SEO';

const PRIVACY_CONFIGS = {
  archive: {
    appName: 'Comic Duplicate Scanner',
    logo: '/image/archive-logo.png',
    rawUrl: 'https://raw.githubusercontent.com/mlt-solutions/app-legal-docs/main/archiveduplicatescanner/PRIVACY.md',
    privacySummary: 'Comic Duplicate Scanner collects no personal data. All file scanning and duplicate detection runs entirely on your Mac or Windows PC. No files, hashes, or scan results are uploaded to any server.',
    faq: [
      { q: 'Does Comic Duplicate Scanner collect personal data?', a: 'No. Comic Duplicate Scanner does not collect, store, or transmit any personal data. All scanning runs on your device and no data leaves your Mac or Windows PC.' },
      { q: 'What data does Comic Duplicate Scanner store locally?', a: 'Comic Duplicate Scanner stores a local hash cache for faster rescans, your app preferences, and your Pro license key. All data is stored locally on your device and is never uploaded.' },
      { q: 'Is Comic Duplicate Scanner safe to use?', a: 'Yes. Comic Duplicate Scanner processes all files locally. It does not connect to any external server, collect analytics, or transmit any data.' },
    ],
  },
  grepreader: {
    appName: 'GrepTag Reader',
    logo: '/image/grepreader-logo.png',
    rawUrl: 'https://raw.githubusercontent.com/mlt-solutions/app-legal-docs/main/bibliofusegreptagread/PRIVACY.md',
    privacySummary: 'GrepTag Reader collects no personal data. Your EPUB and TXT library stays on your device. Wi-Fi sync is peer-to-peer over your local network — no cloud involved.',
    faq: [
      { q: 'Does GrepTag Reader collect personal data?', a: 'No. GrepTag Reader does not collect personal data, usage analytics, or reading history. Your EPUB and TXT library stays on your iPhone, iPad, or Mac.' },
      { q: 'Is GrepTag Reader Wi-Fi sync safe?', a: 'Yes. Wi-Fi sync in GrepTag Reader is peer-to-peer over your local network (LAN). No data is routed through any cloud server. Sync only works between devices on the same network.' },
      { q: 'Does GrepTag Reader upload my books?', a: 'No. GrepTag Reader does not upload any files. All scanning, tagging, and syncing happens locally on your device or directly over your home network.' },
    ],
  },
  smartdecrypt: {
    appName: 'SmartDecrypt PDF ZIP',
    logo: '/image/smartdecrypt-logo.png',
    rawUrl: 'https://raw.githubusercontent.com/mlt-solutions/app-legal-docs/main/smartdecrypt%20PDF%20ZIP/PRIVACY.md',
    privacySummary: 'SmartDecrypt collects no personal data. Password decryption happens entirely on-device using a native library. Passwords are stored in your system Keychain and never transmitted to any server.',
    faq: [
      { q: 'Does SmartDecrypt collect my passwords?', a: 'No. SmartDecrypt stores passwords in your device system Keychain and never transmits them to any server. All decryption happens entirely on your device.' },
      { q: 'Does SmartDecrypt collect personal data?', a: 'No. SmartDecrypt does not collect personal data, usage analytics, or crash reports. On iOS and macOS, Apple StoreKit validates in-app purchases — only entitlement data is handled by Apple.' },
      { q: 'Is SmartDecrypt safe for sensitive files?', a: 'Yes. SmartDecrypt processes all files entirely on your device using a native Rust library. Files and passwords never leave your device.' },
    ],
  },
  contentcue: {
    appName: 'ContentCue',
    logo: '/image/contentcue-logo.png',
    rawUrl: 'https://raw.githubusercontent.com/mlt-solutions/app-legal-docs/main/contentcue/PRIVACY.md',
    privacySummary: 'ContentCue collects no personal data. No browsing history, scroll positions, or site data are stored or transmitted. All reading state is kept locally on your device.',
    faq: [
      { q: 'Does ContentCue track my browsing history?', a: 'No. ContentCue does not store or transmit your browsing history, scroll positions, or any website data. All reading state is saved locally on your device.' },
      { q: 'Does ContentCue block ads?', a: 'No. ContentCue does not block ads. It saves your scroll position when ads interrupt reading so you can return to your exact spot. All ads on websites load normally.' },
      { q: 'Is ContentCue safe?', a: 'Yes. ContentCue collects no personal data. It does not log visited sites, capture passwords, or transmit any browsing activity.' },
    ],
  },
};

export default function AppPrivacy({ appSlug }) {
  const { lang } = useParams();
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const config = PRIVACY_CONFIGS[appSlug];

  useEffect(() => {
    if (!config) return;
    setLoading(true);
    setError(false);
    fetch(config.rawUrl)
      .then(r => {
        if (!r.ok) throw new Error('fetch failed');
        return r.text();
      })
      .then(text => { setContent(text); setLoading(false); })
      .catch(() => { setError(true); setLoading(false); });
  }, [config?.rawUrl]);

  if (!config) return null;
  const { appName, logo, privacySummary, faq } = config;

  const baseUrl = 'https://bibliofuse.com';
  const privacyUrl = `${baseUrl}/en/${appSlug}/privacy/`;

  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: appName,
    url: privacyUrl,
    description: privacySummary,
    publisher: { '@type': 'Organization', name: 'BiblioFuse', url: baseUrl },
  };

  return (
    <div className="min-h-screen bg-white px-4 pb-24 pt-28 sm:px-6 lg:px-8">
      <SEO
        title={`${appName} — Privacy Policy`}
        description={privacySummary}
        canonical={`/${appSlug}/privacy`}
        schemaType="website"
        faqItems={faq}
        additionalSchemas={[softwareSchema]}
        breadcrumbs={[
          { name: 'BiblioFuse', url: `${baseUrl}/en/` },
          { name: appName, url: `${baseUrl}/en/${appSlug}/` },
          { name: 'Privacy Policy', url: privacyUrl },
        ]}
      />

      <div className="mx-auto max-w-2xl">
        <div className="mb-8 text-center">
          {logo && (
            <img src={logo} alt={appName} className="mx-auto mb-4 h-16 w-16 rounded-2xl shadow-sm" />
          )}
          <div className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
            Privacy Policy
          </div>
          <h1 className="font-display text-[clamp(1.8rem,4vw,3rem)] font-black leading-tight tracking-tight text-slate-950">
            {appName}
          </h1>
        </div>

        {loading && (
          <div className="py-16 text-center text-sm text-slate-400">Loading…</div>
        )}

        {error && (
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center">
            <p className="text-sm text-slate-600">
              Unable to load the privacy policy. Please try again later.
            </p>
          </div>
        )}

        {!loading && !error && content && (
          <div className="prose prose-slate max-w-none text-sm leading-relaxed">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
}
