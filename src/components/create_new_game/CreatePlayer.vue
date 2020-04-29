<template>
    <div>

        <!-- For now, the game has only one possibility: The Player is a man
        Will add options for woman later -->

        Create a Player

        <v-form class="px-3">
            <v-text-field label="Your Name" v-model="name"></v-text-field>
            <div class="personality-slider">

                <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                        <span v-on="on">
                            <v-slider
                                v-model="techPersonality"
                                class="align-center"
                                :max="maxPersonality"
                                :min="minPersonality"
                                hide-details
                            >
                                <template v-slot:append>
                                    <p>{{ personality }}</p>
                                </template>
                            </v-slider>
                        </span>
                    </template>
                    <span>
                        The more technical person you are, the more software developers will admire you and will be willing to work with you. {{ '\n' }}
                        The more business person you are, the more clients will respect you, what you can leverage when negotioating deals
                    </span>
                </v-tooltip>
           </div>
        </v-form>

    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    data() {
        return {
            name: '',
            techPersonality: 50,
            minPersonality: 0,
            maxPersonality: 100,
        }
    },
    computed: {
        personality: function() {
            if(this.techPersonality > 90) return 'very technical'
            else if(this.techPersonality > 70) return 'technical'
            else if(this.techPersonality > 30) return 'balanced'
            else if(this.techPersonality > 10) return 'business'
            else return 'very business'
        }
    },
    methods: {
        ...mapActions(['addPlayerToNewGame'], {}),
    },
    beforeDestroy() {

        let tempNewPlayer = {
            name: this.name,
            techPersonality: this.techPersonality,
            personality: this.personality
        }
        this.addPlayerToNewGame(tempNewPlayer)
    }
}
</script>

<style>

</style>