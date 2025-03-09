import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      padding: {
        "120": "30rem",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        red: "var(--red)",
        gray: "var(--gray)",
        light_gray: "var(--light-gray)",
        dark_gray: "var(--dark-gray)",
        black: "var(--black)",
      },
      fontFamily: {
        sans: ["Groteska", "sans-serif"],
        fancy: ["Helvetica", "sans-serif"],
        proxima: ["Proxima Nova", "sans-serif"],
        sf_pro: ["SF Pro  Display", "sans-serif"],
      },
      maxWidth: {
        limitation: "1360px",
      },
      animation: {
        "star-movement-bottom":
          "star-movement-bottom linear infinite alternate",
        "star-movement-top": "star-movement-top linear infinite alternate",
      },
      keyframes: {
        "star-movement-bottom": {
          "0%": { transform: "translate(0%, 0%)", opacity: "1" },
          "100%": { transform: "translate(-100%, 0%)", opacity: "0" },
        },
        "star-movement-top": {
          "0%": { transform: "translate(0%, 0%)", opacity: "1" },
          "100%": { transform: "translate(100%, 0%)", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
