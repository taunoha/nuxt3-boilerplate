<script lang="ts" setup>
import type { Mountain } from "~/types";

const mountains = ref<Mountain[]>([]);

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
  console.log(
    `[${process.client ? "client" : "server"}]`,
    "watcheffect",
    mountains.value
  );
});

watch(mountains, (value) => {
  console.log(`[${process.client ? "client" : "server"}]`, "watch", value);
});

onMounted(() => {
  console.log(
    `[${process.client ? "client" : "server"}]`,
    "mounted",
    mountains.value
  );
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
