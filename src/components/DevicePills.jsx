import React from 'react';

/**
 * Supported-device pills for product-page heroes.
 * Device names are proper nouns (iPhone, CarPlay, …) — intentionally not translated.
 *
 * props:
 *   devices — array of keys: iphone | ipad | mac | visionpro | carplay | windows | android | web
 *   tone    — 'dark' (light text on dark hero) | 'light' (dark text on light hero)
 */

const ICONS = {
  iphone: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
      <path d="M10.5 5h3" />
    </svg>
  ),
  ipad: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4.5" y="2.5" width="15" height="19" rx="2.5" />
      <path d="M10 18.5h4" />
    </svg>
  ),
  mac: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3.5" y="4.5" width="17" height="12" rx="1.8" />
      <path d="M1.8 19.5h20.4" />
    </svg>
  ),
  visionpro: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 7.5c-4.6 0-8.5 1-8.5 4.4 0 3 1.7 4.9 4 4.9 2 0 2.6-1.6 4.5-1.6s2.5 1.6 4.5 1.6c2.3 0 4-1.9 4-4.9 0-3.4-3.9-4.4-8.5-4.4z" />
    </svg>
  ),
  carplay: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 16.5 5.4 10a2.4 2.4 0 0 1 2.3-1.9h8.6a2.4 2.4 0 0 1 2.3 1.9L20 16.5" />
      <rect x="3" y="14.5" width="18" height="5" rx="1.6" />
      <circle cx="7" cy="17" r="0.4" fill="currentColor" />
      <circle cx="17" cy="17" r="0.4" fill="currentColor" />
    </svg>
  ),
  windows: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none">
      <path d="M3 5.5 10.5 4.4v7.1H3V5.5zM12 4.2 21 3v8.5h-9V4.2zM3 12.5h7.5v7.1L3 18.5v-6zM12 12.5h9V21l-9-1.2v-7.3z" />
    </svg>
  ),
  android: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 15.5a7.5 7.5 0 0 1 15 0v2h-15v-2z" />
      <path d="M7.5 6.5 6 4M16.5 6.5 18 4" />
      <circle cx="9" cy="12.5" r="0.4" fill="currentColor" />
      <circle cx="15" cy="12.5" r="0.4" fill="currentColor" />
    </svg>
  ),
  web: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.6 2.5 3.9 5.6 3.9 9S14.6 18.5 12 21c-2.6-2.5-3.9-5.6-3.9-9S9.4 5.5 12 3z" />
    </svg>
  ),
};

const LABELS = {
  iphone: 'iPhone',
  ipad: 'iPad',
  mac: 'Mac',
  visionpro: 'Vision Pro',
  carplay: 'CarPlay',
  windows: 'Windows',
  android: 'Android',
  web: 'Web',
};

const DevicePills = ({ devices = [], tone = 'dark', align = 'center', className = '' }) => {
  const pillClass = tone === 'dark'
    ? 'border-white/15 bg-white/[0.06] text-white/85'
    : 'border-slate-200 bg-white/80 text-slate-700 shadow-sm';

  return (
    <div className={`flex flex-wrap items-center gap-2 ${align === 'start' ? 'justify-start' : 'justify-center'} ${className}`}>
      {devices.map((key) => (
        ICONS[key] && (
          <span
            key={key}
            className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold ${pillClass}`}
          >
            {ICONS[key]}
            {LABELS[key]}
          </span>
        )
      ))}
    </div>
  );
};

export default DevicePills;
