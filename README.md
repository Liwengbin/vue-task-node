# vue-task-node 
>在线Demo [https://codesandbox.io/s/9413yop49r](https://codesandbox.io/s/9413yop49r)

> TaskNode Plugin! vue-task-node is a Vue based task node mapping plug-in.

>❤MyHome:🏡<br>
github:https://github.com/Liwengbin<br>
思否:https://segmentfault.com/u/vidanao<br>
掘金：https://juejin.im/user/5bd967706fb9a0227e0a80b5<br>
npm:https://www.npmjs.com/~liwenbing<br>

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 一、安装

```js
npm install vue-task-node -S

```

## 二、引入
```js
import Vue from 'vue'
import VueTaskNode from 'vue-task-node'
Vue.use(VueTaskNode)
```
## 三、教程

>①工作区
```html
<task-work-area style="width: 900px;height: 600px">
    <!--需要绘制的节点-->
</task-work-area>
```

参数 | 说明	| 类型 | 是否必填
---|---|---|---
id | 工作区ID | String/Number | 必填
style | 高度和宽度必修设置 | Number | 必填


>②Node节点

组件
```html
<task-start-end-node :selectNode="selectNode" mousemenu="menu_id" :node="node"></task-start-end-node>
```
需要的数据
```js
node:{
  id: 'node1',
  icon: 'icon-task-chucun',
  title: '数据',
  state: 'success',
  positionX: 400,
  positionY: 100,
  inports: [
      id: 'node1_in1',
      isConnected: true //true->有数据输入；false->无数据输入
  ],
  outports: [
    {
      id: 'node1_out1',
      content: 'xml'
    }
  ]
}
```

参数 | 说明	| 类型 | 是否必填
---|---|---|---
selectNode | 选中节点回调函数 | function(event,node) | 否
mousemenu | 鼠标右击弹出菜单ID | <task-mouse-menu>的ID | 必填
node | 节点数据 | Json | 必填


>③节点间的链接线

组件
```html
<task-path :start="{x:150,y:300}" :end="{x:300,y:400}"></task-path>

<task-curve-path areaID='area' :connection="connection"></task-curve-path>
```
需要的数据
```js
法一的数据：
start:{x:150,y:300} //起点坐标
end:{x:300,y:400} //终点坐标
法二的数据：
connection: [
  {
    start: 'node1_out1',//输出节点的id
    end: 'node2_in1'//输入节点的id
  },
  {
    start: 'node2_out2',
    end: 'node4_in1'
  },
  {
    start: 'node4_out1',
    end: 'node3_in1'
  },
  {
    start: 'node4_out2',
    end: 'node5_in1'
  },
  {
    start: 'node4_out2',
    end: 'data_in1'
  },
  {
    start: 'data_out1',
    end: 'node6_in1'
  }
]
```

参数 | 说明	| 类型 | 是否必填
---|---|---|---
areaID | 工作区ID | <task-work-area>的ID | 必填
connection | 关系数据 | Array | 必填


参数 | 说明	| 类型 | 是否必填
---|---|---|---
start | 起点坐标 | Number | 必填
end | 终点坐标 | Number | 必填

>④鼠标右击节点菜单
```html
      <task-mouse-menu id="menu_id">
        <task-mouse-item :selectClick="updateNode" icon="icon-task-fuzhi" :mouse="{id:'xg',title:'修改'}"></task-mouse-item>
      </task-mouse-menu>
```
数据格式
```js
mouse:{id:'xg',title:'修改'}
```

参数 | 说明	| 类型 | 是否必填
---|---|---|---
id | 右键菜单ID | String/Number | 必填


参数 | 说明	| 类型 | 是否必填
---|---|---|---
icon | 被选项图标 | css 类 | 否
selectClick | 点击备选项回调函数 | function(event,select) | 必填
mouse | 数据 | Json | 必填

>⑤输入/输出节点`List`
```html
<task-in-port-list :inports="[{id:'data_in1',isConnected:true}]">
    <task-in-port pid="data_in5"></task-in-port>
</task-in-port-list>
<task-out-port-list :outports="[{id:'data_out1',content:'表格'}]">
    <task-out-port pid="data_out5"></task-out-port>
</task-out-port-list>
```

## 四、Demo
```html
<template>
  <div id="app">
    <div class="hello" style="text-align: center">
      <task-work-area id="area" style="width: 900px;height: 800px;display: inline-block;">

        <task-curve-path areaID='area' :connection="connection"></task-curve-path>
        <!--<task-path :start="{x:150,y:300}" :end="{x:300,y:400}"></task-path>-->

        <template v-for="node in nodes">
          <task-start-end-node :selectNode="selectNode" mousemenu="menu_id" :node="node"></task-start-end-node>
        </template>


        <task-start-end-node mousemenu="menu_id" :node="{id:'node6',icon:'icon-task-get',title:'数据分组',state:'mistake',positionX:400,positionY:500}">
          <task-in-port-list :inports="[{id:'data_in1',isConnected:true}]">
            <task-in-port pid="data_in5"></task-in-port>
          </task-in-port-list>
          <task-out-port-list :outports="[{id:'data_out1',content:'表格'}]">
            <task-out-port pid="data_out5"></task-out-port>
          </task-out-port-list>
        </task-start-end-node>

      </task-work-area>

      <task-mouse-menu id="menu_id">
        <task-mouse-item :selectClick="updateNode" icon="icon-task-fuzhi"
                         :mouse="{id:'xg',title:'修改'}"></task-mouse-item>
        <task-mouse-item :selectClick="findNode" icon="icon-task-yulan" :mouse="{id:'ck',title:'查看'}"></task-mouse-item>
        <task-mouse-item :selectClick="removeNode" icon="icon-task-shanchu"
                         :mouse="{id:'sc',title:'删除'}"></task-mouse-item>
        <task-mouse-item :selectClick="copyNode" icon="icon-task-jishufuwu"
                         :mouse="{id:'fz',title:'复制'}"></task-mouse-item>
        <task-mouse-item :selectClick="bugNode" icon="icon-task-sx-bug"
                         :mouse="{id:'bug',title:'Bug'}"></task-mouse-item>
      </task-mouse-menu>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'App',
    data() {
      return {
        nodes: [{
          id: 'node1', icon: 'icon-task-chucun', title: '数据', state: 'success', positionX: 400, positionY: 100,
          inports: [],
          outports: [{id: 'node1_out1',content: 'xml'}]
        },{
          id: 'node2', icon: 'icon-task-liujisuan', title: '数据格式化', state: 'success', positionX: 400, positionY: 200,
          inports: [{id: 'node2_in1', isConnected: true}],
          outports: [{id: 'node2_out1', content: '表格'}, {id: 'node2_out2', content: 'Json'}, {
            id: 'node2_out3',
            content: 'xml'
          }]
        },{
          id: 'node3', icon: 'icon-task-tubiao-zhexiantu', title: '折线图', state: 'ready', positionX: 200, positionY: 500,
          inports: [{id: 'node3_in1', isConnected: true}, {id: 'node3_in2', isConnected: false}],
          outports: []
        },{
          id: 'node4', icon: 'icon-task-shenjing1', title: '天气预测', state: 'running', positionX: 400, positionY: 300,
          inports: [{id: 'node4_in1', isConnected: true}],
          outports: [{id: 'node4_out1', content: '表格'}, {id: 'node4_out2', content: 'Json'}, {
            id: 'node4_out3',
            content: 'xml'
          }]
        },{
          id: 'node5', icon: 'icon-task-ranqijiance', title: '雷达图', state: 'success', positionX: 600, positionY: 500,
          inports: [{id: 'node5_in1', isConnected: true}],
          outports: []
        },{
          id: 'node6', icon: 'icon-task-tubiao-zhuzhuangtu', title: '条形图', state: 'ready', positionX: 400, positionY: 600,
          inports: [{id: 'node6_in1', isConnected: true}],
          outports: []
        }],
        connection: [{start: 'node1_out1', end: 'node2_in1'},{start: 'node2_out2', end: 'node4_in1'},{start: 'node4_out1', end: 'node3_in1'},{start: 'node4_out2', end: 'node5_in1'},{start: 'node4_out2', end: 'data_in1'},{start: 'data_out1', end: 'node6_in1'}]
      }
    },
    methods: {
      updateNode: function (event, select) {
        console.log(event, select);
      },
      findNode: function (event, select) {
        console.log(event, select);
      },
      removeNode: function (event, select) {
        console.log(event, select);
      },
      copyNode: function (event, select) {
        console.log(event, select);
      },
      bugNode: function (event, select) {
        console.log(event, select);
      },
      selectNode(event, node) {
        console.log(event, node);
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    padding: 50px;
    background-color: #cccccc;
  }
</style>


<!--
.icon {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

[class^="icon-task"], [class*=" icon-task"] {
  font-family:"iconfont" !important;
  /* 以下内容参照第三方图标库本身的规则 */
  font-size: 18px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
-->
```
![demo1](https://github.com/Liwengbin/vue-task-node/blob/master/src/assets/demo1.png)
![demo](https://github.com/Liwengbin/vue-task-node/blob/master/src/assets/demo.png)


## 五、版本

版本 | 说明	| 更新时间 |是否支持拖拽
---|---|---|---
1.0.0 | 开端,根据数据绘制任务节点 | 2019年1月16日 | 否
1.0.1 | 修改代码规范Eslin | 2019年1月17日 | 否
1.0.2 | 调试入口文件 | 2019年1月17日 | 否
1.0.3 | npm下载包错误修改 | 2019年1月17日 | 否
1.0.x | 优化配置文件 | 2019年1月x日 | 否

## 六、未来新版本
>1.1.0 版本需求<br>

①工作区内节点拖拽<br>
②优化传参和公共属性

