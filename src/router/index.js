import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CatPage from '../views/CatPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/:imageId',
    name: 'CatPage',
    component: CatPage
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
