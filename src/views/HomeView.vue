<script setup lang="ts">
import PageIndexItem from '@/components/PageIndexItem.vue'
</script>

<template>
  <main>
    <div class="flex p-8 justify-center">
      <input type="text" class="w-full rounded border-2 border-gray-200" placeholder="search..." />
    </div>
  </main>
  <footer>
    <PageIndexItem />
  </footer>
</template>
