import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import DemoVuex from '@/views/DemoVuex.vue'
import DemoVuetify from '@/views/DemoVuetify.vue'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/demo-vuex',
      name: 'demo-vuex',
      component: DemoVuex
    },
    {
      path: '/demo-vuetify',
      name: 'demo-vuetify',
      component: DemoVuetify
    }
  ]
})

export default router
