import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Enrollment from '../views/Enrollment.vue'
import Admin from '../views/Admin.vue'
import Notif from '../views/Notif.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Enrollment',
    name: 'Enrollment',
    component: Enrollment
  },
  {
    path: '/Admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/Notif',
    name: 'Notif',
    component: Notif
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
