<template>
  <div :class="classes" :style="areaStyles" @contextmenu.prevent="mouseMenu">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" :width="width" :height="height" :id="id" @dragover='dragOver($event)'>
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
      style.minWidth = `${this.width}px`
      style.minHeight = `${this.height}px`
      return style
    }
  },
  methods: {
    dragOver: function (event) {
      this.$emit('on-drag-over', event)
    },
    mouseMenu: function (event) {
      this.$emit('on-mouse', event, this.id)
    }
  }
}
</script>
