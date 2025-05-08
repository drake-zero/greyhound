/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx,css}', // All Rsbuild source files
    './**/*.liquid',                  // All Liquid files in your theme
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

