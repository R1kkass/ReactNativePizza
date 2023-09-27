import axios from "axios";
import * as SecureStore from "expo-secure-store";

let token = null;

(async function () {
    await SecureStore.getItemAsync("token");
})();

const $api = axios.create({
    baseURL: "http://37.140.195.252:5001/api",
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
    },
    withCredentials: true,
});

export default $api;
