/** @type {import('tailwindcss').Config} */
export default {
  // This tells Tailwind where to look for class names
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nutri: {
          green: "#2F855A",   // Figma green
          orange: "#DD6B20",  // Figma orange
          dark: "#2E4A3F",    // Text color
        },
      },
    },
  },
  plugins: [],
}

