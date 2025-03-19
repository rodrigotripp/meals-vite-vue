import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MealsbyIngri from '@/views/MealsbyIngri.vue'
import AlphabetMeals from '@/views/AlphabetMeals.vue'
import SearchByMeals from '@/views/SearchByMeals.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',

      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/letter/:letter',
      name: 'byLetter',
      component: () => import('../components/MealListItem.vue'),
      props: (route) => {
        return { letter: route.params.letter }
      },
    },
    {
      path: '/meal/:id',
      name: 'mealView',
      component: () => import('@/views/MealView.vue'),
      props: (route) => {
        return { id: route.params.id }
      },
    },
    {
      path: '/Search/:name?',
      name: 'Search',
      component: SearchByMeals,
    },
    {
      path: '/MealsbyIngri/:ingridient?',
      name: 'MealsbyIngri',
      component: MealsbyIngri,
    },
    {
      path: '/AlphabetMeals/:letter?',
      name: 'AlphabetMeals',
      component: AlphabetMeals,
    },
  ],
})

export default router
