<script lang="ts" setup>
const slots = useSlots();

const container = () => {
  const slot = slots.default ? slots.default() : null;
  const config = useRuntimeConfig().public;

  if (import.meta.dev && config?.environment === "local" && slot) {
    return h(
      "div",
      {
        class:
          "font-mono text-black text-[10px] p-4 border bg-white shadow-sm border-body/50 rounded-md my-4 mx-2 overflow-hidden overflow-x-auto text-left max-w-screen",
      },
      [
        h(
          "span",
          { class: "block text-[8px] uppercase mb-2 text-body/50" },
          "debug"
        ),
        h("pre", slot),
      ]
    );
  }

  return null;
};
</script>

<template>
  <ClientOnly>
    <component :is="container" />
  </ClientOnly>
</template>
