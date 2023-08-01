/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
    },
    colors: {
      gray: "#F9F9F9",
      white: "#FFFFFF",
      blue: "#002CC8",
      black: "#000000",
    },
  },
  plugins: [],
};
