import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import NextOne from '@/components/nextOne/NextOne'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/nextOne',
      name: 'nextOne',
      component: NextOne
    },
    {
      path: '/',
      redirect: {
        name: 'home'
      }
    }
  ]
})
