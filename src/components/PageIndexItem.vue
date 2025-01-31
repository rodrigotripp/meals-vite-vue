<template>
  <div class="flex gap-1 justify-center p-6">
    <RouterLink
      v-for="letter of letters"
      :key="letter"
      :to="{ name: 'byLetter', params: { letter } }"
      @click.prevent="setLetter(letter)"
      >{{ letter }}
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useMealStore } from '@/stores/useMealStore'

const mealStore = useMealStore()

const letters = 'ABCDEFGHIJMNOPQRSTUVWXYZ'.split('')
const setLetter = (letter: string) => mealStore.searchByLetter(letter)
</script>
