import React, { useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import './i18n';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Reader from './pages/Reader';
import WebApp from './pages/WebApp';
import About from './pages/About';

import Footer from './components/Footer';

function App() {
  const [currentTab, setCurrentTab] = useState('home');

  const renderContent = () => {
    switch (currentTab) {
      case 'home':
        return <Home setCurrentTab={setCurrentTab} />;
      case 'reader':
        return <Reader />;
      case 'webapp':
        return <WebApp />;
      case 'about':
        return <About />;
      default:
        return <Home setCurrentTab={setCurrentTab} />;
    }
  };

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-[#0f172a] text-white flex flex-col">
        <Navigation currentTab={currentTab} setCurrentTab={setCurrentTab} />
        <main className="flex-1 flex flex-col">
          {renderContent()}
        </main>

        {/* Footer - only show on non-webapp pages */}
        {currentTab !== 'webapp' && <Footer />}
      </div>
    </HelmetProvider>
  );
}

export default App;
