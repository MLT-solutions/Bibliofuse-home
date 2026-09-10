import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Routes, Route, Navigate, useParams, useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './i18n';
import { SUPPORTED_LANGUAGES } from './i18n';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import ToolsHub from './pages/tools/ToolsHub';
import Guide from './pages/Guide';
import ToolRoutePage from './pages/tools/ToolRoutePage';
import { TOOL_SLUGS } from './data/tools';
import About from './pages/About';
import Privacy from './pages/Privacy';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import FeatureMatrix from './pages/FeatureMatrix';
import AppChangelog from './pages/AppChangelog';
import AppPrivacy from './pages/AppPrivacy';
import ComicReader from './pages/ComicReader';
import SmartDecrypt from './pages/SmartDecrypt';
import ContentCue from './pages/ContentCue';
import AndroidRequest from './pages/AndroidRequest';
import Footer from './components/Footer';

// Language redirect component - detects and redirects to proper language
function LanguageRedirect() {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    // Get detected or default language
    let detectedLang = i18n.language || 'en';

    // Ensure it's a supported language
    if (!SUPPORTED_LANGUAGES.includes(detectedLang)) {
      detectedLang = 'en';
    }

    // Redirect to the detected language with current path
    const targetPath = location.pathname === '/' ? `/${detectedLang}/` : `/${detectedLang}${location.pathname}`;
    navigate(targetPath, { replace: true });
  }, [i18n, navigate, location]);

  return null;
}

// Layout component that validates language parameter
function AppLayout() {
  const { lang } = useParams();
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  // Validate and set language
  React.useEffect(() => {
    if (lang && SUPPORTED_LANGUAGES.includes(lang)) {
      if (i18n.language !== lang) {
        i18n.changeLanguage(lang);
      }
    } else {
      // Invalid language - redirect to English
      const pathWithoutLang = location.pathname.replace(`/${lang}`, '');
      navigate(`/en${pathWithoutLang || '/'}`, { replace: true });
    }
  }, [lang, i18n, navigate, location]);

  React.useEffect(() => {
    if (!location.hash) {
      window.requestAnimationFrame(() => {
        window.scrollTo({ top: 0 });
      });
      return;
    }

    // Cross-page anchors (e.g. the homepage's "See what streams where" ->
    // /comicreader/#setup-guide) used to scroll once inside a single
    // requestAnimationFrame. Two problems: rAF never fires in a background tab, and
    // /comicreader/ is ~8000px tall and media-heavy, so one scroll on the first frame
    // lands in the wrong place as soon as the images above the target finish loading
    // and shift the layout. Re-anchor a few times across the first second instead, and
    // stop the moment the visitor scrolls themselves so this never fights them.
    const targetId = location.hash.slice(1);
    let cancelled = false;
    let timer;
    const stop = () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
    const opts = { passive: true, once: true };
    window.addEventListener('wheel', stop, opts);
    window.addEventListener('touchstart', stop, opts);
    window.addEventListener('keydown', stop, { once: true });

    // Explicit window.scrollTo rather than el.scrollIntoView({block:'start'}): it lets us
    // clear the fixed 64px header (scrollIntoView puts the target flush under it), and it
    // is the only form that actually moves the page in a background/hidden tab, which is
    // also what makes this verifiable.
    const HEADER_OFFSET = 80;
    let attempts = 0;
    const jump = () => {
      if (cancelled) return;
      const el = document.getElementById(targetId);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
        window.scrollTo(0, Math.max(0, y));
      }
      attempts += 1;
      if (attempts < 5) timer = window.setTimeout(jump, 220);
    };
    jump();

    return () => {
      stop();
      window.removeEventListener('wheel', stop);
      window.removeEventListener('touchstart', stop);
      window.removeEventListener('keydown', stop);
    };
  }, [location.hash, location.pathname]);

  // Get current path without language prefix
  const currentPath = location.pathname.replace(`/${lang}`, '') || '/';
  const normalizedPath = currentPath === '/' ? '/' : currentPath.replace(/\/$/, '');
  const isSmartDecrypt = normalizedPath === '/smartdecrypt';
  const isContentCue = normalizedPath === '/contentcue';

  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex flex-col">
      <Navigation />
      <main className="flex-1 flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reader" element={<Navigate to={`/${lang}/comicreader/`} replace />} />
          <Route path="/comicreader" element={<ComicReader />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/tools" element={<ToolsHub />} />
          {TOOL_SLUGS.map((slug) => (
            <Route key={slug} path={`/tools/${slug}`} element={<ToolRoutePage slug={slug} />} />
          ))}
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/features" element={<FeatureMatrix />} />
          <Route path="/smartdecrypt" element={<SmartDecrypt />} />
          <Route path="/smartdecrypt/changelog" element={<AppChangelog appSlug="smartdecrypt" />} />
          <Route path="/smartdecrypt/privacy" element={<AppPrivacy appSlug="smartdecrypt" />} />
          <Route path="/contentcue" element={<ContentCue />} />
          <Route path="/contentcue/changelog" element={<AppChangelog appSlug="contentcue" />} />
          <Route path="/contentcue/privacy" element={<AppPrivacy appSlug="contentcue" />} />
          <Route path="/androidrequest" element={<AndroidRequest />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<Navigate to={`/${lang}/`} replace />} />
        </Routes>
      </main>
      <BackToTopButton />
      {/* /comicreader/ used to be excluded here and carried its own two-link
          footnote row instead. It is the site's main product page, so it now
          gets the same footer as everywhere else (asked for 2026-09-10). The
          two retired sister-app stubs keep the exclusion. */}
      {!isSmartDecrypt && !isContentCue && <Footer />}
    </div>
  );
}

function BackToTopButton() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Go to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-5 left-4 z-40 grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-slate-950 shadow-2xl transition sm:hidden ${visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'}`}
    >
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="m18 15-6-6-6 6" />
      </svg>
    </button>
  );
}

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          {/* Root redirect - detects language and redirects */}
          <Route path="/" element={<LanguageRedirect />} />

          {/* Language-prefixed routes */}
          <Route path="/:lang/*" element={<AppLayout />} />

          {/* Fallback for any unmatched routes */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
