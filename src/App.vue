<script lang="ts" setup>
import { RouterView } from 'vue-router'
import HeaderItem from './components/HeaderItem.vue'
import FooterItem from './components/FooterItem.vue'
</script>

<template>
  <div class="bg-gray-100 h-100">
    <HeaderItem />
    <RouterView />
    <FooterItem />
  </div>
</template>

<style scoped></style>
