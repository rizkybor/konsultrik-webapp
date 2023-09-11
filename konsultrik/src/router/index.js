import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/marketplace',
      name: 'marketplace',
      component: () => import('../views/Marketplace.vue')
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/ProductView.vue')
    },
    {
      path: '/konsultasi',
      name: 'konsultasi',
      component: () => import('../views/Konsultasi.vue')
    }
  ]
})


//  085312711585
export default router
