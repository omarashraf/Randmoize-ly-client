import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import List from './components/List.vue'
import Draw from './components/Draw.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/draw',
      name: 'draw',
      component: Draw
    }
  ]
})