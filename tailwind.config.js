/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0B0E14",
        surface: "#121722",
        "surface-2": "#171d2b",
        line: "#232a3a",
        text: "#E8EAED",
        muted: "#8892A6",
        "muted-2": "#5c6478",
        cool: "#3B82F6",
        hot: "#F97316",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "heat-grad":
          "linear-gradient(90deg, #1E3A8A 0%, #3B82F6 22%, #06B6D4 40%, #F59E0B 68%, #F97316 85%, #EF4444 100%)",
      },
    },
  },
  plugins: [],
};
