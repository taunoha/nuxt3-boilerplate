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
    configPath: "~/tailwind.config.js",
  },
  routeRules: {
    "/api/**": { cors: true },
  },
  security: {
    headers: {
      crossOriginEmbedderPolicy:
        process.env.NODE_ENV === "development" ? "unsafe-none" : "require-corp",
    },
    basicAuth: {
      enabled: false,
      name: "test",
      pass: "test",
      message: "Basic Auth Required",
    },
  },
  app: {
    head: {
      title: "Hello, World!",
      titleTemplate: "%s - Nuxt3 Boilerplate",
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
    },
  },
  runtimeConfig: {
    public: {
      buildAt: "",
      environment: "local",
    },
  },
  devtools: {
    enabled: true,
  },
  typescript: {
    strict: true,
  },
  telemetry: false,
});
