import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams, Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Footer = () => {
    const { t } = useTranslation();
    const { lang } = useParams();

    return (
        <footer className="border-t border-line bg-bg pt-16 pb-10 text-sm text-ink-muted">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-12 grid grid-cols-1 gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
                    <div className="max-w-sm">
                        <Link to={`/${lang || 'en'}/`} className="flex items-center gap-2.5">
                            <img src={logo} alt={t('redesign.altTexts.logo')} className="h-9 w-auto rounded-[10px] shadow-sm" />
                            <span className="font-display tighter text-xl font-bold text-ink">BiblioFuse</span>
                        </Link>
                        <p className="mt-4 leading-relaxed">
                            {t('redesign.footer.desc')}
                        </p>
                        <div className="mt-5 flex flex-wrap gap-2">
                            <a href="https://apps.apple.com/kw/app/bibliofuse-reader-compress/id6758330093" target="_blank" rel="noopener noreferrer" className="inline-flex">
                                <img src="/image/Download_on_the_App_Store_Badge.svg.png" alt={t('redesign.altTexts.appStore')} className="h-10 w-auto object-contain" />
                            </a>
                            <a href="https://play.google.com/store/apps/details?id=com.MLOGICTECH.bibliofusereader" target="_blank" rel="noopener noreferrer" className="inline-flex">
                                <img src="/image/Playstore.png" alt={t('redesign.altTexts.googlePlay')} className="h-10 w-auto object-contain" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <div className="mb-4 text-xs font-bold uppercase tracking-wider text-ink-soft">{t('redesign.footer.products')}</div>
                        <ul className="space-y-2.5">
                            <li><a href="#reader" className="text-ink transition hover:text-brand">BiblioFuse Reader</a></li>
                            <li><Link to={`/${lang || 'en'}/webapp`} className="text-ink transition hover:text-brand">{t('redesign.footer.webTool')}</Link></li>
                            <li><a href="#archive" className="text-ink transition hover:text-brand">Archive Duplicate Scanner</a></li>
                            <li><a href="#smartdecrypt" className="text-ink transition hover:text-brand">SmartDecrypt PDF ZIP</a></li>
                        </ul>
                    </div>

                    <div>
                        <div className="mb-4 text-xs font-bold uppercase tracking-wider text-ink-soft">{t('redesign.footer.company')}</div>
                        <ul className="space-y-2.5">
                            <li><Link to={`/${lang || 'en'}/about`} className="text-ink transition hover:text-brand">{t('nav.about')}</Link></li>
                            <li><a href="mailto:support@mlogictech.com" className="text-ink transition hover:text-brand">{t('redesign.footer.contact')}</a></li>
                            <li><a href="mailto:support@mlogictech.com" className="text-ink transition hover:text-brand">{t('redesign.footer.work')}</a></li>
                        </ul>
                    </div>

                    <div>
                        <div className="mb-4 text-xs font-bold uppercase tracking-wider text-ink-soft">{t('redesign.footer.legal')}</div>
                        <ul className="space-y-2.5">
                            <li>
                                <Link to={`/${lang || 'en'}/privacy`} className="text-ink transition hover:text-brand">
                                    {t('footer.privacy')}
                                </Link>
                            </li>
                            <li><a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target="_blank" rel="noopener noreferrer" className="text-ink transition hover:text-brand">{t('redesign.footer.eula')}</a></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col gap-4 border-t border-line pt-8 text-xs md:flex-row md:items-center md:justify-between">
                    <div className="space-y-1">
                        <p>{t('footer.rights')}</p>
                        <p>{t('footer.address')}</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="inline-flex items-center gap-1.5">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg>
                            {t('redesign.footer.stores')}
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
