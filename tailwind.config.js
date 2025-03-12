module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./index.html"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#d50000",
        secondary: "#850101",
        tertiary: "#444444",
        dark: "#100d0c",
        darkBg: "#080606",
        light: "#d6d6d6", // #ededed
      },
    },
  },
  plugins: [],
};
