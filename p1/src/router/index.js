import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import NextOne from '@/components/nextOne/NextOne'
import MovieItem from '@/components/common/MovieItem'
import One from '@/components/home/One'
import Two from '@/components/home/Two'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/nextOne/:id',
      name: 'nextOne',
      component: NextOne,
      children: [
        {path: '1', component: One},
        {path: '2', component: Two}
      ]
    },
    {
      path: '/',
      redirect: {
        name: 'home'
      }
    }
  ]
})
