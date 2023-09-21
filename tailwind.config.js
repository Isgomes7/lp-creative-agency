/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html, js}'],
  theme: {
    extend: {
      spacing: {
        'small': '5px',
        'gap': '10px',
        'trim-small': '15px',
        'box-spacing': '20px',
        'trim': '30px',
        'large': '50px',
        'big': '100px',
        'x-big': '150px',
      },
      colors: {
        'gray-01' : '#6B7280',
        'black-01' : '#1F1F39',
      },
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Source Sans 3', 'sans-serif'],
    },
  },
  plugins: [],
}