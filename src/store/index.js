import Vue from 'vue'
import Vuex from 'vuex'
import game from './modules/game'
import gameCalculations from './modules/gameCalculations'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    game,
    gameCalculations
  },
  
})
