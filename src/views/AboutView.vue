<template>
  <div class="about">
    <h1>This is an about page</h1>
    <pre>{{ store }}</pre>
    <pre>{{ vuexState }}</pre>
  </div>
</template>

<script lang="ts" setup>
import { usePiniaStore, useVuexStore } from '@/stores'
import { computed } from 'vue'
const store = usePiniaStore()
const vuexStore = useVuexStore
const vuexState = computed(() => vuexStore.state)
</script>
