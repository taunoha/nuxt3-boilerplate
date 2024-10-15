<script lang="ts" setup>
interface Props {
  error: Record<string, unknown>;
}
const props = defineProps<Props>();

const message = computed(() =>
  String(props.error?.statusMessage || "An error occurred")
);
const statusCode = computed(() => props.error?.statusCode || 500);
const is404 = computed(
  () => statusCode.value === 404 || message.value?.includes("404")
);
const genericMessage = computed(() =>
  is404.value
    ? "Looks like you've followed a broken link or entered a URL that doesn't exist on this site."
    : "The server was unable to complete your request. Please try again later."
);

useHead({
  title: message.value,
});
</script>

<template>
  <div class="flex min-h-dvh flex-col justify-center text-center">
    <main class="container">
      <div class="mb-5 text-2xl font-semibold opacity-70">{{ statusCode }}</div>
      <h1 class="mb-6 text-center text-4xl font-bold">
        {{ is404 ? message : "An error occurred" }}
      </h1>
      <p class="mb-12">
        {{ genericMessage }}
      </p>
      <NuxtLink
        to="/"
        class="border-body hover:bg-body mb-8 inline-block rounded-lg border px-4 py-2 transition-colors duration-150 hover:bg-white hover:text-black"
      >
        Go back home
      </NuxtLink>
      <LocalDevOnly>
        {{ props.error }}
      </LocalDevOnly>
    </main>
  </div>
</template>
