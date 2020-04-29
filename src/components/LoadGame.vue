/* This component allows you to load a saved game */

<template>
    <div>

        <v-card
            class="mx-auto"
            max-width="300"
            tile
        >
            <v-list flat>
            <v-subheader>or Load a Saved Game</v-subheader>
            <v-list-item-group color="primary">
                <v-list-item
                v-for="(game, i) in savedGames"
                :key="i"
                @click="loadGame(game.id)"
                >
                <v-list-item-icon>
                    <v-icon>account_balance</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title v-text="game.title"></v-list-item-title>
                </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
            </v-list>
        </v-card>

    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    computed: {
        ...mapGetters([
            "savedGames",
            "userPrivateCollection",
            "loadedGame"
        ])
    },
    methods: {
        ...mapActions(['fetchSavedGames', 'setLoadedGame']),

        loadGame(id) {
            this.setLoadedGame(this.savedGames.find(x => x.id === id))
        }
    },
    watch: {
        userPrivateCollection(newValue) {
            if(newValue!==null){
                this.fetchSavedGames();
            }
        },
        loadedGame(newValue) {
            if(newValue!==null){
                this.$router.push('/')
            }
        }
    },
    created() {
        this.fetchSavedGames();
    }
}
</script>

<style>

</style>