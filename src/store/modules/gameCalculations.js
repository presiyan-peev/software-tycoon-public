/*
    This file contains data that relaties to the game logic
*/

const state = {
    loadedGame: null,
    projects: [],
    clients: [],
    developers: [],
    loadedMeeting: null,
}

const getters = {
    loadedGame: (state) => state.loadedGame,
    projects: (state) => state.projects,
    clients: (state) => state.clients,
    developers: (state) => state.developers,
    loadedMeeting: (state) => state.loadedMeeting,
}

const mutations = {
    SET_LOADED_GAME(state, val) {
        state.loadedGame = val
    },
    ADD_PROJECT(state, val) {
        state.projects.push(val)
    },
    ADD_CLIENT(state, val) {
        state.clients.push(val)
    },
    ADD_DEVELOPER(state, val) {
        state.developers.push(val)
    },
    LOAD_MEETING(state, val) {
        state.loadedMeeting = val
    },
    FLUSH_MEETING(state) {
        state.loadedMeeting = null
    }
}

const actions = {
    setLoadedGame({ commit }, loadGame) {
        commit('SET_LOADED_GAME', loadGame)  
    },
    addProject({ commit }, newProject) {
        commit('ADD_PROJECT', newProject)  
    },
    addClient({ commit }, newClient) {
        commit('ADD_CLIENT', newClient)  
    },
    addDeveloper({ commit }, newSrDev) {
        commit('ADD_DEVELOPER', newSrDev)  
    },
    loadMeeting({ commit }, meetingDetails) {
        commit('LOAD_MEETING', meetingDetails)  
    },
    flushMeeting({ commit }) {
        commit('FLUSH_MEETING')
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}