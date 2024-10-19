/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "custom-dark": "#0E0024", 
        "custom-white" : "#EDF2F9",
        "custom-grey" :"#E9EDF7"
      },
    },
  },
  plugins: [],
}
