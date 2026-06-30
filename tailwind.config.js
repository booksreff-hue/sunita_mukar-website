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
        navy: '#E6F2ED',
        navy2: '#EDE8F5',
        teal: '#8DCAC4',
        'teal-light': '#5DA8A8',
        gold: '#D4816A',
        'gold-light': '#E8A694',
        'text-light': '#2D403C',
        'text-muted': '#6B7D79',
        heading: '#1A3330',
      },
      maxWidth: {
        content: '1280px',
      },
    },
  },
  plugins: [],
}
