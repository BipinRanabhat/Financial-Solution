/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        deep:    '#0B1120',
        dark:    '#1A2744',
        royal:   '#1E4D8C',
        electric:'#3B82F6',
        sky:     '#60B4FF',
        ice:     '#C8DFF9',
        frost:   '#F0F6FF',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      backgroundImage: {
        'hero-gradient':  'radial-gradient(ellipse 80% 55% at 50% 0%, rgba(59,130,246,0.12) 0%, transparent 70%), linear-gradient(180deg, #060A14 0%, #0B1120 100%)',
        'blue-gradient':  'linear-gradient(135deg, #3B82F6 0%, #1E4D8C 100%)',
        'card-gradient':  'linear-gradient(145deg, rgba(30,77,140,0.25) 0%, rgba(11,17,32,0.8) 100%)',
        'grid-pattern':   "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgba(59,130,246,0.05)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")",
        'frost-gradient': 'linear-gradient(180deg, #F0F6FF 0%, #C8DFF9 100%)',
      },
      boxShadow: {
        'blue-sm':    '0 4px 16px rgba(59,130,246,0.15)',
        'blue-md':    '0 8px 32px rgba(59,130,246,0.22)',
        'blue-lg':    '0 16px 60px rgba(59,130,246,0.28)',
        'card':       '0 4px 24px rgba(0,0,0,0.45)',
        'card-hover': '0 12px 40px rgba(0,0,0,0.65)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-20px)' },
        },
        pulseBlue: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(59,130,246,0.45)' },
          '50%':      { boxShadow: '0 0 0 10px rgba(59,130,246,0)' },
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
