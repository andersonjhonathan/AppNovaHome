import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native"
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useFonts, Montserrat_400Regular } from '@expo-google-fonts/montserrat'

export function ConfirmMaq() {

    const[hideValor, setHideValor] = useState(true)

    const [fontsLoaded] = useFonts({
        Montserrat_400Regular,
      })
  
      if (!fontsLoaded){
        return null
      }

    return (
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


            <View style={styles.container}>
                <Image
                    source={require("../../assets/icon_maqOn.png")}
                    style={styles.iconMaqOn}
                />
                <Text style={styles.txtMaq}>LAVADORA L1</Text>
                <Text style={styles.txtCodMaq}>1234</Text>
                <Text style={styles.txtValorCiclo}>Valor do ciclo R$ 10,00</Text>
                <Text style={styles.txtConfirmMaq}>Confirme o pedido para liberar {'\n'}a máquina.</Text>

                <TouchableOpacity style={styles.btnConfirmPedido}>
                    <Text style={styles.txtCnf}>CONFIRMAR PEDIDO</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnCancel}>
                    <Text style={styles.txtBtnCancel}>Cancelar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    iconMaqOn: {
        height: 130,
        width: 130,
        marginTop: 40,
    },
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
        
    },textsScreen:{
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
    txtLocal:{
        color: '#FFFFFF',
        fontWeight: '500',
        fontSize: 16,
        marginLeft: 75,
        marginTop: -15,
    },
    txtMaq:{
        marginTop: 20,
        fontSize: 20,
        fontWeight: '500',
        color: '#002F6E'
    },
    txtCodMaq:{
        marginTop: 5,
        fontSize: 22,
        fontWeight: '600',
        color: '#002F6E'
    },
    txtValorCiclo:{
        marginTop: 5,
        fontFamily: 'Montserrat_400Regular'
    },
    txtConfirmMaq:{
        textAlign: 'center',
        marginTop: 35,
        fontFamily: 'Montserrat_400Regular'
    },
    btnConfirmPedido:{
        marginTop: 25,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 120,
        paddingRight: 120,
        backgroundColor: '#2BB673',
        borderRadius: 5,
    },
    btnCancel:{
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 148,
        paddingRight: 148,
        backgroundColor: '#FFF',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#2BB673'
    },
    txtCnf:{
        color: '#FFF',
        fontSize: 12,
        fontWeight: '500'
    },
    txtBtnCancel:{
        color: '#2BB673',
        fontWeight: '500'
    }
})