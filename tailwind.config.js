/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        openbold: "OpenSans-CondBold",
        openlight: "OpenSans-CondLight",
        openitalic: "OpenSans-CondLightItalic",
      },
      backgroundImage: {
        'navgrad': 'linear-gradient(to right, #ffffff 0%,#f39e75 32%,#f39e75 32%,#ec6625 52%,#f39e75 68%,#ffffff 100%)',
      }
    },
  },
  plugins: [],
}