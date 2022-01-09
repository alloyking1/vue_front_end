import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        user: {},
        isLoggedIn: false
    },
    mutations: {
        addUser(state, user) {
            state.user = user
        },
        isLoggedInMutation(state, status) {
            state.isLoggedIn = status
            console.log(status)
        }
    },
    plugins: [createPersistedState()]
})

export default store;