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
    addMemo(state, { id, memo }) {
      memo.id = id,
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
    addMemo({ getters, commit }, memo) {
      if (getters.uid) {
        firebase.firestore().collection(`users/${getters.uid}/memos`).add(memo).then(doc => {
          commit('addMemo',{ id: doc.id, memo })
        })
      }
    },
    fetchMemos({ getters, commit }) {
      firebase.firestore().collection(`users/${getters.uid}/memos`).get().then(snapshot => {
        snapshot.forEach(doc => commit('addMemo', { id: doc.id, memo: doc.data() }))
      })
    }
  },
  getters: {
    userName: state => state.login_user? state.login_user.displayName : '',
    photoURL: state => state.login_user? state.login_user.photoURL : '',
    uid: state => state.login_user? state.login_user.uid : null
  }
})
