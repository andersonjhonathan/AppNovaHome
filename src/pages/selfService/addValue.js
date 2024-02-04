import { View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native'
import { useFonts, Montserrat_400Regular } from '@expo-google-fonts/montserrat'
import { Ionicons } from '@expo/vector-icons'
import React, { useState } from 'react'

export function AddValue(){

    const [text, onChangeText] = useState('');
    const [number, onChangeNumber] = useState('');

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
            
            
            <TextInput 
                
                style={styles.inputValue}
                onChangeText={onChangeText}
                value={text}
                keyboardType="numeric"
                                
            />


            <View style={styles.buttonsValue}>
                <TouchableOpacity style={styles.btnValue}>
                    <Text style={styles.txtValue}>R$ 15,90</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnValue}>
                    <Text style={styles.txtValue}>R$ 31,80</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnValue}>
                    <Text style={styles.txtValue}>R$ 47,70</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnValue}>
                    <Text style={styles.txtValue}>R$ 63,60</Text>
                </TouchableOpacity>                
            </View>

            <View style={styles.textsScreen}>
                <Text style={styles.txtTitle}>
                    Valor mínimo de recarga {'\n'}R$ 1,00</Text>               
            </View>

            <TouchableOpacity style={styles.btnGoPayment}>
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
        height: 60,
        borderWidth: 1,
        borderColor: '#CED4DA',
        borderRadius: 5,
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
    }
})