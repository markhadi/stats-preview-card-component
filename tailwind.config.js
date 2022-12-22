/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      backgroundImage: {
        headerMobile: "url('../src/images/image-header-mobile.jpg')",
        headerDesktop: "url('../src/images/image-header-desktop.jpg')",
      },
    },
    colors: {
      veryDarkBlue: "hsl(233, 47%, 7%)",
      darkDesaturatedBlue: "hsl(244, 38%, 16%)",
      softViolet: "hsl(277, 64%, 61%)",
      white: "hsl(0, 0%, 100%)",
      slightlyWhiteMain: "hsla(0, 0%, 100%, 0.75)",
      slightlyWhiteStat: "hsla(0, 0%, 100%, 0.6)",
    },
  },
  plugins: [],
};
