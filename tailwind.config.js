/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", 
  theme: {
    extend: {
      colors: {
        primary: "#f42c37",
        secondary: "#f42c37",
        branchYellow: "#fdc62e",
        branchGreen: "#2dcc6f",
        branchBlue: "#1376f4",
        branchWhite: "#eeeeee"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem"
        }
      }
    },
  },
  plugins: [],
}