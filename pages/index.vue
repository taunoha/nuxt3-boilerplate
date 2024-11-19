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
      <div class="mb-6 flex justify-center">
        <Icon name="logos:nuxt-icon" size="80" />
      </div>
      <h1 class="mb-6 text-center text-5xl font-bold">Hello, World!</h1>
      <p class="mb-12 text-primary">Can you see me?</p>
      <DialogModal size="xl">
        <template #trigger>Open Dialog</template>
        <template #title>Modal title</template>
        <p v-for="i in 20" :key="i" class="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
          architecto, enim vitae quibusdam culpa facilis assumenda expedita
          aspernatur ut, dolore numquam quidem obcaecati? Dolorem ab ipsa, earum
          voluptate id ullam.
        </p>
        <div
          class="sticky -bottom-8 z-10 -mx-8 -mb-8 flex justify-end rounded-b-lg border-t border-black/5 bg-white/90 px-8 pb-8 pt-8 backdrop-blur-sm"
        >
          <DialogClose
            class="rounded-lg bg-primary px-4 py-2 text-white transition-colors duration-150 hover:bg-primary/80"
          >
            Close
          </DialogClose>
        </div>
      </DialogModal>
      <p class="mx-auto flex max-w-xl flex-wrap justify-center gap-2 text-sm">
        <span v-for="item in posts" :key="item.title">
          {{ item.title }}
        </span>
      </p>
    </main>
  </div>
</template>
