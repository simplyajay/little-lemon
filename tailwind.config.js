/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        karla: ["Karla", "sans-serif"],
        markazi: ["Markazi Text", "serif"],
      },
      colors: {
        customGreen: "#495E57",
        customYellow: "#F4CE14",
        customGray: "#EDEFEE",
      },
    },
  },
  plugins: [],
};
