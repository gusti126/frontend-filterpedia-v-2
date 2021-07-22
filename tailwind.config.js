module.exports = {
  theme: {
    fontFamily: ['Poppins', 'sans-serif'],
    fontFamily: {
      poppins: ['Poppins'],
    },
    extend: {
      colors: {
        pesanan: '#EBFDFE',
        ungusuez: '#000d42',
      },
    },
    fontFamily: {
      poppins: ['Poppins'],
    },
    variants: {},
  },
  plugins: [],
  purge: {
    content: [
      `components/**/*.{vue,js}`,
      `layouts/**/*.vue`,
      `pages/**/*.vue`,
      `plugins/**/*.{js,ts}`,
      `nuxt.config.{js,ts}`,
    ],
  },
}
