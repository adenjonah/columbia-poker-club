/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0077b6',
          light: '#6cade5',
          dark: '#00226a',
        },
        secondary: {
          DEFAULT: '#48cae4',
          light: '#90e0ef',
          dark: '#00b4d8',
        },
        accent: {
          DEFAULT: '#00b4d8',
          light: '#90e0ef',
          dark: '#0077b6',
        },
        background: {
          DEFAULT: '#a5e0fc',
          light: '#caf0f8',
          dark: '#90e0ef',
        },
        text: {
          DEFAULT: '#023e8a',
          light: '#6cade5',
          dark: '#03045e',
        },
        success: {
          DEFAULT: '#2ecc71',
          light: '#7bed9f',
          dark: '#27ae60',
        },
        warning: {
          DEFAULT: '#f1c40f',
          light: '#ffeb3b',
          dark: '#f39c12',
        },
        error: {
          DEFAULT: '#e74c3c',
          light: '#ff7675',
          dark: '#c0392b',
        },
        ink: {
          950: '#020a1f',
          900: '#03124a',
          800: '#03045e',
          700: '#00226a',
        },
      },
      fontFamily: {
        display: ['Poppins', 'system-ui', 'sans-serif'],
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(0, 180, 216, 0.55)',
        'glow-sm': '0 0 20px -6px rgba(0, 180, 216, 0.45)',
        card: '0 10px 30px -12px rgba(3, 4, 94, 0.25)',
        'card-lg': '0 30px 60px -20px rgba(3, 4, 94, 0.4)',
        inset: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.1)',
      },
      backgroundImage: {
        'mesh-hero': 'radial-gradient(at 20% 10%, rgba(0,180,216,0.35) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(108,173,229,0.30) 0px, transparent 50%), radial-gradient(at 50% 100%, rgba(72,202,228,0.25) 0px, transparent 50%)',
        'mesh-soft': 'radial-gradient(at 0% 0%, rgba(144,224,239,0.35) 0px, transparent 45%), radial-gradient(at 100% 100%, rgba(72,202,228,0.30) 0px, transparent 45%)',
        'grid-faint': 'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid-sm': '36px 36px',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.9)', opacity: '0.6' },
          '100%': { transform: 'scale(1.6)', opacity: '0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out forwards',
        'fade-up-slow': 'fade-up 1s ease-out forwards',
        'fade-in': 'fade-in 0.6s ease-out forwards',
        float: 'float 4s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'pulse-ring': 'pulse-ring 2.2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
    },
  },
  plugins: [],
};
