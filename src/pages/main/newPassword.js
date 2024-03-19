import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useFonts, Montserrat_400Regular, Montserrat_500Medium } from '@expo-google-fonts/montserrat'
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect, useRef } from 'react'
import { FloatingLabelInput } from 'react-native-floating-label-input'
import { AntDesign } from '@expo/vector-icons'

export function NewPassword() {

    const pin1Ref = useRef(null)
    const pin2Ref = useRef(null)
    const pin3Ref = useRef(null)
    const pin4Ref = useRef(null)
    const pin5Ref = useRef(null)
    const pin6Ref = useRef(null)

    const [pin1, setPin1] = useState("")
    const [pin2, setPin2] = useState("")
    const [pin3, setPin3] = useState("")
    const [pin4, setPin4] = useState("")
    const [pin5, setPin5] = useState("")
    const [pin6, setPin6] = useState("")

    const [password, setPassword] = useState('')
    const [cpassword, setCpassword] = useState('')

    const [btnConf, setBtnConf] = useState(true)

    const [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_500Medium
    })

    if (!fontsLoaded) {
        return null
    }

    return (
        <View style={styles.body}>
            <Text style={styles.txtTitle}>Redefinir senha</Text>
            <Text style={styles.txtSubtitle}>Insira o código de 6 caracteres recebido {'\n'}por e-mail.</Text>

            <View style={styles.btnContainer}>
                <TextInput
                    ref={pin1Ref}
                    style={styles.btnInputs}
                    keyboardType='numeric'
                    maxLength={1}
                    onChange={(pin1) => {
                        setPin1(pin1)
                        if (pin1 != "") {
                            pin2Ref.current.focus()
                        }
                    }}
                />

                <TextInput
                    ref={pin2Ref}
                    style={styles.btnInputs}
                    keyboardType='numeric'
                    maxLength={1}
                    onChange={(pin2) => {
                        setPin2(pin2)
                        if (pin2 != "") {
                            pin3Ref.current.focus()
                        }
                    }}
                />

                <TextInput
                    ref={pin3Ref}
                    style={styles.btnInputs}
                    keyboardType='numeric'
                    maxLength={1}
                    onChange={(pin3) => {
                        setPin3(pin3)
                        if (pin3 != "") {
                            pin4Ref.current.focus()
                        }
                    }}
                />

                <TextInput
                    ref={pin4Ref}
                    style={styles.btnInputs}
                    keyboardType='numeric'
                    maxLength={1}
                    onChange={(pin4) => {
                        setPin4(pin4)
                        if (pin4 != "") {
                            pin5Ref.current.focus()
                        }
                    }}
                />

                <TextInput
                    ref={pin5Ref}
                    style={styles.btnInputs}
                    keyboardType='numeric'
                    maxLength={1}
                    onChange={(pin5) => {
                        setPin5(pin5)
                        if (pin5 != "") {
                            pin6Ref.current.focus()
                        }
                    }}
                />

                <TextInput
                    ref={pin6Ref}
                    style={styles.btnInputs}
                    keyboardType='numeric'
                    maxLength={1}
                    onChange={(pin6) => {
                        setPin6(pin6)
                    }}
                />
            </View>

            <View style={styles.input}>
                <View style={styles.inputFloating}>
                    <FloatingLabelInput
                        label="Nova senha"
                        staticLabel
                        value={password}
                        hintTextColor={'#717d93'}
                        hint="Insira uma nova senha"
                        containerStyles={styles.inputPassword}
                        secureTextEntry

                        customLabelStyles={{
                            colorBlurred: '#0046FE',
                            fontSizeFocused: 12,
                        }}

                        labelStyles={{
                            backgroundColor: '#F5F8FF',
                            marginHorizontal: -10,
                            marginVertical: -11,
                            padding: 5,
                            fontFamily: 'Montserrat_500Medium'
                        }}
                        inputStyles={{
                            color: 'black',
                            paddingHorizontal: 5,
                            fontFamily: 'Montserrat_400Regular',
                        }}
                        onChangeText={value => {
                            setPassword(value)
                        }}
                    />

                    <FloatingLabelInput
                        label="Confirme sua senha"
                        value={cpassword}
                        staticLabel
                        hintTextColor={'#717d93'}
                        hint="Confirme sua senha"
                        containerStyles={styles.inputcPassword}
                        secureTextEntry

                        customLabelStyles={{
                            colorBlurred: '#0046FE',
                            fontSizeFocused: 12,
                        }}

                        labelStyles={{
                            backgroundColor: '#F5F8FF',
                            marginHorizontal: -10,
                            marginVertical: -11,
                            padding: 5,
                            fontFamily: 'Montserrat_500Medium'
                        }}
                        inputStyles={{
                            color: 'black',
                            paddingHorizontal: 5,
                            fontFamily: 'Montserrat_400Regular',
                        }}
                        onChangeText={value => {
                            setCpassword(value)
                            setBtnConf()
                        }}
                    />
                </View>
            </View>

            {
                btnConf ? (
                    <TouchableOpacity style={styles.btnConfirm} disabled>
                        <Text style={styles.txtConfirm}>Alterar senha</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity style={styles.btnConfirmActive}>
                        <Ionicons name="lock-closed-outline" size={20} color={'#FFF'} />
                        <Text style={styles.txtConfirm}>Alterar senha</Text>
                    </TouchableOpacity>
                )
            }

            <TouchableOpacity style={styles.btnSendCod}>
                <Text style={styles.txtSendCod}>Reenviar código</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#F5F8FF',
        paddingBottom: 400,
    },
    btnContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        padding: 10,
        gap: 13
    },
    btnInputs: {
        borderWidth: 1,
        borderColor: '#D0D5DD',
        marginBottom: 22,
        fontSize: 34,
        textAlign: 'center',
        fontWeight: 'bold',
        borderRadius: 8,
        width: 48,
        height: 60,
        backgroundColor: '#F5F8FF',
        elevation: 1
    },
    container: {
        backgroundColor: "#F5F8FF",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    content: {
        backgroundColor: '#F5F8FF',
        width: "92%",
        paddingTop: 40,
        paddingBottom: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    txtTitle: {
        margin: 20,
        fontSize: 22,
        fontFamily: 'Montserrat_500Medium',
        color: '#0046FE'
    },
    txtSubtitle: {
        marginLeft: 20,
        marginBottom: 10,
        fontSize: 16,
        fontFamily: 'Montserrat_400Regular',
        color: '#0046FE'
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputPassword: {
        borderColor: "#D0D5DD",
        borderRadius: 7,
        borderWidth: 1.5,
        width: "90%",
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        marginBottom: 26
    },
    inputcPassword: {
        borderColor: "#D0D5DD",
        borderRadius: 7,
        borderWidth: 1.5,
        width: "90%",
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        marginBottom: 26
    },
    inputFloating: {
        padding: 10,
        backgroundColor: "#F5F8FF",
        marginTop: 2,
        marginBottom: 89,
        marginLeft: 10,
        width: 372,
        height: 55,
    },
    btnConfirm: {
        backgroundColor: '#CED4DA',
        margin: 20,
        padding: 14,
        borderRadius: 6,
        alignItems: 'center'
    },
    btnConfirmActive: {
        backgroundColor: '#0046FE',
        margin: 20,
        padding: 14,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    txtConfirm: {
        color: '#FFF',
        fontFamily: 'Montserrat_400Regular',
        marginLeft: 8,
    },
    btnSendCod: {
        borderWidth: 1,
        borderRadius: 6,
        borderColor: '#0046FE',
        marginLeft: 20,
        marginRight: 20,
        padding: 14,
        alignItems: 'center'
    },
    txtSendCod: {
        color: '#0046FE',
        fontFamily: 'Montserrat_400Regular',
    }
})