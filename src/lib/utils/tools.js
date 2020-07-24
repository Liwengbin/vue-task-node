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
