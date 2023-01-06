/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        amatic: ['amatic sc', 'sans-serif'],
      },
      minHeight: {
        fullScreenMinHeight: 'calc(100vh - 85px)',
      },
    },
  },
  plugins: [],
};
