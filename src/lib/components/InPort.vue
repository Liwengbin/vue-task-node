<template>
  <div class="pane-port-wrap">
    <div :id="pid" :class="[isConnected ? 'pane-port is-connected': 'pane-port']" ><span class="port-magnet"></span></div>
  </div>
</template>
<script>
  export default {
    components: {},
    name: 'TaskInPort',
    props:["isConnected","port","pid"],
    data () {
      return {
      }
    }
  }
</script>

<style>
  .pane-port-wrap {
    height: 1px;
    float: left;
    flex: 1;
  }
  .pane-port {
    width: 10px;
    height: 10px;
    float: right;
    margin-right: -5px;
    border: 1px solid gray;
    border-radius: 50%;
    background-color: #fff;
    -webkit-transition: background-color .2s;
    transition: background-color .2s;
  }
  .pane-port-list.in .pane-port.is-connected {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 5px 4px 0;
    border-color: gray transparent transparent;
    background-color: transparent;
    border-radius: 0;
    margin-top: 6px;
  }
  .pane-port .port-magnet {
    float: left;
    width: 22px;
    height: 22px;
    margin-top: -6px;
    margin-left: -6px;
    background-color: transparent;
    border-radius: 50%;
  }
</style>
