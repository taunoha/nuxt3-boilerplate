// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    "@nuxt/devtools",
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
      buildAt: new Date().toLocaleString("nb-US", {
        timeZone: "Europe/Helsinki",
      }),
      environment: process.env.ENVIRONMENT || "local",
    },
  },
  watch: ["tailwind.config.js"],
  typescript: {
    strict: true,
  },
  experimental: {
    typedPages: true,
    headNext: true,
  },
  telemetry: false,
});
