import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import Web3 from 'web3'
// eslint-disable-next-line
import contract from 'truffle-contract'

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
  render: h => h(App)
})
