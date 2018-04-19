<template>
  <v-container>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-title primary-title>
          <div class="text-md-center">
            <h2>Login Success</h2>
            <h4 class="headline mt-2">
              Email:
              {{ user.email }}
            </h4>
            <h4 class="headline mt-2">
              Ethereum Address: {{ user.name }}
            </h4>            
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
  </v-container>
</template>

<script>
  export default {
    computed: {
      user () {
        return this.$store.getters.user
      }
    }
  }
</script>
