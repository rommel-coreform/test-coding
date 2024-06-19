/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: "#FFCE22",
        "yellow-light": "#FFD84D",
        blue: "#2469F6",
        "blue-light": "#5087F8",
        black: "#1F2128",
      },
      fontFamily: {
        montserrat: ["Montserrat"],
      },
    },
  },
  plugins: [],
};
