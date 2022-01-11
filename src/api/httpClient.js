import Vue from 'vue'
import VueCookie from 'vue-cookie'
import axios from "axios";

Vue.use(VueCookie);

const baseDomain = process.env.VUE_APP_BASE_URL || "http://localhost:1337";
const baseURL = `${baseDomain}/api`;

const httpsClient = axios.create({
    baseURL,
    timeout: 70000, // indicates, 5000ms ie. 5 second
    headers: {
        "Content-Type": "application/json"
    }
});

// Adding token to request using interceptors
httpsClient.interceptors.request.use(
    config => {

        // let token = localStorage.getItem("key");
        let token = VueCookie.get("login");
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export default httpsClient;
