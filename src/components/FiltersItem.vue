<template>
  <div class="flex justify-around gap-1">
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
import ButtonItem from '@/components/ButtonItem.vue'
import { useCategoryStore } from '@/stores/useCategoryStore'
import { onMounted } from 'vue'

const categoryStore = useCategoryStore()

onMounted(() => {
  categoryStore.getCategories()
})
</script>
