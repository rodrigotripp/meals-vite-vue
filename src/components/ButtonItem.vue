<template>
  <component class="bg-blue-400 rounded-md" :is="type" :to="to">
    {{ value }}
  </component>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
const props = defineProps<{
  value: string
  to?: string
}>()

const type = computed(() => {
  if (props.to) {
    return 'RouterLink'
  }
  return 'button'
})
</script>
