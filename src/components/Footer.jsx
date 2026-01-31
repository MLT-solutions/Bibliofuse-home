import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams, Link } from 'react-router-dom';

const Footer = () => {
    const { t } = useTranslation();
    const { lang } = useParams();

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
                    <Link
                        to={`/${lang || 'en'}/privacy`}
                        className="text-blue-400 hover:text-blue-300 transition-colors underline decoration-blue-400/30 underline-offset-4"
                    >
                        {t('footer.privacy')}
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
