export default {
  ssr: true,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'filimo-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: [
    '@/assets/css/App.scss'
  ],
  plugins: [],
  components: true,
  buildModules: [
    // '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
  ],
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],
  axios: {
    baseURL: '/',
  },
  pwa: {
    manifest: {
      lang: 'en',
    },
  },


  build: {},
}
