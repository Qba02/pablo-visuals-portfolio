module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./index.html"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#d50000",
        secondary: "rgb(190 18 60)",
        tertiary: "#444444",
        dark: "#141414",
        darkGrey: "#1e1e1e", // #282828
        light: "#d6d6d6", // #ededed
      },
    },
  },
  plugins: [],
};
