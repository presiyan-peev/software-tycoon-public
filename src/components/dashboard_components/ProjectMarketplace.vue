<template>
    <div>
        <v-data-table
            :headers="headers"
            :items="availableProjects"
            :items-per-page="5"
            class="elevation-1"
        >

            <template v-slot:item.complexity="{ item }">
                <div v-if="meetingsConducted.includes(item.id)" >{{ item.complexity }}</div>
                <v-icon v-else @click="startMeeting(item.id)"> group </v-icon>
            </template>

            <template v-slot:item.ownerId="{ item }">
                <div>{{ clientName(item.ownerId) }}</div>
            </template>

            <template v-slot:item.negotiate="{ item }">
                <v-icon @click="initNegotiations(item.id)" :disabled="!enableNegotiationButton(item.id)"> attach_money </v-icon>
            </template>
        
        </v-data-table>


        <v-row justify="center">
            <v-dialog v-model="clientInterviewDialog" fullscreen hide-overlay transition="dialog-bottom-transition">
            <v-card>
                <ClientInterview />
                <v-btn class="warning" @click="clientInterviewDialog = false">End Meeting</v-btn>
            </v-card>
            </v-dialog>
        </v-row>

        <v-row justify="center">
            <v-dialog v-model="clientNegotiationDialog" fullscreen hide-overlay transition="dialog-bottom-transition">
            <v-card>
                <div v-for="project in availableProjects" :key="project.id">
                    <ClientNegotiation v-show="project.id === meetingDetails.projectId" />
                </div>
                <v-btn class="warning" @click="clientNegotiationDialog = false">End Meeting</v-btn>
            </v-card>
            </v-dialog>
        </v-row>

    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import ClientInterview from "@/components/meetings/ClientInterview"
import ClientNegotiation from "@/components/meetings/ClientNegotiation"

export default {
    data () {
      return {
        clientInterviewDialog: false,
        clientNegotiationDialog: false,
        headers: [
            { text: 'Title', value: 'title' },
            { text: 'Client name', value: 'ownerId' },
            { text: 'Complexity', value: 'complexity' },
            { text: 'Fee', value: 'fee' },
            { text: 'Status', value: 'status' },
            { text: 'Negotiate', value: 'negotiate', sortable: false },
        ],

        //shall contain ids of projects, where player has met with client
        meetingsConducted: [],

        meetingDetails: {}
      }
    },
    components: {
        ClientInterview,
        ClientNegotiation
    },
    computed: {
        ...mapGetters([
            "loadedGame",
        ]),
        availableProjects() {
            return this.loadedGame.projects
        },
    },
    methods: {
        ...mapActions(['loadMeeting']),

        startMeeting(projectId) {
            this.meetingDetails = {
                    projectId: projectId,
                    clientId: this.loadedGame.projects.find(x => x.id === projectId).ownerId
                }
            if(this.meetingsConducted.length < 3) {
                this.loadMeeting(this.meetingDetails)    
                this.clientInterviewDialog = true
                this.meetingsConducted.push(projectId)
            }
            else {
                alert("No more meetings allowed this turn")
            }
        },

        initNegotiations(projectId) {
            this.meetingDetails = {
                projectId: projectId,
                clientId: this.loadedGame.projects.find(x => x.id === projectId).ownerId
            }
            if(this.meetingsConducted.includes(projectId))
                this.loadMeeting(this.meetingDetails) 
                this.clientNegotiationDialog = true
        },

        enableNegotiationButton(projectId) {
            return this.meetingsConducted.includes(projectId)
        },

        clientName(clientId){
            return this.loadedGame.clients.find(x=>x.id===clientId).name
        }
    }
}
</script>

<style>

</style>