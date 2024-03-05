import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { useFonts, Montserrat_400Regular } from '@expo-google-fonts/montserrat'
import { AntDesign, Ionicons } from '@expo/vector-icons'
import React, { useState, useEffect } from 'react'

export function Success({ navigation }) {

    const [hideValor, setHideValor] = useState(true)

    function openReturnHome() {
        navigation.navigate('userLav')
    }

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
            <View style={styles.body}>
                <Text style={styles.txtMsg}>Sua recarga foi efetuada {'\n'}com sucesso!</Text>

                <Image style={styles.iconSuccess}
                    source={require("../../assets/success_icon.png")}
                />

                <TouchableOpacity style={styles.btnReturnHome} onPress={openReturnHome}>
                    <Text style={styles.txtReturnHome}>Voltar ao Início</Text>
                </TouchableOpacity>
            </View>

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
    txtTitle: {
        paddingTop: 25,
        paddingLeft: 16,
        fontSize: 20,
        color: '#002F6E',
        fontWeight: '500',
        marginBottom: 13,
    },
    container: {
        alignItems: 'center',
        backgroundColor: "#FFF",
        margin: 20,
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 35,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#FFF',
        elevation: 4,
    },
    iconSuccess: {
        margin: 20,
        height: 110,
        width: 110,
    },
    body: {
        alignItems: 'center'
    },
    txtMsg: {
        textAlign: 'center',
        marginTop: 120,
        marginBottom: 10,
        fontSize: 20,
    },
    btnReturnHome: {
        backgroundColor: '#2BB673',
        paddingLeft: 125,
        paddingRight: 125,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#FFF',
        marginTop: 210,
    },
    txtReturnHome: {
        color: '#FFF',
        fontWeight: '500'
    }
})