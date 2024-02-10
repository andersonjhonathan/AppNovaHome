import api from './api'

export const user_login = async data => {

    try {
        const result = await api("/omo-ole/v1/login", {
            method: 'post',
            headers: {
                'content-Type': 'application/json',
                'ocp-apim-subscription-key': '54c3966e447e4f929aaa937ee4ace241',
            },
            data: data
        })
        return result
    } catch (error) {
        return error.response.data
    }

    

    // try {
    //     const dados = JSON.stringify({
    //         "email":"andre.bejo@gmail.com",
    //         "password":"W@sh2020"
    //     })
    //     const config = {
    //         method: 'post',
    //         maxBodyLength: Infinity,
    //         url: 'https://hml-washandgo.azure-api.net//omo-ole/v1/login',
    //         headers: {
    //             'content-Type': 'application/json',
    //             'ocp-apim-subscription-key': '54c3966e447e4f929aaa937ee4ace241',
    //         },
    //         data: dados
    //     }
    //     const result = await axios.request(config)
    //     return result
    // } catch (error) {
    //     console.log(data)
    //     return error.response.data
    // }
}