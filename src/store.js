import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        user: {}
    },
    mutations: {
        addUser(state, user) {
            state.user = user
        }
    },
    plugins: [createPersistedState()]
})

export default store;