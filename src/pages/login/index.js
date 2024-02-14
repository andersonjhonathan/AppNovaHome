import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { AntDesign, Ionicons } from '@expo/vector-icons'
import { FloatingLabelInput } from 'react-native-floating-label-input'
import { useFonts, Montserrat_400Regular, Montserrat_600SemiBold, Montserrat_500Medium } from '@expo-google-fonts/montserrat'
import React, { useState } from 'react'
import { user_login } from '../../services/user_login'
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Login({ navigation }) {

  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [checkValidEmail, setCheckValidEmail] = useState(false)
  const [loading, setLoading] = useState(false)

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

  const checkPasswordValidity = value => {
    const isNonWhiteSpace = /^\S+$/
    if (!isNonWhiteSpace.test(value)) {
      return 'A senha não deve conter espaços em branco.'
    }

    const isContainsUppercase = /^(?=.*[A-Z]).*$/
    if (!isContainsUppercase.test(value)) {
      return 'A senha deve ter pelo menos uma letra maiúscula.'
    }

    const isContainsNumber = /^(?=.*[0-9]).*$/
    if (!isContainsNumber.test(value)) {
      return 'A senha deve ter pelo menos um número.'
    }

    const isValidLength = /^.{6,16}$/
    if (!isValidLength.test(value)) {
      return 'A senha deve ter de 6 a 16 caracteres.'
    }

    return null
  }


  const handleLogin = () => {
    const checkPassword = checkPasswordValidity(password)
    if (!checkPassword) {
      setLoading(true)
      user_login({
        email: email.toLocaleLowerCase(),
        password: password,
      })
        .then(result => {
          async function getName(){
            await AsyncStorage.setItem("@names", nome)
        }
          async function getPhone(){
            await AsyncStorage.setItem("@phones", phone)
        }
          async function getEmail(){
            await AsyncStorage.setItem("@emails", email)
        }

        var nome = result.data.data.first_name
        var phone = result.data.data.phone
        
          getName()
          getPhone()
          getEmail()
          // console.log(result.data.data.phone)
          if (result.status == 200) {
            navigation.navigate('mainScreen')
          }
        })
        .catch(err => {
          console.log(err)
        })
    } else {
      alert(checkPassword)
    }
  }

  function openForgotPassword() {
    navigation.navigate('forgotPassword')
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
      <Text style={styles.textLogin}>Login</Text>
      <View style={styles.inputFloating}>
        <FloatingLabelInput
          label="E-mail"
          staticLabel
          value={email}
          hintTextColor={'#717d93'}
          hint="Insira seu e-mail"
          containerStyles={styles.inputEmail}

          customLabelStyles={{
            colorBlurred: '#0046FE',
            fontSizeFocused: 12,
          }}

          labelStyles={{
            backgroundColor: '#F4f4f4',
            marginHorizontal: -10,
            marginVertical: -11,
            padding: 5,
          }}
          inputStyles={{
            color: 'black',
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
          label="Senha"
          staticLabel
          value={password}
          hintTextColor={'#717d93'}
          hint="Insira sua senha"
          containerStyles={styles.inputEmail}
          secureTextEntry

          customLabelStyles={{
            colorBlurred: '#0046FE',
            fontSizeFocused: 12,
          }}

          labelStyles={{
            backgroundColor: '#F4f4f4',
            marginHorizontal: -10,
            marginVertical: -11,
            padding: 5,
          }}
          inputStyles={{
            color: 'black',
            paddingHorizontal: 5,
          }}
          onChangeText={text => setPassword(text)}
        />
      </View>

      <Text style={styles.forgotPassword} onPress={openForgotPassword}>Esqueceu a senha?</Text>


      <TouchableOpacity style={styles.buttonEnter} onPress={handleLogin}>
      <Text style={styles.buttonText2}>Entrar</Text>
        {!loading ? (
          <Ionicons style={styles.IconLoading} size={24} color="#FFF" name="log-in-outline" />
        ) : (
          <ActivityIndicator style={styles.IconLoading} />
        )}
      </TouchableOpacity>


      <TouchableOpacity style={styles.btnAutentic}>
        <AntDesign style={{ marginRight: 10 }} size={18} color="#0046FE" name="sync" />
        <Text style={styles.btnText}>Reenviar autenticação</Text>
      </TouchableOpacity>

      <Image
        source={require("../../assets/baseboard_white.png")}
        style={styles.baseboard}
      />


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute'
  },
  inputEmail: {
    borderColor: "#D0D5DD",
    borderRadius: 7,
    borderWidth: 2,
    width: "90%",
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginBottom: 26,
  },
  textLogin: {
    marginRight: 290,
    marginTop: 27,
    marginBottom: 20,
    fontSize: 20,
    color: "#0046FE",
    fontFamily: 'Montserrat_500Medium'
  },
  btnAutentic: {
    borderColor: '#0046FE',
    borderWidth: 1,
    width: 350,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginTop: 15,
    flexDirection: "row"
  },
  btnText: {
    color: "#0046FE",
    fontFamily: "Montserrat_400Regular"
  },
  baseboard: {
    width: 392,
    height: 80,
    marginTop: 254
  },
  buttonEnter: {
    backgroundColor: "#0046FE",
    borderRadius: 5,
    borderWidth: 1,
    width: "131%",
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "row",
  },
  buttonText2: {
    color: "#FFFFFF",
    fontFamily: 'Montserrat_400Regular',
    paddingRight: 135
  },
  inputFloating: {
    padding: 10,
    backgroundColor: "#F4F4F4",
    marginTop: 2,
    width: 373,
    height: 55,
  },
  forgotPassword: {
    color: "#0046FE",
    fontFamily: 'Montserrat_400Regular',
    marginRight: 215,
    marginTop: 76,
    marginBottom: 55,
  },
  textFailed: {
    marginLeft: 182,
    marginTop: 55,
    color: 'red',
    position: 'absolute',
    paddingLeft: 20,
    fontSize: 12,
  },
  IconLoading: {
    position: 'absolute',
    paddingRight: 55,
  }
})
