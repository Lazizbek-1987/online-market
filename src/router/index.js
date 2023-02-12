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
      name: 'product-card',
      component: () => import('../views/CardProductPage.vue')
    },
    {
      path: '/basket-products',
      name: 'basket-products',
      component: () => import('../views/BasketProductsPage.vue')
    },
    {
      path: '/category',
      name: 'category',
      component: () => import('../views/CategoryPage.vue')
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: () => import('../views/FavoritesPage.vue')
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: () => import('../views/AboutUsPage.vue')
    }
  ]
})

export default router
