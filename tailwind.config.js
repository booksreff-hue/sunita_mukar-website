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
        navy: '#F2F8F5',
        navy2: '#F5F2F8',
        teal: '#A3D4D0',
        'teal-light': '#6DB8B8',
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
