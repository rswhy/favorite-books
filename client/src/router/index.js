import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomePage.vue'
import FavoriteBooks from '../views/FavoriteBooks.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/favorite-book',
      name: 'favorite',
      component: FavoriteBooks
    },
  ]
})

export default router
