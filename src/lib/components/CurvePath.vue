<template>
  <g>
    <template v-if="con.length > 0" v-for="(item,index) in con">
      <task-path :key="index" :start="item.start" :end="item.end">
      </task-path>
    </template>
  </g>
</template>
<script>

import TaskPath from './Path.vue'

export default {
  components: {TaskPath},
  name: 'TaskCurvePath',
  props: ['connection', 'areaID'],
  data () {
    return {
      con: []
    }
  },
  watch: {},
  created: function () {

  },
  mounted: function () {
    this.connection.forEach((o) => {
      let vstart = document.getElementById(o.start)
      let vend = document.getElementById(o.end)
      let area = document.getElementById(this.areaID)
      if (vend && vstart) {
        this.con.push({
          start: {
            x: vstart.getBoundingClientRect().left - area.getBoundingClientRect().left + 5,
            y: vstart.getBoundingClientRect().top - area.getBoundingClientRect().top
          },
          end: {
            x: vend.getBoundingClientRect().left - area.getBoundingClientRect().left + 4,
            y: vend.getBoundingClientRect().top - area.getBoundingClientRect().top
          }
        })
      }
    })
  }
}
</script>

<style>

</style>
