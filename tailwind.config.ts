import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#f5f7fb",
          100: "#e9eef7",
          200: "#cfdcf0",
          300: "#a8c0e5",
          400: "#7ea0d8",
          500: "#537fca",
          600: "#3c62a9",
          700: "#2f4c84",
          800: "#273e6b",
          900: "#1a2a47",
        },
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.06)",
      },
    },
  },
  plugins: [],
};
export default config;
