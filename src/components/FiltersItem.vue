<template>
  <div class="flex justify-around gap-1 px-8 overflow-x-auto">
    <ButtonItem
      v-for="category of categoryStore.categories"
      :key="category.idCategory"
      :value="category.strCategory"
      to="/"
    >
      {{ category.strCategory }}
    </ButtonItem>
  </div>
</template>
<script lang="ts" setup>
import ButtonItem from '@/components/FilterButtonItem.vue'
import { useCategoryStore } from '@/stores/useCategoryStore'
import { onMounted } from 'vue'

const categoryStore = useCategoryStore()

onMounted(() => {
  categoryStore.getCategories()
})
</script>
