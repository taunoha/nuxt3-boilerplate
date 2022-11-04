<script lang="ts" setup>
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
        <h1 class="font-display mb-2 flex items-center text-5xl">
          <b class="text-primary p-4 pt-2">Hello, World!</b>
        </h1>
        <p>Can you see me?</p>
      </div>
    </main>
  </div>
</template>
