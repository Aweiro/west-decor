/** @type {import('tailwindcss').Config} */
module.exports = {
  // 1. Тепер Tailwind працює всередині будь-якого блоку з класом .tw-root
  important: '#admin-root',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    // Додайте інші шляхи за необхідності
  ],

  theme: {
    extend: {},
  },

  corePlugins: {
    // 2. Глобальне скидання вимкнено (щоб не ламати решту сайту)
    preflight: false,
  },

  plugins: [],
};
