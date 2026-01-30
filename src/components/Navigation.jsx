import logo from '../assets/logo.png';

const Navigation = ({ currentTab, setCurrentTab }) => {
    const tabs = [
        { id: 'home', label: 'Home' },
        { id: 'reader', label: 'Reader' },
        { id: 'webapp', label: 'Web App' },
        { id: 'about', label: 'About' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/50 backdrop-blur-md border-b border-white/10 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0 cursor-pointer flex items-center gap-2" onClick={() => setCurrentTab('home')}>
                        <img src={logo} alt="Logo" className="h-8 w-auto rounded-lg" />
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                            BiblioFuse
                        </span>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setCurrentTab(tab.id)}
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${currentTab === tab.id
                                        ? 'text-white bg-white/10 shadow-[0_0_15px_rgba(255,255,255,0.1)]'
                                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                                        }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>
                    {/* Mobile menu button could go here */}
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
