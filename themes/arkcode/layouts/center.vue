<script setup lang="ts">
defineProps({
  image: {
    type: String,
    required: false,
  },
})
</script>

<template>
  <div class="slidev-layout center font-sans">
    <div class="animate-pop-in-from-bottom fixed size-full left-0 top-0 [&>h1:first-of-type]:text-6xl" flex="~ items-center justify-center">
      <img v-if="image" :src="image" class="w-40 animate-rotate-360">
      <slot />
    </div>
  </div>
</template>

<style scoped>
@keyframes pop-in-from-bottom {
  0% {
    transform: translate3d(0, 4%, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}

.animate-pop-in-from-bottom {
  animation: pop-in-from-bottom 0.5s ease-out;
  animation-fill-mode: forwards;
}
</style>
