<template>
  <g ref="gss">
    <template v-if="con.length > 0" v-for="(item,index) in con">
      <t-line :key="index" :portData="item" >
      </t-line>
    </template>
      <t-line v-if="path.isShow" :portData="path" >
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
      let pa = this.$store.getters.getPathData
      let isShow = pa.isShow
      if (pa.Mxy) {
        pa = this.computeXY(pa.Mxy, pa.Txy, true)
      }
      pa.isShow = isShow
      pa.dotted = false
      pa.ptype = 'Q'
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
          me.con.push(obj)
        }
      })
    },
    computeXY (vstart, vend, isBing) {
      let area = document.getElementById(this.areaid)
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
            x: vstart.getBoundingClientRect().left - area.getBoundingClientRect().left + 5,
            y: vstart.getBoundingClientRect().top - area.getBoundingClientRect().top + 5
          },
          Txy: {
            x: vend.getBoundingClientRect().left - area.getBoundingClientRect().left + 4,
            y: vend.getBoundingClientRect().top - area.getBoundingClientRect().top + 4
          }
        }
      }
      return obj
    }
  }
}
</script>
