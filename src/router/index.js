import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Foo from '@/components/Foo'
import Bar from '@/components/Bar'
import Table from '@/components/Table'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/foo', component: Foo
    }, {
      path: '/bar', component: Bar
    }, {
      path: '/table', component: Table
    }
  ]
})
