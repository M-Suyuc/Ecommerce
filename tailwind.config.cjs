/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        shade: {
          500: '#233A59',
          600: '#132031'
        }
      },
      fontFamily: {
        // 'poppins': ['Poppins', 'sans-serif'],
        // 'body': ['"Open Sans"'],
        // 'display': 'Oswald'
      }
    }
  },
  plugins: []
}
