import Vue from 'vue'
import VueRouter from 'vue-router'
<<<<<<< HEAD
import MeuInicio from '../views/MeuInicio.vue'
=======

>>>>>>> a747300a6e676dab5606c0972235a40d55cda3f1
import AboutView from '../views/AboutView.vue'
import SuaSugestao from '../views/SuaSugestao.vue'


Vue.use(VueRouter)

const routes = [
<<<<<<< HEAD
  {
    path: '/',
    name: 'MeuInicio',
    component: MeuInicio
  },
=======
  
>>>>>>> a747300a6e676dab5606c0972235a40d55cda3f1
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
