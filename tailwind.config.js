/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        grotesk: ["Space Grotesk", "sans-serif"],
      },
      colors: {
        "loomis-blue": "#2563eb",
        "loomis-light-blue": "#60a5fa",
        "loomis-navy": "#0f172a",
      },
    },
  },
  plugins: [],
};
