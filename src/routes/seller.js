/**
 * @fileoverview: routes seller
 * @author: burning <www.cafeinit.com>
 * @version: 2016-11-06
 */

import List from '../views/order/list.vue'
import Detail from '../views/order/detail.vue'

export default [
  { path: '/seller/orders', component: List },
  { path: '/seller/order/:_id', component: Detail }
]
