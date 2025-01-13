import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        red: "var(--red)",
        gray: "var(--gray)",
        light_gray: "var(--light-gray)",
        dark_gray: "var(--dark-gray)",
      },
      fontFamily: {
        sans: ["Groteska", "sans-serif"],
        fancy: ["Helvetica", "sans-serif"],
      },
      maxWidth: {
        limitation: "1360px",
      },
    },
  },
  plugins: [],
} satisfies Config;
