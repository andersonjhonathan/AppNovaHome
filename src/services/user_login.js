import api from './api'

export const user_login = async data => {

    try {
        const result = await api("/omo-ole/v1/login", {
            method: 'post',
            headers: {
                'content-Type': 'application/json',
                'ocp-apim-subscription-key': '54c3966e447e4f929aaa937ee4ace241',
                'Accept':'*',
                'Access-Control-Allow-Origin':'*'
            },
            data: data
        })
        return result
    } catch (error) {
        return error.response.data
    }
}