import firebase from "firebase"

//const fb = require('../../firebaseConfig.js');

const state = {
    user: null,                                 // stores the information about the current user
    userPrivateCollection: null                 // references the Firebase doc that stores all collections related to this user, e.g. Saved Games and Logs
};
const getters = {
    user: (state) => state.user,
    userPrivateCollection: (state) => state.userPrivateCollection
};
const mutations = {
    SET_USER(state, val) {
        state.user = val
    },
    SET_USER_COLLECTION(state, val) {
        state.userPrivateCollection = firebase.firestore().collection("users").doc(val.uid)
    }
};
const actions = {

    /* Function that logs in the user; stolen from FB documentation */
    setUserAuth({ commit, dispatch }) {
        firebase.auth().onAuthStateChanged(user => {
            commit('SET_USER', user);
            commit('SET_USER_COLLECTION', user);
            if(user) {
                dispatch('addUserLog', user.uid);
                
            }
        })
    },

    /* This function adds logs to the database whenever a user logs in */

            /* REMOVE COMMENTS BELOW WHEN IN PRODUCTION */

    async addUserLog() {
        return; /* 
        let logData = {
            id: Date.now().toString(),
            stringExample: "Variable",
            booleanExample: true,
        };

        await state.userPrivateCollection.collection("log_of_user_logins").doc(logData.id).set(logData).then(function() {
            console.log("Document successfully written!");
        }); */
    },
};

export default {
    state,
    getters,
    actions,
    mutations
}