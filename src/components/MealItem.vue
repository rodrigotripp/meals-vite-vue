<template>
  <div class="rounded-lg">
    <img :src="props.meal.strMealThumb" :alt="meal.strMeal" />
    <span>{{ props.meal.strMeal }}</span>
  </div>
</template>

<script lang="ts" setup>
import { type Meal } from '@/types'

const props = defineProps<{
  meal: Meal
}>()
</script>
