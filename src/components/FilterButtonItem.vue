<template>
  <RouterLink class="bg-yellow-100 px-1 rounded-md text-slate-600" :to="to">
    {{ props.value }}
  </RouterLink>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router'
const props = defineProps<{
  value: string
  to: string
}>()
</script>
