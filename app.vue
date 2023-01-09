<script lang="ts" setup>
const { data, error } = await useFetch("/api/v1/mountains");
const mountains = computed(() => data?.value?.mountains || []);
useHead({
  title: "Hello, World!",
  titleTemplate: "%s - Nuxt3 Boilerplate",
});
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <main class="flex grow items-center justify-center">
      <div class="text-center">
        <Icon name="logos:nuxt-icon" class="mb-5" size="80"></Icon>
        <h1 class="font-display mb-6 text-center text-5xl">
          <b class="text-primary p-4 pt-2">Hello, World!</b>
        </h1>
        <p class="mb-6">Can you see me?</p>
        <small class="flex flex-wrap justify-center gap-2">
          <span v-for="item in mountains" :key="item.title">
            {{ item.title }}
          </span>
          <div v-if="error">{{ error }}</div>
        </small>
      </div>
    </main>
  </div>
</template>
