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
      },
    },
    fontFamily: {
      sans: ['ui-sans-serif', 'system-ui'],
      roboto: ['Roboto', 'sans-serif'],
    },
  },
  plugins: [],
};
