<template>
  <div :class="[isConnected ? isCls:classes]" :id="pid" @dragover.prevent=dragPortOver($event) @drop.prevent='inDropPort($event)' @dragenter="dragEnter" @dragleave="dragLeave">
      <span :class="magnetCls"></span>
  </div>
</template>
<script>

const prefixCls = 'task-port'
export default {
  name: 'InPort',
  data () {
    return {
      className: null
    }
  },
  props: {
    pid: [Number, String],
    content: {
      type: [String, Number],
      default: '输入'
    },
    isConnected: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes () {
      return [
        `${prefixCls}`,
        `${prefixCls}-in`
      ]
    },
    magnetCls () {
      return [
        `${prefixCls}-magnet`
      ]
    },
    isCls () {
      return [
        `${prefixCls}`,
        `${prefixCls}-in`,
        `is-connected`
      ]
    }
  },
  methods: {
    inDropPort: function (event) {
      if (this.className) {
        let _this = event.target.parentNode
        _this.className = this.className
      }
      let startData = event.dataTransfer.getData('portStart')
      if (startData) {
        this.$emit('on-add-path', event, startData, this.pid)
      }
    },
    dragPortOver: function (event) {
    },
    dragEnter: function (event) {
      let _this = event.target.parentNode
      this.className = _this.className
      _this.className = 'task-port task-in-out'
    },
    dragLeave: function (event) {
      let _this = event.target.parentNode
      _this.className = this.className
    }
  }
}
</script>
