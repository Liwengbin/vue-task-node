<template>
  <div :class="classes" ref="svgArea" :style="areaStyles" @contextmenu.prevent="mouseMenu" @dragover.prevent @drop.prevent="onAddNodeModel">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" :width="width" :height="height" :id="id">
          <g transform="translate(0,0) scale(1,1)">
            <g>
              <slot></slot>
            </g>
          </g>
        </svg>
  </div>
</template>

<script>
const prefixCls = 'task-work-area'
export default {
  name: 'WorkArea',
  data () {
    return {
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
    id: {
      type: [String, Number]
    }
  },
  computed: {
    classes () {
      return [
        `${prefixCls}`
      ]
    },
    areaStyles () {
      let style = {}
      style.width = `${this.width}px`
      style.height = `${this.height}px`
      return style
    }
  },
  methods: {
    mouseMenu: function (event) {
      this.$emit('on-mouse', event, this.id)
    },
    onAddNodeModel: function (event) {
      let node = event.dataTransfer.getData('nodemodel')
      if (node) {
        let nodeObj = JSON.parse(node)
        let ref = this.$refs.svgArea
        nodeObj.positionX = event.clientX - ref.offsetLeft
        nodeObj.positionY = event.clientY - ref.offsetTop
        this.$emit('on-add-nodemodel', event, nodeObj)
      }
    }
  }
}
</script>
