/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "SansSerif"],
      },
    colors: {
      'MechisBlack': '#010100',
      "MechisYellow": "#fdaa1b",
      "MechisWhite": "#fefeff"
    },
    }
  },
  plugins: [],
};
