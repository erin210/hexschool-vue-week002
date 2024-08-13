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
      path: '/week1',
      name: 'week1',
      component: () => import('../views/WeekView1.vue')
    },
    {
      path: '/week2',
      name: 'week2',
      component: () => import('../views/WeekView2.vue')
    }
  ]
})

export default router
