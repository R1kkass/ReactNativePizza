import axios from 'axios';

const $api = axios.create({
    baseURL: "http://37.140.195.252:5001/api",
    headers: {
        "Content-Type": "multipart/form-data"
    },
    withCredentials: true
})

export default $api