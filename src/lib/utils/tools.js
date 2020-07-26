// 判断参数是否是其中之一
export function oneOf (value, validList) {
  for (let i = 0; i < validList.length; i++) {
    if (value === validList[i]) {
      return true
    }
  }
  return false
}
// 浏览器判断
export function browsers () {
  let userAgent = navigator.userAgent // 取得浏览器的userAgent字符串
  if (userAgent.indexOf('Chrome') > -1) {
    if (userAgent.indexOf('Edge') > -1) {
      return 'Edge'
    } else {
      return 'Chrome'
    }
  } else if (userAgent.indexOf('Firefox') > -1) {
    return 'Firefox'
  }
}
// 判断缩放
export function zoomRatio () {
  let ratio = 0
  let screen = window.screen
  let ua = navigator.userAgent.toLowerCase()

  if (window.devicePixelRatio !== undefined) {
    ratio = window.devicePixelRatio
  } else if (~ua.indexOf('msie')) {
    if (screen.deviceXDPI && screen.logicalXDPI) {
      ratio = screen.deviceXDPI / screen.logicalXDPI
    }
  } else if (window.outerWidth !== undefined && window.innerWidth !== undefined) {
    ratio = window.outerWidth / window.innerWidth
  }

  if (ratio) {
    ratio = Math.round(ratio * 100)
  }
  if (browsers() === 'Chrome') {
    return ratio
  } else {
    return 100
  }
}
