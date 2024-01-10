import { View, Text, StyleSheet, TextInput, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Checkbox } from 'react-native-paper'
import React from 'react'

export function Register(){

const [checked, setCkecked ] = React.useState(false)

    return(
            <View style={styles.container}>
              <Text style={styles.textCadastro}>Cadastro</Text>

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
                

                <TouchableOpacity style={styles.btnNext}>
                    <Text style={styles.btnText}>Próxima</Text>
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
   textCadastro:{
        marginRight: 260,
        marginTop: 30,
        marginBottom: 40,
        fontSize: 20,
        color: "#0046FE",
        fontFamily: 'Montserrat'
   },
   btnNext:{
    backgroundColor: '#CED4DA',
    width: 350,
    height: 45,
    alignItems:"center",
    justifyContent: "center",
    borderRadius: 5,
    marginTop: 50,
   },
   btnText:{
    color: "#FFF",
    fontFamily: "Montserrat"
   },
   baseboard:{
    width: 392,
    height: 80,
    marginTop: 305
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