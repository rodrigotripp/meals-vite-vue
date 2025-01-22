<script lang="ts" setup>
import { RouterView } from 'vue-router'
import HeaderItem from './components/HeaderItem.vue'
import FooterItem from './components/FooterItem.vue'
</script>

<template>
  <HeaderItem />
  <RouterView></RouterView>
  <FooterItem />
</template>

<style scoped></style>
