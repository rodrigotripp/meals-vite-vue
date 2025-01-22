<script setup lang="ts">
import { fetchCategories } from '@/services'
import { onMounted, ref } from 'vue'

const categories = ref([])

onMounted(async () => {
  const response = await fetchCategories().then((res) => res)
  categories.value = response
})
</script>

<template>
  <main>
    <pre>{{ categories }}</pre>
  </main>
</template>
