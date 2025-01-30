import { createStore } from 'vuex'
import { type Category, type Meal } from '@/types'

export interface State {
  meals: Meal[]
  categories: Category[]
}

export interface Store {
  state: State
}


export const useVuexStore: Store = createStore(
  {
    state: {
      meals: [],
      categories: []
    },
    mutations: {
      searchMeals() {
        console.log('searchMeals')
      },
      getCategories() {
        console.log('getCategories')
      }
    }
  });
