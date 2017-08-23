import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import NextOne from '@/components/nextOne/NextOne'
import MovieItem from '@/components/common/MovieItem'
import Form from '@/components/form/Form'
import Setting from '@/components/setting/Setting'
import BottomBar from '@/components/bottomBar/BottomBar'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/home' },
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
      path: '/bottom',
      name: 'bottomBar',
      component: BottomBar,
      children: [
        {path: '/bottom/one', name: 'form', component: Form},
        {path: '/bottom/two', name: 'nextOne', component: Setting}
      ]
    }
  ]
})
