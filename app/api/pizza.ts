import $api from "../axios"

const PizzaApi = {
    async get() {
        const res = await $api.get('/pizza/getall')
        return res.data
    }
}

export default PizzaApi