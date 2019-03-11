<template>
  <div id="app">
    <i class="task-icon-1"></i>
    <div class="hello" style="text-align: center">
      <task-work-area width=1000 height=500 id="areaID" v-on:on-drag-over="dragOver" v-on:on-mouse="mouseMenu" ref="area">
        <task-curve-path areaid="areaID" :paths="paths" ref="curve"></task-curve-path>
        <template v-for="node in nodes">
          <task-common-node :key="node.id" :node="node" v-on:on-select="selectlMethod" v-on:on-drag-start="dragStart" v-on:on-drag-end="dragEnd" :updateTem="updateCompleted" v-on:on-mouse="mouseNodeMenu"></task-common-node>
        </template>
        <task-initial-node :node="initialData" backgroundColor="#ff5722" v-on:on-select="selectlMethod" v-on:on-drag-start="dragStart" v-on:on-drag-end="dragEnd" :updateTem="updateCompleted" v-on:on-mouse="mouseNodeMenu"></task-initial-node>
      </task-work-area>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      startNode: {},
      initialData: {
        id: 'node4',
        name: '节点4',
        positionX: 300,
        positionY: 60,
        icon: 'task-icon-41',
        inPorts: [],
        outPorts: [{
          id: 'node4_5'
        }]
      },
      nodes: [{
        id: 'node1',
        name: '节点1',
        positionX: 115,
        positionY: 180,
        state: 'success',
        inPorts: [{
          id: 'node1_1',
          isConnected: true
        }],
        outPorts: [{
          id: 'node1_4'
        }]
      }, {
        id: 'node2',
        name: '节点2',
        positionX: 20,
        positionY: 300,
        state: 'mistake',
        inPorts: [{
          id: 'node2_1',
          isConnected: true
        }, {
          id: 'node2_3',
          isConnected: false
        }],
        outPorts: [{
          id: 'node2_4'
        }, {
          id: 'node2_5'
        }]
      }, {
        id: 'node3',
        name: '节点3',
        positionX: 340,
        positionY: 315,
        state: 'running',
        inPorts: [{
          id: 'node3_1',
          isConnected: true
        }, {
          id: 'node3_3',
          isConnected: false
        }],
        outPorts: [{
          id: 'node3_4'
        }]
      }, {
        id: 'node5',
        name: '节点5',
        positionX: 420,
        positionY: 420,
        icon: 'task-icon-6',
        inPorts: [{
          id: 'node5_1',
          isConnected: true
        }],
        outPorts: []
      }],
      paths: [{
        dotted: true,
        ptype: 'Q',
        startPort: 'node4_5',
        endPort: 'node1_1'
      }, {
        dotted: true,
        ptype: 'L',
        startPort: 'node1_4',
        endPort: 'node2_1'
      }, {
        dotted: false,
        ptype: 'Q',
        startPort: 'node1_4',
        endPort: 'node3_1'
      }, {
        dotted: false,
        ptype: 'L',
        startPort: 'node3_4',
        endPort: 'node5_1'
      }]
    }
  },
  methods: {
    selectlMethod: function (event, data, node) {
      console.log(event, data, node)
    },
    dragStart: function (event, node) {
      let nodeData = event.dataTransfer.getData('nodedata')
      console.log('开始移动', event.clientX, event.clientY, node, JSON.parse(nodeData))
      this.startNode = {id: node.id, positionX: event.clientX, positionY: event.clientY}
    },
    dragEnd: function (event, node) {
      let me = this
      console.log('移动结束', event.clientX, event.clientY, node)
      this.nodes.forEach(function (item) {
        if (item.id === node.id) {
          item.positionX = node.positionX + (event.clientX - me.startNode.positionX)
          item.positionY = node.positionY + (event.clientY - me.startNode.positionY)
        }
      })
      if (node.id === this.initialData.id) {
        this.initialData.positionX = node.positionX + (event.clientX - me.startNode.positionX)
        this.initialData.positionY = node.positionY + (event.clientY - me.startNode.positionY)
      }
    },
    dragOver: function (event) {
      console.log('移动中...', event.clientX, event.clientY)
    },
    updateCompleted: function () {
      console.log('updateCompleted!!')
      // 重新加载路径
      this.$refs.curve.vReload()
    },
    mouseMenu: function (event, id) {
      console.log(event, id)
    },
    mouseNodeMenu: function (event, node) {
      console.log(event, node)
    }
  }
}
</script>

<style lang="less">
  // @import "lib/styles/index.less";
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
