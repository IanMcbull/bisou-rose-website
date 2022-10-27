/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lightBrown': '#d8a89a',
        'chocolateBrown': '#7a4b3c',
        'deepChocolateBrown': '#d8a89a',
        'lightBrown': '#3c0e04',
        'lighterBrown': '#b18477',
        'lightestBrown': '#b7978d',
        'darkBrown': '#4c1b0d',
        'lightBrownTwo': '#a47464',
        'lightBrown': '#d8a89a',
      }
    },
    fontFamily: {
      Cinzel: ["Cinzel", "serif"],
    }
  },
  plugins: [],
}
