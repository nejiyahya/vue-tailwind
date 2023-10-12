import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/views/Index.vue'

export default createRouter({
  mode: 'history',
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Index,
    }
  ],
})
