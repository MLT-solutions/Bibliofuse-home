import React from 'react';
import logo from '../assets/logo.png';

const Home = ({ setCurrentTab }) => {
    return (
        <div className="pt-20 pb-12 w-full">
            {/* Hero Section */}
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 space-y-8">
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                    <img src={logo} alt="BiblioFuse Logo" className="relative w-64 md:w-96 drop-shadow-2xl rounded-3xl" />
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-indigo-100">
                    BiblioFuse
                </h1>
                <p className="text-xl md:text-2xl text-slate-300 max-w-2xl font-light">
                    The Ultimate E-Book Ecosystem. Tools for managing, Reader for enjoying.
                </p>

                {/* Download / Action Buttons */}
                <div className="flex flex-wrap gap-4 justify-center mt-8 cursor-default">
                    {/* iOS (In Review) - First */}
                    <button
                        className="glass-button px-8 py-3 rounded-full font-semibold flex items-center gap-2 opacity-80 hover:opacity-100 cursor-not-allowed border-dashed"
                        title="Currently in Review"
                    >
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M18.71,19.5C17.88,20.79 17,20.25 16.5,19.5L15.4,18H16.5V17H12.5V16L13.5,15.5L12.5,15H17.5V14H13V13H18.5V12H12.5V11H19.5V10H14.5V9H20.5V8H13.5L13.7,7.8L12.5,6H21V5H10.5V4H22V2L19,1L14,5H6A2,2 0 0,0 4,7V17A2,2 0 0,0 6,19H7.11C7.83,21.35 9,22 10.5,22C12,22 13.17,21.35 13.89,19H18.71M9.5,20.5A1.5,1.5 0 0,1 8,19H11A1.5,1.5 0 0,1 9.5,20.5M6,7H12V17H6V7Z" /></svg>
                        iOS (In Review)
                    </button>

                    {/* Google Play - Second */}
                    <a
                        href="https://play.google.com/store/apps/details?id=com.MLOGICTECH.bibliofusereader&hl=en-US&ah=423jBOeRoug68zOF2xwCeFuKVQQ"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass-button px-8 py-3 rounded-full font-semibold flex items-center gap-2 group"
                    >
                        <svg className="w-6 h-6 fill-current group-hover:text-green-400 transition-colors" viewBox="0 0 24 24"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" /></svg>
                        Google Play
                    </a>

                    {/* Web Tool - Third */}
                    <button
                        onClick={() => setCurrentTab('webapp')}
                        className="glass-button px-8 py-3 rounded-full font-semibold flex items-center gap-2 group cursor-pointer"
                    >
                        <svg className="w-6 h-6 stroke-current group-hover:text-blue-400 transition-colors" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                        Launch Web Tool
                    </button>

                    {/* PC Tools - Fourth */}
                    <a
                        href="#comparison-table"
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('comparison-table').scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="glass-button px-8 py-3 rounded-full font-semibold flex items-center gap-2 group"
                    >
                        <svg className="w-6 h-6 fill-current group-hover:text-purple-400 transition-colors" viewBox="0 0 24 24"><path d="M4,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20H4C2.89,20 2,19.1 2,18V6C2,4.89 2.89,4 4,4M4,6V18H20V6H4M6,15H18V17H6V15Z" /></svg>
                        PC Tools
                    </a>
                </div>
            </div>

            {/* Comparison Table Section */}
            <div id="comparison-table" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
                <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">Editions Comparison</h2>
                <div className="overflow-x-auto glass-panel rounded-2xl p-6">
                    <table className="w-full text-left border-collapse min-w-[800px]">
                        <thead>
                            <tr className="border-b border-white/10 text-slate-300">
                                <th className="py-4 px-6 font-semibold w-[20%]">Feature</th>
                                <th className="py-4 px-6 font-semibold text-center w-[20%] text-white">iOS Reader</th>
                                <th className="py-4 px-6 font-semibold text-center w-[20%] text-green-400">Android Reader</th>
                                <th className="py-4 px-6 font-semibold text-center w-[20%] text-blue-400">Web Tool</th>
                                <th className="py-4 px-6 font-semibold text-center w-[20%] text-purple-400">PC Tools</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5 text-sm md:text-base">
                            <tr>
                                <td className="py-4 px-6 font-medium text-slate-200">Primary Function</td>
                                <td className="py-4 px-6 text-center text-slate-400">Reading & Consumption</td>
                                <td className="py-4 px-6 text-center text-slate-400">Reading & Consumption</td>
                                <td className="py-4 px-6 text-center text-slate-400">Creation & Editing</td>
                                <td className="py-4 px-6 text-center text-slate-400">Heavy Duty Creation</td>
                            </tr>
                            <tr>
                                <td className="py-4 px-6 font-medium text-slate-200">Platform</td>
                                <td className="py-4 px-6 text-center text-slate-400">iPhone/iPad</td>
                                <td className="py-4 px-6 text-center text-slate-400">Android Phone/Tablet</td>
                                <td className="py-4 px-6 text-center text-slate-400">Browser (All Devices)</td>
                                <td className="py-4 px-6 text-center text-slate-400">Windows (Exe)</td>
                            </tr>
                            <tr>
                                <td className="py-4 px-6 font-medium text-slate-200">Processing</td>
                                <td className="py-4 px-6 text-center text-slate-400">Native On-Device</td>
                                <td className="py-4 px-6 text-center text-slate-400">Native On-Device</td>
                                <td className="py-4 px-6 text-center text-slate-400">Local WASM (Private)</td>
                                <td className="py-4 px-6 text-center text-slate-400">Native Windows</td>
                            </tr>
                            <tr>
                                <td className="py-4 px-6 font-medium text-slate-200">Convert/Merge</td>
                                <td className="py-4 px-6 text-center font-bold text-green-400">(EPUB/CBZ)</td>
                                <td className="py-4 px-6 text-center font-bold text-green-400">(EPUB/CBZ)</td>
                                <td className="py-4 px-6 text-center font-bold text-green-400">(EPUB/CBZ/PDF)</td>
                                <td className="py-4 px-6 text-center font-bold text-green-400">
                                    <div className="flex flex-col">
                                        <span>(Folder/CBZ/PDF)</span>
                                        <span>(EPUB)</span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="py-4 px-6 font-medium text-slate-200">Reader Features</td>
                                <td className="py-4 px-6 text-center font-bold text-green-400">✔ (Advanced)</td>
                                <td className="py-4 px-6 text-center font-bold text-green-400">✔ (Advanced)</td>
                                <td className="py-4 px-6 text-center text-slate-600">✘</td>
                                <td className="py-4 px-6 text-center text-slate-600">✘</td>
                            </tr>
                            <tr>
                                <td className="py-4 px-6 font-medium text-slate-200">Cloud DB Backup</td>
                                <td className="py-4 px-6 text-center font-bold text-green-400">✔ (iCloud)</td>
                                <td className="py-4 px-6 text-center font-bold text-green-400">✔ (Google Drive)</td>
                                <td className="py-4 px-6 text-center text-slate-600">✘</td>
                                <td className="py-4 px-6 text-center text-slate-600">✘</td>
                            </tr>
                            <tr>
                                <td className="py-4 px-6 font-medium text-slate-200">iCloud Bookshelf</td>
                                <td className="py-4 px-6 text-center font-bold text-green-400">✔</td>
                                <td className="py-4 px-6 text-center text-slate-600">✘</td>
                                <td className="py-4 px-6 text-center text-slate-600">✘</td>
                                <td className="py-4 px-6 text-center text-slate-600">✘</td>
                            </tr>
                            <tr>
                                <td className="py-4 px-6 font-medium text-slate-200">Language Support</td>
                                <td className="py-4 px-6 text-center">
                                    <span className="font-bold text-green-400 block mb-1">12 Languages</span>
                                    <span className="text-xs text-slate-400 block leading-tight">(English, Spanish, French, Dutch, Nederland's, Portuguese, Russian, simplified Chinese, Japanese, Korean, Indonesian, Malay)</span>
                                </td>
                                <td className="py-4 px-6 text-center">
                                    <span className="font-bold text-green-400 block mb-1">12 Languages</span>
                                    <span className="text-xs text-slate-400 block leading-tight">(English, Spanish, French, Dutch, Nederland's, Portuguese, Russian, simplified Chinese, Japanese, Korean, Indonesian, Malay)</span>
                                </td>
                                <td className="py-4 px-6 text-center">
                                    <span className="font-bold text-slate-200 block mb-1">6 Languages</span>
                                    <span className="text-xs text-slate-400 block leading-tight">(English, Spanish, French, Dutch, Nederland's, Portuguese, Simplified Chinese)</span>
                                </td>
                                <td className="py-4 px-6 text-center text-slate-400">English only</td>
                            </tr>
                            <tr>
                                <td className="py-4 px-6 font-medium text-slate-200 align-middle">Availability</td>
                                <td className="py-4 px-6 text-center align-middle">
                                    <div className="flex justify-center">
                                        <span className="bg-white/10 px-3 py-1 rounded text-yellow-400 text-xs font-bold border border-yellow-400/30">In Review</span>
                                    </div>
                                </td>
                                <td className="py-4 px-6 text-center align-middle">
                                    <a href="https://play.google.com/store/apps/details?id=com.MLOGICTECH.bibliofusereader&hl=en-US&ah=423jBOeRoug68zOF2xwCeFuKVQQ" target="_blank" rel="noopener noreferrer" className="inline-block hover:scale-110 transition-transform">
                                        <svg className="w-8 h-8 fill-green-400" viewBox="0 0 24 24"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" /></svg>
                                    </a>
                                </td>
                                <td className="py-4 px-6 text-center align-middle">
                                    <button onClick={() => setCurrentTab('webapp')} className="inline-block hover:scale-110 transition-transform cursor-pointer">
                                        <svg className="w-8 h-8 stroke-blue-400" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                                    </button>
                                </td>
                                <td className="py-4 px-6 text-center align-middle">
                                    <div className="flex flex-row gap-4 items-center justify-center">
                                        <div className="flex-shrink-0">
                                            <svg className="w-8 h-8" viewBox="0 0 165 160" fill="none">
                                                {/* Microsoft Store Badge Logo Section */}
                                                <path d="M5.6 5.6H74.4V72.6H5.6V5.6ZM90.6 5.6H159.4V72.6H90.6V5.6ZM5.6 88.6H74.4V155.6H5.6V88.6ZM90.6 88.6H159.4V155.6H90.6V88.6Z" fill="#00A4EF" />
                                            </svg>
                                        </div>
                                        <div className="flex flex-col gap-2 w-full max-w-[100px]">
                                            <a href="https://apps.microsoft.com/detail/9p7b02538tfq?hl=en-US&gl=MY" target="_blank" rel="noopener noreferrer" className="text-xs bg-purple-500/20 hover:bg-purple-500/40 text-purple-300 border border-purple-500/30 px-3 py-1 rounded transition-colors text-center block">
                                                CBZ Ver.
                                            </a>
                                            <a href="https://apps.microsoft.com/detail/9pdllhdz6kkl?hl=en-US&gl=MY" target="_blank" rel="noopener noreferrer" className="text-xs bg-cyan-500/20 hover:bg-cyan-500/40 text-cyan-300 border border-cyan-500/30 px-3 py-1 rounded transition-colors text-center block">
                                                EPUB Ver.
                                            </a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Home;
