/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Panchang-Semibold": ["Panchang-Semibold"],
        "Glusp": ["Glusp"],
        "Humane": ["Humane"],
        "Unique-SemiBold": ["Unique-SemiBold"],
      },
    }
  },
  plugins: [],
}