
import httpClient from './httpClient';

export default {

    async createNewMerchantApiCall(data) {
        return await httpClient.post('/merchants', data);
    },

    async getMerchantByIdApiCall(userId) {
        return await httpClient.get(`/merchants/${userId}`);
    },

    async updateMerchantByIdApiCall(userMid, data) {
        return await httpClient.put(`/merchants/${userMid}`, data.data);
    },

    async getAllMerchantApiCall() {
        return await httpClient.get('/merchants');
    },

    async searchMerchantApiCall(data) {
        return await httpClient.post('/search/merchant', data);
    },

}