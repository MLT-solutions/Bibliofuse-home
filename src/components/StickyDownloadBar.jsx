import React, { useEffect, useState } from 'react';

/**
 * Floating sticky download bar — appears after scrolling past threshold.
 * Props:
 *   logo         — app icon src path
 *   appName      — short display name shown on sm+ screens
 *   appStoreUrl  — iOS / universal App Store link (optional)
 *   macStoreUrl  — Mac App Store link (optional, shown with App Store badge)
 *   msStoreUrl   — Microsoft Store link (optional)
 *   threshold    — scroll Y in px before bar appears (default 500)
 */
export default function StickyDownloadBar({
  logo,
  appName,
  appStoreUrl,
  macStoreUrl,
  msStoreUrl,
  threshold = 500,
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > threshold);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return (
    <div
      className={`fixed bottom-5 left-0 right-0 z-30 flex justify-center px-4 transition-all duration-300 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0'
      }`}
    >
      <div className="pointer-events-auto flex items-center gap-1.5 rounded-2xl border border-white/10 bg-[#0b1220]/95 px-2.5 py-2 text-white shadow-2xl backdrop-blur-md sm:gap-3 sm:px-4 sm:py-2.5">
        <img src={logo} alt="" className="h-6 w-6 flex-shrink-0 rounded-lg sm:h-7 sm:w-7" />
        <span className="hidden text-sm font-bold whitespace-nowrap sm:inline">{appName}</span>
        {appStoreUrl && (
          <a href={appStoreUrl} target="_blank" rel="noopener noreferrer" className="inline-flex flex-shrink-0">
            <img src="/image/Download_on_the_App_Store_Badge.svg.png" alt="Download on the App Store" className="h-6 w-auto sm:h-7" />
          </a>
        )}
        {macStoreUrl && (
          <a href={macStoreUrl} target="_blank" rel="noopener noreferrer" className="inline-flex flex-shrink-0">
            <img src="/image/Download_on_the_App_Store_Badge.svg.png" alt="Download on the Mac App Store" className="h-6 w-auto sm:h-7" />
          </a>
        )}
        {msStoreUrl && (
          <a href={msStoreUrl} target="_blank" rel="noopener noreferrer" className="inline-flex flex-shrink-0">
            <img src="/image/Microsoft_Store_badge.svg" alt="Get it from Microsoft" className="h-6 w-auto sm:h-7" />
          </a>
        )}
      </div>
    </div>
  );
}
