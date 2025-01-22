<template>
  <div class="about">
    <h1>This is an about page</h1>
    <pre>{{ store.meals }}</pre>
    <pre>{{ meals }}</pre>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from '@/stores'
import { useVuexStore } from '@/stores'
import { computed } from 'vue'
const store = useStore()
const vuexStore = useVuexStore

const meals = computed(() => vuexStore.state.meals)
</script>
