// tailwind.config.js
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6366f1",
        "primary-light": "#8b5cf6",
        "card-dark": "#0f172a",
        "card-border": "#1e293b",
      },
    },
  },
  plugins: [],
}