<template>
  <div class="flex p-2 gap-2">
    <MealItem v-for="meal in mealStore.meals" :key="meal.strMeal" :meal="meal" />
  </div>
</template>

<script lang="ts" setup>
import { useMealStore } from '@/stores/useMealStore'
import MealItem from './MealItem.vue'
const mealStore = useMealStore()
</script>
