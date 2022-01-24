import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import Profile from '@/views/Profile.vue'
import Users from '@/views/Users.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/users',
    name: 'Users',
    component: Users,
  },
  {
    path: '/profile/:username',
    name: 'Profile',
    component: Profile,
  },
 
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
