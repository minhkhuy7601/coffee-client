/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        introduction: "url('/assets/bg-1.png')",
      },
      fontFamily: {
        body: ["SF Pro Display", "sans-serif"],
        playFair: ["Playfair Display", "sans-serif"],
      },
    },
  },
  plugins: [],
};
