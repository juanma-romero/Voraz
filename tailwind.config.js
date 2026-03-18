/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'gara':['garamond-premier-pro'],
      'oswald': ['Oswald', 'sans-serif'],
    },
    extend: {
      colors: {
        'violeta':'#590256',
        'verde':'#30af50',
        'neon-pink': '#ff0080',
        'neon-blue': '#00ffff',
        'neon-green': '#39ff14',
        'neon-purple': '#bf00ff',
        'voraz-pink': '#d926e9',
        'voraz-dark': '#111111',
      }
    }
  },
  plugins: [],
}
