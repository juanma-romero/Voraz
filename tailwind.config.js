/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'voraz-black': '#0a0a0a',
        'voraz-card': '#141414',
        'voraz-pink': '#d925e9',
        'voraz-pink-hover': '#c018d0',
        'voraz-gold': '#d4af37',
      },
      fontFamily: {
        'garamond': ['EB Garamond', 'Garamond', 'serif'],
        'domus': ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
