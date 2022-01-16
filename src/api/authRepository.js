
import httpClient from './httpClient';

export default {

    async userRegisterApiCall(data) {
        return await httpClient.post('/auth/local/register', data);
    },

    async userLoginApiCall(data) {

        return await httpClient.post('/auth/local', data);

    },

    async userMidUpdateApiCall(userId, data) {
        return await httpClient.put(`/users/${userId}`, data)
    },
    async passwordUpdateRequest(data) {
        return await httpClient.post('/auth/forgot-password', data)
    },

    async passwordResetRequest(data) {
        return await httpClient.post('/auth/reset-password', data);
    }
}