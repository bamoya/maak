/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        messiri: ["El Messiri", "sans-serif"],
      },
      // colors: {
      //   gray: {
      //     100: "#fbf9f9",
      //   },
      // },
    },
  },
  plugins: [],
};
