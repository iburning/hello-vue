/**
 * @fileoverview: router
 * @author: burning <www.cafeinit.com>
 * @version: 2016-11-06
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './home.vue'
import User from './user.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  // { path: '/user', component: User },
  {
    path: '/user/:user_id',
    component: User,
    children: [
      {
        path: 'post/:post_id',
        component: { template: '<div>post {{ $route.params.id}}</div>' }
      },
      {
        path: 'post/:post_id',
        component: { template: '<div>post {{ $route.params.id}}</div>' }
      },
      {
        path: 'follow',
        component: { template: '<div>user follow</div>' }
      }
    ]
  }
  // { path: '/foo', component: Foo },
  // { path: '/bar', component: Bar }
]

const router = new VueRouter({
  mode: 'history',
  routes // （缩写）相当于 routes: routes
})

export default router
