import { Text, View, StyleSheet, TouchableOpacity, SafeAreaView, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useFonts, Montserrat_400Regular, Montserrat_500Medium } from '@expo-google-fonts/montserrat'
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react'
import { FloatingLabelInput } from 'react-native-floating-label-input'
import { AntDesign } from '@expo/vector-icons'

export function EditProfile({ navigation }) {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [cpf, setCPF] = useState('')
    const [phone, setPhone] = useState('')
    const [telefone, setTelefone] = useState('')
    const [checkValidEmail, setCheckValidEmail] = useState(false)

    async function getDataName() {
        const response = await AsyncStorage.getItem("@names")
        if (response) {
           setName(response)
        }
     }
     async function getDataPhone() {
        const response = await AsyncStorage.getItem("@phones")
        if (response) {
           setPhone(response)
        }
     }
  
     async function getDataEmail() {
        const response = await AsyncStorage.getItem("@emails")
        if (response) {
           setEmail(response)
        }
     }

     async function getDataCpf() {
        const response = await AsyncStorage.getItem("@cpfs")
        if (response) {
           setCPF(response)
        }
     }

     useEffect(() => {
        getDataCpf()
        getDataName()
        getDataPhone()
        getDataEmail()
     }, [])

    const handleCheckEmail = text => {
        let re = /\S+@\S+\.\S+/
        let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im

        setEmail(text)
        if (re.test(text) || regex.test(text)) {
            setCheckValidEmail(false)
        } else {
            setCheckValidEmail(true)
        }
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
            <Text style={styles.txtProfile}>Editar informações</Text>

            <View style={styles.container}>
                <View style={styles.inputFloating}>

                    <FloatingLabelInput
                        label="Nome"
                        staticLabel
                        value={name}
                        hintTextColor={'#717d93'}
                        hint="Maria da Silva"
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
                        onChangeText={text => setName(text)}
                    />

                    <FloatingLabelInput
                        label="E-mail"
                        staticLabel
                        value={email}
                        hintTextColor={'#717d93'}
                        hint="maria@email.com"
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
                        onChangeText={text => handleCheckEmail(text)}
                    />
                    {checkValidEmail ? (
                        <Text style={styles.textFailed}>Formato de e-mail incorreto.</Text>
                    ) : (
                        <Text style={styles.textFailed}> </Text>
                    )}

                    <FloatingLabelInput
                        label="CPF"
                        staticLabel
                        value={cpf}
                        hintTextColor={'#717d93'}
                        mask="999 999 999 99"
                        hint="000 000 000 00"
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
                        onChangeText={text => setCPF(text)}
                    />

                    <FloatingLabelInput
                        label="Celular"
                        value={phone}
                        staticLabel
                        hintTextColor={'#aaa'}
                        mask="(99) 99999-9999"
                        hint="(00) 000000000"
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
                        }}
                    />

                    <FloatingLabelInput
                        label="Telefone residencial"
                        value={telefone}
                        staticLabel
                        hintTextColor={'#aaa'}
                        mask="(99) 9999-9999"
                        hint="(00) 00000000"
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
                            setTelefone(value);
                        }}
                    />
                </View>
            </View>
            <View>
            <Ionicons name='lock-closed-outline' size={18} style={styles.iconLock}/>

                <TouchableOpacity style={styles.buttonRegister}>
                    <AntDesign style={{ marginRight: 6 }} size={25} color="#FFF" name="adduser" />
                    <Text style={styles.buttonText}>Salvar alterações</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.buttonTextDelete}>Deletar conta</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    body:{
        backgroundColor: '#F5F8FF'
    },
    container: {
        flex: 1,
        backgroundColor: '#F5F8FF'
    },
    logoIcon: {
        width: 65,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5,
    },
    txtProfile: {
        fontSize: 20,
        color: '#0046FE',
        marginTop: 28,
        marginLeft: 18,
        marginBottom: 15,
        fontFamily: 'Montserrat_500Medium'
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
    textFailed: {
        marginLeft: 182,
        marginTop: 128,
        color: 'red',
        position: 'absolute',
        paddingLeft: 15,
        fontSize: 12,
    },
    buttonRegister: {
        backgroundColor: "#0046FE",
        marginTop: 400,
        marginLeft: 20,
        marginRight: 22,
        marginBottom: 20,
        borderRadius: 5,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 9,
    },
    buttonText: {
        color: "#FFF",
        fontFamily: 'Montserrat_400Regular'
    },
    buttonTextDelete: {
        color: "red",
        alignSelf: 'center',
        fontFamily: 'Montserrat_400Regular',
        marginTop: 5,
        marginBottom: 180,
    },
    iconLock:{
        position: 'absolute',
        marginTop: 170,
        marginLeft: 340,
        color: '#0046FE'
    }
})