export default defineEventHandler((event) => {
  const config = useRuntimeConfig();
  let allow = !["develop", "staging", "stage"].includes(config.environment);

  const base64Credentials = event.req.headers?.authorization?.split(" ")?.[1];

  if (base64Credentials) {
    const credentials = Buffer.from(base64Credentials, "base64").toString(
      "ascii"
    );
    const [username, password] = credentials.split(":");

    allow = username === config.authUser && password === config.authPass;
  }

  if (!allow) {
    event.res.statusCode = 401;
    event.res.setHeader("WWW-Authenticate", 'Basic realm=""');
    event.res.end("Unauthorized");
  }
});
