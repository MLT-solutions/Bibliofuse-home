import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import logo from '../assets/logo.png';
import SEO from '../components/SEO';

const Home = () => {
    const { lang } = useParams();
    const { t } = useTranslation();

    return (
        <div className="pt-20 pb-12 w-full">
            <SEO
                title={t('seo.home.title')}
                description={t('seo.home.desc')}
                canonical="/"
            />
            {/* Hero Section */}
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 space-y-8">
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                    <img src={logo} alt="BiblioFuse Logo" className="relative w-64 md:w-96 drop-shadow-2xl rounded-3xl" />
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-indigo-100">
                    {t('home.hero.title')}
                </h1>
                <p className="text-xl md:text-2xl text-slate-300 max-w-2xl font-light">
                    {t('home.hero.subtitle')}
                </p>

                {/* Download / Action Buttons */}
                <div className="flex flex-wrap gap-4 justify-center mt-8 items-center">
                    {/* iOS App Store - First */}
                    <a
                        href="https://apps.apple.com/kw/app/bibliofuse-reader-compress/id6758330093"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block hover:scale-105 transition-transform"
                    >
                        <img src="/image/Download_on_the_App_Store_Badge.svg.png" alt="Download on the App Store" className="h-12" />
                    </a>

                    {/* Google Play - Second */}
                    <a
                        href="https://play.google.com/store/apps/details?id=com.MLOGICTECH.bibliofusereader&hl=en-US&ah=423jBOeRoug68zOF2xwCeFuKVQQ"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block hover:scale-105 transition-transform"
                    >
                        <img src="/image/Playstore.png" alt="Get it on Google Play" className="h-12" />
                    </a>

                    {/* Web Tool - Third */}
                    <Link
                        to={`/${lang}/webapp`}
                        className="glass-button px-8 py-3 rounded-full font-semibold flex items-center gap-2 group cursor-pointer"
                    >
                        <img src="/image/WebAssembly_Logo.svg" alt="WebAssembly" className="h-6" />
                        {t('home.hero.btn.web')}
                    </Link>

                    {/* Microsoft Store - Fourth */}
                    <a
                        href="#comparison-table"
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('comparison-table').scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="inline-block hover:scale-105 transition-transform"
                    >
                        <img src="/image/Microsoft_Store_badge.svg" alt="Get it from Microsoft" className="h-12" />
                    </a>
                </div>

                {/* Official Distribution Warning */}
                <div className="mt-8 max-w-3xl mx-auto">
                    <div className="glass-panel rounded-xl p-6 border-2 border-amber-500/30 bg-amber-500/5">
                        <div className="flex items-start gap-4">
                            <svg className="w-8 h-8 flex-shrink-0 fill-amber-400" viewBox="0 0 24 24"><path d="M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z" /></svg>
                            <div className="flex-1">
                                <h3 className="text-lg font-bold text-amber-300 mb-2">{t('home.warning.title')}</h3>
                                <p className="text-sm text-slate-300 leading-relaxed">{t('home.warning.message')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Comparison Table Section */}
            <div id="comparison-table" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
                <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">{t('home.table.title')}</h2>
                <div className="overflow-x-auto glass-panel rounded-2xl p-6">
                    <table className="w-full text-left border-collapse min-w-[800px]">
                        <thead>
                            <tr className="border-b border-white/10 text-slate-300">
                                <th className="py-4 px-6 font-semibold w-[20%]">{t('home.table.headers.feature')}</th>
                                <th className="py-4 px-6 font-semibold text-center w-[20%] text-white">{t('home.table.headers.ios')}</th>
                                <th className="py-4 px-6 font-semibold text-center w-[20%] text-green-400">{t('home.table.headers.android')}</th>
                                <th className="py-4 px-6 font-semibold text-center w-[20%] text-blue-400">{t('home.table.headers.web')}</th>
                                <th className="py-4 px-6 font-semibold text-center w-[20%] text-purple-400">{t('home.table.headers.pc')}</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5 text-sm md:text-base">
                            <tr>
                                <td className="py-4 px-6 font-medium text-slate-200">{t('home.table.rows.primary.name')}</td>
                                <td className="py-4 px-6 text-center text-slate-400">{t('home.table.rows.primary.v_read')}</td>
                                <td className="py-4 px-6 text-center text-slate-400">{t('home.table.rows.primary.v_read')}</td>
                                <td className="py-4 px-6 text-center text-slate-400">{t('home.table.rows.primary.v_create')}</td>
                                <td className="py-4 px-6 text-center text-slate-400">{t('home.table.rows.primary.v_heavy')}</td>
                            </tr>
                            <tr>
                                <td className="py-4 px-6 font-medium text-slate-200">{t('home.table.rows.platform.name')}</td>
                                <td className="py-4 px-6 text-center text-slate-400">{t('home.table.rows.platform.v_ios')}</td>
                                <td className="py-4 px-6 text-center text-slate-400">{t('home.table.rows.platform.v_android')}</td>
                                <td className="py-4 px-6 text-center text-slate-400">{t('home.table.rows.platform.v_web')}</td>
                                <td className="py-4 px-6 text-center text-slate-400">{t('home.table.rows.platform.v_pc')}</td>
                            </tr>
                            <tr>
                                <td className="py-4 px-6 font-medium text-slate-200">{t('home.table.rows.processing.name')}</td>
                                <td className="py-4 px-6 text-center text-slate-400">{t('home.table.rows.processing.v_native')}</td>
                                <td className="py-4 px-6 text-center text-slate-400">{t('home.table.rows.processing.v_native')}</td>
                                <td className="py-4 px-6 text-center text-slate-400">{t('home.table.rows.processing.v_wasm')}</td>
                                <td className="py-4 px-6 text-center text-slate-400">{t('home.table.rows.processing.v_win')}</td>
                            </tr>
                            <tr>
                                <td className="py-4 px-6 font-medium text-slate-200">{t('home.table.rows.convert.name')}</td>
                                <td className="py-4 px-6 text-center font-bold text-green-400">{t('home.table.rows.convert.v_mobile')}</td>
                                <td className="py-4 px-6 text-center font-bold text-green-400">{t('home.table.rows.convert.v_mobile')}</td>
                                <td className="py-4 px-6 text-center font-bold text-green-400">{t('home.table.rows.convert.v_web')}</td>
                                <td className="py-4 px-6 text-center font-bold text-green-400">
                                    <div className="flex flex-col">
                                        <span>{t('home.table.rows.convert.v_pc_1')}</span>
                                        <span>{t('home.table.rows.convert.v_pc_2')}</span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="py-4 px-6 font-medium text-slate-200">{t('home.table.rows.reader_feat.name')}</td>
                                <td className="py-4 px-6 text-center font-bold text-green-400">{t('home.table.rows.reader_feat.v_advanced')}</td>
                                <td className="py-4 px-6 text-center font-bold text-green-400">{t('home.table.rows.reader_feat.v_advanced')}</td>
                                <td className="py-4 px-6 text-center text-slate-600">✘</td>
                                <td className="py-4 px-6 text-center text-slate-600">✘</td>
                            </tr>
                            <tr>
                                <td className="py-4 px-6 font-medium text-slate-200">{t('home.table.rows.cloud.name')}</td>
                                <td className="py-4 px-6 text-center font-bold text-green-400">{t('home.table.rows.cloud.v_icloud')}</td>
                                <td className="py-4 px-6 text-center font-bold text-green-400">{t('home.table.rows.cloud.v_gdrive')}</td>
                                <td className="py-4 px-6 text-center text-slate-600">✘</td>
                                <td className="py-4 px-6 text-center text-slate-600">✘</td>
                            </tr>
                            <tr>
                                <td className="py-4 px-6 font-medium text-slate-200">{t('home.table.rows.bookshelf.name')}</td>
                                <td className="py-4 px-6 text-center font-bold text-green-400">{t('home.table.rows.bookshelf.v_ios')}</td>
                                <td className="py-4 px-6 text-center text-slate-600">✘</td>
                                <td className="py-4 px-6 text-center text-slate-600">✘</td>
                                <td className="py-4 px-6 text-center text-slate-600">✘</td>
                            </tr>
                            <tr>
                                <td className="py-4 px-6 font-medium text-slate-200">{t('home.table.rows.lang.name')}</td>
                                <td className="py-4 px-6 text-center">
                                    <span className="font-bold text-green-400 block mb-1">{t('home.table.rows.lang.v_12')}</span>
                                    <span className="text-xs text-slate-400 block leading-tight">{t('home.table.rows.lang.v_12_list')}</span>
                                </td>
                                <td className="py-4 px-6 text-center">
                                    <span className="font-bold text-green-400 block mb-1">{t('home.table.rows.lang.v_12')}</span>
                                    <span className="text-xs text-slate-400 block leading-tight">{t('home.table.rows.lang.v_12_list')}</span>
                                </td>
                                <td className="py-4 px-6 text-center">
                                    <span className="font-bold text-slate-200 block mb-1">{t('home.table.rows.lang.v_6')}</span>
                                    <span className="text-xs text-slate-400 block leading-tight">{t('home.table.rows.lang.v_6_list')}</span>
                                </td>
                                <td className="py-4 px-6 text-center text-slate-400">{t('home.table.rows.lang.v_pc')}</td>
                            </tr>
                            <tr>
                                <td className="py-4 px-6 font-medium text-slate-200 align-middle">{t('home.table.rows.avail.name')}</td>
                                <td className="py-4 px-6 text-center align-middle">
                                    <a href="https://apps.apple.com/kw/app/bibliofuse-reader-compress/id6758330093" target="_blank" rel="noopener noreferrer" className="inline-block hover:scale-110 transition-transform">
                                        <img src="/image/Download_on_the_App_Store_Badge.svg.png" alt="Download on the App Store" className="h-10 inline-block" />
                                    </a>
                                </td>
                                <td className="py-4 px-6 text-center align-middle">
                                    <a href="https://play.google.com/store/apps/details?id=com.MLOGICTECH.bibliofusereader&hl=en-US&ah=423jBOeRoug68zOF2xwCeFuKVQQ" target="_blank" rel="noopener noreferrer" className="inline-block hover:scale-110 transition-transform">
                                        <img src="/image/Playstore.png" alt="Get it on Google Play" className="h-10 inline-block" />
                                    </a>
                                </td>
                                <td className="py-4 px-6 text-center align-middle">
                                    <Link to={`/${lang}/webapp`} className="inline-block hover:scale-110 transition-transform cursor-pointer">
                                        <img src="/image/WebAssembly_Logo.svg" alt="WebAssembly" className="h-10 inline-block" />
                                    </Link>
                                </td>
                                <td className="py-4 px-6 text-center align-middle">
                                    <div className="flex flex-col gap-2 items-center justify-center">
                                        <a href="https://apps.microsoft.com/detail/9p7b02538tfq?hl=en-US&gl=MY" target="_blank" rel="noopener noreferrer" className="inline-block hover:scale-110 transition-transform">
                                            <img src="/image/Microsoft_Store_badge.svg" alt="Get it from Microsoft" className="h-10 inline-block" />
                                        </a>
                                        <span className="text-xs text-slate-400">{t('home.table.rows.avail.v_cbz')}</span>
                                        <a href="https://apps.microsoft.com/detail/9pdllhdz6kkl?hl=en-US&gl=MY" target="_blank" rel="noopener noreferrer" className="inline-block hover:scale-110 transition-transform">
                                            <img src="/image/Microsoft_Store_badge.svg" alt="Get it from Microsoft" className="h-10 inline-block" />
                                        </a>
                                        <span className="text-xs text-slate-400">{t('home.table.rows.avail.v_epub')}</span>
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
