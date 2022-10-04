import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - webTech',
    title: 'webtech',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/tiny-slider.css" }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // local fonts imports
    '~/assets/fonts/poppins.css',
    '~/assets/fonts/montserrat.css',
    // SCSS file in the project
    '~/assets/scss/main.scss'
  ],

  loading: '~/components/Loading.vue',  //Nuxt loading component disabled

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // '~/plugins/urlResolver',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    // For Sanity
    '@nuxtjs/sanity/module',
    // composition api
    '@nuxtjs/composition-api/module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // runtimeConfig: {
  //   sanity: {
  //     token: process.env.APP__TOKEN
  //   },
  // },
  //how do we use .env in nuxt???????????
  // sanity: {
  //   projectId: "process.env.APP__PROJECT__ID",  //has to be in an env file
  //   apiVersion: '2022-10-02'
  // },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    theme: {
      options: {
        customProperties: true,
      },
      // dark: true,
      themes: {
        light: {
          primary: '#141D28',
          secondary: '#233142',
          accent: '#377DFF',
          info: '#5C6F87',
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          background: '#141D28', //custom name
          navbarBg: '#0C1117'

        },

        dark: {
          primary: '#377DFF',
          secondary: '#233142',
          accent: colors.grey.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          background: '#141D28', //costom name
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {

  },
}
