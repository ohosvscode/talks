<template>
  <div class="slidev-layout center font-sans">
    <div class="animate-pop-in-from-bottom fixed size-full left-0 top-0 [&>h1:first-of-type]:text-6xl" flex="~ items-center justify-center">
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
