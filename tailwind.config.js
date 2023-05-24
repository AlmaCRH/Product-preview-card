/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      width: {
        100: "375px",
        144: "1440px",
      },
      colors: {
        "grayish-blue": "hsl(228, 12%, 48%)",
        "very-dark-blue": "hsl(212, 21%, 14%)",
      },
      fontFamily: {
        'Montserrat': ['Montserrat', 'sans-serif'],
        'Fraunces': ['Fraunces', 'serif']
      }
    },
  },
  plugins: [],
};
