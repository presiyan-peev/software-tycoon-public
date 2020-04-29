/*
    This file stores data that relates to loading or starting a new game
*/

const state = {
    savedGames: [],                           // stores the fetched games from Firebase. used only in LoadGames component
    temp_NewGame: {}                          // stores the temp data, the user is creating a new game. initialized in CreatePlayer component, dispatched to Firebase in StartNewGame page
};
const getters = {
    savedGames: (state) => state.savedGames,
    temp_NewGame: (state) => state.temp_NewGame,
};
const mutations = {

    SET_SAVED_GAMES(state, val) {
        state.savedGames.push(val)
    },
    ADD_PLAYER_TO_GAME(state, val) {
        state.temp_NewGame.player = val
    },
    ADD_DETAILS_TO_GAME(state, val) {
        Object.keys(val).forEach((key) => {
            state.temp_NewGame[key] = val[key]
          })
    }
};
const actions = {
    async createNewGame({ rootState }, game) {
      
        await rootState.user.userPrivateCollection.collection("saved_games").doc(game.id).set(game).then(function() {
            console.log("Document successfully written!");
        }); 
    },
    
    /* wait for changes on the database */
    fetchSavedGames({ dispatch, rootState }) {
        
        rootState.user.userPrivateCollection.collection('saved_games').onSnapshot(response => {
            const changes = response.docChanges();              
            changes.forEach(change => {
                if (change.type === 'added') {
                    dispatch('setSavedGames', {
                        ...change.doc.data(),
                        id: change.doc.id, 
                    })
                }  
            })
        }) 
    },

    addPlayerToNewGame({ commit }, player) {
        commit('ADD_PLAYER_TO_GAME', player)
    },

    addGameDetails({ commit }, gameDetails) {
        commit('ADD_DETAILS_TO_GAME', gameDetails)
    },

    setSavedGames({ commit }, game) {
        commit('SET_SAVED_GAMES', game)
    
    },
};

export default {
    state,
    getters,
    actions,
    mutations
}