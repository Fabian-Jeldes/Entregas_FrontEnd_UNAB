import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import UILibraries from '../views/UILibraries.vue'
import SSRInfo from '../views/SSRInfo.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ui-libraries',
    name: 'UILibraries',
    component: UILibraries
  },
  {
    path: '/ssr',
    name: 'SSR',
    component: SSRInfo
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
