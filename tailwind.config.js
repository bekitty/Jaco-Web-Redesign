/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        jaco: {
          dark: '#0e0e10', // Main background
          card: '#18181b', // Card/Sidebar background
          hover: '#26262c',
          primary: '#7c3aed', // Jaco Purple/Violet
          accent: '#facc15', // Gold/Yellow accent
          text: '#efeff1',
          muted: '#adadb8',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(5px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}