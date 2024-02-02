import { View, Text, StyleSheet, TextInput} from 'react-native'
import { Checkbox } from 'react-native-paper'
import React, {useState} from 'react'
import { FloatingLabelInput } from 'react-native-floating-label-input'
import { useFonts, Montserrat_400Regular, Montserrat_500Medium } from '@expo-google-fonts/montserrat'

export default function RegisterUser(){

const [checked, setCkecked ] = useState(false)
const [cpf, setCPF] = useState('')
const [name, setName] = useState('')

const [fontsLoaded] = useFonts({
  Montserrat_400Regular,
  Montserrat_500Medium
})

if (!fontsLoaded){
  return null
}


    return(
            <View style={styles.container}>

              <View style={styles.inputFloating}>
                <FloatingLabelInput
                    label="Nome"
                    staticLabel
                    value={name}
                    hintTextColor={'#717d93'}
                    hint="Insira seu nome"
                    containerStyles={styles.inputName}

                    customLabelStyles={{
                    colorBlurred: '#0046FE',
                    fontSizeFocused: 12
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
                      setName(value)
                    }}
                    />

                <FloatingLabelInput
                    label="CPF"
                    staticLabel
                    value={cpf}
                    hintTextColor={'#717d93'}
                    hint="Insira seu CPF"
                    mask="999.999.999-99"
                    containerStyles={styles.inputCPF}

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
                      setCPF(value)
                    }}
                  
                    />
              <View/>
                
                <View style={styles.checkBox}>
                    <Checkbox 
                     status={checked ? 'checked' : 'unchecked' }
                     onPress={() => {
                         setCkecked(!checked)
                     }}
                     color="#0046FE"
                     uncheckedColor='#CED4DA'
                    />
                    <Text style={styles.checkText}>Sou estrangeiro e não possuo CPF</Text>
                </View>

              </View>
            </View>
    )
  }

const styles = StyleSheet.create({
   container:{
    justifyContent: 'center',
    alignItems: 'center',
  }, 
  checkBox:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 95,
    marginTop: -15,
  },
  checkText:{
    color: '#717D96',
    fontFamily: 'Montserrat_400Regular'
  },
  inputName:{
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
   inputCPF:{
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
   inputFloating:{
    padding: 10,
    backgroundColor: "#F4F4F4",
    marginTop: 2,
    marginBottom: 85,
    width: 373,
    height: 55,
  },
})