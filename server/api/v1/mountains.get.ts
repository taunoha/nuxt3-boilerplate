import type { Mountain } from "~/types";

export default defineEventHandler(() => {
  /**
   * You can't use composables (useFetch etc) outside of the setup function.
   * But you can use $fetch instead. It will be auto-imported.
   *
   * @link https://nuxt.com/docs/api/utils/dollarfetch
   * @link https://github.com/unjs/ofetch
   *
   * const response = $fetch<Mountain[]>("https://api.nuxtjs.dev/mountains")
   */

  return [
    {
      title: "Mount Everest",
      description:
        "Mount Everest is Earth's highest mountain above sea level, located in the Mahalangur Himal sub-range of the Himalayas. The China–Nepal border runs across its summit point. Its elevation of 8,848.86 m was most recently established in 2020 by the Nepali and Chinese authorities.",
      height: "8,848 m",
      countries: ["Nepal", "China"],
      continent: "Asia",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Everest_kalapatthar.jpg/640px-Everest_kalapatthar.jpg",
      dir: "everest",
      path: "/everest",
      slug: "everest",
      updatedAt: "2021-03-06T00:00:00.000Z",
    },
    {
      title: "K2",
      description:
        "K2, at 8,611 metres above sea level, is the second highest mountain in the world, after Mount Everest at 8,848 metres. It is located on the China–Pakistan border between Baltistan in the Gilgit-Baltistan region of northern Pakistan, and the Taxkorgan Tajik Autonomous County of Xinjiang, China.",
      height: "8,611 m",
      countries: ["Pakistan", "China"],
      continent: "Asia",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/K2_2006b.jpg/640px-K2_2006b.jpg",
      dir: "k2",
      path: "/k2",
      slug: "k2",
      updatedAt: "2021-03-06T00:00:00.000Z",
    },
    {
      title: "Kangchenjunga",
      description:
        "Kangchenjunga, also spelled Kanchenjunga, is the third highest mountain in the world. It rises with an elevation of 8,586 m in a section of the Himalayas called Kangchenjunga Himal delimited in the west by the Tamur River, in the north by the Lhonak Chu and Jongsang La, and in the east by the Teesta River.",
      height: "8,586 m",
      countries: ["Nepal", "India"],
      continent: "Asia",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Kangchenjunga_from_Tiger_Hill.jpg/640px-Kangchenjunga_from_Tiger_Hill.jpg",
      dir: "kangchenjunga",
      path: "/kangchenjunga",
      slug: "kangchenjunga",
      updatedAt: "2021-03-06T00:00:00.000Z",
    },
  ] as Mountain[];
});
