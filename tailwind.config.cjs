/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px'
    },
    extend: {
      backgroundImage:{
        'hero-desktop': "url('assets/desktop/image-hero.jpg')",
        'hero-mobile': "url('assets/mobile/image-hero.jpg')",
      },
      fontFamily:{
        sans:['Josefin Sans', 'sans-serif'],
        alata: ['Alata'],
      },
      letterSpacing:{
        widest:'.3em'
      }
    },
  },
  plugins: [],
}