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
    getBrowserHW () {
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
    }
  }
}
