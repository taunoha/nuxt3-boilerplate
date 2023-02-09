// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    "nuxt-security",
    "@vueuse/nuxt",
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
  ],
  tailwindcss: {
    cssPath: "~/assets/css/main.css",
    config: {
      content: [],
      theme: {
        colors: {
          primary: "#005138",
          secondary: "#549973",
          accent: "#ffe4bd",
          white: "#ffffff",
        },
      },
    },
  },
  routeRules: {
    "/api/**": { cors: true },
  },
  runtimeConfig: {
    public: {
      authEnabled: false,
      authUser: "project",
      authPass: "project",
      buildAt: "",
      environment: "local",
    },
  },
  telemetry: false,
});
