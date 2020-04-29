<template>
    <nav>
        <v-app-bar flat class="primary">
            <v-spacer></v-spacer>
            <v-btn tile :to="'/'" class="mx-2">Home</v-btn>
            <v-btn tile :to="'select-game'" class="mx-2">Load game</v-btn>
            <v-btn tile :to="'about'" class="mx-2">About the player</v-btn>
            <v-btn tile class="mx-2" v-show="user" @click="signOut">Sign out</v-btn>
        </v-app-bar>
    </nav>
</template>

<script>
import { mapGetters } from "vuex";
import firebase from "firebase";

export default {
    computed: {
        // map `this.user` to `this.$store.getters.user`
        ...mapGetters({
            user: "user"
        })
    },

    methods: {
        signOut(e) {
            e.stopPropagation();
            firebase.auth().signOut().then(this.$store.dispatch('setUserAuth'));
            this.$router.push({
                name: "About"
            });
        }
    },
    /* created() {
        firebase.auth().onAuthStateChanged(user => {
            this.user = user;
        });
    }, */
}
</script>