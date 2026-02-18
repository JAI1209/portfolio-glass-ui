/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: '#050816',
        bg2: '#0B1224',
        accent: '#00F5D4',
        text: '#E6EDF3',
        muted: '#8A9DB0',
      },
      boxShadow: {
        soft: '0 18px 40px rgba(0,0,0,0.35)',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      maxWidth: {
        content: '1280px',
      },
    },
  },
  plugins: [],
}
