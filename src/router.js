/**
 * @fileoverview: router
 * @author: burning <www.cafeinit.com>
 * @version: 2016-11-06
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './home.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  // { path: '/foo', component: Foo },
  // { path: '/bar', component: Bar }
]

const router = new VueRouter({
  mode: 'history',
  routes // （缩写）相当于 routes: routes
})

export default router
