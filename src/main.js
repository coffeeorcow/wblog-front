// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import iView from 'iview'
import 'iview/dist/styles/iview.css'

import iEditor from 'iview-editor'
import 'iview-editor/dist/iview-editor.css'

import axios from 'axios'

import markdownIt from 'markdown-it'

Vue.config.productionTip = false

// login 验证
router.beforeEach((to, from, next) => {
  let currentPath = to.path;
  if (currentPath == '/articles' || currentPath == '/comments'
    || currentPath == '/user' || currentPath == '/password'
    || currentPath == '/publish' || currentPath == '/edit') {
      if (!store.state.isLogin) {
        alert('请先登录！');
        next({path: '/login'});
      }
    }
  next();
});

Vue.use(iView);
Vue.use(iEditor);

Vue.prototype.$axios = axios;

Vue.prototype.$markdownIt = markdownIt;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
