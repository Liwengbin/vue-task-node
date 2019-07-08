function XYObject (x, y) {
  this.x = x
  this.y = y
}

export default {
  /**
   * 计算二次贝塞尔曲线 Q线
   * @param Mxy 起点坐标
   * @param Txy 结束坐标
   * @returns {string} 'M xy Q xy xy Txy'
   */
  calculatedCurvePathQ (Mxy = {}, Txy = {}) {
    let mtx = (Txy.x - Mxy.x) / 4
    let mty = (Txy.y - Mxy.y) / 4
    if (mty < 0 && (mtx > 10 || mtx < -10)) {
      if (mty > -10 && mty < 10) {
        this.Q1xy = new XYObject(Mxy.x + 10, Mxy.y + 30)
      } else {
        this.Q1xy = new XYObject(Mxy.x + 10, Mxy.y + 4 * Math.abs(mty))
      }
      this.Q2xy = new XYObject(Mxy.x + 2 * mtx, Mxy.y + 2 * mty)
    } else {
      this.Q1xy = new XYObject(Mxy.x, Mxy.y + 2 * mty)
      this.Q2xy = new XYObject(Mxy.x + 2 * mtx, Mxy.y + 2 * mty)
    }

    let path = 'M' + Mxy.x.toFixed(1) + ' ' + Mxy.y.toFixed(1) + ' Q ' + this.Q1xy.x.toFixed(1) + ' ' + this.Q1xy.y.toFixed(1) + ', ' + this.Q2xy.x.toFixed(1) + ' ' + this.Q2xy.y.toFixed(1) + ' T ' + Txy.x.toFixed(1) + ' ' + Txy.y.toFixed(1)
    return path
  },
  /**
   * 计算折线 L线
   * @param Mxy 起点坐标
   * @param Txy 结束坐标
   * @returns {string} 'M xy Q xy xy Txy'
   */
  calculatedCurvePathL (Mxy = {}, Txy = {}) {
    let mtx = (Txy.x - Mxy.x) / 2
    let mty = (Txy.y - Mxy.y) / 2

    if (mty > 0) {
      this.L1xy = new XYObject(Mxy.x, Mxy.y + mty)
      this.L2xy = new XYObject(Txy.x, Mxy.y + mty)
      this.path = 'M' + Mxy.x.toFixed(1) + ' ' + Mxy.y.toFixed(1) + ' L ' + this.L1xy.x.toFixed(1) + ' ' + this.L1xy.y.toFixed(1) + ', ' + this.L2xy.x.toFixed(1) + ' ' + this.L2xy.y.toFixed(1) + ' T ' + Txy.x.toFixed(1) + ' ' + Txy.y.toFixed(1)
    } else {
      this.L1xy = new XYObject(Mxy.x, Mxy.y + 30)
      this.L2xy = new XYObject(Mxy.x + mtx, Mxy.y + 30)
      this.L3xy = new XYObject(Mxy.x + mtx, Txy.y - 30)
      this.L4xy = new XYObject(Txy.x, Txy.y - 30)
      this.path = 'M' + Mxy.x.toFixed(1) + ' ' + Mxy.y.toFixed(1) + ' L ' + this.L1xy.x.toFixed(1) + ' ' + this.L1xy.y.toFixed(1) + ', ' + this.L2xy.x.toFixed(1) + ' ' + this.L2xy.y.toFixed(1) + ', ' + this.L3xy.x.toFixed(1) + ' ' + this.L3xy.y.toFixed(1) + ', ' + this.L4xy.x.toFixed(1) + ' ' + this.L4xy.y.toFixed(1) + ' T ' + Txy.x.toFixed(1) + ' ' + Txy.y.toFixed(1)
    }
    return this.path
  },
  /**
   * 计算直线 ML线
   * @param Mxy 起点坐标
   * @param Txy 结束坐标
   * @returns {string} 'M xy Lxy'
   */
  calculatedCurvePathML (Mxy = {}, Txy = {}) {
    this.path = 'M' + Mxy.x.toFixed(1) + ' ' + Mxy.y.toFixed(1) + ' L ' + Txy.x.toFixed(1) + ' ' + Txy.y.toFixed(1)
    return this.path
  },
  /**
   * 获取曲线路径
   * @param Mxy 起点坐标
   * @param Txy 结束坐标
   * @returns {string} 'M xy Q xy xy Txy'
   */
  drawCurvePath (Mxy = {}, Txy = {}, type = 'Q', scaling) {
    let scalingMxy = {
      x: Mxy.x / scaling.ZoomX,
      y: Mxy.y / scaling.ZoomY
    }

    let scalingTxy = {
      x: Txy.x / scaling.ZoomX,
      y: Txy.y / scaling.ZoomY
    }
    if (type === 'Q') {
      return this.calculatedCurvePathQ(scalingMxy, scalingTxy)
    } else if (type === 'L') {
      return this.calculatedCurvePathL(scalingMxy, scalingTxy)
    } else if (type === 'ML') {
      return this.calculatedCurvePathML(scalingMxy, scalingTxy)
    }
  },
  /**
   * 缩放坐标计算
   * @param Mxy
   * @param Txy
   * @param scaling
   * @returns {{Mxy: {}, Txy: {}}}
   */
  scalingCount (Mxy = {}, Txy = {}, scaling = {ZoomX: 1, ZoomY: 1}) {
    Mxy.x = Mxy.x * scaling.ZoomX
    Mxy.y = Mxy.y * scaling.ZoomY
    Txy.x = Txy.x * scaling.ZoomX
    Txy.y = Txy.y * scaling.ZoomY
    return {Mxy: Mxy, Txy: Txy}
  },
  guid () {
    function S4 () {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
    }
    return (S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4())
  }
}
