import { createRouter, createWebHashHistory } from 'vue-router'
import PageKit from '../views/PageKit.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: PageKit
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
