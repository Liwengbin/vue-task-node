<template>
  <div :class="classes" ref="port">
    <template v-if="in_ports && in_ports.length > 0" v-for="(item,index) in in_ports">
      <div :class="wrapCls" :key='index'>
        <in-port :pid="item.id" v-on:on-add-path='addPath' :isConnected = item.isConnected></in-port>
      </div>
    </template>
    <div :class="wrapCls"></div>
  </div>
</template>
<script>
import InPort from '../../port/inport.vue'
const prefixCls = 'task-in-common-ls'
export default {
  components: {InPort},
  name: 'InCommonLs',
  props: {
    in_ports: {
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
  },
  methods: {
    addPath: function (event, start, end) {
      this.$emit('on-add-path', event, start, end)
    }
  }
}
</script>
