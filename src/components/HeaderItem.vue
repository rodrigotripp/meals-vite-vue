<template>
  <header class="bg-slate-300 shadow-sm h-16 flex justify-between items-stretch text-slate-600">
    <RouterLink
      class="inline-flex px-5 h-full hover:bg-purple-100 items-center"
      :to="{ name: 'home' }"
    >
      Home
    </RouterLink>
    <div>
      <RouterLink
        :to="{ name: 'Search' }"
        class="inline-flex px-2 h-full hover:bg-purple-100 items-center"
      >
        Search for meals
      </RouterLink>
      <RouterLink
        :to="{ name: 'MealsbyIngri' }"
        class="inline-flex px-2 h-full hover:bg-purple-100 items-center"
      >
        Meals ordered alphabetically
      </RouterLink>
      <RouterLink
        :to="{ name: 'AlphabetMeals' }"
        class="inline-flex px-2 h-full hover:bg-purple-100 items-center"
      >
        Meals by Ingredients
      </RouterLink>
    </div>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
