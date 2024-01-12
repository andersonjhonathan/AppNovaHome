import { View, Text, StyleSheet, TextInput} from 'react-native'
import { Checkbox } from 'react-native-paper'
import React from 'react'

export default function RegisterUser(){

const [checked, setCkecked ] = React.useState(false)
    return(
            <View style={styles.container}>

                <TextInput
                    placeholder="Insira seu nome"
                    style={styles.input}
                />

                <TextInput
                    placeholder="Insira seu CPF"
                    style={styles.input}
                />
                
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
    )
  }

const styles = StyleSheet.create({
   container:{
    justifyContent: 'center',
    alignItems: 'center',
   },
    input:{
     borderColor: "#D0D5DD",
     borderRadius: 7,
     borderWidth: 1,
     width: "90%",
     height: 45,
     alignItems: 'center',
     justifyContent: 'center',
     padding: 10,
     marginBottom: 10,
  }, 
  checkBox:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 95,
  },
  checkText:{
    color: '#717D96',
    fontFamily: 'Montserrat'
  }
})