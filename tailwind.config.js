/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Alpine Clarity — Charcoal family (backgrounds)
        deep:    '#0A0A0C',   // footer / absolute deepest
        dark:    '#111113',   // primary body bg
        surface: '#161618',   // alternate section bg
        card:    '#1C1C1F',   // card base

        // Royal Blue (primary accent — authority, trust)
        royal:   '#1E3A8A',   // royal blue deep (borders, gradients)
        electric:'#1D4ED8',   // royal blue primary (CTAs, icons)
        sky:     '#93C5FD',   // pale royal (body text on dark)
        ice:     '#BFDBFE',   // very pale royal (headings/labels)
        frost:   '#F8FAFC',   // near-white (primary text)

        // Emerald (secondary accent — growth, success)
        emerald: '#059669',
        'emerald-mid': '#10B981',
        'emerald-light': '#34D399',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      backgroundImage: {
        'hero-gradient':  'radial-gradient(ellipse 80% 55% at 50% 0%, rgba(29,78,216,0.10) 0%, transparent 70%), linear-gradient(180deg, #080809 0%, #111113 100%)',
        'blue-gradient':  'linear-gradient(135deg, #1D4ED8 0%, #1E3A8A 100%)',
        'card-gradient':  'linear-gradient(145deg, rgba(28,28,32,0.75) 0%, rgba(17,17,19,0.92) 100%)',
        'grid-pattern':   "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgba(29,78,216,0.045)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")",
        'frost-gradient': 'linear-gradient(180deg, #F8FAFC 0%, #BFDBFE 100%)',
      },
      boxShadow: {
        'blue-sm':    '0 4px 16px rgba(29,78,216,0.18)',
        'blue-md':    '0 8px 32px rgba(29,78,216,0.25)',
        'blue-lg':    '0 16px 60px rgba(29,78,216,0.32)',
        'card':       '0 4px 24px rgba(0,0,0,0.5)',
        'card-hover': '0 12px 40px rgba(0,0,0,0.7)',
        'emerald-sm': '0 4px 16px rgba(5,150,105,0.20)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-20px)' },
        },
        pulseBlue: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(29,78,216,0.40)' },
          '50%':      { boxShadow: '0 0 0 10px rgba(29,78,216,0)' },
        },
      },
      animation: {
        float:        'float 6s ease-in-out infinite',
        'pulse-blue': 'pulseBlue 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
