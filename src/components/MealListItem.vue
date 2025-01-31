<template>
  <div class="flex flex-wrap justify-center p-8 gap-2 mb-16">
    <MealItem v-for="meal in mealStore.meals" :key="meal.strMeal" :meal="meal" />
  </div>
</template>

<script lang="ts" setup>
import { useMealStore } from '@/stores/useMealStore'
import MealItem from './MealItem.vue'
import { onUnmounted } from 'vue'
const mealStore = useMealStore()

onUnmounted(() => mealStore.$reset())
</script>
