import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
//import firebase from 'firebase'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import( '../views/Login.vue')
  },
  {
    path: '/select-game',
    name: 'SelectGame',
    component: () => import( '../views/SelectGame.vue')
  },
  {
    path: '/start-new-game',
    name: 'StartNewGame',
    component: () => import( '../views/StartNewGame.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
