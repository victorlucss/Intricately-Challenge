const state = {
  selectedSidenav: 0
}

const getters = {
  selectedSidenav: state => state.selectedSidenav
}

const actions = {
  setSelectedSidenav({commit}, selectedSidenav){
      commit('SET_SELECTED_SIDENAV', selectedSidenav)
  }

}

const mutations = {
  SET_SELECTED_SIDENAV(state, selectedSidenav){
      state.selectedSidenav = selectedSidenav
  }

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}