/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      colors: {
        coffee: {
          50: '#faf7f0',
          100: '#f4ede0',
          200: '#e8d8c1',
          300: '#dbc19e',
          400: '#cda578',
          500: '#b8875a',
          600: '#a56b47',
          700: '#8a533b',
          800: '#704335',
          900: '#5c372c',
        },
        cream: {
          50: '#fefdfb',
          100: '#fdf9f3',
          200: '#faf2e5',
          300: '#f6e9d1',
          400: '#f0dbb8',
          500: '#e8c99a',
          600: '#deb478',
          700: '#d19b56',
          800: '#c4824a',
          900: '#a06a3e',
        }
      }
    },
  },
  plugins: [],
}