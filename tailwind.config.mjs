import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      black: {
        primary: "#000000",
        secondary: "#505050",
        bg: "#D9D9D9", 
      },
      white: {
        primary: "#FFFFFF",
        bg: "#F3F3F3",
      }
    }
  },
  plugins: [],
};
