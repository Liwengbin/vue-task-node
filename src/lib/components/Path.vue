<template>
  <g class="pane-link" id="asdfasdf">
    <path class="connector-wrap" :d="path">
    </path>
    <path class="connector" :d="path">
    </path>
    <path class="source-marker">
    </path>
    <path class="target-marker">
    </path>
    <rect class="comment-bg" width="" height="" transform="">
    </rect>
    <text class="comment" y="" transform="">
    </text>
  </g>
</template>
<script>
export default {
  name: 'TaskPath',
  props: {
    start: {
      x: '',
      y: ''
    },
    end: {
      x: '',
      y: ''
    }
  },
  data () {
    return {
      path: ''
    }
  },
  mounted: function () {
    /**
     * console.log('SVG-mounted 钩子执行...');
     * 根据起始点和终点计算path
     * */
    this.path = this.$canvasMQT({x: this.start.x, y: this.start.y}, {x: this.end.x, y: this.end.y})
  }
}
</script>

<style>
  .pane-link .connector {
    fill: none;
    stroke: gray;
    stroke-width: 1px;
  }

  .pane-link .connector-wrap {
    fill: none;
    stroke: hsla(0, 0%, 100%, 0);
    stroke-width: 15px;
  }
</style>
