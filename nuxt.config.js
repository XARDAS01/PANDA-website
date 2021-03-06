export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Panda',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  loading: '@/components/loading.vue',

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
  ],

  auth: {
    strategies: {
      adminAuth: {
        scheme: 'local',
        token: {
          maxAge: 86400
        },
        endpoints: {
          login: {
            url: 'https://smart-panda-server.herokuapp.com/loginAdmin',
            method: 'post',
            propertyName: 'token'
          },
          user: false,
          /*
          user: { 
            url: 'https://smart-panda-server.herokuapp.com/getAdmin', 
            method: 'get', 
            propertyName: 'token'
          },
          */
          logout: {
            url: 'https://smart-panda-server.herokuapp.com/logoutAdmin',
            method: 'post' 
          }
        }
      },
      userAuth: {
        scheme: 'local',
        token: {
          maxAge: 86400
        },
        endpoints: {
          login: {
            url: 'https://smart-panda-server.herokuapp.com/loginAdmin',
            method: 'post',
            propertyName: 'token'
          },
          user: false,
          /*
          user: { 
            url: 'https://smart-panda-server.herokuapp.com/getAdmin', 
            method: 'get', 
            propertyName: 'token'
          },
          */
          logout: {
            url: 'https://smart-panda-server.herokuapp.com/logoutAdmin',
            method: 'post' 
          }
        }
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
}