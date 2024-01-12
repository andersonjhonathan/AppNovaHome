import {View, Text, Pressable, StyleSheet, TouchableOpacity, Dimensions, Image} from 'react-native'
import React, {useState} from 'react'
import ValidationRegister from './validationRegister'
import Password from './password'
import RegisterUser from './registerUser'
import StepIndicator from 'react-native-step-indicator'


const {width, height} = Dimensions.get("window")

const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize:30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#0046FE',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#0046FE',
  stepStrokeUnFinishedColor: '#d6daff',
  separatorFinishedColor: '#0046FE',
  separatorUnFinishedColor: '#d6daff',
  stepIndicatorFinishedColor: '#0046FE',
  stepIndicatorUnFinishedColor: '#d6daff',
  stepIndicatorCurrentColor: '#0046FE',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#FFFFFF',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#0046FE',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#fe7013',
}

export default function Form(){
    const [formData, setFormData] = useState({
        //Tela 1
        name:"",
        cpf:"",
        passaporte:"",
        paisOrigem:"", //País de Origem
        
        //Tela 2
        celular:"",
        email:"",
        cemail:"",

        //Tela 3
        password:"",
        cpassword:"",
    })

    const [screen, setScreen] = useState(0)
    const FormTitle = [
        "Pag 1",
        "Pag 2",
        "Pag 3"
    ]
    const ScreenDisplay = () => {
        if (screen === 0){
            return <RegisterUser/>
        } else if (screen == 1) {
            return <ValidationRegister/>
        } else {
            return <Password/>
        }
    }

    const [currentPosition, setCurrentPosition] = useState(0)

    const nextStep = () => {
        setCurrentPosition(currentPosition + 1)
    }

    const returnStep = () => {
        setCurrentPosition(currentPosition - 1)
    }

    return (
        <View>
            <Text>{FormTitle[screen]}</Text>
            
            <View style={styles.titleContainer}>
                <Text style={styles.textCadastro}>Cadastro</Text>
                <View style={styles.indicator}>
                  <StepIndicator
                    customStyles={customStyles}
                    currentPosition={currentPosition}
                    onPress={returnStep}
                    stepCount={3}
                  />
                </View>
            </View>

            <View>{ScreenDisplay()}</View>

            <TouchableOpacity style={styles.btnNext} onPress={() => nextStep()}>
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
    btnNext:{
      backgroundColor: '#CED4DA',
      width: '90%',
      height: 45,
      alignItems:"center",
      justifyContent: "center",
      borderRadius: 5,
      marginTop: 50,
      marginLeft: 20,
    },
      btnText:{
      color: "#FFF",
      fontFamily: "Montserrat"
    },
    indicator:{
      height: height - 700,
      width: width - 80,
      },
    titleContainer:{
      flexDirection: 'row',
      marginTop: 35,
      marginBottom: -8,
      marginLeft: 21,
        
      },
    textCadastro:{
      marginRight: -10,
      fontSize: 20,
      color: "#0046FE",
      fontFamily: 'Montserrat'
      },
    baseboard:{
      width: 392,
      height: 80,
      marginTop: 275
      }, 
})