<script setup lang="ts"></script>
<template>
  <DialogRoot>
    <DialogTrigger
      class="mb-8 rounded-lg bg-primary px-4 py-2 text-white transition-colors duration-150 hover:bg-primary/80"
    >
      <slot name="trigger" />
    </DialogTrigger>
    <DialogPortal>
      <Transition name="fade">
        <DialogOverlay class="fixed inset-0 z-[1000] bg-black/50" />
      </Transition>
      <Transition name="slide-in-out">
        <DialogContent
          class="scroll-touch fixed inset-0 z-[1001] overflow-hidden overflow-y-auto p-4"
        >
          <div
            class="relative mx-auto my-14 max-w-2xl rounded-lg bg-white p-8 text-black shadow-xl"
          >
            <DialogTitle class="mb-4 text-2xl font-bold">
              <slot name="title" />
            </DialogTitle>
            <DialogDescription>
              <slot />
            </DialogDescription>
            <DialogClose
              class="absolute right-4 top-4 appearance-none leading-none transition-colors duration-150 hover:text-primary"
              aria-label="Close"
            >
              <Icon name="bi:x-circle" size="24" />
            </DialogClose>
          </div>
        </DialogContent>
      </Transition>
    </DialogPortal>
  </DialogRoot>
</template>
