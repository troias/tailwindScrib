/** @type {import('tailwindcss').Config} */

const bgImgPath = "../public/images/bg-pattern-desktop.jpg"

const bgImgWithOpacity = (opacity) =>
  `linear-gradient(rgba(0, 0, 0, ${opacity}), rgba(0, 0, 0, ${opacity})), url(${bgImgPath})`

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        mobile: "375px",
        tablet: "768px",
        laptop: "1024px",
        desktop: "1440px",
      },
      colors: {
        white: "#FFFFFF",
        purple: "#3F3CBB",
        midnight: "#121063",
        metal: "#565584",
        "tahiti-blue": "#2D2D9C",
        "cool-white": "ECEBFF",
        "bubble-gum": "#FF77E9",
        "copper-rust": "#78DCCA",
        brand: `rgb(var(--color-brand) / <alpha-value>)`,
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      },
      fontSize: {
        xs: ["14px", { lineHeight: "20px", letterSpacing: "0.01em" }],
        sm: ["16px", { lineHeight: "24px", letterSpacing: "0.01em" }],
        base: ["18px", { lineHeight: "28px", letterSpacing: "0.01em" }],
        lg: ["20px", { lineHeight: "32px", letterSpacing: "0.01em" }],
        xl: ["24px", { lineHeight: "36px", letterSpacing: "0.01em" }],
        "2xl": ["28px", { lineHeight: "40px", letterSpacing: "0.012em" }],
        "3xl": ["32px", { lineHeight: "44px", letterSpacing: "0.012em" }],
        "4xl": ["36px", { lineHeight: "48px", letterSpacing: "0.012em" }],
        "5xl": ["40px", { lineHeight: "52px", letterSpacing: "0.012em" }],
      },
      fontFamily: {
        sataoshi: ["Sataoshi", "sans-serif"],
        "sataoshi-bold": ["Sataoshi-Bold", "sans-serif"],
        "sataoshi-italic": ["Sataoshi-Italic", "sans-serif"],
        "sataoshi-bold-italic": ["Sataoshi-BoldItalic", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        "inter-bold": ["Inter-Bold", "sans-serif"],
        "inter-italic": ["Inter-Italic", "sans-serif"],
        "inter-bold-italic": ["Inter-BoldItalic", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern": bgImgWithOpacity(-100),
      },
    },
  },
  plugins: [],
}
