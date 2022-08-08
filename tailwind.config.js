/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        mcs: {
          beige: { 100: "#EEECE7" },
          black: { DEFAULT: "#000000" },
          blue: { DEFAULT: "#5179F4" },
          yellow: { DEFAULT: "#FFC501" },
          red: { DEFAULT: "#FF3C5C" },
          green: { DEFAULT: "#01EC97" },
        },
      },
    },
  },
  plugins: [],
};
