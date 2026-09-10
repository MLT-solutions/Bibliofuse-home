// Lifted out of Home.jsx so /tools/ can use it too — the two Windows Store tools moved
// onto the tools page when the homepage's "Standalone tools" section was retired.
import React from 'react';

export default function MicrosoftStoreBadge({ href, size = 'sm', className = '' }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex transition hover:-translate-y-0.5 ${className}`}
        >
            <img
                src="/image/Microsoft_Store_badge.svg"
                alt="Get it from Microsoft"
                className={`${size === 'lg' ? 'h-12' : 'h-10'} w-auto object-contain`}
            />
        </a>
    );
}
