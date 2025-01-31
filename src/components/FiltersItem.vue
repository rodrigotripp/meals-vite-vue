<template>
  <div class="flex gap-1 mx-6 pb-5 overflow-x-auto w-auto">
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
