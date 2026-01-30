import React from 'react';

const Footer = () => {
    return (
        <footer className="py-12 text-center text-slate-400 text-sm border-t border-white/5 bg-slate-900/50 backdrop-blur-sm">
            <div className="max-w-4xl mx-auto px-4 space-y-4">
                <p>
                    &copy; 2025 Modern Logic Tech Solutions (Reg. No: 202503109774 (003722143-P)). All rights reserved.
                </p>
                <p>
                    1984, Jalan SK 13/12, 43300 Seri Kembangan, Selangor, Malaysia
                </p>
                <div className="pt-2">
                    <a
                        href="https://mlt-solutions.github.io/app-legal-docs/bibliofuse/PRIVACY"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors underline decoration-blue-400/30 underline-offset-4"
                    >
                        Privacy Policy
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
