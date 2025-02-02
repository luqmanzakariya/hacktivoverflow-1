import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import MyQuestion from './views/MyQuestion'
import Detail from './views/Detail'
import Tag from './views/Tag.vue'


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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/mypost',
      name: 'mypost',
      component: MyQuestion
    },
    {
      path: '/post/:id',
      name: 'detail',
      component: Detail
    },
    {
      path: '/tag/:id',
      name: 'tag',
      component: Tag
    },
    
    
  ]
})
