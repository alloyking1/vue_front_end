
import httpClient from './httpClient';

export default {

    async createNewMerchantApiCall(data) {
        return await httpClient.post('/merchants', data);
    },

}