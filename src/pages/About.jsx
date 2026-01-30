import React from 'react';

const About = () => {
    return (
        <div className="pt-24 pb-12 px-4 max-w-3xl mx-auto min-h-screen">
            <div className="glass-panel p-8 md:p-12 rounded-2xl">
                <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">About BiblioFuse</h1>

                <div className="space-y-6 text-slate-300 leading-relaxed">
                    <p>
                        BiblioFuse is a suite of tools and readers designed to give e-book lovers complete control over their library.
                        Unlike walled gardens that lock you into a specific ecosystem, BiblioFuse empowers you to manage, convert, and read your books on any device.
                    </p>
                    <p>
                        Our web tool uses cutting-edge WebAssembly (WASM) technology to process files entirely on your device.
                        This means private, fast, and secure file management without ever uploading your personal library to a server.
                    </p>

                    <hr className="border-white/10 my-8" />

                    <h2 className="text-2xl font-bold mb-4 text-white">Work With Us</h2>
                    <p>
                        We are a small, passionate team dedicated to building software that respects user privacy and ownership.
                        We are currently open to freelance opportunities and collaborations.
                    </p>

                    <div className="mt-8">
                        <h3 className="text-lg font-semibold text-white mb-2">Connect</h3>
                        <p>
                            Interested in contributing or hiring? Reach out to us.
                        </p>
                        {/* Placeholder contact info or link */}
                        <a href="mailto:support@mlogictech.com" className="inline-block mt-4 text-blue-400 hover:text-blue-300 transition-colors">
                            support@mlogictech.com
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
