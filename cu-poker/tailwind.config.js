/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#a5e0fc",
        text: "#023e8a",
        primary: "#0077b6",
        secondary: "#00b4d8",
        accent: "#ffb703",
      },
    },
  },
  plugins: [],
};
