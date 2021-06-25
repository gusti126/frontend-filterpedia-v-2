module.exports = 
    {
        theme: {
            fontFamily: ['Poppins', 'sans-serif'],
            fontFamily: {
                    poppins: ["Poppins"],
                },
        },
        fontFamily: {
            poppins: ["Poppins"],
        },
        variants: {},
        plugins: [],
        purge: {
          content: [
            `components/**/*.{vue,js}`,
            `layouts/**/*.vue`,
            `pages/**/*.vue`,
            `plugins/**/*.{js,ts}`,
            `nuxt.config.{js,ts}`
          ]
        }
      }
