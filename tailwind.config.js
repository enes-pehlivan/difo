/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3C3C3C",
        secondary: "#FFA16C",
        third: "#d9bd7d",
        four: "#5cf2bc",
        danger: "#ff0000",
      },
      fontFamily: {
        indie: ["Noto Sans Mende Kikakui", "sans-serif"],
      },
    },
  },

 

  plugins: [],
};
