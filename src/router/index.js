import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Show from '@/components/Show'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/show/:id',
      name: 'Show',
      component: Show
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
