/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      "50%": "50%",
      16: "4rem",
    },
    extend: {
      screens: {
        sm: "567px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },
      keyframes: {
        moveRight: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translate(10px) translateY(20px)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        moveRight: "moveRight 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}



