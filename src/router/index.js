import Vue from 'vue'
import Router from 'vue-router'
// import Index from '@/components/Index'
import HelloWorld from '@/components/HelloWorld'
import bbq from '@/components/bbq'
import shanchu from '@/components/shanchu'
import pinglun from '@/components/pinglun'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Index',
    //   component: Index
    // }
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/bbq',
      name: 'bbq',
      component: bbq
    },
    {
      path: '/shanchu',
      name: 'shanchu',
      component: shanchu
    },
    {
      path: '/pinglun',
      name: 'pinglun',
      component: pinglun
    }
  ],

})
