import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import { FloatingLabelInput } from 'react-native-floating-label-input'
import { RadioButton } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ValidationRegister() {

const [checked, setChecked] = React.useState('first');

    return(
        <View style={styles.container}>
            <View style={styles.inputFloating}>
                <FloatingLabelInput
                    label="Celular"
                    staticLabel
                    hintTextColor={'#717d93'}
                    hint="Insira seu número"
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
                    label="Confirmar e-mail"
                    staticLabel
                    hintTextColor={'#717d93'}
                    hint="Insira novamente seu e-mail"
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
            </View>
            <Text style={styles.txtValid}>Validar conta:</Text>
            <Text style={styles.txtSend}>Para validarmos sua conta enviaremos um e-mail ou {'\n'} 
            SMS para seu celular. Escolha a seguir a forma de {'\n'} 
            validação que você preferir</Text>

            <SafeAreaView style={styles.checkContainer}>
                <View style={styles.checkFirst}>
                    <RadioButton
                     value="first"
                     status={ checked === 'first' ? 'checked' : 'unchecked'}
                     onPress={() => setChecked('first')}
                     color="#0046FE"
                     uncheckedColor='#CED4DA'
                    />
                     <Text style={styles.txtCheck}>E-mail</Text>
                </View>
                <View style={styles.checkSecond}>
                <RadioButton
                    value="second"
                    status={ checked === 'second' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('second')}
                    color="#0046FE"
                    uncheckedColor='#CED4DA'
                />
                <Text style={styles.txtCheck}>Celular</Text>
                </View>
                
            </SafeAreaView>
            
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
    justifyContent: 'center',
    alignItems: 'center',
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
       inputFloating:{
        padding: 10,
        backgroundColor: "#F4F4F4",
        marginTop: 2,
        marginBottom: 89,
        width: 373,
        height: 55,
      },
      txtValid:{
        color: "#0046FE",
        marginTop: 70,
        marginRight: 245,
        fontSize: 15,
        fontFamily: 'Montserrat'
      },
      txtSend:{
        color: "#0046FE",
        marginTop: 10,
        marginRight: 14,
      },
      checkContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 280,
        marginTop: 10,
        marginBottom: -30,
      },
      txtCheck:{
        color: '#717D96',
        fontSize: 17,
      },
      checkFirst:{
        flexDirection: 'row',
        alignItems: 'center'
      },
      checkSecond:{
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 6,
      }
     
})