import axios from 'axios'

const api = axios.create({
    baseURL: 'https://hml-washandgo.azure-api.net/',
    responseType: 'json',
    withCredentials: true
})

export default api