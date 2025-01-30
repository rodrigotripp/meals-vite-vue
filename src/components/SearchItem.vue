<template>
  <div class="flex p-8 justify-center">
    <input
      type="text"
      class="w-full rounded border-2 border-gray-200"
      placeholder="search..."
      v-model="keyword"
      @change="mealStore.searchByMeals(keyword)"
    />
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { useMealStore } from '@/stores/useMealStore'
const mealStore = useMealStore()
const keyword = ref('')
</script>
