<template>
  <g ref="gss">
    <template v-if="con.length > 0" v-for="(item,index) in con">
      <t-line :key="index" :portData="item" >
      </t-line>
    </template>
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
        let area = document.getElementById(me.areaid)
        if (vend && vstart) {
          let obj = {
            Mxy: {
              x: vstart.getBoundingClientRect().left - area.getBoundingClientRect().left + 5,
              y: vstart.getBoundingClientRect().top - area.getBoundingClientRect().top + 5
            },
            Txy: {
              x: vend.getBoundingClientRect().left - area.getBoundingClientRect().left + 4,
              y: vend.getBoundingClientRect().top - area.getBoundingClientRect().top + 4
            }
          }
          if (o.dotted) {
            obj.dotted = o.dotted
          }
          if (o.ptype) {
            obj.ptype = o.ptype
          }
          me.con.push(obj)
        }
      })
    }
  }
}
</script>
