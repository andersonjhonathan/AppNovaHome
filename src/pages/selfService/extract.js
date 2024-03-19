import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native'
import { useFonts, Montserrat_400Regular, Montserrat_500Medium } from '@expo-google-fonts/montserrat'
import { AntDesign, Ionicons } from '@expo/vector-icons'
import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Extract() {

    const [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_500Medium
    })

    if (!fontsLoaded) {
        return null
    }

    return (
        <View style={styles.container}>
            <View style={styles.modal}>
                <Text style={styles.txtLocal}>Copan | SP - Centro</Text>
                <View style={styles.header}>
                    <Image
                        source={require("../../assets/icon_searchNew.png")}
                        style={styles.icon_searchNew}
                    />
                    <Text style={styles.txtInf}>Você tem:{'\n'}<Text style={styles.txtValor}>R$ 127,00</Text></Text>
                    <Ionicons name='reload-outline' size={25} style={styles.iconLoad} />
                </View>
            </View>
            <Text style={styles.txtCons}>Total consumido:     <Text style={styles.txtSaldoCons}>R$ 0,00</Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        alignItems: 'center'
    },
    icon_searchNew: {
        width: 85,
        height: 85,
        marginLeft: 25,
        marginTop: 13,
    },
    txtLocal: {
        color: '#01B1EC',
        fontWeight: '500',
        marginLeft: 8,
        marginTop: 15,
    },
    txtInf: {
        color: '#01B1EC',
        fontSize: 10,
        textAlign: 'right',
        position: 'absolute',
        marginLeft: 150,
    },
    txtValor: {
        fontSize: 16,
        fontWeight: '500'
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    iconLoad:{
        position: 'absolute',
        margin: 225,
        color: '#01B1EC'
    },
    txtCons:{
        marginTop: 545,
        color: '#01B1EC',
        fontSize: 18,
        paddingLeft: 85,
        paddingRight: 85,
        paddingTop: 12,
        paddingBottom: 12,
        backgroundColor: '#DCDCDC'
    },
    txtSaldoCons:{
        fontWeight: '500',
        color: '#E93F66'
    }
})