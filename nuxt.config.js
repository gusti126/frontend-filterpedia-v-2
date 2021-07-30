export default {
  generate: {
    fallback: true,
  },
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode

  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Filterpedia Indonesia',
    title: 'FilterPedia Indonesia',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // {
      //   hid: 'description',
      //   name: 'description',
      //   content: 'Filterpedia Water Treatment Filter Mudah dan Aman ',
      // },
      // {
      //   hid: 'og:description',
      //   property: 'og:description',
      //   name: 'og:description',
      //   content: 'Filterpedia Water Treatment Filter Mudah dan Aman',
      // },
      // {
      //   hid: 'og:url',
      //   name: 'og:url',
      //   content: 'https://filterpedia.co.id/',
      // },
    ],

    link: [
      { rel: 'icon', type: 'image/png', href: '/filterpedia.png' },
      {
        rel: 'stylesheet',
        href: '//fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap',
      },
      {
        hid: 'shortcut-icon',
        rel: 'shortcut icon',
        type: 'image/png',
        href: '/filterpedia.png',
      },
      {
        hid: 'apple-touch-icon',
        rel: 'apple-touch-icon',
        type: 'image/png',
        href: '/filterpedia.png',
        sizes: '512x512',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~plugins/vue-js-modal.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-analytics',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    'vue-sweetalert2/nuxt',
    'vue-currency-filter/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    'vue-social-sharing/nuxt',
    '@nuxtjs/sitemap',
    '@nuxtjs/google-analytics',

    // Or if you have custom options...
    [
      'vue-currency-filter/nuxt',
      {
        symbol: '$',
        thousandsSeparator: ',',
        fractionCount: 2,
        fractionSeparator: '.',
        symbolPosition: 'front',
        symbolSpacing: true,
        avoidEmptyDecimals: undefined,
      },
    ],

    // for multiple instance
    [
      'vue-currency-filter/nuxt',
      [
        {
          // default name 'currency'
          symbol: '$',
          thousandsSeparator: ',',
          fractionCount: 2,
          fractionSeparator: '.',
          symbolPosition: 'front',
          symbolSpacing: true,
          avoidEmptyDecimals: '##',
        },
        {
          // default name 'currency_2'
          name: 'currency_2',
          symbol: 'usd',
          thousandsSeparator: ' ',
          fractionCount: 2,
          fractionSeparator: '.',
          symbolPosition: 'front',
          symbolSpacing: false,
          avoidEmptyDecimals: '',
        },
      ],
    ],
    // firebaser konfig
    [
      '@nuxtjs/firebase',
      {
        config: {
          // apiKey: '<apiKey>',
          // authDomain: '<authDomain>',
          // projectId: '<projectId>',
          // storageBucket: '<storageBucket>',
          // messagingSenderId: '<messagingSenderId>',
          // appId: '<appId>',
          // measurementId: '<measurementId>',
          apiKey: 'AIzaSyBr-rRP4d2acYkSiViGdXN6W5GY2Kdj81I',
          authDomain: 'filterpedia-c4e3b.firebaseapp.com',
          projectId: 'filterpedia-c4e3b',
          storageBucket: 'filterpedia-c4e3b.appspot.com',
          messagingSenderId: '1005173319044',
          appId: '1:1005173319044:web:6f84b6dbdf378c5882e9d1',
          measurementId: 'G-EM8RRCD85L',
        },
        services: {
          auth: true,
          realtimeDb: true, // Just as example. Can be any other service.
        },
      },
    ],
  ],

  googleAnalytics: {
    id: '202224250',
    dev: false,
  },

  sitemap: {
    hostname: 'https://filterpedia.co.id/',
    gzip: true,
    exclude: ['/', '/mobile/explore'],
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date(),
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'https://admin.filterpedia.co.id/api',
    // withCredentials: true,
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/login',
            method: 'post',
            propertyName: 'token',
          },
          // token: {
          //   property: 'access_token',
          // },
          logout: false,
          user: {
            url: '/profile',
            method: 'get',
            propertyName: 'data',
          },
        },
        // tokenRequired: true,
        // tokenType: 'bearer',
        // globalToken: true,
        // autoFetchUser: true,
      },
    },
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'id',
      name: 'Filterpedia Indonesia ',
    },
    icon: {
      source: '~/static/icon.png',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  router: {
    // middleware: ['mobile-menu']
    mode: 'hash',
    // base: '/nuxt/'
  },
}
