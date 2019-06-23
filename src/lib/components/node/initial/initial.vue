<template>
  <node :node="node" width=30 height=30 v-on:on-select="selectNodeMethod" v-on:on-drag-ging="dragGing" v-on:on-drag-start="dragStart" v-on:on-drag-end="dragEnd" v-on:updateTem="updateTemp" v-on:on-mouse="mouseMenu">
    <div :class="classes" :style="'background-color: '+ backgroundColor">
      <span :class="iconCls +' '+ [node.icon ? node.icon : 'task-icon-53']"></span>
      <div v-if="isEmpty(node.inPorts) && node.inPorts.length > 0" :class="wrapInCls">
        <div style="width: 45%">
          <in-port :pid="node.inPorts[0].id" :isConnected = node.inPorts[0].isConnected></in-port>
        </div>
      </div>
      <div v-if="isEmpty(node.outPorts) && node.outPorts.length > 0" :class="wrapOutCls">
        <div style="width: 45%">
          <out-port :pid="node.outPorts[0].id"></out-port>
        </div>
      </div>
    </div>
  </node>
</template>
<script>
import Node from '../node.vue'
import InPort from '../../port/inport.vue'
import OutPort from '../../port/outport.vue'
import mixinsNode from '../../../mixins/node'
import mixinsTool from '../../../mixins/tool'
const prefixCls = 'task-initial-node'
export default {
  components: {
    OutPort,
    InPort,
    Node},
  name: 'InitialNode',
  mixins: [ mixinsNode, mixinsTool ],
  data () {
    return {
    }
  },
  props: {
    backgroundColor: [String],
    node: {
      id: [String, Number],
      name: {
        type: [String, Number],
        default: '节点'
      },
      positionX: {
        type: [String, Number],
        default: 0
      },
      positionY: {
        type: [String, Number],
        default: 0
      },
      icon: [String, Number],
      inPorts: {
        type: Array,
        default: [],
        validator: function (value) {
          if (value && value.length > 1) {
            return false
          }
          return true
        }
      },
      outPorts: {
        type: Array,
        default: [],
        validator: function (value) {
          if (value && value.length > 1) {
            return false
          }
          return true
        }
      }
    }
  },
  computed: {
    classes () {
      return [
        `${prefixCls}`,
        `${prefixCls}-in`
      ]
    },
    wrapInCls () {
      return [
        `${prefixCls}-in-wrap`
      ]
    },
    wrapOutCls () {
      return [
        `${prefixCls}-out-wrap`
      ]
    },
    nameCls () {
      return [
        `${prefixCls}-name`
      ]
    },
    iconCls () {
      return [
        `${prefixCls}-icon`
      ]
    }
  }
}
</script>
