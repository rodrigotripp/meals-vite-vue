<script setup lang="ts">
import { usePiniaStore } from '@/stores/index'
import { onMounted, ref } from 'vue'
import ButtonItem from '@/components/ButtonItem.vue'

const store = usePiniaStore()

onMounted(() => {
  store.getCategories()
})

const keyword = ref('')

function searchByMeal() {
  console.log('hola')
  store.searchByMeals(keyword.value)
}
</script>

<template>
  <main class="h-full">
    <div class="flex p-8 justify-center">
      <input
        type="text"
        class="w-full rounded border-2 border-gray-200"
        placeholder="search..."
        v-model="keyword"
        @change="searchByMeal"
      />
    </div>
    <div class="flex justify-around gap-1">
      <ButtonItem
        v-for="category of store.categories"
        :key="category.idCategory"
        :value="category.strCategory"
        to="/"
      >
        {{ category.strCategory }}
      </ButtonItem>
    </div>
    <pre>{{ store.meals }}</pre>
  </main>
</template>
