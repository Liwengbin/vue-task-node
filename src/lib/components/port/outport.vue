<template>
  <div :class="classes" :id="pid">
    <span :class="magnetCls"></span>
  </div>
</template>
<script>
const prefixCls = 'task-port'
export default {
  name: 'OutPort',
  data () {
    return {
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
  }
}
</script>
