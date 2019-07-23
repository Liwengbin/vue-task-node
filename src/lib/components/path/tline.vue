<template>
  <g :class="classes">
    <path :class="conWrapCls" ref="wrap" :d="lpath">
    </path>
    <path :class="conCls" ref="con" :d="lpath" @contextmenu.prevent="mouseFn">
    </path>
  </g>
</template>
<script>
import Line from '../../utils/line'
const prefixCls = 'task-tline'
export default {
  name: 'TLine',
  data () {
    return {
      lpath: 'M0 0 Q 0 0, 0 0 T 0 0',
      isDraw: false
    }
  },
  props: {
    portData: {
      ptype: {
        type: [String, Number],
        default: 'Q'
      },
      dotted: {
        type: [String, Boolean],
        default: false
      },
      Mxy: {
        x: [String, Number],
        y: [String, Number]
      },
      Txy: {
        x: [String, Number],
        y: [String, Number]
      },
      startPort: {
        type: [String, Number]
      },
      endPort: {
        type: [String, Number]
      }
    }
  },
  computed: {
    classes () {
      return [
        `${prefixCls}`
      ]
    },
    conCls () {
      return [
        `${prefixCls}-con`
      ]
    },
    conWrapCls () {
      let me = this
      return [
        `${prefixCls}-con-wrap`,
        me.portData.dotted ? `${prefixCls}-dotted` : ``
      ]
    },
    conWrapHoverCls () {
      return [
        `${prefixCls}-hover`
      ]
    }
  },
  beforeUpdate: function () {
    if (!this.isDraw) {
      this.drawCurvePath()
    }
    this.isDraw = false
  },
  mounted: function () {
    this.drawCurvePath()
    this.isDraw = true
    let me = this
    // let nameSpace = 'http://www.w3.org/2000/svg'
    let _this = this.$refs.con
    _this.addEventListener('mouseover', function () {
      let wr = me.$refs.wrap
      wr.classList.add(me.conWrapHoverCls)
      me.$emit('on-mouse-over', wr, me.portData)
    })
    _this.addEventListener('mouseout', function () {
      let wr = me.$refs.wrap
      wr.classList.remove(me.conWrapHoverCls)
      me.$emit('on-mouse-out', wr, me.portData)
    })
  },
  methods: {
    drawCurvePath () {
      if (this.portData.Mxy && this.portData.Txy) {
        this.lpath = Line.drawCurvePath(this.portData.Mxy, this.portData.Txy, this.portData.ptype, this.$store.getters.getViConfig.scaling)
      }
      return this.lpath
    },
    mouseFn (event) {
      event.stopPropagation()
      this.$emit('on-mouse', event, this.portData)
    }
  }
}
</script>
