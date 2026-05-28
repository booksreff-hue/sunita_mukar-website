/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Cormorant Garamond', 'serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      colors: {
        navy: '#0A1628',
        navy2: '#060F1E',
        teal: '#1B6B6B',
        'teal-light': '#2A9D8F',
        gold: '#C9A84C',
        'gold-light': '#E8C96A',
        'text-light': '#D4C9B8',
        'text-muted': '#8A9BB0',
      },
      maxWidth: {
        content: '1280px',
      },
    },
  },
  plugins: [],
}
