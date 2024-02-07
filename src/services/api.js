import axios from 'axios'

const api = axios.create({
    baseURL: 'https://hml-washngoapi.azurewebsites.net/'
})

export default api