/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Helvetica Neue", "Helvetica", "sans-serif"],

        "druk-wide": ["Druk Wide", "sans-serif"],
      },
      colors: {
        primary: "#416CFF",
        background: "#f0f2f5",
        "dark-blue": "#071526",
        "dark-grey": "#121317",
        "light-grey": "#E6EAF0",
        "light-grey-1": "#E4E6EB",
        grey: "#8B949F",
        "grey-1": "#47505B",
        "light-purple": "#416CFF1A",
      },
    },
  },
  plugins: [],
};
