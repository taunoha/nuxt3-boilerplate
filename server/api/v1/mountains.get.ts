type Mountains = {
  title: string;
  description: string;
  height: string;
  countries: string[];
  continent: string;
  image: string;
  dir: string;
  path: string;
  slug: string;
  updatedAt: string;
};

export default defineEventHandler(async () => {
  /**
   * You can't use composables (useFetch etc) outside of the setup function.
   * But you can use $fetch instead. It will be auto-imported.
   *
   * @link https://nuxt.com/docs/api/utils/dollarfetch
   */
  const mountains = await $fetch<Mountains[]>(
    "https://api.nuxtjs.dev/mountains"
  ).catch((error) => {
    throw createError({
      statusCode: error.statusCode,
      statusMessage: error.statusMessage,
    });
  });

  return {
    mountains,
  };
});
