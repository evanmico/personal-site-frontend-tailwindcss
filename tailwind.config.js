/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'txt-lg': 'hsl(var(--txt-lg) / <alpha-value>)',
        'txt-sm': 'hsl(var(--txt-sm) / <alpha-value>)',
        'accent-dark': 'hsl(var(--accent-dark) / <alpha-value>)',
        'accent-bright': 'hsl(var(--accent-bright) / <alpha-value>)',
        'bg-primary': 'hsl(var(--bg-primary) / <alpha-value>)',
        'bg-secondary': 'hsl(var(--bg-secondary) / <alpha-value>)',
      }
    },
  },
  plugins: [],
}

