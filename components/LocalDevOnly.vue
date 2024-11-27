<script lang="ts" setup></script>
<template>
  <DevOnly>
    <div
      class="max-w-screen border-body/50 mx-2 my-4 overflow-hidden overflow-x-auto rounded-md border bg-white p-4 text-left font-mono text-[10px] text-black shadow-sm"
    >
      <span class="text-body/50 mb-2 block text-[8px] uppercase">debug</span>
      <pre><slot /></pre>
    </div>
  </DevOnly>
</template>
