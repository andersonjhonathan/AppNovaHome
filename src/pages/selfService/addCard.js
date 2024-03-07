import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native'
import { useFonts, Montserrat_400Regular } from '@expo-google-fonts/montserrat'
import { FloatingLabelInput } from 'react-native-floating-label-input'
import { AntDesign, Ionicons } from '@expo/vector-icons'
import React, { useState } from 'react'

export function AddCard() {

    const [hideValor, setHideValor] = useState(true)

    const [numberCard, setNumberCard] = useState('')
    const [nameCard, setNameCard] = useState('')
    const [validCard, setValidCard] = useState('')
    const [cvv, setCvv] = useState('')

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
                <Text style={styles.txtAddCard}>Cadastre aqui seu cartão</Text>
                <Text style={styles.txtsubText}>Escreva as informações do mesmo modo que elas {'\n'}estão cadastradas no cartão.</Text>

                <Text style={styles.txtNumberCard}>Número do cartão</Text>
                <TextInput
                    style={styles.inputNumberCard}
                    onChangeText={setNumberCard}
                    value={numberCard}
                    placeholder="0000 0000 0000 0000"
                    keyboardType="numeric"
                />
                <Image
                    source={require("../../assets/logo_bandeiraCard.png")}
                    style={styles.logoBandeiraCard}
                />

                <Text style={styles.txtNameCard}>Nome do cartão</Text>
                <TextInput
                    style={styles.inputNameCard}
                    onChangeText={setNameCard}
                    value={nameCard}
                    placeholder="Nome do titular"
                />

                <View style={styles.inputsRow}>
                    <Text style={styles.txtValidAndCvv}>Validade</Text>
                    <Text>Código de segurança</Text>
                </View>

                <View style={styles.inputsRow}>
                    <TextInput
                        style={styles.inputValidCard}
                        onChangeText={setValidCard}
                        value={validCard}
                        placeholder="00/00"
                        keyboardType="numeric"
                    />

                    <TextInput
                        style={styles.inputCvv}
                        onChangeText={setCvv}
                        value={cvv}
                        placeholder="CVV"
                        keyboardType="numeric"
                    />
                </View>

                <TouchableOpacity style={styles.btnAddCard}>
                    <Text style={styles.txtCard}>Cadastrar cartão</Text>
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
    txtAddCard: {
        marginTop: 20,
        marginLeft: 20,
        marginBottom: 7,
        fontSize: 20,
        color: '#002F6E'
    },
    txtsubText: {
        marginLeft: 20,
        fontSize: 14,
        color: '#495057'
    },
    inputNumberCard: {
        backgroundColor: '#FFF',
        borderWidth: 1.3,
        borderColor: '#BEC4CC',
        marginTop: 2,
        marginBottom: 3,
        marginLeft: 20,
        marginRight: 20,
        padding: 13,
        borderRadius: 8,
    },
    inputNameCard: {
        backgroundColor: '#FFF',
        borderWidth: 1.3,
        borderColor: '#BEC4CC',
        marginTop: 2,
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 20,
        padding: 13,
        borderRadius: 8,
    },
    inputValidCard: {
        backgroundColor: '#FFF',
        borderWidth: 1.3,
        borderColor: '#BEC4CC',
        marginTop: 5,
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 1,
        paddingTop: 13,
        paddingBottom: 13,
        paddingLeft: 13,
        paddingRight: 110,
        borderRadius: 8,
    },
    inputCvv: {
        backgroundColor: '#FFF',
        borderWidth: 1.3,
        borderColor: '#BEC4CC',
        marginTop: 5,
        marginBottom: 10,
        marginLeft: 18,
        marginRight: 10,
        paddingTop: 13,
        paddingBottom: 13,
        paddingLeft: 13,
        paddingRight: 126,
        borderRadius: 8,
    },
    btnAddCard: {
        margin: 20,
        backgroundColor: '#2BB673',
        padding: 10,
        borderRadius: 7,
        alignItems: 'center',
    },
    txtCard: {
        color: '#FFF',
        fontWeight: '500'
    },
    inputsRow: {
        flexDirection: 'row',
    },
    txtNumberCard: {
        marginTop: 10,
        marginBottom: 2,
        marginLeft: 20,
        color: '#343A40'
    },
    txtNameCard: {
        marginTop: 10,
        marginBottom: 2,
        marginLeft: 20,
        color: '#343A40'
    },
    txtValidAndCvv: {
        marginLeft: 20,
        marginRight: 128,
    },
    logoBandeiraCard:{
        position: 'absolute',
        width: 30,
        height: 25,
        marginTop: 138,
        marginLeft: 325,
    }
})