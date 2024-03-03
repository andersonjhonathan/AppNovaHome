import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native'
import { useFonts, Montserrat_400Regular } from '@expo-google-fonts/montserrat'
import { AntDesign, Ionicons } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react'

export function PaymentPix() {

    const [hideValor, setHideValor] = useState(true)
    const [value, setValue] = useState('')

    useEffect(() => {
        getDataValor()
    }, [])

    const [fontsLoaded] = useFonts({
        Montserrat_400Regular,
    })

    if (!fontsLoaded) {
        return null
    }

    async function getDataValor() {
        const response = await AsyncStorage.getItem("@value")
        if (response) {
            setValue(response)
        }
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
            <View>
                <View style={styles.container}>
                    <Image style={styles.logoPix}
                        source={require('../../assets/icons8-foto-34.png')}
                    />
                    <Text style={styles.txtRecarga}>Valor da recarga</Text>
                    <Text style={styles.txtValor}>R${value}</Text>

                    <Text style={styles.txtSubRecarga}>Copie o código para pagar pelo Pix em {'\n'}qualquer aplicativo habilitado:</Text>
                    <View style={styles.containerCod}>
                        <Text>19072498167289br.gov...</Text>
                        <Ionicons style={styles.iconCopy} name='copy-outline' color='#000' size={24} />
                    </View>

                    <Text style={styles.txtMessage}>Faça o pagamento em até <Text style={styles.txtMinuts}>10 minutos</Text>, após {'\n'}esse tempo o pedido será cancelado.</Text>

                    <Text style={styles.txtMessageTwo}>Assim que você pagar, o valor ficará disponível {'\n'}em seu saldo para usar.</Text>
                </View>
                <TouchableOpacity style={styles.btnCopyCod}>
                    <Text style={styles.txtBtnCopy}>Copiar código</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnShare}>
                    <Text style={styles.txtBtnShare}>Compartilhar</Text>
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
    txtValor: {
        fontSize: 35,
        fontWeight: 'bold',
        paddingBottom: 10,
    },
    containerCod: {
        backgroundColor: "#FFF",
        marginTop: 15,
        marginBottom: 25,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 15,
        paddingBottom: 15,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#BEC4CC',
        borderStyle: 'dashed',
        flexDirection: 'row',
        alignItems: 'center'
    },
    logoPix: {
        width: 35,
        height: 35,
    },
    txtRecarga: {
        marginTop: 10,
    },
    txtSubRecarga: {
        borderTopWidth: 1,
        borderColor: '#DEE2E6',
        paddingTop: 10,
        textAlign: 'center',
        fontWeight: '400',
        fontSize: 15,
    },
    iconCopy: {
        marginLeft: 85,
    },
    txtMessage: {
        textAlign: 'center',
        color: '#707070'
    },
    txtMinuts: {
        fontWeight: '600'
    },
    txtMessageTwo: {
        textAlign: 'center',
        color: '#707070',
        marginTop: 15,
    },
    btnCopyCod: {
        backgroundColor: '#2BB673',
        margin: 20,
        marginTop: 5,
        marginBottom: 8,
        padding: 13,
        borderRadius: 7,
        borderWidth: 1,
        borderColor: '#FFF',
        alignItems: 'center',
    },
    txtBtnCopy: {
        color: '#FFF',
        fontWeight: '500'
    },
    btnShare: {
        backgroundColor: '#FFF',
        margin: 20,
        marginTop: 5,
        padding: 13,
        borderRadius: 7,
        borderWidth: 1,
        borderColor: '#2BB673',
        alignItems: 'center',
    },
    txtBtnShare: {
        color: '#2BB673',
        fontWeight: '500'
    }
})