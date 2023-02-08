import { createRouter, createWebHistory } from 'vue-router'
import HomePAge from '../views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePAge
    },
    {
      path: '/product-card',
      name: 'about',
      component: () => import('../views/CardProductPage.vue')
    }
  ]
})

export default router
