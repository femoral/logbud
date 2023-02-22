/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./client/src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
