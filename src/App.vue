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
