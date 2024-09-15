/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
    colors: {
      'MechisBlack': '#000101',
    },
    }
  },
  plugins: [],
};
