/** @type {import('tailwindcss').Config} */
export default {
  
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'Home-bg': "url('./src/assets/ayodhya.webp')",
        'Service-bg': "url('./src/assets/palash.webp')",
      },
      colors: {
        primary :{ "500" : "#e82574" , "700" :"#bc1c5c"},
        Blue :{"500":"#2986f9"},
        text :{ "text-light":"#78716c"}
        
        
      }
    },
  },
  plugins: [],
}

