/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        olive: {
          400: '#8B9B6E',
          500: '#6B7F4A',
          600: '#4F5E37',
          700: '#3D4A2B',
        },
      },
    },
  },
  plugins: [],
};