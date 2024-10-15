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
    "@nuxt/image",
    "@nuxt/fonts",
  ],
  tailwindcss: {
    cssPath: "~/assets/css/main.css",
    configPath: "~/tailwind.config.mjs",
  },
  image: {
    quality: 80,
    format: ["webp"],
  },
  app: {
    head: {
      title: "Hello, World!",
      titleTemplate: "%s - Nuxt3 Boilerplate",
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
      htmlAttrs: {
        lang: "en",
      },
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
