<script setup lang="ts">
import FiltersItem from '@/components/FiltersItem.vue'
import MealListItem from '@/components/MealListItem.vue'
import SearchItem from '@/components/SearchItem.vue'
</script>

<template>
  <main class="h-full">
    <SearchItem />
    <FiltersItem />
    <MealListItem />
  </main>
</template>
