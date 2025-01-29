import { defineStore } from 'pinia'
import { createStore } from 'vuex'
import { getCategories, searchByMeals } from '@/services'
import { type Category, type Meals } from '@/types'

export interface State {
  meals: Meals[]
  ingridient: Category[]
}

export interface Store {
  state: State
}

export const usePiniaStore = defineStore('piniaStore', {
  state: (): State => {
    return {
      meals: [],
      ingridient: []
    }
  },
  actions: {
    async searchByMeals(word: string) {
      this.meals = await searchByMeals(word);
    },

    async getCategories() {
      this.ingridient = await getCategories()
    }

  }
})

export const useVuexStore: Store = createStore(
  {
    state: {
      meals: [],
      ingridient: []
    },
    mutations: {
      searchMeals() {

      },
      getCategories() {

      }
    }
  });
