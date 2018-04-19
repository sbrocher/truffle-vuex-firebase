<template>
  <v-container fluid class="pa-0">
      <v-flex>
        <div class="text-xs-center">

          <v-chip light v-if="!web3.isInjected || !web3.networkId" color="orange" text-color="white">
            <v-avatar>
              <v-icon medium>cancel</v-icon>
            </v-avatar>
            MetaMask not connected
          </v-chip>

          <v-chip light v-if="web3.isInjected && web3.networkId" color="green" text-color="white">
            <v-avatar>
              <v-icon small>check</v-icon>
            </v-avatar>
            MetaMask connected (address: {{ web3.coinbase }})
          </v-chip>

        </div>
      </v-flex>
  </v-container>  

</template>

<script>
  export default {
    name: 'app-metamask',
    computed: {
      web3 () {
        return this.$store.state.metamask.web3
      }
    }
  }
</script>