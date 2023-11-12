// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxtjs/cloudinary", "@nuxtjs/i18n", "@nuxt/image"],
  colorMode: {
    preference: "light",
  },
  ui: {
    global: true,
    icons: ["heroicons"],
  },
  i18n: {
    compilation: {
      strictMessage: false,
    },
    locales: [
      {
        code: "en",
        file: "en.ts",
      },
      {
        code: "da",
        file: "da.ts",
      },
    ],
    lazy: true,
    langDir: "lang",
    defaultLocale: "da",
  },
  image: {
    cloudinary: {
      baseURL: "https://res.cloudinary.com/sasin91/image/upload",
    },
  },
});
