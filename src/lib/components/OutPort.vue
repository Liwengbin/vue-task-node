<template>
  <div class="pane-port-wrap">
    <div :id="pid" class="pane-port"><span class="port-magnet"></span></div>
  </div>
</template>
<script>

export default {
  name: 'TaskOutPort',
  props: ['port', 'pid'],
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
    cursor: crosshair;
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
