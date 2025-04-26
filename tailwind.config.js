/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#001F3F',
        secondary: '#374151',
        accent: '#F59E0B',
        light: '#F3F4F6',
      },
      animation: {
        'subtle-zoom': 'subtle-zoom 15s infinite alternate',
        'scroll-bounce': 'scroll-bounce 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 8s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 8s infinite',
        'rotate-slow': 'rotate-slow 20s linear infinite',
      },
      keyframes: {
        'subtle-zoom': {
          '0%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1.15)' },
        },
        'scroll-bounce': {
          '0%, 100%': {
            transform: 'translateY(0)',
            opacity: '0.8',
          },
          '50%': {
            transform: 'translateY(6px)',
            opacity: '0.4',
          },
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
        'rotate-slow': {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
      },
      boxShadow: {
        'glow': '0 0 5px 2px rgba(245, 158, 11, 0.5)',
      },
    },
  },
  plugins: [],
}

