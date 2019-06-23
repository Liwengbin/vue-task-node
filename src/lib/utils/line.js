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
    let mtx = Math.floor((Txy.x - Mxy.x) / 4)
    let mty = Math.floor((Txy.y - Mxy.y) / 4)
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

    let path = 'M' + Mxy.x + ' ' + Mxy.y + ' Q ' + this.Q1xy.x + ' ' + this.Q1xy.y + ', ' + this.Q2xy.x + ' ' + this.Q2xy.y + ' T ' + Txy.x + ' ' + Txy.y
    return path
  },
  /**
   * 计算折线 L线
   * @param Mxy 起点坐标
   * @param Txy 结束坐标
   * @returns {string} 'M xy Q xy xy Txy'
   */
  calculatedCurvePathL (Mxy = {}, Txy = {}) {
    let mtx = Math.floor((Txy.x - Mxy.x) / 2)
    let mty = Math.floor((Txy.y - Mxy.y) / 2)

    if (mty > 0) {
      this.L1xy = new XYObject(Mxy.x, Mxy.y + mty)
      this.L2xy = new XYObject(Txy.x, Mxy.y + mty)
      this.path = 'M' + Mxy.x + ' ' + Mxy.y + ' L ' + this.L1xy.x + ' ' + this.L1xy.y + ', ' + this.L2xy.x + ' ' + this.L2xy.y + ' T ' + Txy.x + ' ' + Txy.y
    } else {
      this.L1xy = new XYObject(Mxy.x, Mxy.y + 30)
      this.L2xy = new XYObject(Mxy.x + mtx, Mxy.y + 30)
      this.L3xy = new XYObject(Mxy.x + mtx, Txy.y - 30)
      this.L4xy = new XYObject(Txy.x, Txy.y - 30)
      this.path = 'M' + Mxy.x + ' ' + Mxy.y + ' L ' + this.L1xy.x + ' ' + this.L1xy.y + ', ' + this.L2xy.x + ' ' + this.L2xy.y + ', ' + this.L3xy.x + ' ' + this.L3xy.y + ', ' + this.L4xy.x + ' ' + this.L4xy.y + ' T ' + Txy.x + ' ' + Txy.y
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
    this.path = 'M' + Mxy.x + ' ' + Mxy.y + ' L ' + Txy.x + ' ' + Txy.y
    return this.path
  },
  /**
   * 获取曲线路径
   * @param Mxy 起点坐标
   * @param Txy 结束坐标
   * @returns {string} 'M xy Q xy xy Txy'
   */
  drawCurvePath (Mxy = {}, Txy = {}, type = 'Q') {
    if (type === 'Q') {
      return this.calculatedCurvePathQ(Mxy, Txy)
    } else if (type === 'L') {
      return this.calculatedCurvePathL(Mxy, Txy)
    } else if (type === 'ML') {
      return this.calculatedCurvePathML(Mxy, Txy)
    }
  }
}
