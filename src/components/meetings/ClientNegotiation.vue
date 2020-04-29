<template>
    <div class="client-negotiation">
        <v-toolbar dark color="warning">
            <v-toolbar-title>Client Negotiation</v-toolbar-title>
            <v-spacer></v-spacer>
        </v-toolbar>
        <p v-if="thisClient.relationship>50">Anna: We have somewhat positive relationship with this client. We can be more pushy, when negotiating the fee</p>
        <p v-else>Anna: This guy isn't that patient. We can be more agreeable with him today.</p>

        <p>{{ thisClient.name }}: Well, in order to receive a deliverable for the project "{{thisProject.title}}", I am prepared to pay {{initialFee}} leva.</p>
        
        <div v-if="negotiationRounds.length > 0 ">
            <div class="negotiation-table" v-for="round in negotiationRounds" :key="round.id">
                <p>PLAYER: I think we need more money</p>
                
                <p v-if="round.positiveRelationship">{{ thisClient.name }}: OK, Here is 7% more</p>
                <p v-else>{{ thisClient.name }}: Nah, I'mma find someone else. Thank you for your time</p>
                
            </div>
        </div>

        <div class="negotiation-controls" v-show="showNegotiationControls">
            <v-btn class="primary" @click="negotiate()">Ask for more money</v-btn>
            <v-btn class="succes">Agree</v-btn>
            <v-btn class="error">Politely pull out of negotiations</v-btn>
        </div>

        <p></p>
        <p></p>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    data() {
        return {
            negotiationRounds: [],
            showNegotiationControls: true
        }
    },
    computed: {
        ...mapGetters([
            "loadedGame",
            "loadedMeeting"
        ]),
        thisProject(){
            return this.loadedGame.projects.find(x=>x.id===this.loadedMeeting.projectId)
        },
        thisClient(){
            return this.loadedGame.clients.find(x=>x.id===this.loadedMeeting.clientId)
        },
        initialFee() {
            return this.thisProject.fee
        }
    },
    methods: {
        ...mapActions(['flushMeeting']),

        negotiate(){
            this.thisClient.relationship -= 19
            if(this.thisClient.relationship > 0) {
                this.negotiationRounds.push({
                    id: this.negotiationRounds.length + "id",
                    positiveRelationship: true,
                    offeredFee: Math.ceil(this.thisProject.fee*1.07)
                })
            } else {
                this.showNegotiationControls = false
            }
        }
    },
    beforeDestroy(){
        this.flushMeeting()
        console.log('xyu')
        this.negotiationRounds = []
    }
}
</script>

<style lang="stylus">

</style>