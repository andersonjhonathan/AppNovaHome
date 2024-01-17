import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import { FloatingLabelInput } from 'react-native-floating-label-input'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons'

export function ForgotPassword(){

    const [phone, setPhone] = useState('')

    const disabled = false

    return(
        <View style={styles.container}>

            <Text style={styles.txtForgotPassword}>Redefir senha</Text>

            <Text style={styles.txtSubtitle}>Vamos enviar um código via SMS para {'\n'}
            você redefinir sua senha. Insira abaixo o {'\n'} 
            número do seu celular.
            </Text>

            <View style={styles.inputFloating}>
                <FloatingLabelInput
                    label="Celular"
                    value={phone}
                    mask="(99) 99999-9999"
                    staticLabel
                    hintTextColor={'#717d93'}
                    hint="Insira seu número"
                    containerStyles={styles.inputPhone}

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
                      setPhone(value)
                    }}
                    />

                    </View>
            

            <TouchableOpacity style={disabled ? {...styles.btnCod, ...styles.btnDisabled} : styles.btnCod} disabled={disabled}>
                <AntDesign style={{ marginRight:10}} size={18} color="#FFF" name="mobile1"/>
                <Text style={styles.txtCod}>Enviar código</Text>
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
    inputFloating:{
        padding: 10,
        backgroundColor: "#F4F4F4",
        marginTop: 2,
        marginBottom: 20,
        width: 373,
        height: 55,
      },
      baseboard:{
        width: 392,
        height: 80,
        marginTop: 354
      }, 
       btnCod:{
        backgroundColor: '#0046FE',
        width: '90%',
        height: 45,
        alignItems:"center",
        justifyContent: "center",
        borderRadius: 5,
        marginTop: 10,
        flexDirection: 'row'
      },
      btnDisabled:{
        backgroundColor: '#CED4DA'
      },
      txtCod:{
        color: '#FFF',
        fontFamily: 'Montserrat',
      },
      txtForgotPassword:{
        color: '#0046FE',
        fontSize: 21,
        paddingRight: 210,
        paddingTop: 25,
        fontFamily: 'Montserrat'
      },
      txtSubtitle:{
        color: '#0046FE',
        paddingRight: 30,
        paddingTop: 15,
        paddingBottom: 30,
        fontSize: 16,
        fontFamily: 'Montserrat'
      },
      inputPhone:{
        borderColor: "#D0D5DD",
        borderRadius: 7,
        borderWidth: 2,
        width: "90%",
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        marginBottom: 26,
      }
          
    
})