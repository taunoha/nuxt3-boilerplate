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
      <DialogModal>
        <template #trigger>Open Dialog</template>
        <template #title>Modal title</template>
        <p v-for="i in 2" :key="i" class="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
          architecto, enim vitae quibusdam culpa facilis assumenda expedita
          aspernatur ut, dolore numquam quidem obcaecati? Dolorem ab ipsa, earum
          voluptate id ullam.
        </p>
      </DialogModal>
      <p class="mx-auto flex max-w-xl flex-wrap justify-center gap-2 text-sm">
        <span v-for="item in posts" :key="item.title">
          {{ item.title }}
        </span>
      </p>
    </main>
  </div>
</template>
