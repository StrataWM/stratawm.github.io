export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-icon', '@nuxtjs/google-fonts', '@unocss/nuxt'],
  googleFonts: {
    families: {
      Roboto: true
    }
  }
})
