export default defineEventHandler((event) => {
  const config = useRuntimeConfig();

  setHeader(event, "X-APP-ENV", config.environment);
  setHeader(event, "X-APP-BUILD-AT", config.buildAt);
});
