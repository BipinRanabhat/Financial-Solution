/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Alpine Clarity — CSS-variable-backed tokens (respond to data-theme)
        deep:    'rgb(var(--c-deep) / <alpha-value>)',
        dark:    'rgb(var(--c-dark) / <alpha-value>)',
        surface: 'rgb(var(--c-surface) / <alpha-value>)',
        card:    'rgb(var(--c-card) / <alpha-value>)',

        royal:   'rgb(var(--c-royal) / <alpha-value>)',
        electric:'rgb(var(--c-electric) / <alpha-value>)',
        sky:     'rgb(var(--c-sky) / <alpha-value>)',
        ice:     'rgb(var(--c-ice) / <alpha-value>)',
        frost:   'rgb(var(--c-frost) / <alpha-value>)',

        emerald:       'rgb(var(--c-emerald) / <alpha-value>)',
        'emerald-mid': 'rgb(var(--c-em-mid) / <alpha-value>)',
        'emerald-light':'rgb(var(--c-em-light) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      backgroundImage: {
        'hero-gradient':  'radial-gradient(ellipse 80% 55% at 50% 0%, rgba(29,78,216,0.10) 0%, transparent 70%), linear-gradient(180deg, #080809 0%, #111113 100%)',
        'blue-gradient':  'linear-gradient(135deg, #1D4ED8 0%, #1E3A8A 100%)',
        'card-gradient':  'linear-gradient(145deg, var(--bg-card-from) 0%, var(--bg-card-to) 100%)',
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
