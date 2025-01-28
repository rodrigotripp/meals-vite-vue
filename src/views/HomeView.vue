<script setup lang="ts">
import { getCategories } from '@/services'
import { onMounted, ref, onBeforeMount } from 'vue'
import ButtonItem from '@/components/ButtonItem.vue'
import { type Category } from '@/types'
let categories: Category[] = ref([]).value
onBeforeMount(async () => {
  const response = await getCategories().then((res) => res)
  categories = response
})

onMounted(async () => {
  console.log('onMounted')
})
</script>

<template>
  <main>
    <div class="flex p-8 justify-center">
      <input type="text" class="w-full rounded border-2 border-gray-200" placeholder="search..." />
    </div>
    <div class="flex justify-around gap-1 bg-purple-300">
      <ButtonItem
        v-for="category of categories"
        :key="category.idCategory"
        :value="category.strCategory"
      >
        {{ category.strCategory }}
      </ButtonItem>
    </div>
  </main>
</template>
