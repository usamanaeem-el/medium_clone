/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        yellow: '#FFC017',
        pureBlack: '#000000',
        pink: '#FFC0CB',
        textWhite: '#FFFFFF',
        lightGray: '#d7dbd8',
        light: '#e0dfda',
        gray: 'rgba(117, 117, 117, 1)',
        black: 'rgba(41, 41, 41, 1)',
        borderColor: 'rgba(230, 230, 230, 1)',
        modalBorderColor: 'rgb(168, 168, 168)'
      },
    },
    fontFamily: {
      sans: ['ui-sans-serif', 'system-ui'],
      roboto: ['Roboto', 'sans-serif'],
    },
  },
  plugins: [],
};
