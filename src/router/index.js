import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Articles from '@/components/Articles'
import Comments from '@/components/Comments'
import Password from '@/components/Password'
import UserInfo from '@/components/UserInfo'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/articles',
          component: Articles
        },
        {
          path: '/comments',
          component: Comments
        },
        {
          path: '/user',
          component: UserInfo
        },
        {
          path: '/password',
          component: Password
        },
        {
          path: '/about',
          component: About
        }
      ]
    }
  ]
})
