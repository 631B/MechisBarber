/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
    colors: {
      'MechisBlack': '#010100',
      "MechisYellow": "#fdaa1b",
      "MechisWhite": "#fefeff"
    },
    }
  },
  plugins: [],
};
