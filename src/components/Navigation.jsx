import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom';
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

const APP_STORE_URL = 'https://apps.apple.com/kw/app/bibliofuse-reader-compress/id6758330093';

const Navigation = () => {
    const { t, i18n } = useTranslation();
    const { lang } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const [isLangOpen, setIsLangOpen] = useState(false);
    const [isToolsOpen, setIsToolsOpen] = useState(false);
    const langMenuRef = useRef(null);
    const toolsMenuRef = useRef(null);

    const tabs = [
        { id: 'home', label: t('nav.home'), path: '/' },
        { id: 'reader', label: t('nav.reader'), path: '/', hash: '#reader' },
        { id: 'webapp', label: t('nav.webapp'), path: '/webapp' },
        { id: 'about', label: t('nav.about'), path: '/about' },
        { id: 'blog', label: t('nav.blog'), path: '/blog' },
        { id: 'changelog', label: t('nav.changelog'), path: '/changelog' },
    ];
    const tools = [
        { name: 'BiblioFuse Reader', sub: t('redesign.tools.readerSub'), path: '/', hash: '#reader', color: 'blue', icon: 'book' },
        { name: 'BiblioFuse Web Tool', sub: t('redesign.tools.webSub'), path: '/webapp', color: 'teal', icon: 'globe' },
        { name: 'Archive Duplicate Scanner', sub: t('redesign.tools.archiveSub'), path: '/', hash: '#archive', color: 'orange', icon: 'search' },
        { name: 'SmartDecrypt PDF ZIP', sub: t('redesign.tools.smartSub'), path: '/', hash: '#smartdecrypt', color: 'violet', icon: 'lock' },
        { name: 'ContentCue', sub: t('redesign.tools.contentcueSub'), path: '/', hash: '#contentcue', color: 'green', icon: 'browser' },
    ];

    const toggleLangMenu = () => setIsLangOpen(!isLangOpen);

    const changeLanguage = (code) => {
        // Get current path without language prefix
        const currentPath = location.pathname.replace(`/${lang}`, '') || '/';
        // Navigate to same path with new language
        navigate(`/${code}${currentPath}${location.hash || ''}`);
        setIsLangOpen(false);
    };

    const goHomeTop = (event) => {
        const homePath = `/${lang}/`;

        if (location.pathname === homePath && !location.hash) {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        window.requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: 'smooth' }));
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (langMenuRef.current && !langMenuRef.current.contains(event.target)) {
                setIsLangOpen(false);
            }
            if (toolsMenuRef.current && !toolsMenuRef.current.contains(event.target)) {
                setIsToolsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const currentLang = LANGUAGES.find(l => l.code === i18n.language) || LANGUAGES[0];

    // Get current active tab based on location
    const currentPath = location.pathname.replace(`/${lang}`, '') || '/';
    const activeTab = location.hash === '#reader'
        ? 'reader'
        : (currentPath.startsWith('/blog')
            ? 'blog'
            : currentPath.startsWith('/changelog')
            ? 'changelog'
            : tabs.find(tab => tab.path === currentPath && !tab.hash)?.id || null);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/80 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Link to={`/${lang}/`} onClick={goHomeTop} className="flex-shrink-0 cursor-pointer flex items-center gap-2">
                        <img src={logo} alt={t('redesign.altTexts.logo')} className="h-9 w-auto rounded-[10px] shadow-sm" />
                        <span className="text-xl font-black tracking-tight text-slate-950">
                            BiblioFuse
                        </span>
                    </Link>

                    <div className="flex items-center gap-4">
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                {tabs.map((tab) => (
                                    <Link
                                        key={tab.id}
                                        to={`/${lang}${tab.path}${tab.hash || ''}`}
                                        onClick={tab.id === 'home' ? goHomeTop : undefined}
                                        className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${activeTab === tab.id
                                            ? 'text-slate-950 bg-slate-100'
                                            : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100/70'
                                            }`}
                                    >
                                        {tab.label}
                                    </Link>
                                ))}
                                <div
                                    className="relative"
                                    ref={toolsMenuRef}
                                    onMouseEnter={() => setIsToolsOpen(true)}
                                    onMouseLeave={() => setIsToolsOpen(false)}
                                >
                                    <button
                                        type="button"
                                        onClick={() => setIsToolsOpen((open) => !open)}
                                        className={`flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold transition-all duration-200 ${isToolsOpen
                                            ? 'bg-slate-100 text-slate-950'
                                            : 'text-slate-600 hover:bg-slate-100/70 hover:text-slate-950'
                                            }`}
                                    >
                                        {t('redesign.nav.tools')}
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="m6 9 6 6 6-6" />
                                        </svg>
                                    </button>
                                    {isToolsOpen && (
                                        <div className="absolute right-0 top-full w-[360px] pt-2">
                                            <div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl">
                                                {tools.map((tool) => (
                                                    <Link
                                                        key={tool.name}
                                                        to={`/${lang}${tool.path}${tool.hash || ''}`}
                                                        onClick={() => setIsToolsOpen(false)}
                                                        className="group flex items-start gap-3 rounded-xl p-3 transition hover:bg-slate-50"
                                                    >
                                                        <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg ${toolIconClass(tool.color)}`}>
                                                            <ToolIcon kind={tool.icon} />
                                                        </span>
                                                        <span className="min-w-0 flex-1">
                                                            <span className="block text-sm font-bold leading-tight text-slate-950">{tool.name}</span>
                                                            <span className="mt-0.5 block text-xs text-slate-500">{tool.sub}</span>
                                                        </span>
                                                        <svg className="mt-1.5 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                                                            <path d="m9 6 6 6-6 6" />
                                                        </svg>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Language Selector */}
                        <div className="relative" ref={langMenuRef}>
                            <button
                                onClick={toggleLangMenu}
                                className="flex items-center gap-1 text-slate-600 hover:text-slate-950 transition-colors px-2 py-1 rounded-lg hover:bg-slate-100 text-sm font-semibold"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span className="uppercase">{currentLang?.code?.split('-')[0]}</span>
                            </button>

                            {isLangOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white border border-slate-200 rounded-xl shadow-xl py-1 max-h-96 overflow-y-auto z-50">
                                    {LANGUAGES.map((lang) => (
                                        <button
                                            key={lang.code}
                                            onClick={() => changeLanguage(lang.code)}
                                            className={`block w-full text-left px-4 py-2 text-sm hover:bg-slate-50 ${i18n.language === lang.code ? 'text-blue-600 font-bold' : 'text-slate-700'}`}
                                        >
                                            {lang.label}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        <a
                            href={APP_STORE_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden sm:inline-flex h-9 items-center gap-1.5 rounded-lg bg-[#0B1220] px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-[#162033] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2D7CF6]"
                        >
                            {t('redesign.nav.getApp')}
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M13 6l6 6-6 6" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

function toolIconClass(color) {
    if (color === 'blue') return 'bg-blue-50 text-blue-600';
    if (color === 'teal') return 'bg-teal-50 text-teal-600';
    if (color === 'orange') return 'bg-orange-50 text-orange-600';
    if (color === 'green') return 'bg-green-50 text-green-600';
    return 'bg-violet-50 text-violet-600';
}

function ToolIcon({ kind }) {
    if (kind === 'globe') {
        return (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9" />
                <path d="M3 12h18M12 3a13 13 0 0 1 0 18 13 13 0 0 1 0-18" />
            </svg>
        );
    }
    if (kind === 'search') {
        return (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="7" />
                <path d="m21 21-4.3-4.3" />
            </svg>
        );
    }
    if (kind === 'lock') {
        return (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="11" width="14" height="10" rx="2" />
                <path d="M8 11V8a4 4 0 0 1 8 0v3" />
            </svg>
        );
    }
    if (kind === 'browser') {
        return (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M2 9h20" />
                <circle cx="6" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
                <circle cx="9" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
            </svg>
        );
    }
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 19V5a2 2 0 0 1 2-2h12v18H6a2 2 0 0 1-2-2Z" />
            <path d="M9 3v18" />
        </svg>
    );
}

export default Navigation;
