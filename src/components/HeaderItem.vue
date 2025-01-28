<template>
  <header class="bg-white shadow-md h-24">
    <RouterLink :to="{ name: 'home' }"> Home </RouterLink>
    <div>
      <RouterLink :to="{ name: 'home' }"> Search for meals </RouterLink>
      <RouterLink :to="{ name: 'home' }"> Meals ordered alphabetically </RouterLink>
      <RouterLink :to="{ name: 'home' }"> Meals by Ingredients </RouterLink>
    </div>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
