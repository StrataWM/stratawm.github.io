export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-icon', '@nuxtjs/google-fonts', '@unocss/nuxt', "@nuxt/image"],
  googleFonts: {
    families: {
      Inter: {
        wght: [100, 300, 400, 500, 700, 900]
      },
      Roboto: {
        wght: [100, 300, 400, 500, 700, 900]
      }
    }
  }
})