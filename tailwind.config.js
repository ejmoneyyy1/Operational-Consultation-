/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      spacing: {
        'section-gap': '160px',
      },
      colors: {
        brand: {
          soil: '#2A2320',
          clay: '#B89B88',
          linen: '#F4F2EC',
          wood: '#875C3B',
          ochre: '#E8A023',
          aluminium: '#9A9A9A',
          stainless: '#E0E0E0',
        },
        'brand-black': '#111111',
        'brand-gray': '#F5F5F5',
        'border-color': '#E5E5E5',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
