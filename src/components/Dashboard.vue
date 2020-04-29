<template>
    <div>
        <v-tabs 
            v-model="tab"
            background-color="deep-purple accent-4"
            class="elevation-2"
            dark
            >
            <v-tabs-slider></v-tabs-slider>

            <v-tab
                :href="`#project-marketplace`"
            >
                Project Marketplace
            </v-tab>

            <v-tab-item
                value="project-marketplace"
            >
                <v-card
                    flat
                    tile
                    >
                    <v-card-text> <ProjectMarketplace /> </v-card-text>
                </v-card>
            </v-tab-item>

                <v-tab
                    :href="`#project-history`"
                >
                    Project History
                </v-tab>

            <v-tab-item
                value="project-history"
            >
                <v-card
                    flat
                    tile
                    >
                    <v-card-text> <ProjectHistory /> </v-card-text>
                </v-card>
            </v-tab-item>
        </v-tabs>

    <LabourMarket />
    </div>
</template>

<script>
import LabourMarket from "./dashboard_components/LabourMarket"
import ProjectHistory from "./dashboard_components/ProjectHistory"
import ProjectMarketplace from "./dashboard_components/ProjectMarketplace"

import { mapGetters } from "vuex";

export default {
    data() {
        return {
            tab: null,
        }
    },
    components: {
        LabourMarket,
        ProjectHistory,
        ProjectMarketplace,
    },
    computed: {
        ...mapGetters([
          "loadedGame",
          "projects",
          "clients",
          "seniorDevelopers",
          "juniorDevelopers"
        ])
    },
    
}
</script>

<style>

</style>