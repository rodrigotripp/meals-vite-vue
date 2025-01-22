import { defineStore } from 'pinia'
import { createStore } from 'vuex'

export interface State {
  meals: string[]
}

export interface Store {
  state: State
}

export const useStore = defineStore('storeId', {
  state: (): State => {
    return {
      meals: ['gato']
    }
  }
})

export const useVuexStore: Store = createStore(
  {
    state: {
      meals: ['perro']
    }
  });
