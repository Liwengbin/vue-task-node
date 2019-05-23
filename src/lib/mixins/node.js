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
    dragGing: function (event) {
      this.$emit('on-drag-ging', event)
    },
    dragEnd: function (event, node) {
      this.$emit('on-drag-end', event, node)
    },
    addPath: function (event, start, end) {
      this.$emit('on-add-path', event, start, end)
    },
    mouseMenu: function (event, node) {
      this.$emit('on-mouse', event, node)
    }
  },
  updated: function () {
    this.updateTem()
  }
}
