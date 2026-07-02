import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Routes, Route, Navigate, useParams, useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './i18n';
import { SUPPORTED_LANGUAGES } from './i18n';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import WebApp from './pages/WebApp';
import About from './pages/About';
import Privacy from './pages/Privacy';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Changelog from './pages/Changelog';
import AppChangelog from './pages/AppChangelog';
import AppPrivacy from './pages/AppPrivacy';
import GrepTagReader from './pages/GrepTagReader';
import ArchiveScanner from './pages/ArchiveScanner';
import SmartDecrypt from './pages/SmartDecrypt';
import ContentCue from './pages/ContentCue';
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

    const targetId = location.hash.slice(1);
    window.requestAnimationFrame(() => {
      document.getElementById(targetId)?.scrollIntoView({ block: 'start' });
    });
  }, [location.hash, location.pathname]);

  // Get current path without language prefix
  const currentPath = location.pathname.replace(`/${lang}`, '') || '/';
  const normalizedPath = currentPath === '/' ? '/' : currentPath.replace(/\/$/, '');
  const isWebApp = normalizedPath === '/webapp';
  const isGrepTagReader = normalizedPath === '/grepreader';
  const isArchiveScanner = normalizedPath === '/archive';
  const isSmartDecrypt = normalizedPath === '/smartdecrypt';
  const isContentCue = normalizedPath === '/contentcue';

  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex flex-col">
      <Navigation />
      <main className="flex-1 flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reader" element={<Navigate to={`/${lang}/#reader`} replace />} />
          <Route path="/webapp" element={<WebApp />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/changelog" element={<Changelog />} />
          <Route path="/grepreader" element={<GrepTagReader />} />
          <Route path="/grepreader/changelog" element={<AppChangelog appSlug="grepreader" />} />
          <Route path="/grepreader/privacy" element={<AppPrivacy appSlug="grepreader" />} />
          <Route path="/archive" element={<ArchiveScanner />} />
          <Route path="/archive/changelog" element={<AppChangelog appSlug="archive" />} />
          <Route path="/archive/privacy" element={<AppPrivacy appSlug="archive" />} />
          <Route path="/smartdecrypt" element={<SmartDecrypt />} />
          <Route path="/smartdecrypt/changelog" element={<AppChangelog appSlug="smartdecrypt" />} />
          <Route path="/smartdecrypt/privacy" element={<AppPrivacy appSlug="smartdecrypt" />} />
          <Route path="/contentcue" element={<ContentCue />} />
          <Route path="/contentcue/changelog" element={<AppChangelog appSlug="contentcue" />} />
          <Route path="/contentcue/privacy" element={<AppPrivacy appSlug="contentcue" />} />
          <Route path="*" element={<Navigate to={`/${lang}/`} replace />} />
        </Routes>
      </main>
      <BackToTopButton />
      {!isWebApp && !isGrepTagReader && !isArchiveScanner && !isSmartDecrypt && !isContentCue && <Footer />}
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
