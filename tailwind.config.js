/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'alkatra': ['Alkatra', 'cursive'],
      },
      backgroundColor: {
        'sky-blue': '#0278CA',
        'light-blue': '#1599A1',
      },
      backgroundImage: (theme) => ({
        'gradient-sky-blue': `linear-gradient(to bottom, ${theme('backgroundColor.sky-blue')}, ${theme('backgroundColor.light-blue')})`,
      }),
    },
  },
  plugins: [],
};
