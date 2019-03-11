```
使用
<task-node></task-node>
扩展节点

具体使用方法如
<task-common></task-common>
<task-initial></task-initial>

必需：
① mixins: [ mixinsNode]
② <node 
    :node="node"  //必需
    width=180 height=30  //必需
    :selectNodeMethod="selectNodeMethod"  //可选
    :dragStart="dragStart" //可选
    :dragEnd="dragEnd" //可选
    v-on:updateTem="updateTemp" //必需
    :mouseMenu="mouseMenu">//可选
    
③ props: {
    node: {...}
  }
④ 添加<in-port> 和 <out-port>节点
  将其放到合适的位置
```
node数据格式
```json
{
  'id': 'node2',
  'name': '节点2',
  'positionX': 150,
  'positionY': 160,
  'inPorts': [
    {
      'id': 'node2_1',
      'isConnected': true
    },
    {
      'id': 'node2_3',
      'isConnected': false
    }
  ],
  'outPorts': [
    {
      'id': 'node2_4'
    },
    {
      'id': 'node2_5'
    }
  ]
}
```
