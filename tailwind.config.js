module.exports = {
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}", // Look for classes used in JS/JSX/TS/TSX files
    "./public/index.html", // Look for classes used in the HTML file
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
