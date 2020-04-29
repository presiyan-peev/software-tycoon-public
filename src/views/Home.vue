<template>
  <div class="home">

    <div v-if="!setTransition" class="office-dashboard">
      <!-- The first div appears when the user is not signed it. 
      The app redirects him to the Login page, where he is promtply promted to log in/sign up -->
      <div v-if="!user" class="redirect-to-login">
        <p>It appears you are not signed in. You will be redirected to the Login page in 3 seconds</p>
        <v-btn @click="redirectToLogin">No, redirect me immediately!</v-btn>
      </div>
  
      <!-- This div appears when the user is signed in, but haven't started a game yet
      He shall be immediately redirected to SelectGame page, where he can start a new game or load a saved one -->
      <div v-else-if="!loadedGame">
        <p>You should be redirected to the Start Game page. If you see this, something went wrong</p>
        <p>Try going to the Start Game page manually with the button below</p>
        <v-btn @click="redirectToSelectGame">Redirect me!</v-btn>
      </div>

      <!-- the dashboard where the user sees an overview of his company -->
      <div v-else class="dashboard">
        <Dashboard /> 
        <v-btn class="next-turn-btn" @click="setTransition=true">Next Turn</v-btn>
      </div>
    </div>

    <!-- the dashboard where the user sees an overview of his company -->
    <div v-else class="transition">
      <NextTurnTransition /> 
    </div>
  </div>
</template>

<script>
import Dashboard from "@/components/Dashboard"
import NextTurnTransition from "@/components/NextTurnTransition"

import { mapGetters } from "vuex";

export default {
  data() {
    return {
        setTransition: false,
    }
  },
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters([
        "user",
        "loadedGame"
    ])
  },
  components: {
    Dashboard,
    NextTurnTransition
  },
  methods: {
    redirectToLogin() {
      this.$router.push('Login')
    },
    redirectToSelectGame() {
      this.$router.push('select-game')
    }
  },
  created() {
    /* if(!this.user) {
      setTimeout(this.redirectToLogin(), 3000);
    } else if(!this.loadedGame) {
      this.redirectToSelectGame();
    } else {
      console.log("loading Dashboard...")
    } */
  }
}
</script>

<style>

</style>