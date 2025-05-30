/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: 'var(--cosmic-dark)',
        secondary: '#fff',
        tertiary: 'var(--purple-main)',
        'primary-semi': 'var(--cosmic-dark-semi)',
        'tertiary-transparent': 'var(--purple-transparent)',
        'white-200': 'var(--white-200)',
        'white-300': 'var(--white-300)',
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
      },
      fontFamily: {
        para: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        card: '0px 35px 120px -15px #211e35',
      },
      screens: {
        xs: '450px',
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/bg.svg')",
        'gradient-radial-1': `radial-gradient(circle at 20% 30%, #6a8eff 0%, transparent 60%),
    radial-gradient(circle at 80% 70%, #a166ff 0%, transparent 60%), #0b0c22`,
        'gradient-radial-2': `radial-gradient(
                    circle at 30% 30%,
                    rgba(52, 150, 255, 0.4),
    rgba(220, 58, 232, 0.3),
    rgba(30, 30, 59, 0.95))`,
      },
    },
  },
  plugins: [],
};
