import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import router from './router'
import { store } from './store'
// eslint-disable-next-line
import { default as contract } from 'truffle-contract'
import firebase from 'firebase'

const App = () => import('./App')
const AlertCmp = () => import('./components/Shared/Alert.vue')
const MetaMaskCmp = () => import('./components/Shared/MetaMask.vue')

Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.component('app-alert', AlertCmp)
Vue.component('app-metamask', MetaMaskCmp)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyAJlhOjwHtfWqgun1IrrpRKhguUs6q1JnI',
      authDomain: 'ethereum-firebase-example-app.firebaseapp.com',
      databaseURL: 'https://ethereum-firebase-example-app.firebaseio.com',
      projectId: 'ethereum-firebase-example-app',
      storageBucket: 'ethereum-firebase-example-app.appspot.com',
      messagingSenderId: '780950225975'
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
  }
})
