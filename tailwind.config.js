/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./screens/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      ...colors,
      mygreen: '#4B9570',
    },
    extend: {},
  },
  plugins: [],
};
