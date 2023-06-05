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
      path: '/try',
      name: 'try',
      component: () => import('../views/TryView.vue')
    },
    {
      path: '/success',
      name: 'susccess',
      component: () => import('../views/SuccessView.vue')
    },
    {
      path: '/deploy',
      name: 'deploy',
      component: () => import('../views/DeployView.vue')
    },
  ]
})

export default router
