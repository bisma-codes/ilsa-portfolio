/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pinterest: {
          red: '#e60023',  // Pinterest brand red
        },
        background: '#ffffff', // Optional custom name for background
      },
      fontFamily: {
        pinterest: ['"Mr De Haviland", cursive'],
      },
    },
  },
  
  
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};
