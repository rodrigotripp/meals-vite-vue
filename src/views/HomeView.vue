<script setup lang="ts">
import { useCategoryStore } from '@/stores/useCategoryStore'
import { useMealStore } from '@/stores/useMealStore'

import { onMounted, ref } from 'vue'
import ButtonItem from '@/components/ButtonItem.vue'
import MealItem from '@/components/MealItem.vue'

const categoryStore = useCategoryStore()
const mealStore = useMealStore()

onMounted(() => {
  categoryStore.getCategories()
})

const keyword = ref('')
</script>

<template>
  <main class="h-full">
    <div class="flex p-8 justify-center">
      <input
        type="text"
        class="w-full rounded border-2 border-gray-200"
        placeholder="search..."
        v-model="keyword"
        @change="mealStore.searchByMeals(keyword)"
      />
    </div>
    <div class="flex justify-around gap-1">
      <ButtonItem
        v-for="category of categoryStore.categories"
        :key="category.idCategory"
        :value="category.strCategory"
        to="/"
      >
        {{ category.strCategory }}
      </ButtonItem>
    </div>
    <div v-if="mealStore.meals" class="flex p-2 gap-2">
      <MealItem v-for="meal in mealStore.meals" :key="meal.strMeal" :meal="meal" />
    </div>
  </main>
</template>
