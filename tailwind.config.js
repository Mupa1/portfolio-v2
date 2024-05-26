/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Josefin Sans", "sans-serif"],
      },
      colors: {
        primary: {
          50: "#eff1fe",
          100: "#d3d6fd",
          200: "#b7bcfc",
          300: "#9ba2fb",
          400: "#7f88fa",
          500: "#636ef9",
          600: "#515acc",
          700: "#3f469f",
          800: "#2e3373",
          900: "#141632",
          950: "#0f1125",
        },
      },
    },
  },
  plugins: [],
};
