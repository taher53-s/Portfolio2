import type { Config } from 'tailwindcss'

const config: Config = {
    content: ['./src/**/*.{ts,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                base: 'var(--color-base)',
                'base-soft': 'var(--color-base-soft)',
                ink: 'var(--color-ink)',
                'surface-1': 'var(--surface-1)',
                'surface-2': 'var(--surface-2)',
                'surface-3': 'var(--surface-3)',
                'accent-a': {
                    100: 'var(--accent-a-100)',
                    200: 'var(--accent-a-200)',
                    300: 'var(--accent-a-300)',
                },
                'accent-b': {
                    100: 'var(--accent-b-100)',
                    200: 'var(--accent-b-200)',
                    300: 'var(--accent-b-300)',
                },
                'accent-c': {
                    100: 'var(--accent-c-100)',
                    200: 'var(--accent-c-200)',
                },
                'text-primary': 'var(--text-primary)',
                'text-secondary': 'var(--text-secondary)',
                'text-muted': 'var(--text-muted)',
                'text-code': 'var(--text-code)',
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
                display: ['var(--font-syne)', 'system-ui', 'sans-serif'],
                mono: ['var(--font-jetbrains)', 'monospace'],
            },
            animation: {
                'mesh-a': 'meshA 20s ease-in-out infinite alternate',
                'mesh-b': 'meshB 27s ease-in-out infinite alternate',
                'mesh-c': 'meshC 34s ease-in-out infinite alternate',
                'mesh-d': 'meshD 22s ease-in-out infinite alternate',
                'scroll-bounce': 'scrollBounce 2s ease-in-out infinite',
                'pulse-dot': 'pulseDot 2s ease-in-out infinite',
            },
            keyframes: {
                meshA: {
                    '0%': { backgroundPosition: '15% 25%' },
                    '100%': { backgroundPosition: '85% 75%' },
                },
                meshB: {
                    '0%': { backgroundPosition: '85% 75%' },
                    '100%': { backgroundPosition: '15% 25%' },
                },
                meshC: {
                    '0%': { backgroundPosition: '65% 8%' },
                    '100%': { backgroundPosition: '25% 92%' },
                },
                meshD: {
                    '0%': { backgroundPosition: '40% 90%' },
                    '100%': { backgroundPosition: '60% 10%' },
                },
                scrollBounce: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(8px)' },
                },
                pulseDot: {
                    '0%, 100%': { opacity: '1', transform: 'scale(1)' },
                    '50%': { opacity: '0.5', transform: 'scale(1.5)' },
                },
            },
        },
    },
    plugins: [],
}

export default config
