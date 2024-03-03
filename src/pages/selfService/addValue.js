import { View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native'
import { useFonts, Montserrat_400Regular } from '@expo-google-fonts/montserrat'
import CurrencyInput from 'react-native-currency-input'
import { AntDesign, Ionicons } from '@expo/vector-icons'
import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

export function AddValue( {navigation} ){

    const [value, setValue] = useState(0)

    function openPayment() {
        getValue()
        navigation.navigate('payment')
    }

    async function getValue(){
        await AsyncStorage.setItem("@value", value.toString())
    }

    function BtnAddValue1(){
        setValue(15.90)
    }
    function BtnAddValue2(){
        setValue(31.80)
    }
    function BtnAddValue3(){
        setValue(47.70)
    }
    function BtnAddValue4(){
        setValue(63.60)
    }

    const[hideValor, setHideValor] = useState(true)

    const [fontsLoaded] = useFonts({
        Montserrat_400Regular,
      })
  
      if (!fontsLoaded){
        return null
      }

    return(
        <View>
            <View style={styles.modal}>
                <View style={styles.header}>
                    <View style={styles.texts}>
                        <Text style={styles.txtSaldo}>Saldo atual</Text>

                        <View style={styles.txtBtnSaldo}>
                            {
                                hideValor ? (
                                    <Text style={styles.valorSaldo}>R$ 100,00</Text>
                                ) : (
                                    <Text style={styles.valorSaldo}>R$ *****</Text>
                                )
                            }
                            <TouchableOpacity style={styles.btnIcon} onPress={() => setHideValor(!hideValor)}>
                                {
                                    hideValor ?
                                        <Ionicons name='eye' color='#FFF' size={24}/>  
                                    :
                                        <Ionicons name='eye-off-outline' color='#FFF' size={24}/>  
                                }
                            </TouchableOpacity>
                                <Text style={styles.txtLocal}>
                                    Porto Alegre | Zaffari {'\n'}Teresópolis
                                </Text>
                        </View>
                        
                    </View>

                </View>
            </View>
            <View style={styles.textsScreen}>
                <Text style={styles.txtTitle}>Digite ou escolha o valor que você {'\n'}deseja recarregar na loja selecionada.</Text>               
            </View>
            
            <View>
            <CurrencyInput 
                style={styles.inputValue}
                onChangeValue={setValue}
                value={value}
                keyboardType="numeric" 
                delimiter="."
                separator=","
                precision={2}
                minValue={0}            
            />
            <AntDesign style={styles.iconEditValue} name='edit' color='#868E96' size={25}/>
            <Text style={styles.txtPrefix}>R$</Text>
            </View>
            


            <View style={styles.buttonsValue}>
                <TouchableOpacity style={styles.btnValue} onPress={BtnAddValue1}>
                    <Text style={styles.txtValue}>R$ 15,90</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnValue} onPress={BtnAddValue2}>
                    <Text style={styles.txtValue}>R$ 31,80</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnValue} onPress={BtnAddValue3}>
                    <Text style={styles.txtValue}>R$ 47,70</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnValue} onPress={BtnAddValue4}>
                    <Text style={styles.txtValue}>R$ 63,60</Text>
                </TouchableOpacity>                
            </View>

            <View style={styles.textsScreen}>
                <Text style={styles.txtTitle}>
                    Valor mínimo de recarga {'\n'}R$ 1,00</Text>               
            </View>

            <TouchableOpacity style={styles.btnGoPayment} onPress={openPayment}>
                <Text style={styles.txtPayment}>Ir para pagamento</Text>
            </TouchableOpacity>
            
                
            
        </View>
    )
}

const styles = StyleSheet.create({
    modal:{
        backgroundColor: '#01B1EC',
        borderBottomRightRadius: 18,
        borderBottomLeftRadius: 18,
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
        marginTop: 5,
        width: '90%',
        borderTopWidth: 1,
        borderColor: '#DEE2E6'
    },
    texts:{
        marginTop: 20,
    },
    btnSaldo:{
        marginTop: 25,
        color: '#FFFFFF',
        borderRadius: 9,
        borderWidth: 1,
        borderColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        height: 38,
    },
    txtSaldo:{
        color: '#FFFFFF',
        fontSize: 14,
    },
    valorSaldo:{
        color: '#FFFFFF',
        fontSize: 20,
        fontFamily: 'Montserrat_400Regular'
    },
    btnIcon:{
        paddingLeft: 5,
        paddingTop: 1,
    },
    txtBtnSaldo:{
        flexDirection:'row',
    },
    textsScreen:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    txtTitle:{
        textAlign: 'center',
        marginTop: 30,
        marginBottom: 7,
        fontSize: 15,
    },
    inputValue:{
        backgroundColor:'#FFFFFF',
        margin: 20,
        width: '90%',
        height: 65,
        borderWidth: 1,
        borderColor: '#CED4DA',
        borderRadius: 5,
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        
    },
    buttonsValue:{
        flexDirection: 'row',
        flexWrap: 'wrap',  
        gap: 9,
        marginRight: -10,
        marginLeft: 20,           
    },
    btnValue:{
        backgroundColor: '#01B1EC',
        borderRadius: 8,
        width: '45%',
        height: 95,
        alignItems: 'center',
        justifyContent: 'center'
    },
    txtValue:{
        color: '#FFFFFF',
        fontSize: 22,
        fontWeight: 'bold'
    },
    btnGoPayment:{
        backgroundColor:'#2BB673',
        height: 75,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 108,
    },
    txtPayment:{
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold'
    },
    txtLocal:{
        color: '#FFFFFF',
        fontWeight: '500',
        fontSize: 16,
        marginLeft: 75,
        marginTop: -15,
    },
    txtPrefix:{
        position:'absolute',
        fontSize: 20,
        fontWeight: '500',
        marginTop: 45,
        marginLeft: 35,
    },
    iconEditValue:{
        position: 'absolute',
        marginTop: 47,
        marginLeft: 330,
    }
})