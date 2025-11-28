<script setup lang="ts">
import type { PropType } from 'vue'

defineProps({
  name: {
    type: String,
    default: '',
  },
  tags: {
    type: Array as PropType<[string, string][]>,
    default: () => [],
  },
  avatar: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="slidev-layout introduction flex justify-between gap-20" p="x-30 y-30">
    <div flex="~ col justify-center">
      <h1 class="text-5xl!">
        {{ name }}
      </h1>
      <div class="tags flex gap-2 op-70">
        <div v-for="tag in tags" :key="tag[0]" class="flex items-center gap-0.5">
          <div :class="tag[0]" />
          <span>{{ tag[1] }}</span>
        </div>
      </div>
      <div class="description">
        <slot />
      </div>
    </div>
    <div v-if="avatar" class="flex items-center">
      <img :src="avatar" class="min-w-20 min-h-20 max-w-60 max-h-60 w-auto h-auto rounded-full">
    </div>
  </div>
</template>

<style>
.description > p {
  line-height: 1.5rem;
}
</style>
