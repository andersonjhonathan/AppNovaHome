import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native'
import { useFonts, Montserrat_400Regular } from '@expo-google-fonts/montserrat'
import { AntDesign, Ionicons } from '@expo/vector-icons'
import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Extract() {

    const [hideValor, setHideValor] = useState(true)

    const [fontsLoaded] = useFonts({
        Montserrat_400Regular,
    })

    if (!fontsLoaded) {
        return null
    }

    return (
        <View>
            <View style={styles.modal}>
                <View style={styles.header}>
                    <View style={styles.texts}>
                        <Text style={styles.txtSaldo}>Saldo atual</Text>

                        <View style={styles.txtBtnSaldo}>
                            {
                                hideValor ? (
                                    <Text style={styles.valorSaldo}>R$ 100,00</Text>
                                ) : (
                                    <Text style={styles.valorSaldo}>R$ *****</Text>
                                )
                            }
                            <TouchableOpacity style={styles.btnIcon} onPress={() => setHideValor(!hideValor)}>
                                {
                                    hideValor ?
                                        <Ionicons name='eye' color='#FFF' size={24} />
                                        :
                                        <Ionicons name='eye-off-outline' color='#FFF' size={24} />
                                }
                            </TouchableOpacity>
                            <Text style={styles.txtLocal}>
                                Porto Alegre | Zaffari {'\n'}Teresópolis
                            </Text>
                        </View>

                    </View>

                </View>
            </View>

            <TouchableOpacity style={styles.btnSearch}>
                <Image source={require("../../assets/search_icon.png")} style={styles.iconSearch} />
                <Text style={styles.txtBtnSearch}>Digite a peça desejada</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    modal: {
        backgroundColor: '#01B1EC',
        borderBottomRightRadius: 18,
        borderBottomLeftRadius: 18,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
        marginTop: 5,
        width: '90%',
        borderTopWidth: 1,
        borderColor: '#DEE2E6'
    },
    texts: {
        marginTop: 20,
    },
    btnSaldo: {
        marginTop: 25,
        color: '#FFFFFF',
        borderRadius: 9,
        borderWidth: 1,
        borderColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        height: 38,
    },
    txtSaldo: {
        color: '#FFFFFF',
        fontSize: 14,
    },
    valorSaldo: {
        color: '#FFFFFF',
        fontSize: 20,
        fontFamily: 'Montserrat_400Regular'
    },
    btnIcon: {
        paddingLeft: 5,
        paddingTop: 1,
    },
    txtBtnSaldo: {
        flexDirection: 'row',
    },
    txtLocal: {
        color: '#FFFFFF',
        fontWeight: '500',
        fontSize: 16,
        marginLeft: 75,
        marginTop: -15,
    },
    btnSearch: {
        margin: 20,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 2,
        paddingRight: 10,
        borderWidth: 0.8,
        borderRadius: 6,
        flexDirection: 'row'
    },
    txtBtnSearch: {
        color: '#717D96',
        marginLeft: 10,
    },
    iconSearch: {
        width: 20,
        height: 20,
        marginLeft: 13,
    },
})