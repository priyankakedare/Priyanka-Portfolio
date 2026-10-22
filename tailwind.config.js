/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        plum: {
          950: '#0a060d',
          900: '#100a16',
          850: '#160e1e',
          800: '#1c1226',
          750: '#231730',
          700: '#2b1d3a',
          600: '#3d2952',
          500: '#5c3d7a',
          400: '#8c5ca8',
        },
        dustyPink: {
          50: '#fdf7fa',
          100: '#faeef4',
          200: '#f5dded',
          300: '#ecc0df',
          400: '#df9bc7',
          500: '#d179af',
          600: '#b8588f',
          700: '#994473',
          800: '#7f3b60',
          900: '#693451',
        },
        mauve: {
          100: '#f2e8f1',
          200: '#dfcadc',
          300: '#c5a5c1',
          400: '#a87fa3',
          500: '#8f6189',
          600: '#754b6f',
          700: '#5f3a59',
          800: '#4e3049',
          900: '#3e263a',
        },
      },
      fontFamily: {
        sans: [
          'Plus Jakarta Sans',
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
        ],
        serif: [
          'Playfair Display',
          'Georgia',
          'serif',
        ],
        mono: [
          'JetBrains Mono',
          'Fira Code',
          'Consolas',
          'monospace',
        ],
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(223, 155, 199, 0.15)',
        'glow-md': '0 0 25px rgba(223, 155, 199, 0.22)',
        'glow-lg': '0 0 40px rgba(223, 155, 199, 0.3)',
        'glow-plum': '0 0 30px rgba(140, 92, 168, 0.25)',
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '1' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
}
