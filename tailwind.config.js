import defaultTheme from 'tailwindcss/defaultTheme';

// eslint-disable-next-line no-undef
const flowbite = require("flowbite-react/tailwind");



/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    flowbite.content(),],
  theme: {
    extend: {
      colors: {
        neutralSilver: "#F5F7FA",
        neutralGray: "#4D4D4D",
        primary: "#4CAF4F",
        neutral: "#717171",
      },
    },
    screens: {
      ...defaultTheme.screens,
      '3xl': '1800px',
    },
  },
  plugins: [flowbite.plugin(),],
};
