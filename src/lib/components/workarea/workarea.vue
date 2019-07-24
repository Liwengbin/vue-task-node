<template>
  <div :class="classes" ref="svgArea" :style="areaStyles" @contextmenu.prevent="mouseMenu" @dragover.prevent @drop.prevent="onAddNodeModel">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" :width="svgWidth" :height="svgHeight" :id="id">
          <g :transform="'translate(0,0) scale('+ini.scaling.ZoomX+','+ini.scaling.ZoomY+')'">
            <g>
              <slot></slot>
            </g>
          </g>
        </svg>
  </div>
</template>

<script>
import mixinsTool from '../../mixins/tool'
const prefixCls = 'task-work-area'
export default {
  name: 'WorkArea',
  mixins: [ mixinsTool ],
  data () {
    return {
      svgWidth: 1000,
      svgHeight: 500
    }
  },
  props: {
    ini: {
      lineType: {
        type: [String],
        default: 'Q'
      },
      isDotted: {
        type: [Boolean],
        default: false
      },
      scaling: {
        type: [Object],
        default: {ZoomX: 1, ZoomY: 1}
      }
    },
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
  watch: {
    ini: {
      handler (newIni, oldIni) {
        this.$store.dispatch('setViConfig', newIni)
      },
      deep: true
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
      if (this.isCssInUnit(this.width) >= 0) {
        style.width = this.width
      } else {
        style.width = `${this.width}px`
      }
      if (this.isCssInUnit(this.height) >= 0) {
        style.height = this.height
      } else {
        style.height = `${this.height}px`
      }
      return style
    }
  },
  mounted: function () {
    let me = this
    this.setSvgHW(me)
    window.onresize = function () {
      me.setSvgHW(me)
    }
  },
  methods: {
    setSvgHW: function (me) {
      let width = this.transferCss(this.width)
      let height = this.transferCss(this.height)
      if (me.getBrowserHW().width < width) {
        me.svgWidth = width
      } else {
        me.svgWidth = me.getBrowserHW().width
      }
      if (me.getBrowserHW().height < height) {
        me.svgHeight = height
      } else {
        me.svgHeight = me.getBrowserHW().height
      }
    },
    mouseMenu: function (event) {
      this.$emit('on-mouse', event, this.id)
    },
    onAddNodeModel: function (event) {
      let node = event.dataTransfer.getData('nodemodel')
      let scalin = this.$store.getters.getViConfig.scaling
      if (node) {
        let nodeObj = JSON.parse(node)
        let ref = this.$refs.svgArea
        nodeObj.positionX = ((event.clientX - this.getContainersLeft(ref)) / scalin.ZoomX).toFixed(1)
        nodeObj.positionY = ((event.clientY - this.getContainersTop(ref)) / scalin.ZoomY).toFixed(1)
        this.$emit('on-add-nodemodel', event, nodeObj)
      }
    }
  }
}
</script>
