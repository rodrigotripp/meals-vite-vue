<template>
  <div>MealList</div>
  <pre>{{ meals }}</pre>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
// import { getMealsByLetter } from '@/services'
import { type Meals } from '@/types'
const props = defineProps<{
  letter: string
}>()
let meals: Meals[] = ref([]).value
console.log(props)
onMounted(async () => {
  // const response = await getMealsByLetter().then((res) => res)
  // meals = response
})
</script>
