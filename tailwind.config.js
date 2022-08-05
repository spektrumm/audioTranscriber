/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,js,css}", "./node_modules/daisyui"],
  theme: [
      'light',
      'forest',
      {
        fontFamily: {
          'sans': ['Futura', 'sans-serif'],
        }
      }
  ],
  plugins: [require('daisyui')],
}
