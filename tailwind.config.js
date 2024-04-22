/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-green": "var(--main-green)",
        "light-green": "var(--light-green)",
        "dark-green": "var(--dark-green)"
      }
    },
  },
  plugins: [],
}

