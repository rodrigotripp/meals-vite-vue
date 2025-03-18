<template>
  <div v-if="meal">
    <h2>{{ meal.strMeal }}</h2>
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
