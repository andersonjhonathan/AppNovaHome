import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import ListHorizontal from '../../components/ListHorizontal/index'
import { useFonts, Montserrat_400Regular, Montserrat_600SemiBold, Montserrat_500Medium } from '@expo-google-fonts/montserrat'
import React, { useState, useEffect } from 'react'
import api from '../../services/api'

const slides = [
    {
        key: '1',
        title: 'Texto 1',
        image: require('../../assets/slider_1.png')
    },
    {
        key: '2',
        title: 'Texto 2',
        image: require('../../assets/slider_2.png')
    },
    {
        key: '3',
        title: 'Texto 3',
        image: require('../../assets/slider_3.png')
    },
]

export function MainScreen({ navigation }) {

    // const [name, setName] = useState('')

    // const getName = async data => {
    //     try {
    //         const result = await api("/omo-ole/v1/login", {
    //             method: 'post',
    //             headers: {
    //                 'content-Type': 'application/json',
    //                 'ocp-apim-subscription-key': '54c3966e447e4f929aaa937ee4ace241',
    //             },
    //             data: data
    //         })
    //         setName(result)
    //         return result
    //     } catch (error) {
    //         return error.response.data
    //     }
    //     }

    // useEffect(() => {
    //         getName()
    //         console.log(name)
    //         // setName(data)
    // }, [])

    function openSelfService() {
        navigation.navigate('selfService')
    }

    const [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_600SemiBold,
        Montserrat_500Medium
    })

    if (!fontsLoaded) {
        return null
    }

    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.header}>
                <Text style={styles.headerText}>Olá, Andre Bejo!</Text>
                <Image
                    source={require("../../assets/logo_icon.png")}
                    style={styles.logoIcon}
                />
            </SafeAreaView>

            <View>
                <ListHorizontal data={slides} />
            </View>

            <Text style={styles.txtSubtitle}>Qual serviço você quer usar hoje?</Text>

            <TouchableOpacity style={styles.btnCompartilhada}>
                <Image
                    source={require("../../assets/buildingIcon.png")}
                    style={styles.buildingIcon}
                />
                <Text style={styles.txtCompartilhada}>OMO Lavanderia {'\n'}Compartilhada</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnSelfService} onPress={openSelfService}>
                <Image
                    source={require("../../assets/washerIcon.png")}
                    style={styles.washerIcon}
                />
                <Text style={styles.txtSelf}>Self-Service</Text>
            </TouchableOpacity>

        </View>

    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    header: {
        backgroundColor: "#0046FE",
        paddingTop: 5,
        paddingBottom: 9,
        paddingLeft: 14,
        paddingRight: 14,
        flexDirection: 'row',
        alignItems: 'center',

    },
    headerText: {
        color: '#FFF',
        fontSize: 20,
        fontFamily: 'Montserrat_500Medium',
        paddingTop: 15,
        paddingBottom: 10,
    },
    logoIcon: {
        position: 'absolute',
        width: 90,
        height: 60,
        marginLeft: 275,
        marginBottom: 5,

    },
    btnCompartilhada: {
        padding: 25,
        backgroundColor: '#0046FE',
        marginLeft: 15,
        marginRight: 15,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
    },
    btnSelfService: {
        padding: 25,
        backgroundColor: '#0046FE',
        marginLeft: 15,
        marginRight: 15,
        marginTop: 15,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center'
    },
    txtCompartilhada: {
        color: '#FFF',
        fontSize: 20,
        fontFamily: 'Montserrat_400Regular'

    },
    txtSelf: {
        color: '#FFF',
        fontSize: 20,
        fontFamily: 'Montserrat_400Regular'
    },
    txtSubtitle: {
        fontSize: 18,
        paddingTop: 25,
        paddingBottom: 15,
        paddingLeft: 16,
        fontFamily: 'Montserrat_400Regular'
    },
    buildingIcon: {
        width: 45,
        height: 45,
        marginRight: 15,

    },
    washerIcon: {
        width: 30,
        height: 38,
        marginRight: 15,


    }
})