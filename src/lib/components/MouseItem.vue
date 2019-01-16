<template>
  <li class="ui-context-menu-item" @click="selectClick($event,mouse)">
    <i :class="icon">
    </i>
    <span class="item-name">
				{{mouse.title}}
			  </span>
  </li>
</template>
<script>
  export default {
    name: 'TaskMouseItem',
    props:["icon","mouse","selectClick"],
    data () {
      return {
      }
    },
    methods: {

    }
  }
</script>

<style>
  li{
    line-height: 1.5;
    cursor: pointer;
  }

  .ui-context-menu-item {
    position: relative;
    font-size: 12px;
    color: #333;
    height: 26px;
    line-height: 26px;
    padding-left: 30px;
    padding-right: 10px;
    cursor: pointer;
    -webkit-transition: background-color .1s ease;
    -o-transition: background-color .1s ease;
    transition: background-color .1s ease;
    text-align: left;
  }

  .ui-context-menu-item:hover{
    background-color: #eee;
  }
</style>
