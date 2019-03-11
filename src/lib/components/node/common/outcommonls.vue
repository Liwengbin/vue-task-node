<template>
  <div :class="classes">
    <template v-if="out_ports && out_ports.length > 0" v-for="(item,index) in out_ports">
      <div :class="wrapCls" :key='index'>
        <out-port :pid="item.id"></out-port>
      </div>
    </template>
    <div :class="wrapCls"></div>
  </div>
</template>
<script>
import OutPort from '../../port/outport.vue'
const prefixCls = 'task-out-common-ls'
export default {
  components: {
    OutPort},
  name: 'OutCommonLs',
  props: {
    out_ports: {
      type: Array
    }
  },
  data () {
    return {
    }
  },
  computed: {
    classes () {
      return [
        `${prefixCls}`
      ]
    },
    wrapCls () {
      return [
        `${prefixCls}-wrap`
      ]
    }
  }
}
</script>
