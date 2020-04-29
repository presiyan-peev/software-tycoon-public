/* This page controls the components which the user uses to create a new game */

<template>
    <div>

        <CreatePlayer v-if="viewIndex==0" />
        <StoryIntroduction v-else-if="viewIndex==1" />
        <CreateCompany v-else-if="viewIndex==2" />
        <LoadingNewGame v-else-if="viewIndex==3" />

        <v-btn class="error" v-if="viewIndex < 3" @click="callPreviousView" >Back</v-btn>
        <v-btn class="success" v-if="viewIndex < 2" @click="callNextView" >NEXT</v-btn>
        <v-btn class="success" v-else-if="viewIndex == 2" @click="submitGame" >START GAME</v-btn>
        
    </div>
</template>

<script>
import CreatePlayer from '@/components/create_new_game/CreatePlayer'
import StoryIntroduction from '@/components/create_new_game/StoryIntroduction'
import CreateCompany from '@/components/create_new_game/CreateCompany'
import LoadingNewGame from '@/components/create_new_game/LoadingNewGame'

import { mapActions, mapGetters } from "vuex";

export default {
    data() {
        return {
            viewIndex: 0,
        }
    },
    computed: {
      ...mapGetters([
          "loadedGame",
          "temp_NewGame"
        ])
    },
    components: {
        CreatePlayer,
        StoryIntroduction,
        CreateCompany,
        LoadingNewGame
    },
    methods: {
        ...mapActions(['setLoadedGame']),

        callNextView() {
            this.viewIndex = this.viewIndex === 2 ? 2 : this.viewIndex+1
        },
        callPreviousView() {
            this.viewIndex = this.viewIndex === 0 ? 0 : this.viewIndex-1
        },
        submitGame() {
            ++this.viewIndex
            //this.setLoadedGame(this.temp_NewGame)
        }
    },
}
</script>

<style>

</style>