export default defineEventHandler((event) => {
  const config = useRuntimeConfig().public;

  setHeader(event, "X-APP-ENV", config.environment);
  setHeader(event, "X-APP-BUILD-AT", config.buildAt);
});
