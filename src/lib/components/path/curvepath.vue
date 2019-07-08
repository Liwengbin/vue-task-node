<template>
  <g ref="gss">
    <template v-if="con.length > 0" v-for="(item,index) in con">
      <t-line :key="index" :portData="item" v-on:on-mouse="mouseFn" v-on:on-mouse-over="mouseOverFn" v-on:on-mouse-out="mouseOutFn">
      </t-line>
    </template>
      <t-line v-if="path.isShow" :portData="path">
      </t-line>
  </g>
</template>
<script>
import TLine from './tline.vue'

export default {
  components: {TLine},
  name: 'CurvePath',
  props: {
    paths: {
      type: Array
    },
    areaid: [String, Number]
  },
  data () {
    return {
      con: []
    }
  },
  watch: {
    paths (newData, oldData) {
      this.vReload()
    }
  },
  computed: {
    path: function () {
      let pa = this.$store.getters.getViPathingData
      let isShow = pa.isShow
      if (pa.Mxy) {
        pa = this.computeXY(pa.Mxy, pa.Txy, true)
      }
      pa.isShow = isShow
      pa.dotted = this.$store.getters.getViConfig.isDotted
      pa.ptype = this.$store.getters.getViConfig.lineType
      return pa
    }
  },
  mounted: function () {
    this.vReload()
  },
  methods: {
    vReload () {
      let me = this
      this.con = []
      this.paths.forEach((o) => {
        let vstart = document.getElementById(o.startPort)
        let vend = document.getElementById(o.endPort)
        if (vend && vstart) {
          let obj = me.computeXY(vstart, vend, false)
          if (o.dotted) {
            obj.dotted = o.dotted
          }
          if (o.ptype) {
            obj.ptype = o.ptype
          }
          obj.startPort = o.startPort
          obj.endPort = o.endPort
          me.con.push(obj)
        }
      })
    },
    computeXY (vstart, vend, isBing) {
      let area = document.getElementById(this.areaid)
      let scaling = this.$store.getters.getViConfig.scaling
      let obj = {}
      if (isBing) {
        obj = {
          Mxy: {
            x: vstart.x - area.getBoundingClientRect().left,
            y: vstart.y - area.getBoundingClientRect().top
          },
          Txy: {
            x: vend.x - area.getBoundingClientRect().left,
            y: vend.y - area.getBoundingClientRect().top
          }
        }
      } else {
        obj = {
          Mxy: {
            x: vstart.getBoundingClientRect().left - area.getBoundingClientRect().left + (5 * scaling.ZoomX),
            y: vstart.getBoundingClientRect().top - area.getBoundingClientRect().top + (5 * scaling.ZoomY)
          },
          Txy: {
            x: vend.getBoundingClientRect().left - area.getBoundingClientRect().left + (4 * scaling.ZoomX),
            y: vend.getBoundingClientRect().top - area.getBoundingClientRect().top + 0
          }
        }
      }
      return obj
    },
    mouseFn (event, portData) {
      this.$emit('on-mouse', event, portData)
    },
    mouseOverFn (event, portData) {
      this.$emit('on-mouse-over', event, portData)
    },
    mouseOutFn (event, portData) {
      this.$emit('on-mouse-out', event, portData)
    }
  }
}
</script>
