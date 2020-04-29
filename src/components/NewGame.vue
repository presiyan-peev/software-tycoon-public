From this component the user starts a new game

<template>
    <div>

        <div @click="selectNewGame" class="primary" dark>
            + Start a new game
        </div>

    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    computed: {
    ...mapGetters([
        "savedGames"
    ])
  },
    methods: {
        selectNewGame() {
            this.$router.push('start-new-game')
        }
    }
}
</script>

<style>

</style>