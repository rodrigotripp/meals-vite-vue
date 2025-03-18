<template>
  <div class="max-w-[200px] rounded-lg overflow-auto shadow-lg bg-[#FFF9F0] max-h-96">
    <RouterLink :to="{ name: 'mealView', params: { id: idMeal } }">
      <img class="w-full h-48 object-cover" :src="props.meal.strMealThumb" :alt="meal.strMeal" />
    </RouterLink>
    <div class="p-6">
      <span>{{ props.meal.strMeal }}</span>
      <br />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import { type Meal } from '@/types'
const props = defineProps<{ meal: Meal }>()
const { idMeal } = props.meal
</script>
