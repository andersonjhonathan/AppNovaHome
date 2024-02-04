import { View, Text, StyleSheet, Image} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { AntDesign, Ionicons } from '@expo/vector-icons'
import { FloatingLabelInput } from 'react-native-floating-label-input'
import { useFonts, Montserrat_400Regular, Montserrat_600SemiBold, Montserrat_500Medium } from '@expo-google-fonts/montserrat'
import React, { useState } from 'react'

export function Login( {navigation} ){

    function openForgotPassword(){
    navigation.navigate('forgotPassword')
    }

    function openMainScreen(){
      navigation.navigate('mainScreen')
      }

    const [password, setPassword] = useState('')

    const [fontsLoaded] = useFonts({
      Montserrat_400Regular,
      Montserrat_600SemiBold,
      Montserrat_500Medium
    })
  
    if (!fontsLoaded){
      return null
    }

    return(
      <View style={styles.container}>
        <Text style={styles.textLogin}>Login</Text>
        <View style={styles.inputFloating}>
          <FloatingLabelInput
          label="E-mail"
          staticLabel
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
        />

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
          onChangeText={value => {
            setPassword(value)
          }}
        />
        </View>    
        
          
          <Text style={styles.forgotPassword} onPress={openForgotPassword}>Esqueceu a senha?</Text>
          

          <TouchableOpacity style={styles.buttonEnter} onPress={openMainScreen}>
            <Ionicons style={{ marginRight:10}} size={24} color="#FFF" name="log-in-outline"/>
            <Text style={styles.buttonText2}>Entrar</Text>
          </TouchableOpacity>


          <TouchableOpacity style={styles.btnAutentic}>
            <AntDesign style={{ marginRight: 10}} size={18} color="#0046FE" name="sync" />
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
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute'
       },
        inputEmail:{
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
       textLogin:{
        marginRight: 290,
        marginTop: 27,
        marginBottom: 20,
        fontSize: 20,
        color: "#0046FE",
        fontFamily: 'Montserrat_500Medium'
       },
       btnAutentic:{
        borderColor: '#0046FE',
        borderWidth: 1,
        width: 350,
        height: 45,
        alignItems:"center",
        justifyContent: "center",
        borderRadius: 5,
        marginTop: 15,
        flexDirection: "row"
       },
       btnText:{
        color: "#0046FE",
        fontFamily: "Montserrat_400Regular"
       },
       baseboard:{
        width: 392,
        height: 80,
        marginTop: 254
      }, 
      buttonEnter:{
        backgroundColor: "#0046FE",
        borderRadius: 5,
        borderWidth: 1,
        width: "125%",
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "row",
      },
      buttonText2:{
        color: "#FFFFFF",
        fontFamily: 'Montserrat_400Regular',
        paddingRight: 135 
      },
      inputFloating:{
        padding: 10,
        backgroundColor: "#F4F4F4",
        marginTop: 2,
        width: 373,
        height: 55,
      },
      forgotPassword:{
        color: "#0046FE",
        fontFamily: 'Montserrat_400Regular',
        marginRight: 215,
        marginTop: 76,
        marginBottom: 55,
      },
})
