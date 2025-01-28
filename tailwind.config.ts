import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sss: "424px",
        ss: "512px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        white: "#ffffff",
        background: "#f9f9f9",
        primary: "#a2c3e7",
        secondary: "#578fcc",
        gray: {
          "01": "#ababab",
          "02": "#636363",
          "03": "#202020",
        },
      },
      fontSize: {
        "3xl": [
          "1.75rem", // 28px
          {
            lineHeight: "1.8125rem",
          },
        ],
        "2xl": [
          "1.5rem", // 24px
          {
            lineHeight: "1.5rem",
          },
        ],
        xl: [
          "1.25rem", // 20px
          {
            lineHeight: "1.25rem",
          },
        ],
        lg: [
          "1.125rem", // 18px
          {
            lineHeight: "1.125rem",
          },
        ],
        base: [
          "1rem", // 16px
          {
            lineHeight: "1rem",
          },
        ],
        sm: [
          "0.875rem", // 14px
          {
            lineHeight: "0.875rem",
          },
        ],
      },
      fontFamily: {
        sans: ["var(--font-pretendard)", "sans-serif"],
      },
      boxShadow: {
        "mobile-menu": "inset 0 10px 10px -10px rgba(0, 0, 0, 1)",
      },
    },
  },
  plugins: [],
} satisfies Config;
