// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
  ssr: false,
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      title: "Oliver Liou | Resume",
    },
    baseURL: process.env.NODE_ENV === "production" ? "/PersonalResume/" : "/",
    buildAssetsDir: "/static/",
  },
});
