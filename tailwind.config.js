/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage:{
        'hero': "url('/src/assets/bg-3.png')",
        'about': "url('/src/assets/bg-1.jpg')",
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

