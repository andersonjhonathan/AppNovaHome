import {View, Text, StyleSheet, Linking} from 'react-native'
import React from 'react'
import { FloatingLabelInput } from 'react-native-floating-label-input'
import { Checkbox } from 'react-native-paper'



export default function Password(){

const [checked, setCkecked ] = React.useState(false)
const [checkedSecond, setCkeckedSecond ] = React.useState(false)
    return(
        <View style={styles.container}>
            <View style={styles.inputFloating}>
                <FloatingLabelInput
                    label="Senha"
                    staticLabel
                    hintTextColor={'#717d93'}
                    hint="Insira uma senha"
                    containerStyles={styles.inputPassword}

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
                    label="Confirme sua senha"
                    staticLabel
                    hintTextColor={'#717d93'}
                    hint="Confirme sua senha"
                    containerStyles={styles.inputcPassword}

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
                </View>

                <View style={styles.checkBoxFirst}>
                    <Checkbox 
                     status={checked ? 'checked' : 'unchecked' }
                     onPress={() => {
                         setCkecked(!checked)
                     }}
                     color="#0046FE"
                     uncheckedColor='#CED4DA'
                    />
                    <Text style={styles.checkTextFirst}>Sim, gostaria de receber informações da Unilever</Text>
                </View>

                <View style={styles.checkBoxSecond}>
                    <Checkbox 
                     status={checkedSecond ? 'checked' : 'unchecked' }
                     onPress={() => {
                         setCkeckedSecond(!checkedSecond)
                     }}
                     color="#0046FE"
                     uncheckedColor='#CED4DA'
                    />
                    <Text style={styles.checkTextSecond}>Tenho mais de 18 anos ou possuo autorização legal {'\n'} 
                    dos meus pais / responsável legal, bem como {'\n'} 
                    concordo que li e aceito a <Text style={styles.hyperlinkStyle} onPress={() =>Linking.openURL('http://localhost: 8080')}>política de privacidade</Text> e {'\n'} 
                    os <Text style={styles.hyperlinkStyle} onPress={() =>Linking.openURL('http://localhost: 8080')}>termos do regulamento</Text></Text>
                </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
       },
    inputPassword:{
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
       inputcPassword:{
        borderColor: "#D0D5DD",
        borderRadius: 7,
        borderWidth: 2,
        width: "90%",
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        marginBottom: 26
        },
       inputFloating:{
        padding: 10,
        backgroundColor: "#F4F4F4",
        marginTop: 2,
        marginBottom: 89,
        width: 373,
        height: 55,
    },
    checkBoxFirst:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15,
      },
      checkBoxSecond:{
        flexDirection: 'row',
        marginRight: 1,
      },
      checkTextFirst:{
        color: '#717D96',
        fontFamily: 'Montserrat',
        fontSize: 13,
      },
      checkTextSecond:{
        color: '#717D96',
        fontFamily: 'Montserrat',
        fontSize: 13,
        marginTop: 7,
        marginBottom: -15,
      },
      hyperlinkStyle:{
        color: 'blue',
        textDecorationLine: 'underline'
      }
})