/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      nunito: ['Nunito Sans', 'sans-serif']
    },
    colors: {
      'dark-elements': '#2b3845',
      'dark-background': '#202c36',
      'light-text': '#111517',
      'light-input': '#848484',
      'light-background': '#fafafa',
      'hover-light-input': 'rgba(234, 233, 233, 1)',
      white: '#ffffff'
    },
    extend: {
      gridTemplateColumns: {
        'auto-fill-minmax': 'repeat(auto-fill, minmax(260px, 1fr))'
      },
      boxShadow: {
        nav: '0px 2px 4px 0px rgba(0,0,0,0.0562)',
        button: '0px 4px 4px 0px rgba(0,0,0,0.25);'
      },
      keyframes: {
        fadeInDown: {
          '0%': {
            opacity: 0,
            transform: 'translateY(-20px)'
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)'
          }

        },
        pulse: {
          '0%': {
            opacity: 1
          },
          '50%': {
            opacity: 0.5
          },
          '100%': {
            opacity: 1
          }
        }
      },
      animation: {
        fadeInDown: 'fadeInDown 0.3s ease-in-out',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      }
    }
  },
  plugins: []
}
