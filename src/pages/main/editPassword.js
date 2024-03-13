import { Text, View, StyleSheet, TouchableOpacity, SafeAreaView, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useFonts, Montserrat_400Regular, Montserrat_500Medium } from '@expo-google-fonts/montserrat'
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react'
import { FloatingLabelInput } from 'react-native-floating-label-input'
import { AntDesign } from '@expo/vector-icons'

export function EditPassword({ navigation }) {

    const [phone, setPhone] = useState('')
    const [btnSend, setBtnSend] = useState(true)

    function openCodPhone() {
        navigation.navigate('newPassword')
    }

    const [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_500Medium
    })

    if (!fontsLoaded) {
        return null
    }

    return (
        <View style={styles.body}>

            <Text style={styles.txtProfile}>Redefir senha</Text>

            <Text style={styles.txtSubtitle}>Vamos enviar um código via SMS para {'\n'}você redefinir sua senha. Insira abaixo o {'\n'}número do seu celular.</Text>

            <View style={styles.container}>
                <View style={styles.inputFloating}>
                    <FloatingLabelInput
                        label="Celular"
                        value={phone}
                        staticLabel
                        hintTextColor={'#aaa'}
                        mask="(99) 99999-9999"
                        hint="Insira seu celular"
                        keyboardType="numeric"
                        containerStyles={styles.input}

                        customLabelStyles={{
                            colorBlurred: '#0046FE',
                            fontSizeFocused: 12,
                        }}
                        labelStyles={{
                            backgroundColor: '#F5F8FF',
                            marginVertical: -5,
                            paddingHorizontal: 5,
                        }}
                        inputStyles={{
                            color: 'blue',
                            paddingHorizontal: 5,
                        }}
                        onChangeText={value => {
                            setPhone(value);
                            setBtnSend()
                        }}
                    />
                </View>
            </View>

            {
                btnSend ? (
                    <TouchableOpacity style={styles.btnSendCod1} disabled>
                        <Text style={styles.txtBtnSendCod}>Enviar código</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity style={styles.btnSendCod2} onPress={openCodPhone}>
                        <Text style={styles.txtBtnSendCod}>Enviar código</Text>
                    </TouchableOpacity>
                )
            }

        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#F5F8FF'
    },
    container: {
        flex: 1,
        backgroundColor: '#F5F8FF'
    },
    inputFloating: {
        padding: 10,
        marginTop: 2,
        width: 359,
        height: 55,
    },
    input: {
        borderColor: "#D0D5DD",
        borderRadius: 7,
        borderWidth: 2,
        width: "90%",
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        marginBottom: 28,
        marginLeft: 10,
        marginRight: -20
    },
    txtProfile: {
        fontSize: 20,
        color: '#0046FE',
        marginTop: 28,
        marginLeft: 18,
        marginBottom: 5,
        fontFamily: 'Montserrat_500Medium'
    },
    txtSubtitle: {
        marginTop: 10,
        margin: 20,
        marginBottom: 25,
        fontSize: 17,
        color: '#0046FE',
        fontFamily: 'Montserrat_400Regular'
    },
    btnSendCod2: {
        marginTop: 90,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: '#0046FE',
        padding: 15,
        borderRadius: 6,
        alignItems: 'center',
    },
    btnSendCod1: {
        marginTop: 90,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: '#CED4DA',
        padding: 15,
        borderRadius: 6,
        alignItems: 'center',
    },
    txtBtnSendCod: {
        color: '#FFF',
        fontFamily: 'Montserrat_400Regular'
    }
})