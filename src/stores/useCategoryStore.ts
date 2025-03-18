import { defineStore } from 'pinia'
import { type Category } from '@/types'
import { getCategories, getFilterByCategory } from '@/services'

export const useCategoryStore = defineStore('categoryStore', {
  state: () => ({
    categories: [] as Category[],
  }),
  actions: {
    async getCategories() {
      this.categories = await getCategories()
    },
    async getFilterByCategory(category: string) {
      const a = await getFilterByCategory(category)
      console.log(a)
      // this.categories = await getFilterByCategory(category)
    }
  },
})
