<script lang="ts" setup>
const route = useRoute();
setResponseStatus(404);
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <main class="flex grow items-center justify-center">
      <div class="text-center">
        <Icon name="logos:nuxt-icon" class="mb-5" size="80"></Icon>
        <h1 class="font-display mb-6 text-center text-5xl">
          404 Page Not Found
        </h1>
        <p>
          <small>
            The requested URL
            <strong>{{ route.path }}</strong>
            was not found on this server.
          </small>
        </p>
        <p class="pt-8">
          <NuxtLink to="/" class="rounded-lg border px-4 py-2">
            Go back home
          </NuxtLink>
        </p>
      </div>
    </main>
  </div>
</template>
