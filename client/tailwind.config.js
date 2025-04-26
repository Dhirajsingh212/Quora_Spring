/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["Playwrite AU SA", "Dancing Script"],
      },
    },
  },
  plugins: [],
};
