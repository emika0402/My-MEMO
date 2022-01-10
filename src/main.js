import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyD_tGxkD_t1WRDCBAblcue8e2Q0A_KKIPw",
  authDomain: "my-memos-19c20.firebaseapp.com",
  projectId: "my-memos-19c20",
  storageBucket: "my-memos-19c20.appspot.com",
  messagingSenderId: "208355340214",
  appId: "1:208355340214:web:631bc277f55cc62d361b17",
  measurementId: "G-00WRCZ649Q"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
