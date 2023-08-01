<script lang="ts" setup>
interface Props {
  error: Record<string, unknown>;
}
const props = defineProps<Props>();

const message = computed(() => String(props.error?.message || ""));
const is404 = computed(
  () => props.error?.statusCode === 404 || message.value?.includes("404")
);

useHead({
  title: computed(() => (is404.value ? "Page Not Found" : "An error occurred")),
});
</script>

<template>
  <div class="min-h-screen-safe flex flex-col justify-center text-center">
    <main class="container">
      <Icon name="logos:nuxt-icon" class="mb-5" size="80" />
      <h1 class="font-display mb-6 text-center text-5xl font-bold text-primary">
        {{ is404 ? "Page Not Found" : "An error occurred" }}
      </h1>
      <p class="mb-12">
        Looks like you've followed a broken link or entered a URL that doesn't
        exist on this site.
      </p>
      <NuxtLink
        to="/"
        class="rounded-lg border border-body px-4 py-2 transition-colors duration-150 hover:bg-body hover:text-white"
      >
        Go back home
      </NuxtLink>
    </main>
  </div>
</template>
