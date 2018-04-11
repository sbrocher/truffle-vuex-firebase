import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { store } from './store'

import { default as Web3 } from 'web3'
// eslint-disable-next-line
import { default as contract } from 'truffle-contract'

import firebase from 'firebase'

firebase.initializeApp({
  apiKey: 'AIzaSyAJlhOjwHtfWqgun1IrrpRKhguUs6q1JnI',
  authDomain: 'ethereum-firebase-example-app.firebaseapp.com',
  databaseURL: 'https://ethereum-firebase-example-app.firebaseio.com',
  projectId: 'ethereum-firebase-example-app',
  storageBucket: 'ethereum-firebase-example-app.appspot.com',
  messagingSenderId: '780950225975'
})

window.addEventListener('load', () => {
  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  if (typeof web3 !== 'undefined') {
    console.warn('Using web3 detected from external source.')
    // Use Mist/MetaMask's provider
    // eslint-disable-next-line
    window.web3 = new Web3(web3.currentProvider)
    // eslint-disable-next-line
    web3.eth.getAccounts(function(err, accs) {
      if (err != null) {
        console.warn('There was an error fetching your accounts.')
      } else {
        console.log('Got the accounts', accs)
      }
    })
  } else {
    console.warn('No web3 detected.')
  }
})

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
