/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'main-green' : '#5F9EA0',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

