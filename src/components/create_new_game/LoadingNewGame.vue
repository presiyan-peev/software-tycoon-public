/* This is the view the user sees WHILE the game is loading */

<template>
    <div class="loading-game-screen">

        Wait until your game has loaded

    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { RandomClient, RandomProject, RandomDeveloper } from "@/generate"

export default {
    data() {
        return {
            gameElements: {
                projects: [],
                clients: [],
                developers: [],
            }
        }
    },
    computed: {
      ...mapGetters([
          "loadedGame",
          "temp_NewGame"
        ])
    },
    methods: {
        ...mapActions(['setLoadedGame', "createNewGame", 
                        "addProject", "addClient", "addDeveloper",]),
    },
    watch: {
        loadedGame(newValue) {
            if(newValue!==null){
                this.$router.push('/')              // Doesn't work the second time you create a game 
            }
        }
    },
    created() {

        let generatedClientsId = []                 // stores IDs of clients in order to assign them to newly generated projects

        /*Generate randomly 2 clients, 2 projects, 3 Jr. Devs and 1 Sr. Dev */

        for(let i = 0; i<2; i++) {
            this.gameElements.clients[i] = Object.assign({}, new RandomClient());
            this.addClient(this.gameElements.clients[i])
            generatedClientsId.push(this.gameElements.clients[i].id)
        }
        for(let i = 0; i<2; i++) {
            this.gameElements.projects[i] = Object.assign({}, new RandomProject(2));
            this.gameElements.projects[i].ownerId = this.gameElements.clients[i].id             
            this.addProject(this.gameElements.projects[i])
        }
        for(let i = 0; i<3; i++) {
            this.gameElements.developers[i] = Object.assign({}, new RandomDeveloper("Junior"));
            this.addDeveloper(this.gameElements.projects[i])
        }
        this.gameElements.developers[3] = Object.assign({}, new RandomDeveloper("Senior"));
        this.addDeveloper(this.gameElements.developers[3])
    },
    mounted() {
        let newTempGame = {}
        Object.keys(this.temp_NewGame).forEach((key) => {
            newTempGame[key] = this.temp_NewGame[key]
        })
        Object.keys(this.gameElements).forEach((key) => {
            newTempGame[key] = this.gameElements[key]
          
        })
        
        this.setLoadedGame(this.temp_NewGame)
        this.createNewGame(newTempGame)
    }
}
</script>

<style>

</style>