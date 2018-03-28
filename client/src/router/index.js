import Vue from 'vue'
import Router from 'vue-router'
import Article from '@/components/Article'
import Home from '@/components/Home'
import Update from '@/components/Update'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: ':id',
          name: 'Article',
          component: Article,
          props: true
        }
      ]
    },
    {
      path: '/article/:id',
      name: 'Update',
      component: Update
    }
    // {
    //   path: '/article/:id',
    //   name: 'Update',
    //   component: Update,
    // }
  ]
})
