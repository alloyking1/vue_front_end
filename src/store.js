import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

import authRepository from './api/authRepository';
import merchantRepository from './api/merchantRepository'
import profileRepository from './api/profileRepository';

import VueCookie from 'vue-cookie'
Vue.use(VueCookie);

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        user: {},
        isLoggedIn: true,
        merchant_id: ''
    },

    /**
     * make update state
     */
    mutations: {
        addUser(state, user) {
            state.user = user
        },
        isLoggedInMutation(state, status) {
            state.isLoggedIn = status
        },
        updateMerchantId(state, id) {
            state.user.m_id = id
        }
    },


    /**
     * make api calls and commit mutations
     */
    actions: {
        async userLoginAction({ commit }, data) {

            const res = await authRepository.userLoginApiCall(data)
            commit("addUser", res.data.user)
            commit("isLoggedInMutation", true)
            return res

        },

        async userRegisterAction(context, data) {

            const registerCall = await authRepository.userRegisterApiCall(data)
            context.commit("addUser", registerCall.data.user)
            context.commit("isLoggedInMutation", true)

            VueCookie.set("login", registerCall.data.jwt, 1);
            if (registerCall) {
                const merchantData = {
                    Email: data.email,
                    users_permissions_user: context.state.user.id  //revisit
                }
                await context.dispatch("createNewMerchantAction", { data: merchantData })

                return {
                    "register": "User created",
                }
            }
        },

        async createNewMerchantAction(context, data) {
            const res = await merchantRepository.createNewMerchantApiCall(data)
            return res;
            // await context.dispatch("updateUserMidAction", { m_id: res.data.data.id })
            // await context.commit("updateMerchantId", res.data.data.id) //should be removed


        },

        async updateUserMidAction(context, data) {
            return await authRepository.userMidUpdateApiCall(context.state.user.id, data)

        },

        async getMerchantByIdAction({ state }) {
            return await merchantRepository.getMerchantByIdApiCall(state.user.m_id)
        },

        async updateMerchantByIdAction(context, data) {
            return await merchantRepository.updateMerchantByIdApiCall(context.state.user.m_id, data)
        },

        async getAllMerchantAction() {
            return await merchantRepository.getAllMerchantApiCall()
        },
        async searchMerchantAction(context, data) {
            return await merchantRepository.searchMerchantApiCall(data)
        },

        async updateUserProfileByIdAction(context, data) {
            return await profileRepository.updateUserProfileById(data, context.state.user.id)
        },

        async passwordUpdateRequest(context, data) {
            return await authRepository.passwordUpdateRequest(data);

        },
        async passwordResetRequest(context, data) {
            return await authRepository.passwordResetRequest(data)
        }
    },

    plugins: [createPersistedState()]
})

export default store;