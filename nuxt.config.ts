// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxt/devtools",
    "@nuxtjs/tailwindcss",
    "@nuxt/eslint",
    "@vueuse/nuxt",
    "nuxt-security",
    "@nuxt/icon",
  ],
  tailwindcss: {
    cssPath: "~/assets/css/main.css",
    configPath: "~/tailwind.config.mjs",
  },
  app: {
    head: {
      title: "Hello, World!",
      titleTemplate: "%s - Nuxt3 Boilerplate",
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
    },
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
  runtimeConfig: {
    public: {
      buildAt: new Date().toLocaleString("nb-US", {
        timeZone: "Europe/Helsinki",
      }),
      environment: process.env.ENVIRONMENT || "local",
    },
  },
  typescript: {
    strict: true,
  },
  telemetry: false,
});
