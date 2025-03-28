/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#A69766',  // Couleur principale (doré/ocre)
        'primary-dark': '#8A7D55', // Version plus foncée de la couleur principale
        secondary: '#4F5960', // Couleur secondaire (gris bleuté)
        'secondary-dark': '#3A4348', // Version plus foncée de la couleur secondaire
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
} 