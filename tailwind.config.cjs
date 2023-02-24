/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rightBar: '#FDFDFB',
        primary: '#F8CB5B',
        secondary: '#FB6D39',
        tercery: '#503E9B',
        text: '#303030'
      },
      fontFamily: {
        'Poppins': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}