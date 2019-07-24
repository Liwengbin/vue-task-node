export default {
  methods: {
    isEmpty (obj) {
      if (obj) {
        return true
      }
      return false
    },
    getContainersTop (el) {
      return el.offsetParent
        ? el.offsetTop + this.getContainersTop(el.offsetParent)
        : el.offsetTop
    },
    getContainersLeft (el) {
      return el.offsetParent
        ? el.offsetLeft + this.getContainersLeft(el.offsetParent)
        : el.offsetLeft
    },
    getBrowserHW () { // 获取浏览器可视高宽
      if (window.innerHeight !== undefined) {
        return {
          'width': window.innerWidth,
          'height': window.innerHeight
        }
      } else if (document.compatMode === 'CSS1Compat') {
        return {
          'width': document.documentElement.clientWidth,
          'height': document.documentElement.clientHeight
        }
      } else {
        return {
          'width': document.body.clientWidth,
          'height': document.body.clientHeight
        }
      }
    },
    transferCss (vl) { // 去除样式单位
      let index = this.isCssInUnit(vl)
      let data = vl
      if (index >= 0) {
        data = vl.substring(0, index)
      }
      return data
    },
    isCssInUnit (vl) { // 判断样式是否有单位
      let units = ['%', 'px', 'in', 'cn', 'mm', 'em', 'ex', 'pt', 'pc']
      let index = -1
      for (const item of units) {
        if (vl.indexOf(item) >= 0) {
          index = vl.indexOf(item)
          break
        }
      }
      return index
    }
  }
}
