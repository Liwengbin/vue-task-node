<template>
  <div class="pane-port-list out">
    <slot></slot>
    <template v-if="outports && outports.length > 0" v-for="(item,index) in outports">
      <task-out-port :key='index' :pid="item.id" :port="item"></task-out-port>
    </template>
    <div class="pane-port-wrap"></div><!--由于使用flex布局，这里作为占位符-->
  </div>
</template>
<script>

import TaskOutPort from './OutPort.vue'
export default {
  components: {TaskOutPort},
  name: 'TaskOutPortList',
  props: ['outports'],
  data () {
    return {
    }
  }
}
</script>

<style>
  .pane-port-list.out {
    margin-top: -5px;
    clear: both;
    display: flex;
  }

  .pane-port-list {
    float: left;
    width: 180px;
    margin-top: -5px;
  }
</style>
