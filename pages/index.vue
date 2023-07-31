<script lang="ts" setup>
import { Mountains } from "types";

const mountains = ref<Mountains[]>([]);

const fetchMontains = async () => {
  const { data, error } = await useFetch("/api/v1/mountains");

  if (error.value) {
    throw createError({ ...error.value, statusMessage: "Mountains Not Found" });
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
  <div class="flex min-h-screen flex-col">
    <main class="flex grow items-center justify-center">
      <div class="text-center">
        <Icon name="logos:nuxt-icon" class="mb-5" size="80"></Icon>
        <h1 class="font-display mb-6 text-center text-5xl">
          <b class="p-4 pt-2 text-primary">Hello, World!</b>
        </h1>
        <p class="mb-6">Can you see me?</p>
        <small class="flex flex-wrap justify-center gap-2">
          <span v-for="item in mountains" :key="item.title">
            {{ item.title }}
          </span>
        </small>
      </div>
    </main>
  </div>
</template>
