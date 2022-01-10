import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login_user: null,
    drawer: false,
    memos: []
  },
  mutations: {
    setLoginUser(state, user) {
      state.login_user = user
    },
    toggleSideMenu(state) {
      state.drawer = !state.drawer
    },
    addMemo(state, memo) {
      state.memos.push(memo)
    }
  },
  actions: {
    setLoginUser({ commit }, user) {
      commit('setLoginUser', user)
    },
    login() {
      const google_auth_provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithRedirect(google_auth_provider)
    },
    toggleSideMenu({ commit }) {
      commit('toggleSideMenu')
    },
    addMemo({ commit }, memo) {
      commit('addMemo',memo)
    }
  }
})
