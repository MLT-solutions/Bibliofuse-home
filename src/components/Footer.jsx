import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="py-12 text-center text-slate-400 text-sm border-t border-white/5 bg-slate-900/50 backdrop-blur-sm">
            <div className="max-w-4xl mx-auto px-4 space-y-4">
                <p>
                    {t('footer.rights')}
                </p>
                <p>
                    {t('footer.address')}
                </p>
                <div className="pt-2">
                    <a
                        href="https://mlt-solutions.github.io/app-legal-docs/bibliofuse/PRIVACY"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors underline decoration-blue-400/30 underline-offset-4"
                    >
                        {t('footer.privacy')}
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
