<template>
  <div class="pane-port-list in">
    <slot></slot>
    <template v-if="inports && inports.length > 0" v-for="(item,index) in inports">
      <task-in-port :key='index' :pid="item.id" :isConnected = item.isConnected></task-in-port>
    </template>
    <div class="pane-port-wrap"></div><!--由于使用flex布局，这里作为占位符-->
  </div>
</template>
<script>
import TaskInPort from './InPort.vue'

export default {
  components: {TaskInPort},
  name: 'TaskInPortList',
  props: ['inports'],
  data () {
    return {
    }
  }
}
</script>

<style>
  .pane-port-list.in {
    clear: both;
    margin-top: -36px;
    display: flex;
  }
  .pane-port-list {
    float: left;
    width: 180px;
    margin-top: -5px;
  }
</style>
