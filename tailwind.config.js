/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                display: ['Sora', 'Inter', 'system-ui', 'sans-serif'],
            },
            colors: {
                ink: { DEFAULT: '#0B1220', muted: '#5A6A85', soft: '#8895AC' },
                surface: { DEFAULT: '#FFFFFF', sunken: '#F4F7FC', raised: '#FFFFFF' },
                bg: { DEFAULT: '#F6F8FC' },
                line: { DEFAULT: '#E5EAF2', soft: '#EEF2F8' },
                brand: { DEFAULT: '#2D7CF6', deep: '#1E5FD3', soft: '#E8F0FE' },
                teal: { DEFAULT: '#14C2A6' },
                warm: { DEFAULT: '#FF8A3A', deep: '#E2680E' },
                violet: { DEFAULT: '#8B5CF6', deep: '#6D31E0' },
                amber: { DEFAULT: '#D97706' },
                night: { DEFAULT: '#0A0F1F', deep: '#070B17', surface: '#121830' },
            },
            boxShadow: {
                card: '0 1px 2px rgba(11,18,32,.04), 0 8px 24px -8px rgba(11,18,32,.08)',
                float: '0 12px 40px -12px rgba(45,124,246,.35), 0 4px 12px rgba(11,18,32,.06)',
                deep: '0 30px 80px -30px rgba(11,18,32,.35)',
                glow: '0 0 0 1px rgba(45,124,246,.15), 0 20px 60px -20px rgba(45,124,246,.4)',
            },
            backgroundImage: {
                'aurora-blue': 'radial-gradient(60% 60% at 50% 0%, #DCE9FF 0%, #F6F8FC 60%, #F6F8FC 100%)',
                'aurora-soft': 'radial-gradient(80% 60% at 80% 10%, #E4ECFF 0%, transparent 55%), radial-gradient(60% 50% at 0% 30%, #E9F6F3 0%, transparent 60%)',
                'night-grad': 'radial-gradient(80% 80% at 80% 0%, #1B1248 0%, #0A0F1F 55%), linear-gradient(180deg, #0A0F1F, #050714)',
            },
        },
    },
    plugins: [],
}
