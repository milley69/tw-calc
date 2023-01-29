/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  theme: {
    extend: {
      colors: {
        leaf: {
          100: '#dad7cd',
          200: '#a3b18a',
          300: '#588157',
          400: '#3a5a40',
          500: '#375441',
          600: '#232F29',
        },
        popsicle: {
          100: '#dee2ff',
          200: '#feeafa',
          300: '#E5D3E0',
          400: '#cbc0d3',
          500: '#8e9aaf',
          600: '#474d58',
        },
        wine: {
          100: '#553449',
          200: '#3c162f',
          300: '#5c162e',
          400: '#7c162e',
          500: '#191528',
          600: '#110e1b',
        },
      },
    },
  },
  plugins: [],
}
