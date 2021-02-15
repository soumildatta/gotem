module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primaryBlue: {
        DEFAULT: "#428FD7",
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
