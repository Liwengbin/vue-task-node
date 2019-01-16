import TaskWorkArea from "../lib/components/WorkArea.vue";
import TaskStartEndNode from "../lib/components/StartEndNode.vue";
import TaskInPortList from "../lib/components/InPortList.vue";
import TaskOutPortList from "../lib/components/OutPortList.vue";
import TaskInPort from "../lib/components/InPort.vue";
import TaskOutPort from "../lib/components/OutPort.vue";
import TaskPath from "../lib/components/Path.vue";
import TaskCurvePath from "../lib/components/CurvePath.vue";
import TaskMouseMenu from "../lib/components/MouseMenu.vue";
import TaskMouseItem from "../lib/components/MouseItem.vue";
'use strict'
const vuetasknode ={
  install(Vue, options) {
    let mouseData = null;/*存放鼠标右击时的数据*/
    let selectData = null;/*存放当前选中的节点数据*/

    Vue.component(TaskWorkArea.name, TaskWorkArea);
    Vue.component(TaskStartEndNode.name,TaskStartEndNode);
    Vue.component(TaskInPortList.name, TaskInPortList);
    Vue.component(TaskOutPortList.name,TaskOutPortList);
    Vue.component(TaskInPort.name, TaskInPort);
    Vue.component(TaskOutPort.name,TaskOutPort);
    Vue.component(TaskPath.name, TaskPath);
    Vue.component(TaskCurvePath.name,TaskCurvePath);
    Vue.component(TaskMouseMenu.name, TaskMouseMenu);
    Vue.component(TaskMouseItem.name,TaskMouseItem);

    // 3. 注入组件
    Vue.mixin({
      created: function () {
        document.body.onclick = function(event){
          console.log(mouseData);
          if(mouseData){
            let menulu = document.getElementById(mouseData);
            let menu = menulu.parentNode;
            menu.style.setProperty('display','none');
            mouseData = null;
          }
        }
      }
    })

    // 4. 添加实例方法
    Vue.prototype.$getMouseData = function () {
      return mouseData;
    }
    Vue.prototype.$setMouseData = function (value) {
      mouseData = value;
    }

    Vue.prototype.$getSelectData = function () {
      return selectData;
    }
    Vue.prototype.$setSelectData = function (value) {
      selectData = value;
    }

    Vue.prototype.$getMTQ = function(m,t){
      function xy(x,y) {
        return {x:x,y:y}
      }
      let mtx = Math.floor((t.x - m.x) / 4);
      let mty = Math.floor((t.y - m.y) / 4);
      this.M = m;
      this.T = t;
      if(Math.abs(mtx)*0.25>Math.abs(mty) || mty<=10){
        if(mty<10 && mty>-10){
          this.Q1 = new xy(m.x+5, m.y + 10);
        }else{
          this.Q1 = new xy(m.x+5, m.y + 3 * Math.abs(mty));
        }
        this.Q2 = new xy(m.x + 2 * mtx, m.y + 2 * mty);
      }else{
        this.Q1 = new xy(m.x, m.y + 2 * mty);
        this.Q2 = new xy(m.x + 2 * mtx, m.y + 2 * mty);
      }
      return this;
    },
      Vue.prototype.$canvasMQT=function(strat,end){
      let MT = Vue.prototype.$getMTQ(strat,end);
      let path = "M" + MT.M.x + " " + MT.M.y + " Q " + MT.Q1.x + " " + MT.Q1.y + ", " + MT.Q2.x + " " + MT.Q2.y + " T " + MT.T.x + " " + MT.T.y;
      return path;
    }
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(paykeyboard);
  window.Vue.use(TaskWorkArea);
  window.Vue.use(TaskStartEndNode);
  window.Vue.use(TaskInPortList);
  window.Vue.use(TaskOutPortList);
  window.Vue.use(TaskInPort);
  window.Vue.use(TaskOutPort);
  window.Vue.use(TaskPath);
  window.Vue.use(TaskCurvePath);
  window.Vue.use(TaskMouseMenu);
  window.Vue.use(TaskMouseItem);
}

export default vuetasknode
