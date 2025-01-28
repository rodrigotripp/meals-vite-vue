<template>
  <div class="flex gap-1 justify-center">
    <RouterLink
      v-for="letter of letters"
      :key="letter"
      :to="{ name: 'byLetter', params: { letter } }"
      >{{ letter }}
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
const letters = 'ABCDEFGHIJMNOPQRSTUVWXYZ'.split('')
</script>
