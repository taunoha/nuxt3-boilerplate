<script lang="ts" setup>
import type { Post } from "~/types";

const posts = ref<Post[]>([]);

const { data, error } = await useFetch("/api/v1/posts");

if (error.value) {
  throw createError({ ...error.value, statusMessage: "Posts Not Found" });
}

if (data.value) {
  posts.value = data.value.slice(0, 3);
}

useHead({
  title: "Posts",
});
</script>

<template>
  <div class="flex min-h-dvh flex-col justify-center text-center">
    <main class="container">
      <Icon name="logos:nuxt-icon" class="mb-5" size="80" />
      <h1 class="mb-6 text-center text-5xl font-bold">Hello, World!</h1>
      <p class="mb-12 text-primary">Can you see me?</p>
      <p class="mx-auto flex max-w-xl flex-wrap justify-center gap-2 text-sm">
        <span v-for="item in posts" :key="item.title">
          {{ item.title }}
        </span>
      </p>
    </main>
  </div>
</template>
