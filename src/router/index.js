import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'
import Product from '../views/Product'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: Product,
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
