// Local equivalent of lokaltools' tool-disclaimer, restyled for this site and with the
// dark: variants dropped — tailwind.config.js sets no darkMode, so Tailwind's default
// `media` strategy would activate them for anyone whose OS is dark, painting dark
// panels onto a light-only site.
import React from 'react';

export default function ToolDisclaimer({ message, type = 'info', className = '' }) {
    const warning = type === 'warning';
    return (
        <div
            className={`mt-8 flex gap-3 rounded-xl border p-4 text-sm ${
                warning
                    ? 'border-amber-200 bg-amber-50 text-amber-900'
                    : 'border-sky-200 bg-sky-50 text-sky-900'
            } ${className}`}
        >
            <svg
                className={`h-5 w-5 flex-shrink-0 ${warning ? 'text-amber-600' : 'text-sky-600'}`}
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round"
            >
                {warning
                    ? <><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" /><path d="M12 9v4" /><path d="M12 17h.01" /></>
                    : <><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></>}
            </svg>
            <p className="leading-relaxed">{message}</p>
        </div>
    );
}
