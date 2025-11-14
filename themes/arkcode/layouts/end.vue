<script setup lang="ts">
</script>

<template>
  <div flex="~ justify-between">
    <div class="slidev-layout end [&>h1:first-of-type]:mt-30 [&>h1:first-of-type]:ml-10 [&>h1:first-of-type]:font-500 [&>h1:first-of-type]:text-6xl [&>h1:first-of-type]">
      <slot />
    </div>
    <img pointer-events-none src="../images/logo.png" class="animate-rotate-360 op-5 size-200 fixed right--90 bottom--90">
  </div>
</template>

<style scoped>
@keyframes rotate-in-360 {
  from {
    transform-origin: center;
    transform: rotate3d(0, 0, 30, 0deg);
  }
  to {
    transform-origin: center;
    transform: rotate3d(0, 0, 1, 360deg);
  }
}

.animate-rotate-360 {
  animation: rotate-in-360 linear 300s infinite;
  transform-origin: center;
}
</style>
