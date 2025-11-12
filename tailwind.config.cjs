/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f5f7ff',
          100: '#e9edff',
          200: '#cfd8ff',
          300: '#aab8ff',
          400: '#7a8cff',
          500: '#5367ff',
          600: '#3a4bdb',
          700: '#2d3ab1',
          800: '#242f8a',
          900: '#1f296e',
        },
      },
      boxShadow: {
        soft: '0 10px 25px -10px rgba(0,0,0,0.2)',
      },
    },
  },
  plugins: [],
};
