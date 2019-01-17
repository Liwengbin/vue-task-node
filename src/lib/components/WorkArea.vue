<template>
  <div :id="id" class="class-area">
    <div :style="{minHeight:winHeight+'px',minWidth:winWidth+'px'}">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"
           preserveAspectRatio="xMinYMin meet" :height="winHeight" :width="winWidth" @drop='drop($event)'
           @dragover='allowDrop($event)'>
        <g transform="scale(1,1)">
          <g>
            <slot></slot>
          </g>
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  name: 'TaskWorkArea',
  props: ['id'],
  data () {
    return {
      winHeight: '',
      winWidth: ''
    }
  },
  created: function () {
    this.winWidth = window.screen.availWidth /* 可用宽度 */
    this.winHeight = window.screen.availHeight/* 可用高度(除去任务栏的高度) */
  },
  mounted: function () {
    /* console.log('SVG-mounted 钩子执行...'); */

  },
  methods: {
    drop: function (event) {

    },
    allowDrop: function (event) {

    }
  }
}

</script>

<style>
  .class-area {
    background-color: #fff;
    position: relative;
    overflow: auto;
  }

  .class-area::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  .class-area::-webkit-scrollbar-thumb {
    background-color: #aeaeae;
    min-height: 50px;
    min-width: 50px;
    -webkit-border-radius: 10px;
    border-radius: 10px;
    -webkit-transition: background-color .2s;
    -o-transition: background-color .2s;
    transition: background-color .2s;
  }

  .class-area::-webkit-scrollbar-track-piece {
    background-color: #eee;
  }
</style>

<!--
height
width

-->
