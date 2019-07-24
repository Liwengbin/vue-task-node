<template>
  <li>
    <div :class="classesDir" @click="open = !open">
      <span class="icon" :class="[open ? 'task-icon-59': 'task-icon-58']"></span>
      <span class="icon" :class="[open ? 'task-icon-61': 'task-icon-60']"></span>
      <span class="tree-node-label">{{ node.name }}</span>
    </div>
    <task-model-tree v-show="open" :nodes="node.children"></task-model-tree>
  </li>
</template>

<script>
const prefixCls = 'model-tree'
export default {
  name: 'TreeNode',
  props: {
    node: {
      id: [String, Number],
      name: {
        type: [String, Number],
        default: '目录'
      },
      children: Array
    }
  },
  data () {
    return {
      open: false
    }
  },
  computed: {
    classesDir () {
      return [
        `${prefixCls}-dir`
      ]
    }
  }
}
</script>
