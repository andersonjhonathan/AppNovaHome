import axios from 'axios'

const api = axios.create({
    baseURL: 'https://hml-washandgo.azure-api.net/'
})

export default api