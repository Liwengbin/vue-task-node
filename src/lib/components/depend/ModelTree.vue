<template>
  <ul :class="classes">
    <template v-for="node in nodes">
      <li :key="node.id" v-if="node.children && node.children.length > 0">
          <div :class="classesDir" @click="open = !open">
            <span class="icon" :class="[open ? 'task-icon-59': 'task-icon-58']"></span>
            <span class="icon" :class="[open ? 'task-icon-61': 'task-icon-60']"></span>
            <span class="tree-node-label">{{ node.name }}</span>
          </div>
          <model-tree v-show="open" :nodes="node.children"></model-tree>
      </li>
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
const prefixCls = 'model-tree'
export default {
  name: 'ModelTree',
  props: {
    nodes: Array
  },
  data () {
    return {
      open: false
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
    },
    classesDir () {
      return [
        `${prefixCls}-dir`
      ]
    }
  }
}
</script>
