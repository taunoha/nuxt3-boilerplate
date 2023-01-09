import auth from "basic-auth";

export default defineEventHandler((event) => {
  const config = useRuntimeConfig();
  const credentials = auth(event.req);
  const isValid = (credentials: auth.BasicAuthResult) => {
    return (
      credentials &&
      config.authUser === credentials.name &&
      config.authPass === credentials.pass
    );
  };
  if (!event.context._nitro.routeRules?.cors) {
    if (config.authEnabled && (!credentials || !isValid(credentials))) {
      setHeader(event, "WWW-Authenticate", 'Basic realm=""');
      sendError(
        event,
        createError({ statusCode: 401, statusMessage: "Access denied" })
      );
    }
  }
});
