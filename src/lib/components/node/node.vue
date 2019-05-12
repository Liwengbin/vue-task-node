<template>
  <g :transform="'translate('+node.positionX+','+node.positionY+')'" :class="classes">
    <g transform="scale(1,1)" class="pane-scalable">
      <foreignObject :width="width" :height="height">
        <body xmlns="http://www.w3.org/1999/xhtml">
            <div @click=selectNodeMethod($event,node,$refs.node) ref="node" draggable="true" @drag='dragGing($event)' @dragstart='dragStart($event)' @dragend="dragEnd($event,node)" @contextmenu="mouseMenu">
              <slot></slot>
            </div>
        </body>
      </foreignObject>
    </g>
  </g>
</template>
<script>
const prefixCls = 'task-node'
export default {
  name: 'Node',
  data () {
    return {
      store: null
    }
  },
  props: {
    width: {
      type: [String, Number],
      default: 0
    },
    height: {
      type: [String, Number],
      default: 0
    },
    node: {
      id: [String, Number],
      positionX: {
        type: [String, Number],
        default: 0
      },
      positionY: {
        type: [String, Number],
        default: 0
      }
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
      event.dataTransfer.setData('nodedata', JSON.stringify(this.node))
      this.$emit('on-drag-start', event, this.node)
    },
    dragGing: function (event) {
      this.$emit('on-drag-ging', event)
    },
    dragEnd: function (event, node) {
      this.$emit('on-drag-end', event, node)
    },
    mouseMenu: function (event) {
      event.stopPropagation()
      this.$emit('on-mouse', event, this.node)
    },
    selectNodeMethod: function (event, node, ref) {
      this.$emit('on-select', event, node, ref)
    }
  },
  updated: function () {
    this.$emit('updateTem', 'VDom加载完成！')
  }
}
</script>
