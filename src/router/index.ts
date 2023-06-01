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
      path: '/deploy',
      name: 'deploy',
      component: () => import('../views/DeployView.vue')
    },
    {
      path: '/deployed',
      name: 'deployed',
      component: () => import('../views/DeployedView.vue')
    }
  ]
})

export default router
