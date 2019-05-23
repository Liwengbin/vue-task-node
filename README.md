# vue-task-node

>在线Demo <br>
1.0.x 版本 [https://codesandbox.io/s/9413yop49r](https://codesandbox.io/s/9413yop49r)<br>
1.1.x 版本 [https://codesandbox.io/s/2wv588orlr](https://codesandbox.io/s/2wv588orlr)<br>
最新版本Demo [https://codesandbox.io/s/5vvpyj792x](https://codesandbox.io/s/5vvpyj792x)<br>

>vue-task-node 是一个基于Vue的任务节点图绘制插件（vue-task-node is a Vue based task node mapping plug-in）

>✉：liwenbingmsc@qq.com

## 一、安装
```js
npm install vue-task-node -S
```
## 二、引入
```js
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import {TaskNode, TaskNodeStore} from 'vue-task-node'
import 'vue-task-node/dist/css/vnode.css'
Vue.use(TaskNode)
Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    TaskNodeStore
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>'
})
```
## 三、教程

> http://vidanao.com/vnode //次教程是1.1.x版本的教程，最新版本的教程预计2019-5-26日出

## 四、版本
   
   版本 | 说明	| 更新时间 |是否支持拖拽 | 是否支持节点连线
   ---|---|---|---|---
   1.0.0 | 开端,根据数据绘制任务节点 | 2019年1月16日 | 否 | 否
   1.0.1 | 修改代码规范Eslin | 2019年1月17日 | 否 | 否
   1.0.2 | 调试入口文件 | 2019年1月17日 | 否 | 否
   1.0.3 | npm下载包错误修改 | 2019年1月17日 | 否 | 否
   1.0.4 | 添加鼠标右击后返回右击的node数据 | 2019年1月18日 | 否 | 否
   1.0.x | 优化配置文件 | 2019年1月x日 | 否 | 否
   1.1.0 | 代码结构调整，组件重新封装，样式使用less写 | 2019年2月28日 | 是 | 否
   1.1.1 | 解决dist文件无法上传问题 | 2019年2月28日 | 是 | 否
   1.1.2 | 解决dist文件无法上传问题 | 2019年2月28日 | 是 | 否
   1.1.3 | 解决index.js找不到组件问题 | 2019年2月28日 | 是 | 否
   1.1.4 | 解决index.js找不到组件问题 | 2019年2月28日 | 是 | 否
   1.1.5 | 调整工作区样式问题 | 2019年3月1日 | 是 | 否
   1.1.6 | 调整节点的事件传递 | 2019年3月1日 | 是 | 否
   1.2.0 | 新增节点连线 | 2019年5月12日 | 是 | 是
   1.2.1 | 新增路径鼠标事件 | 2019年5月23日 | 是 | 是
  
