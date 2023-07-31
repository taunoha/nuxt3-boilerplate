import { Mountains } from "~/types";

export default defineEventHandler(() => {
  /**
   * You can't use composables (useFetch etc) outside of the setup function.
   * But you can use $fetch instead. It will be auto-imported.
   *
   * @link https://nuxt.com/docs/api/utils/dollarfetch
   * @link https://github.com/unjs/ofetch
   */
  return $fetch<Mountains[]>("https://api.nuxtjs.dev/mountains");
});
