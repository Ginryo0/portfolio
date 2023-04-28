/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#050f24',
        secondary: '#fff',
        tertiary: '#A06BE6',
        lighter: '#0b1937',
        'white-200': '#919FBA',
        'white-300': '#7585A8',
      },
      fontFamily: {
        para: ['"Titillium Web"', 'sans-serif'],
      },
      boxShadow: {
        card: '0px 35px 120px -15px #211e35',
      },
      screens: {
        xs: '450px',
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/bg.svg')",
      },
    },
  },
  plugins: [],
};
