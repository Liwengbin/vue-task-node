<template>
  <g :class="classes">
    <path :class="conWrapCls" :d="drawCurvePath(portData.Mxy, portData.Txy)">
    </path>
    <path :class="conCls" :d="lpath">
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
      lpath: 'M0 0 Q 0 0, 0 0 T 0 0'
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
    }
  },
  methods: {
    drawCurvePath (Mxy, Txy) {
      if (Mxy && Txy) {
        this.lpath = Line.drawCurvePath(Mxy, Txy, this.portData.ptype)
      }
      return this.lpath
    }
  }
}
</script>
