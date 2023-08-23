<script lang="ts" setup>
import { Mountains } from "~/types";

const mountains = ref<Mountains[]>([]);

const fetchMontains = async () => {
  const { data, error } = await useFetch("/api/v1/mountains");

  if (error.value) {
    throw createError({
      ...error.value,
      statusMessage: "Mountains Not Found",
    });
  }

  if (data.value) {
    mountains.value = data.value;
  }
};

watchEffect(() => {
  console.log("watcheffect", mountains.value);
});

watch(mountains, (value) => {
  console.log("watch", value);
});

onMounted(() => {
  console.log("mounted", mountains.value);
});

useHead({
  title: "Mountains",
});

await fetchMontains();
</script>

<template>
  <div class="min-h-screen-safe flex flex-col justify-center text-center">
    <main class="container">
      <Icon name="logos:nuxt-icon" class="mb-5" size="80" />
      <h1 class="font-display mb-6 text-center text-5xl font-bold">
        Hello, World!
      </h1>
      <p class="mb-12">Can you see me?</p>
      <p class="mx-auto flex max-w-xl flex-wrap justify-center gap-2">
        <span v-for="item in mountains" :key="item.title">
          {{ item.title }}
        </span>
      </p>
    </main>
  </div>
</template>
