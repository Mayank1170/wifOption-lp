/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to left, #161614 0%, #FF8C00 50%, #FF0080 100%)',
      }
    },
  },
  plugins: [],
}

