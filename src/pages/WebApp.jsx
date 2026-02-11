import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

const WebApp = () => {
    const { t } = useTranslation();

    const handleLaunchApp = () => {
        window.open('https://bibliofuse-web.netlify.app/', '_blank', 'noopener,noreferrer');
    };

    return (
        <>
            <SEO
                title={t('nav.webapp')}
                description="Manage & Convert Your Digital Library - Manage EPUB, PDF, CBZ, ZIP files. Save 50% storage space with smart series merging. 100% private browser WASM tool, no install needed, works on all platforms."
            />
            <div className="pt-16 min-h-screen flex flex-col w-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
                <div className="flex-1 w-full flex items-center justify-center p-8">
                    <div className="max-w-3xl w-full">
                        {/* Main Card */}
                        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 shadow-2xl border border-white/20">
                            {/* Logo/Icon */}
                            <div className="flex justify-center mb-6">
                                <img
                                    src="/app-icon.png"
                                    alt="BiblioFuse Logo"
                                    className="w-24 h-24 rounded-xl shadow-lg"
                                />
                            </div>

                            {/* Title */}
                            <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
                                BiblioFuse Web App
                            </h1>

                            {/* Subtitle */}
                            <p className="text-xl text-blue-200 text-center mb-8">
                                Your Universal E-Book Toolkit in the Browser
                            </p>

                            {/* Features Grid */}
                            <div className="grid md:grid-cols-2 gap-4 mb-8">
                                <div className="flex items-start space-x-3">
                                    <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-semibold">100% Private</h3>
                                        <p className="text-blue-100 text-sm">All processing happens locally in your browser</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-semibold">No Installation</h3>
                                        <p className="text-blue-100 text-sm">Works instantly on any platform or device</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-semibold">Merge & Convert</h3>
                                        <p className="text-blue-100 text-sm">EPUB, PDF, CBZ, ZIP - all supported</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-semibold">Smart Compression</h3>
                                        <p className="text-blue-100 text-sm">Save up to 50% storage space</p>
                                    </div>
                                </div>
                            </div>

                            {/* Launch Button */}
                            <button
                                onClick={handleLaunchApp}
                                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-lg font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-3"
                            >
                                <span>Launch Web App</span>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </button>

                            {/* Info Text */}
                            <p className="text-blue-200 text-sm text-center mt-4">
                                Opens in a new tab • No signup required • Powered by WebAssembly
                            </p>
                        </div>

                        {/* Additional Info */}
                        <div className="mt-6 text-center">
                            <p className="text-blue-300 text-sm">
                                Works on Windows, macOS, Linux, Android, iOS, and ChromeOS
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WebApp;
