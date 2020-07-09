import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/view/index'
import Directive from '@/componetns/directive'
import Mixin from '@/componetns/Mixin'
import Extend from '@/componetns/extend'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
      children:[
        {
          path: '/',
          name: 'directive',
          component: Directive,
        },
        {
          path: '/mixin',
          name: 'mixin',
          component: Mixin,
        },
        {
          path: '/extend',
          name: 'extend',
          component: Extend,
        },
      ]
    },
  ]
})
