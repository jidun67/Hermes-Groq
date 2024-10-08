/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hermes-dark': '#1a1a1a',
        'hermes-accent': '#6b46c1',
      },
    },
  },
  plugins: [],
}