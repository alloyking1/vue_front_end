import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        user: {},
        isLoggedIn: true,
        merchant_id: ''
    },
    mutations: {
        addUser(state, user) {
            state.user = user
        },
        isLoggedInMutation(state, status) {
            state.isLoggedIn = status
            console.log(status)
        },
        updateMerchantId(state, id) {
            state.user.m_id = id
        }
    },
    plugins: [createPersistedState()]
})

export default store;