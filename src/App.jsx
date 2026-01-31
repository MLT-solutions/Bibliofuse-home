import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Routes, Route, Navigate, useParams, useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './i18n';
import { SUPPORTED_LANGUAGES } from './i18n';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Reader from './pages/Reader';
import WebApp from './pages/WebApp';
import About from './pages/About';
import Privacy from './pages/Privacy';
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

  // Get current path without language prefix
  const currentPath = location.pathname.replace(`/${lang}`, '') || '/';
  const isWebApp = currentPath === '/webapp';

  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex flex-col">
      <Navigation />
      <main className="flex-1 flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reader" element={<Reader />} />
          <Route path="/webapp" element={<WebApp />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<Navigate to={`/${lang}/`} replace />} />
        </Routes>
      </main>
      {!isWebApp && <Footer />}
    </div>
  );
}

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter basename="/Bibliofuse-home">
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
