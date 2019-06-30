<template>
  <div :class="classes" :id="pid" @drag.stop='dragPortGing($event)' @dragstart.stop='dragPortStrat($event)' @dragend.stop="dragPortEnd($event)" draggable="true">
    <span :class="magnetCls"></span>
  </div>
</template>
<script>
const prefixCls = 'task-port'
export default {
  name: 'OutPort',
  data () {
    return {
      Mxy: null
    }
  },
  props: {
    pid: [Number, String],
    content: {
      type: [String, Number],
      default: '输出'
    }
  },
  computed: {
    classes () {
      return [
        `${prefixCls}`,
        `${prefixCls}-out`
      ]
    },
    magnetCls () {
      return [
        `${prefixCls}-magnet`
      ]
    }
  },
  methods: {
    dragPortStrat: function (event) {
      this.Mxy = {
        x: event.clientX,
        y: event.clientY
      }
      if (event.dataTransfer.addElement) {
        let div = document.createElement('div')
        div.setAttribute('style', `with:10px;height:10px;background-color:#eee`)
        event.dataTransfer.addElement(div)
      } else {
        var img = new Image()
        img.src = './static/img/outicon.png'
        event.dataTransfer.setDragImage(img, 8, 3)
      }
      event.dataTransfer.setData('portStart', this.pid)
    },
    dragPortGing: function (event) {
      let Txy = {
        x: event.clientX,
        y: event.clientY
      }
      this.$store.dispatch('setViPathingData', {Mxy: this.Mxy, Txy: Txy, isShow: true})
    },
    dragPortEnd: function (event) {
      this.$store.dispatch('setViPathingData', {isShow: false})
    }
  }
}
</script>
