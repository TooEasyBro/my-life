/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    minWidth: {
      '140': '140px',
    }
  },
  plugins: [],
  darkMode: "class",
};
