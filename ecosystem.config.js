module.exports = {
  apps: [
    {
      name: 'Nuxt3 Boilerplate',
      script: './.output/server/index.mjs',
      env: {
        NUXT_PORT: 3002,
        NUXT_BUILD_AT: new Date().toLocaleString('nb-US', { timeZone: 'Europe/Helsinki' }),
        NUXT_ENVIRONMENT: 'develop'
      }
    }
  ]
}
