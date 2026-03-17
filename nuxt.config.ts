export default defineNuxtConfig({
  ssr: false,                     // static hosting
  nitro: { preset: 'github_pages' },
  app: {
    baseURL: '/explore_pangasinan/', // matches your repo name
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/icon',
    '@nuxt/image'
  ],
  css: ['@/assets/css/main.css'],
  components: [{ path: '~/components', pathPrefix: false }],
  googleFonts: { families: { Montserrat: true } },
})