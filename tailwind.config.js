/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],

extend: {
  keyframes: {
    'burst': {
      '0%': { transform: 'translate(0, 0) scale(0.5)', opacity: '1' },
      '100%': { transform: 'translate(var(--tx), var(--ty)) scale(1)', opacity: '0' },
    },
    'bounce-gentle': {
      '0%, 100%': { transform: 'translateY(0) scale(1)' },
      '50%': { transform: 'translateY(-8px) scale(1.05)' },
    },
  },
  animation: {
    'burst': 'burst 1.4s ease-out infinite',
    'bounce-gentle': 'bounce-gentle 2s ease-in-out infinite',
  },
},
}

