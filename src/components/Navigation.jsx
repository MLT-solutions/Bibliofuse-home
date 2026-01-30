import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../assets/logo.png';

const LANGUAGES = [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' },
    { code: 'fr', label: 'Français' },
    { code: 'nl', label: 'Nederlands' },
    { code: 'pt', label: 'Português' },
    { code: 'ru', label: 'Русский' },
    { code: 'zh', label: '简体中文' },
    { code: 'ja', label: '日本語' },
    { code: 'ko', label: '한국어' },
    { code: 'id', label: 'Bahasa Indonesia' },
    { code: 'ms', label: 'Bahasa Melayu' },
];

const Navigation = ({ currentTab, setCurrentTab }) => {
    const { t, i18n } = useTranslation();
    const [isLangOpen, setIsLangOpen] = useState(false);
    const langMenuRef = useRef(null);

    const tabs = [
        { id: 'home', label: t('nav.home') },
        { id: 'reader', label: t('nav.reader') },
        { id: 'webapp', label: t('nav.webapp') },
        { id: 'about', label: t('nav.about') },
    ];

    const toggleLangMenu = () => setIsLangOpen(!isLangOpen);
    const changeLanguage = (code) => {
        i18n.changeLanguage(code);
        setIsLangOpen(false);
    };

    // Close click outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (langMenuRef.current && !langMenuRef.current.contains(event.target)) {
                setIsLangOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const currentLang = LANGUAGES.find(l => l.code === i18n.language) || LANGUAGES[0];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/50 backdrop-blur-md border-b border-white/10 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0 cursor-pointer flex items-center gap-2" onClick={() => setCurrentTab('home')}>
                        <img src={logo} alt="Logo" className="h-8 w-auto rounded-lg" />
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                            BiblioFuse
                        </span>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setCurrentTab(tab.id)}
                                        className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${currentTab === tab.id
                                            ? 'text-white bg-white/10 shadow-[0_0_15px_rgba(255,255,255,0.1)]'
                                            : 'text-gray-300 hover:text-white hover:bg-white/5'
                                            }`}
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Language Selector */}
                        <div className="relative" ref={langMenuRef}>
                            <button
                                onClick={toggleLangMenu}
                                className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors px-2 py-1 rounded hover:bg-white/5 text-sm"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span className="uppercase">{currentLang?.code?.split('-')[0]}</span>
                            </button>

                            {isLangOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-slate-800 border border-white/10 rounded-lg shadow-xl py-1 max-h-96 overflow-y-auto z-50">
                                    {LANGUAGES.map((lang) => (
                                        <button
                                            key={lang.code}
                                            onClick={() => changeLanguage(lang.code)}
                                            className={`block w-full text-left px-4 py-2 text-sm hover:bg-white/10 ${i18n.language === lang.code ? 'text-blue-400 font-bold' : 'text-slate-300'}`}
                                        >
                                            {lang.label}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
