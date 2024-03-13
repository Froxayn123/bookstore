/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        madimiOne: ["'Madimi One'", "sans-serif"],
        breeSerif: ["'Bree Serif'", "serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
