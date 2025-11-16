/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        linen: "#FAF3EE",
        ink: "#1f2937",
        blush: "#E9D8D2",
        sage: "#DCE5E1",
        gold: "#BA9B6C"
      },
      fontFamily: {
        display: ["SS Bruney", "Georgia", "Times New Roman", "serif"],
        sans: ["Loubag", "Georgia", "Times New Roman", "serif"],
        subtitle: ["Vintage Rotter", "Georgia", "Times New Roman", "serif"],
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.06)"
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
