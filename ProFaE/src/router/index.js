import Vue from 'vue'
import VueRouter from 'vue-router'
import PrSecundaria from '../views/PrSecundariaView.vue'
import PrPrimaria from '../views/PrPrimariaView.vue'
import HmHome from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/hm',
    name: 'HmHome',
    component: HmHome
  },
  {
    path: '/form/1',
    name: 'PrPrimaria',
    component: PrPrimaria
  },
  {
    path: '/form/2',
    name: 'PrSecundaria',
    component: PrSecundaria
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
