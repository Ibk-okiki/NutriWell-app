/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nutri-green': {
          DEFAULT: '#2F855A', // The deep, earthy green
          light: '#3A923E',   // A slightly lighter, vibrant green
        },
        'nutri-orange': '#DD6B20', // The vibrant terracotta/orange accent
        'nutri-dark': '#2E4A3F',   // The dark, moody green for text
        'nutri-brown': {
          DEFAULT: '#422006', // The rich, dark brown for subtext
          dark: 'rgba(66, 32, 6, 0.88)', // The darkest brown for main headings
        },
        'nutri-cream': '#FEFCF3', // The warm, creamy off-white background
      },
      fontFamily: {
        // Use 'heading' for Montserrat, 'sans' for Poppins, 'body' for Lato
        heading: ['Montserrat', 'sans-serif'],
        sans: ['Poppins', 'sans-serif'],
        body: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}