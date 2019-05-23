const state = {
  pathData: {
    isShow: false
  }
}
const getters = {
  getPathData () {
    return state.pathData
  }
}
const mutations = {
  setPath (state, name) {
    state.pathData = name
  }
}
const actions = {
  setPathData ({commit, state}, name) {
    commit('setPath', name)
  }
}
const store = {
  state,
  getters,
  mutations,
  actions
}
export default store
