<template>
  <div class="about">
    <h1>This is an about page</h1>
    <pre>{{ vuexState }}</pre>
  </div>
</template>

<script lang="ts" setup>
import { useVuexStore } from '@/stores'
import { computed } from 'vue'
const vuexStore = useVuexStore
const vuexState = computed(() => vuexStore.state)
</script>
