/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#002D62',    // Deep Blue
        secondary: '#4A4A4A',  // Metallic Gray
        accent: '#C9A227',     // Gold
        light: '#F5F5F5',      // Light Gray
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

