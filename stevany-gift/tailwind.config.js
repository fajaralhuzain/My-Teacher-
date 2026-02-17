/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neonPink: "#ff00ff",
        neonPurple: "#bf00ff",
        darkBg: "#0f0f1a",
      },
      fontFamily: {
        mono: ['"Fira Code"', "monospace"],
        sans: ['"Inter"', "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  plugins: [],
};
