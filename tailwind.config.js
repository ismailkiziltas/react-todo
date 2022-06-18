/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        'form': '1fr 1fr auto',
      }
    },
  },
  plugins: [],
}
