/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx}"],
    mode: "jit",
    theme: {
      extend: {
        colors: {
          primary: "#d50000",
          secondary: "#850101",
          tertiary: "#444444",
          dark : "#100d0c",
          light: "#ededed",
        },
      },
    },
    plugins: [],
  };