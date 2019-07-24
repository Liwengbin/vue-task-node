<template>
  <ul :class="classes">
    <template v-for="node in nodes">
      <tree-node :key="node.id" :node="node" v-if="node.children && node.children.length > 0"></tree-node>
      <li :key="node.id" v-else>
        <task-node-model :class="classesNode" :node="node">
          <span :class="[node.icon ? node.icon : '']"></span>
          <span>{{node.name}}</span>
        </task-node-model>
      </li>
    </template>
  </ul>
</template>

<script>
import TreeNode from './TreeNode.vue'
const prefixCls = 'model-tree'
export default {
  components: {TreeNode},
  name: 'ModelTree',
  props: {
    nodes: Array
  },
  data () {
    return {
    }
  },
  computed: {
    classes () {
      return [
        `${prefixCls}`
      ]
    },
    classesNode () {
      return [
        `${prefixCls}-node`
      ]
    }
  }
}
</script>
