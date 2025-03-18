<template>
  <div class="flex gap-1 mx-6 pb-5 overflow-x-auto w-auto">
    <FilterButtonItem
      v-for="category of categoryStore.categories"
      :key="category.idCategory"
      :value="category.strCategory"
      @click.prevent="mealStore.searchMealsByCategory(category.strCategory)"
      to="/"
    >
      {{ category.strCategory }}
    </FilterButtonItem>
  </div>
</template>
<script lang="ts" setup>
import FilterButtonItem from '@/components/FilterButtonItem.vue'
import { useCategoryStore } from '@/stores/useCategoryStore'
import { useMealStore } from '@/stores/useMealStore'
import { onMounted } from 'vue'

const categoryStore = useCategoryStore()
const mealStore = useMealStore()

onMounted(() => {
  categoryStore.getCategories()
})
</script>
