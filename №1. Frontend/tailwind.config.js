/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4B7BFF',
        plumbum: '#1D1D1B',
        asphalt: '#6B7280',
        blueberry: '#E5E7EB',
      },
    },
  },
  plugins: [],
}

