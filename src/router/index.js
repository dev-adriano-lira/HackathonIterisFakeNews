import Vue from 'vue'
import VueRouter from 'vue-router'
import MeuInicio from '../views/MeuInicio.vue'
import AboutView from '../views/AboutView.vue'
import SuaSugestao from '../views/SuaSugestao.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MeuInicio',
    component: MeuInicio
  },
  {
    path: '/aboutview',
    name: 'AboutView',
    component: AboutView
  },
  {
    path: '/suasugestao',
    name: 'SuaSugestao',
    component: SuaSugestao
  }
]

const router = new VueRouter({
  routes
})

export default router
