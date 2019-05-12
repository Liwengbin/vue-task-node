// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import TaskNode from './lib/index'
import store from './lib/store'
import '../dist/css/vnode.css'
/* import '../src/lib/styles/index.less' */
Vue.config.productionTip = false
Vue.use(TaskNode)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>'
})
