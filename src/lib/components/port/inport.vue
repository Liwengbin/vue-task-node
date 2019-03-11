<template>
  <div :class="[isConnected ? isCls:classes]" :id="pid">
      <span :class="magnetCls"></span>
  </div>
</template>
<script>

const prefixCls = 'task-port'
export default {
  name: 'InPort',
  data () {
    return {
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
  }
}
</script>
