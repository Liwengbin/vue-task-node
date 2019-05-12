import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
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
const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
export default store
