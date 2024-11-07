/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      },
      backgroundImage: {
        'custom-gradient':'linear-gradient(180deg, #6aa2da 0%, #1b65af 100%)'
      },
      textColor:{
        'input-invalid': 'rgb(239, 68, 68)',
        'label-invalid': 'rgb(248, 113, 133)',
        'label-custom': 'rgba(23, 40, 75, 0.733)'
        
      },
      border:{
        custom: "1px solid transparent",
        "custom-color": "rgb(267, 63, 63)"
      },
      borderColor:{
        custom: "rgb(267, 63, 63)"
      }
    },
  },
  plugins: [],
}

