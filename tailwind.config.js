/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blush: {
          50: '#fff5f7',
          100: '#ffe4ec',
          200: '#ffc9d9',
          300: '#ffa6c0',
          400: '#ff7da6',
          500: '#f95d8d',
          600: '#e64476',
          700: '#c32d60',
          800: '#9d1f4c',
          900: '#7a1640',
        },
        cream: {
          50: '#fffdf9',
          100: '#fff8ee',
          200: '#fdeccb',
          300: '#f9d9a3',
          400: '#f0bd6e',
        },
        gold: {
          400: '#e8c270',
          500: '#d4a843',
          600: '#b88a2a',
        },
        ink: {
          700: '#5b3a4a',
          800: '#3f2632',
          900: '#2a1820',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        script: ['"Dancing Script"', 'cursive'],
        sans: ['"Poppins"', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        floatUp: {
          '0%': { transform: 'translateY(0) scale(1)', opacity: '0' },
          '10%': { opacity: '0.9' },
          '90%': { opacity: '0.9' },
          '100%': { transform: 'translateY(-110vh) scale(1.2)', opacity: '0' },
        },
        floatSlow: {
          '0%,100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-18px) rotate(6deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        popIn: {
          '0%': { transform: 'scale(0.6)', opacity: '0' },
          '70%': { transform: 'scale(1.05)', opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        fadeUp: {
          '0%': { transform: 'translateY(24px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        lidOpen: {
          '0%': { transform: 'rotateX(0deg) translateY(0)' },
          '100%': { transform: 'rotateX(-75deg) translateY(-6px)' },
        },
        confettiFall: {
          '0%': { transform: 'translateY(-10vh) rotate(0deg)', opacity: '1' },
          '100%': { transform: 'translateY(110vh) rotate(720deg)', opacity: '0' },
        },
        pulseSoft: {
          '0%,100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.06)' },
        },
        typeCursor: {
          '0%,100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        floatSlow: 'floatSlow 6s ease-in-out infinite',
        shimmer: 'shimmer 6s linear infinite',
        popIn: 'popIn 0.6s cubic-bezier(0.34,1.56,0.64,1) both',
        fadeUp: 'fadeUp 0.8s ease-out both',
        pulseSoft: 'pulseSoft 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
