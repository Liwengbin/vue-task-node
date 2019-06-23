<template>
  <div :style="nodeStyles" :class="classes" draggable="true" @dragstart='dragStart($event)'>
    <slot></slot>
  </div>
</template>
<script>
const prefixCls = 'task-node-model'
export default {
  name: 'NodeModel',
  props: {
    node: {
      id: [String, Number],
      name: {
        type: [String, Number],
        default: '节点'
      }
    },
    width: {
      type: [String, Number],
      default: 140
    },
    height: {
      type: [String, Number],
      default: 26
    }
  },
  data () {
    return {
      store: null
    }
  },
  computed: {
    classes () {
      return [
        `${prefixCls}`
      ]
    },
    nodeStyles () {
      let style = {}
      style.width = `${this.width}px`
      style.height = `${this.height}px`
      return style
    }
  },
  methods: {
    dragStart: function (event) {
      event.dataTransfer.setData('nodemodel', JSON.stringify(this.node))
    }
  }
}
</script>
