import axios from 'axios';

const $api = axios.create({
    baseURL: "http://37.140.195.252:5001/api"
})

export default $api