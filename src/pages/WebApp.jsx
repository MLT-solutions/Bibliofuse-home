import React, { useState } from 'react';

const WebApp = () => {
    const [loading, setLoading] = useState(true);

    return (
        <div className="pt-16 h-screen flex flex-col w-full">
            <div className="flex-1 w-full relative bg-slate-900">
                {loading && (
                    <div className="absolute inset-0 flex items-center justify-center z-0">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                    </div>
                )}
                <iframe
                    src="https://bibliofuse-web.netlify.app/"
                    className="w-full h-full border-0 relative z-10"
                    title="BiblioFuse Web App"
                    onLoad={() => setLoading(false)}
                    allow="fullscreen; clipboard-read; clipboard-write"
                />
            </div>
        </div>
    );
};

export default WebApp;
