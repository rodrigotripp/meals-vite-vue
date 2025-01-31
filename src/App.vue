<script lang="ts" setup>
import { RouterView } from 'vue-router'
import HeaderItem from './components/HeaderItem.vue'
import FooterItem from './components/FooterItem.vue'
</script>

<template>
  <div class="bg-gray-100 h-full overflow-auto">
    <HeaderItem />
    <RouterView class="pb-8" />
    <FooterItem />
  </div>
</template>

<style scoped></style>
