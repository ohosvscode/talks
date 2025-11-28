<script setup lang="ts">
defineProps({
  backgroundColor: {
    type: String,
    default: '#aaa',
  },
})
</script>

<template>
  <div class="section-card flex justify-center items-center rounded-md p-4">
    <slot />
  </div>
</template>
