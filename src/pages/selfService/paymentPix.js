import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image} from 'react-native'
import { useFonts, Montserrat_400Regular } from '@expo-google-fonts/montserrat'
import { AntDesign, Ionicons } from '@expo/vector-icons'
import React, { useState } from 'react'

export function PaymentPix(){

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
            <View>
                <Text> Page - Pagamento Via Pix</Text>
                <TouchableOpacity>
                    <Text>Copiar Código</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text>Compartilhar</Text>
                </TouchableOpacity>
            </View>
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
    txtLocal:{
        color: '#FFFFFF',
        fontWeight: '500',
        fontSize: 16,
        marginLeft: 75,
        marginTop: -15,
    },
    txtTitle:{
        paddingTop: 25,
        paddingLeft: 16,
        fontSize: 20,
        color: '#002F6E',
        fontWeight: '500',
        marginBottom: 13,
    }
})