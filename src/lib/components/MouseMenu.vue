<template>
  <div class=" ui-context-menu-layer ml-right" tabindex="-1" style="z-index: 9999; display: none;">
    <ul :id="id" class="ui-context-menu">
      <slot></slot>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'TaskMouseMenu',
    props:["id"],
    data () {
      return {
      }
    }
  }
</script>

<style>
  .pai-bnpm-actions ul {
    padding: 2px 0;
  }
  .pai-bnpm-actions li{
    line-height: 1.5;
    cursor: pointer;
  }

  .ui-context-menu {
    margin: 0;
    padding: 5px 0;
    min-width: 200px;
    position: absolute;
    list-style: none;
    background-color: rgba(255,255,255,.98);
    border: 1px solid #eee;
    -webkit-box-shadow: 5px 5px 30px rgba(0,0,0,.1);
    box-shadow: 5px 5px 30px rgba(0,0,0,.1);
    border-radius: 2px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .ui-context-menu-layer {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: transparent;
  }
</style>
