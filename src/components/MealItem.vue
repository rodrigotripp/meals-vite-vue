<template>
  <div class="max-w-[200px] rounded-lg overflow-auto shadow-lg bg-[#FFF9F0] max-h-96">
    <img class="w-full h-48 object-cover" :src="props.meal.strMealThumb" :alt="meal.strMeal" />
    <div class="p-6">
      <span>{{ props.meal.strMeal }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { type Meal } from '@/types'
const props = defineProps<{ meal: Meal }>()
</script>
