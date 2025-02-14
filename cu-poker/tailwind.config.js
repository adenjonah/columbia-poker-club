/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: {
          DEFAULT: '#0077b6',
          light: '#6cade5',
          dark: '#00226a',
        },
        // Secondary Colors
        secondary: {
          DEFAULT: '#48cae4',
          light: '#90e0ef',
          dark: '#00b4d8',
        },
        // Accent Colors
        accent: {
          DEFAULT: '#00b4d8',
          light: '#90e0ef',
          dark: '#0077b6',
        },
        // Background Colors
        background: {
          DEFAULT: '#a5e0fc',
          light: '#caf0f8',
          dark: '#90e0ef',
        },
        // Text Colors
        text: {
          DEFAULT: '#023e8a',
          light: '#6cade5',
          dark: '#03045e',
        },
        // Status Colors
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
        }
      },
    },
  },
  plugins: [],
};
