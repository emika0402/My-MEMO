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
    deleteLoginUser(state) {
      state.login_user = null
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
    deleteLoginUser({ commit }) {
      commit('deleteLoginUser')
    },
    login() {
      const google_auth_provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithRedirect(google_auth_provider)
    },
    logout () {
      firebase.auth().signOut()
    },
    toggleSideMenu({ commit }) {
      commit('toggleSideMenu')
    },
    addMemo({ commit }, memo) {
      commit('addMemo',memo)
    }
  },
  getters: {
    userName: state => state.login_user? state.login_user.displayName : 'Not Logged !',
    photoURL: state => state.login_user? state.login_user.photoURL : ''
  }
})
