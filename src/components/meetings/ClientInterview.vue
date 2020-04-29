<template>
    <div class="meeting">
        <v-toolbar dark color="warning">
            <v-toolbar-title>Client Interview</v-toolbar-title>
            <v-spacer></v-spacer>
        </v-toolbar>
        <p>Stefan: So, tell us more about the project</p>
        <p>{{ thisClient.name }}: Well, I want this and that and eventually that's why it's called "{{thisProject.title}}"</p>
        <p>Stefan: Aight, Thanks a lot!</p>
        <p>Stefan: So, brother, this project has a complexity of {{thisProject.complexity}}, so we will need {{ howManyDevelopers() }}. </p>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
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
    },
    methods: {
        ...mapActions(['flushMeeting']),

        howManyDevelopers(){
            switch (this.thisProject.complexity) {
                case 1 : return "1 Senior developer"
                case 2 : return "2 Senior developers"
                case 3 : return "2 Senior developers and 1 Junior developer"
                case 4 : return "3 Senior developer"
                case 5 : return "3 Senior developers and 1 Junior developer"
                case 6 : return "4 Senior developers"
                default : return "some error"
            }
        }
    },
    beforeDestroy(){
        this.flushMeeting()
    }
}
</script>

<style lang="stylus" scoped>

</style>