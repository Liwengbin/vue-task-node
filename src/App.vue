<template>
  <div id="app">
    <div style="position: relative;height: 30px"></div>
    <div style="width: 140px">
      <task-model-tree style="padding-left: 0px;" :nodes="modelnodes"></task-model-tree>
    </div>
    <div class="hello" style="text-align: center">
      <div class="node-model cell-left">
        <ul>
          <li style="border-bottom: 2px solid aliceblue;" v-for="nodeM in nodeModels" :key="nodeM.id">
            <task-node-model :node="nodeM">
              <span class="task-node-model-label">{{nodeM.name}}</span>
            </task-node-model>
          </li>
          <li>
            <select class="demo-line" v-model="ini_config.lineType">
              <option value='Q'>曲线</option>
              <option value='L'>折线</option>
              <option value='ML'>直线</option>
            </select>
          </li>
          <li>
            <select class="demo-line" v-model="ini_config.isDotted">
              <option :value=true>虚线</option>
              <option :value=false>实线</option>
            </select>
          </li>
          <li>
            <button class="demo-btn" @click="zoomIn">放大</button>
            <button class="demo-btn" @click="zoomOut">缩小</button>
          </li>
        </ul>
      </div>
      <div class="cell-right">
        <task-work-area width=1000 height=600 :id="work_id" :ini="ini_config" v-on:on-add-nodemodel="onAddNodeModel" v-on:on-mouse="mouseMenu" ref="area">
          <task-curve-path :areaid="work_id" :paths="paths" ref="curve" v-on:on-mouse="mouseFn" v-on:on-mouse-over="mouseOverFn" v-on:on-mouse-out="mouseOutFn"></task-curve-path>
          <template v-for="node in nodes">
            <task-common-node :key="node.id" :node="node" v-on:on-add-path="addPath" v-on:on-select="selectlMethod" v-on:on-drag-start="dragStart" v-on:on-drag-ging="dragGing" v-on:on-drag-end="dragEnd" :updateTem="updateCompleted" v-on:on-mouse="mouseNodeMenu"></task-common-node>
          </template>
          <task-initial-node :node="initialData" backgroundColor="#ff5722" v-on:on-add-path="addPath" v-on:on-select="selectlMethod" v-on:on-drag-start="dragStart" v-on:on-drag-ging="dragGing" v-on:on-drag-end="dragEnd" :updateTem="updateCompleted" v-on:on-mouse="mouseNodeMenu"></task-initial-node>
        </task-work-area>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      modelnodes: [{
        id: 1,
        name: '数据',
        children: [{
          id: 2,
          name: 'node1',
          icon: 'task-icon-41',
          children: []
        }, {
          id: 3,
          name: 'node2',
          icon: 'task-icon-41',
          children: []
        }]
      }, {
        id: 3,
        name: 'node3',
        icon: 'task-icon-43',
        children: []
      }],
      dtl: 10,
      work_id: 'work_id',
      ini_config: {
        lineType: 'Q',
        isDotted: false,
        scaling: {
          ZoomX: 1,
          ZoomY: 1
        }
      },
      startNode: {},
      nodeModels: [{
        id: '12',
        name: 'SQL'}, {
        id: '13',
        name: 'WorkData'}, {
        id: '14',
        name: 'TableToTV'}, {
        id: '15',
        name: '增加系列'}],
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
      }, {
        id: 'node6',
        name: '节点6',
        positionX: 720,
        positionY: 220,
        icon: 'task-icon-6',
        inPorts: [{
          id: 'node6_1',
          isConnected: false
        }],
        outPorts: [{
          id: 'node6_2'
        }, {
          id: 'node6_3'
        }]
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
        ptype: 'ML',
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
    zoomIn (event) {
      this.ini_config.scaling.ZoomX = this.ini_config.scaling.ZoomX + 0.1
      this.ini_config.scaling.ZoomY = this.ini_config.scaling.ZoomY + 0.1
    },
    zoomOut (event) {
      this.ini_config.scaling.ZoomX = this.ini_config.scaling.ZoomX - 0.1
      this.ini_config.scaling.ZoomY = this.ini_config.scaling.ZoomY - 0.1
    },
    onAddNodeModel (event, node) {
      console.log('添加节点', event.clientX, event.clientY, node)
      let newNode = {}
      newNode = node
      newNode.id = 'node' + (this.dtl++)
      newNode.positionX = node.positionX - 90 // -15 -90 定位到节点的终点
      newNode.positionY = node.positionY - 15
      newNode.outPorts = [{
        id: newNode.id + '_' + Math.floor(Math.random() * 10)
      }]
      newNode.inPorts = []
      this.nodes.push(newNode)
    },
    mouseFn (event, portData) {
      console.log('mouseFn', 'on-mouse', '鼠标右击路径事件', event, portData)
    },
    mouseOverFn (event, portData) {
      console.log('mouseFn', 'on-mouse-over', '鼠标划入路径事件', event, portData)
    },
    mouseOutFn (event, portData) {
      console.log('mouseFn', 'on-mouse-out', '鼠标划出路径事件', event, portData)
    },
    selectlMethod: function (event, data, node) {
      console.log('selectlMethod', 'on-select', '节点左键点击事件', event, data, node)
    },
    dragStart: function (event, node) {
      let nodeData = event.dataTransfer.getData('nodedata')
      console.log('节点开始移动', event.clientX, event.clientY, node, JSON.parse(nodeData))
      this.startNode = {id: node.id, positionX: event.clientX, positionY: event.clientY}
    },
    dragEnd: function (event, node) {
      console.log('节点移动结束', event.clientX, event.clientY, node)
      let nodeXY = {}
      nodeXY.x = event.clientX
      nodeXY.y = event.clientY
      let me = this
      this.nodes.forEach(function (item) {
        if (item.id === node.id) {
          item.positionX = node.positionX + (nodeXY.x - me.startNode.positionX)
          item.positionY = node.positionY + (nodeXY.y - me.startNode.positionY)
        }
      })
      if (node.id === this.initialData.id) {
        this.initialData.positionX = node.positionX + (nodeXY.x - me.startNode.positionX)
        this.initialData.positionY = node.positionY + (nodeXY.y - me.startNode.positionY)
      }
    },
    addPath: function (event, startData, endData) {
      let me = this
      console.log('添加路径', event, startData, endData)
      this.nodes.forEach(function (item) {
        item.inPorts.forEach(function (ins) {
          if (ins.id === endData) {
            ins.isConnected = true
          }
        })
      })
      setTimeout(function () {
        me.paths.push({
          dotted: me.ini_config.isDotted,
          ptype: me.ini_config.lineType,
          startPort: startData,
          endPort: endData
        })
      }, 200)
    },
    dragGing: function (event) {
      console.log('节点移动中...', event.clientX, event.clientY)
    },
    updateCompleted: function () {
      console.log('updateCompleted!!')
      // 重新加载路径
      this.$refs.curve.vReload()
    },
    mouseMenu: function (event, id) {
      console.log('mouseMenu', 'on-mouse', '工作区右击事件', event, id)
    },
    mouseNodeMenu: function (event, node) {
      console.log('mouseNodeMenu', 'on-mouse', '节点右击事件', event, node)
    }
  }
}
</script>

<style lang="less">
  .node-model{
    background-color: #eee;
    width: 140px;
    height: 500px;
  }
  .cell-left{
    float: left;
  }
  .cell-fight{
    float: left;
  }
  .demo-line{
    width: 140px;
    height: 26px;
    border: none;
  }
  .demo-btn{
    width: 48%;
    background-color: #fff;
    border: 1px solid #eee;
    font-size: 14px;
    line-height: 26px;
    cursor: pointer;
  }
  // @import "lib/styles/index.less";
  /*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*padding: 50px;*/
  /*background-color: #cccccc;*/
  /*}*/
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
>工作经历

工作地点:`云南·昆明`
工作时间:`2018年5月 - 至今`
-->
