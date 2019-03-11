export default {
  props: {
    updateTem: Function
  },
  methods: {
    updateTemp (val) {
      this.updateTem()
    },
    selectNodeMethod: function (event, node, ref) {
      this.$emit('on-select', event, node, ref)
    },
    dragStart: function (event, node) {
      this.$emit('on-drag-start', event, node)
    },
    dragEnd: function (event, node) {
      this.$emit('on-drag-end', event, node)
    },
    mouseMenu: function (event, node) {
      this.$emit('on-mouse', event, node)
    }
  },
  updated: function () {
    this.updateTem()
  }
}
