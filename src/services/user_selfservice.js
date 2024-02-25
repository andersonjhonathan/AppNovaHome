import api from './api'

export const user_selfService = async data => {

    try {
        const result = await api("/omo-ole/v1/loja", {
            method: 'post',
            headers: {
                'content-Type': 'application/json',
                'ocp-apim-subscription-key': '54c3966e447e4f929aaa937ee4ace241',
                'access-token': '0nHc7ppplF-kDIXsm9tMmQ',
                'client': 'c5YNT2RMrE85oKxKqolbHg'
            },
            data: data
        })
        return result
    } catch (error) {
        return error.response.data
    }
}