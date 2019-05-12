import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/one',
      name: 'one',
      component: () => import('./views/one')
    },
    {
      path: '/two',
      name: 'two',
      component: () => import('./views/two')
    },
    {
      path: '/three',
      name: 'three',
      component: () => import('./views/three')
    },
    {
      path: '/four',
      name: 'four',
      component: () => import('./views/four')
    },
    {
      path: '/five',
      name: 'five',
      component: () => import('./views/five')
    },
    {
      path: '/six',
      name: 'six',
      component: () => import('./views/six')
    }
  ]
})
