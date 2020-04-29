<template>
    <div>

        Create a new company
        
        <v-form class="px-3">
            <v-text-field label="Your Company's Name" v-model="title"></v-text-field>


            <!-- The Slider for setting CEO salary -->
            <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                    <span v-on="on">
                        <v-slider
                            v-model="salaryCEO"
                            class="align-center"
                            :max="startingMoney/1.35"
                            :min="minimalSalary/0.70"
                            hide-details
                        >
                            <template v-slot:append>
                                <p>{{ salaryCEO }}</p>
                            </template>
                        </v-slider>
                    </span>
                </template>
                <span>
                    Hello
                </span>
            </v-tooltip>

            <!-- The Slider for showing CEO assistant salary; it is calculated, being 70% of CEO's salary -->
            <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                    <span v-on="on">
                        <v-slider
                            disabled
                            class="align-center"
                            :max="startingMoney"
                            :min="minimalSalary"
                            :value="salaryCEOasst"
                            hide-details
                        >
                            <template v-slot:append>
                                <p>{{ salaryCEOasst }}</p>
                            </template>
                        </v-slider>
                    </span>
                </template>
                <span>
                    Hello
                </span>
            </v-tooltip>

            <!-- The Slider for showing CTO salary; it is calculated, being 170% of CEO's salary -->
            <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                    <span v-on="on">
                        <v-slider
                            disabled
                            class="align-center"
                            :max="startingMoney"
                            :min="minimalSalary"
                            :value="salaryCTO"
                            hide-details
                        >
                            <template v-slot:append>
                                <p>{{ salaryCTO }}</p>
                            </template>
                        </v-slider>
                    </span>
                </template>
                <span>
                    This is the salary of company's CTO, your brother. As he is a Senior developer, it's agreed that his salary is initially 35% more than yours
                </span>
            </v-tooltip>
            
        </v-form>
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    data() {
        return {
            title: '',
            salaryCEO: 3000,
            prestige: 0,
            minimalSalary: 700,
            startingMoney: 30000
        }
    },
    methods: {
        ...mapActions(['addGameDetails'], {}),
    },
    computed: {
        salaryCTO() { return Math.ceil(this.salaryCEO*1.35) },
        salaryCEOasst() { return Math.ceil(this.salaryCEO*0.70) }

    },
    beforeDestroy() {

        let tempNewGame = {
            id: Date.now().toString(),
            title: this.title,
            lastPlayed: Date.now(),
            company: {
                name: this.title,
                successfulProjects: 0,
                failedProjects: 0,
                rent: 500,
                salaryCEO: this.salaryCEO,                              //Salary of CEO
                salaryCTO: this.salaryCTO,                     //Salary of CTO
                salaryCEOasst: this.salaryCEOasst                  //Salary of CEO Assistant

            }
        }
        this.addGameDetails(tempNewGame)
    }
}
</script>

<style>

</style>