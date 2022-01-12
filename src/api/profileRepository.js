import httpClient from './httpClient';

export default {
    updateUserProfileById(data, id) {
        return httpClient.put(`/users/${id}`, data)
    }
}