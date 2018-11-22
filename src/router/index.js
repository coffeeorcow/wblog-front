import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Detail from '@/components/Detail'
import Articles from '@/components/Articles'
import Comments from '@/components/Comments'
import Password from '@/components/Password'
import UserInfo from '@/components/UserInfo'
import About from '@/components/About'
import Reg from '@/components/Reg'
import Publish from '@/components/Publish'
import Login from '@/components/Login'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      // 首页
      path: '/',
      component: Home
    },
    {
      // 详情页
      path: '/detail',
      component: Detail
    },
		{
      // 登录页
			path: '/login',
			component: Login
		},
    {
      // 注册页
      path: '/reg',
      component: Reg
    },
    {
      // 发表文章
      path: '/publish',
      component: Publish,
      beforeEnter: (to, from , next) => {
        
      }
    },
    {
      // 我的文章
      path: '/articles',
      component: Articles
    },
    {
      // 我的评论
      path: '/comments',
      component: Comments
    },
    {
      // 用户信息修改
      path: '/user',
      component: UserInfo
    },
    {
      // 密码修改
      path: '/password',
      component: Password
    },
    {
      // About 页面
      path: '/about',
      component: About
    }
  ]
})
