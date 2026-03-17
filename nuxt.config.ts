export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/icon',
    '@nuxt/image'
  ],

  ssr: false, // Required for static hosting

  nitro: {
    preset: 'github_pages'
  },

  app: {
    baseURL: '/explore_pangasinan/',
  },

  css: ['@/assets/css/main.css'],

  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],

  googleFonts: {
    families: {
      Montserrat: true,
    },
  }
})