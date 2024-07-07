/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'gara':['garamond-premier-pro']
    },
    extend: {},
    colors: {
      'violeta':'#590256',
      'verde':'#30af50'
    }
  },
  plugins: [],
}

