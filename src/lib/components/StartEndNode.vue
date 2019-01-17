<template>
  <g :transform="'translate('+node.positionX+','+node.positionY+')'" class="pane-cell pane-node">
    <g transform="scale(1,1)" class="pane-scalable">
      <foreignObject width="182" height="30" @click="[selectNode ? selectNode($event,node):selectNodes($event,node)]"
                     @contextmenu.prevent="mouseMenu" :id="node.id">
        <body xmlns="http://www.w3.org/1999/xhtml">
        <div class="pane-node-content has-status task-node" @dragstart='drag($event,node)' draggable="true">
          <span class="icon left" :class="node.icon"></span>
          <span class="name">
                  {{node.title}}
          </span>
          <span class="icon right" :class="state"></span> <!--wait:等待，run执行，finish完成-->
          <slot></slot>
          <task-in-port-list v-if="node.inports && node.inports.length > 0" :inports="node.inports"></task-in-port-list>
          <task-out-port-list v-if="node.outports && node.outports.length > 0" :outports="node.outports"></task-out-port-list>
        </div>
        </body>
      </foreignObject>
    </g>
  </g>
</template>

<script>

import TaskOutPortList from './OutPortList.vue'
import TaskInPortList from './InPortList.vue'

export default {
  components: {
    TaskInPortList,
    TaskOutPortList
  },
  name: 'TaskStartEndNode',
  props: {
    node: {
      icon: {
        type: String,
        default: 'icon-task-jiedianguanli'
      },
      title: {
        type: String,
        default: 'node'
      },
      state: {
        type: String,
        default: 'ready'
      },
      positionX: {
        type: Number,
        default: 0
      },
      positionY: {
        type: Number,
        default: 0
      },
      inports: Array,
      outports: Array
    },
    mousemenu: String,
    selectNode: {
      type: Function,
      default: this.selectNodes
    }
  },
  data () {
    return {
      state: 'icon-task-ready'
    }
  },
  created: function () {
    if (this.node) {
      switch (this.node.state) {
        case 'success':
          this.state = 'icon-task-success'
          break
        case 'running':
          this.state = 'icon-task-running'
          break
        case 'ready':
          this.state = 'icon-task-ready'
          break
        case 'mistake':
          this.state = 'icon-task-mistake'
          break
      }
    }
  },
  mounted: function () {

  },
  beforeUpdate: function () {

  },
  watch: {
    node (newVal) {
      switch (newVal.state) {
        case 'success':
          this.state = 'icon-task-success'
          break
        case 'running':
          this.state = 'icon-task-running'
          break
        case 'ready':
          this.state = 'icon-task-ready'
          break
        case 'mistake':
          this.state = 'icon-task-mistake'
          break
      }
    }
  },
  methods: {
    mouseMenu: function (event) {
      /* 鼠标右击事件 */
      /* console.log("点击了右键",event,this.mousemenu); */
      if (this.mousemenu) {
        this.$setMouseData(this.mousemenu)
        let menulu = document.getElementById(this.mousemenu)
        let menu = menulu.parentNode
        menu.style.setProperty('display', 'block')
        menulu.style.setProperty('top', event.clientY + 'px')
        menulu.style.setProperty('left', event.clientX + 'px')
      }
    },
    drag: function (event, node) {
      /* event.onmouseout = function (ev) {
       this.node.positionX = event.clientX;
        this.node.positionY = event.clientY;
      } */
      console.log(event, node)
    },
    selectNodes: function (event, node) {
      console.log(event, node, '使用this.$getSelectData()取出数据')
      this.$setSelectData(node)
    }
  }
}
</script>

<style>
  .pane-node body, .pane-node foreignObject {
    background-color: transparent;
    overflow: visible;
  }

  /*公共css*/
  .task-node:hover {
    cursor: grab;
    background-color: #ecf5ff;
  }

  body {
    overflow-x: hidden;
    overflow-y: hidden;
    margin: 0px;
  }

  /*私有css*/
  .pane-node-content {
    width: 180px;
    height: 30px;
    background-color: hsla(0, 0%, 100%, .9);
    border: 1px solid #289de9;
    border-radius: 15px;
    font-size: 12px;
    -webkit-transition: background-color .2s;
    transition: background-color .2s;
  }

  .pane-node-content .name {
    float: left;
    width: 120px;
    height: 28px;
    line-height: 28px;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .pane-node-content .icon {
    width: 16px;
    height: 16px;
    padding: 6px;
    margin: 1px;
    border-radius: 100%;
  }

  .pane-node-content .icon-task-success {
    color: #7bff27;
  }

  .pane-node-content .icon-task-running {
    color: #7bff27;
  }

  .pane-node-content .icon-task-ready {
    color: #567eff;
  }

  .pane-node-content .icon-task-mistake {
    color: #ff312a;
  }

  .pane-node-content .right {
    float: right;
  }

  .pane-node-content .left {
    float: left;
  }
</style>
