export default defineEventHandler((event) => {
  const config = useRuntimeConfig();

  event.res.setHeader("X-APP-ENV", config.environment);
  event.res.setHeader("X-APP-BUILD-AT", config.buildAt);
});
