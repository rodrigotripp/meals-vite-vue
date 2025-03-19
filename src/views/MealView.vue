<template>
  <div v-if="meal" class="rounded-lg shadow-lg bg-[#FFF9F0] m-3 p-3">
    <h2 class="text-[#E67E22] text-lg my-6">{{ meal.strMeal }}</h2>
    <div class="flex flex-row justify-start gap-3">
      <img :src="meal.strMealThumb" :alt="meal.strMeal" class="w-[30%] h-max" />
      <ul class="text-[#78461b] self-center">
        <li>Area: {{ meal.strArea }}</li>
        <li>Category: {{ meal.strCategory }}</li>
        <li class="text-justify ">Instructions: {{ meal.strInstructions }}</li>
        <!-- <li v-for=""></li> -->
        <!-- <pre>{{ { ...meal } }}</pre> -->
      </ul>

    </div>
  </div>
  <div v-else>Loading meal...</div>
</template>

<script lang="ts" setup>
import { useMealStore } from '@/stores/useMealStore'
import type { Meal } from '@/types'
import { onBeforeMount, ref } from 'vue'

const mealStore = useMealStore()

const props = defineProps<{
  id: string
}>()

const meal = ref<Meal | null>(null)
onBeforeMount(async () => {
  meal.value = await mealStore.mealById(props.id)
})
</script>
