/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"], //./*.html
  theme: {
    extend: {
      colors: {
        test: "#eb4034",
      },
      screens: {
        sm: "576px",
        md: "960px",
        lg: "1440px",
        xl: "1920px",
      },
    },
  },
  plugins: [],
};
