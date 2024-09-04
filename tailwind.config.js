/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        // Custom landscape breakpoint
        'landscape': { 'raw': '(orientation: landscape)' },
      },
      fontSize:{
        'xxs':'0.65rem'
      }
    },
  },
  plugins: [],
}

