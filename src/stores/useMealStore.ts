import { defineStore } from 'pinia'
import { type Meal } from '@/types'
import { searchByMeals, getMealsByLetter, getFilterByCategory, mealById } from '@/services'

export const useMealStore = defineStore('mealStore', {
  state: () => ({
    meals: [] as Meal[],
  }),
  actions: {
    async searchByMeals(word: string) {
      this.meals = await searchByMeals(word)
    },
    async searchByLetter(letter: string | string[]) {
      this.meals = await getMealsByLetter(letter)
    },
    async searchMealsByCategory(category: string) {
      this.meals = await getFilterByCategory(category)
    },
    async mealById(id: string): Promise<Meal> {
      const meal = await mealById(id)
      return meal
    },
  },
})
