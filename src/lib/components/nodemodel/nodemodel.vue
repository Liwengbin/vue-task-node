<template>
  <div :class="classes" draggable="true" @dragstart='dragStart($event)'>
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
    }
  },
  methods: {
    dragStart: function (event) {
      event.dataTransfer.setData('nodemodel', JSON.stringify(this.node))
    }
  }
}
</script>
