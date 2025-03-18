import { defineStore } from 'pinia'
import { type Category } from '@/types'
import { getCategories } from '@/services'

export const useCategoryStore = defineStore('categoryStore', {
  state: () => ({
    categories: [] as Category[],
  }),
  actions: {
    async getCategories() {
      this.categories = await getCategories()
    },
  },
})
