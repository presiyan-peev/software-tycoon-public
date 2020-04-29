<template>
  <v-app>
    <Navbar />

    <v-content class='grey lighten-3 content'>
      <router-view></router-view>
    </v-content>

    <v-btn @click="testMethod()">createNewGame</v-btn>
    
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
import { mapGetters } from "vuex";

export default {
  

  name: 'App',
  computed: {
      ...mapGetters([
          "user",
          "temp_NewGame"
        ])
  },
  components: {
    Navbar,
  },
  created() {
    
    this.$store.dispatch('setUserAuth')
  },
  methods: {
    testMethod() {
      console.log('testMethod - this.temp_NewGame.id: ')
      console.log(this.temp_NewGame.id)
      this.$store.dispatch('createNewGame', this.temp_NewGame)
    }
  }
}
</script>

<style>

</style>