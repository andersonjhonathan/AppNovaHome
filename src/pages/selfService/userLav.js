import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import { useFonts, Montserrat_400Regular } from '@expo-google-fonts/montserrat'
import { AntDesign } from '@expo/vector-icons'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'
import React, { useState } from 'react'

export function UserLav ( {navigation} ){

    function openQrCode(){
        navigation.navigate('qrCode')
        }
    
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

                        </View>
                        
                    </View>

                    <TouchableOpacity style={styles.btnSaldo}>
                        <Text style={styles.btnTxt}>Adicionar saldo</Text>
                    </TouchableOpacity>
                </View>
            </View>
                <View style={styles.buttons}>
                    <TouchableOpacity style={styles.btnMaqOff}>
                        <Image
                          source={require("../../assets/icon_maqoff.png")}
                          style={styles.iconMaqOff}
                        />
                        <View>
                          <Text style={styles.lavText}>Lavadora</Text>
                          <Text style={styles.lavDisp}>2 livres</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnSecOff}>
                        <Image
                          source={require("../../assets/icon_secoff.png")}
                          style={styles.iconSecOff}
                        />
                        <View>
                            <Text style={styles.secText}>Secadora</Text>
                            <Text style={styles.secDisp}>2 livres</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.btnSync}>
                    <Text style={styles.txtSync}>Atualizar status</Text>
                    <AntDesign style={{ marginRight: 10, marginLeft: 15}} size={18} color="#00AAFF" name="sync" />
                </TouchableOpacity>

                <View>
                <ScrollView style={styles.scrollView} horizontal={true}>
                    <View style={styles.containerList}>
                    <FlatList
                       data={Maquinas}
                       renderItem={({ item }) =>
                           <Item title={item.title} />
                      }
                       keyExtractor={(item) => item.key}
                       showsVerticalScrollIndicator={false}
                    />
                    </View>
                </ScrollView>
                </View>
                <View style={styles.footer}>
                    <Image
                          source={require("../../assets/qrcode.png")}
                          style={styles.iconQrCode}
                        />
                      <TouchableOpacity style={styles.btnQrCode} onPress={openQrCode}>
                        <Text style={styles.txtQrCode}>Ativar máquina pelo QR Code</Text>
                      </TouchableOpacity>
                </View>
            </View>
            
    )
}

const Item = ({ title }) => (
    <TouchableOpacity>
        <View style={styles.item}>
          <Image source={require("../../assets/maq_icon.png")} style={styles.iconMaq} />
          <Text style={styles.price}>R$ 10,00</Text>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.MaqLivre}>Máquina livre</Text>
        </View>
    </TouchableOpacity>
);

const Maquinas = [
    {
        key: '1',
        title: 'Lavadora N1',
        image: require('../../assets/maq_icon.png')
    },
    {
        key: '2',
        title: 'Lavadora N2',
        image: require('../../assets/maq_icon.png')
    },
    {
        key: '3',
        title: 'Lavadora N3',
        image: require('../../assets/maq_icon.png')
    },
    {
        key: '4',
        title: 'Secadora N1',
        image: require('../../assets/sec_icon.png')
    },
    {
        key: '5',
        title: 'Secadora N2',
        image: require('../../assets/sec_icon.png')
    }
]

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
        borderColor: '#DEE2E6',
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
    btnTxt:{
        color: '#FFFFFF',
        fontSize: 15,
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
    iconMaqOff:{
        width: 50,
        height: 50,
    },
    iconSecOff:{
        width: 50,
        height: 50,
    },
    btnMaqOff:{
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderRadius: 6,
        borderColor: '#ADB5BD',
        width: '44%',
        height: '80%',
        paddingTop: 10,
        paddingRight: 10,
        paddingLeft: 15,
        paddingBottom: 10,
        marginTop: 30,
        marginLeft: 16,
        alignItems: 'center',
        justifyContent:'space-between'
    },
    btnSecOff:{
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderRadius: 6,
        borderColor: '#ADB5BD',
        width: '44%',
        height: '80%',
        paddingTop: 10,
        paddingRight: 10,
        paddingLeft: 15,
        paddingBottom: 10,
        marginTop: 30,
        marginLeft: 15,
        alignItems: 'center',
        justifyContent:'space-between'
    },
    buttons:{
        flexDirection: 'row'
    },
    lavText:{
        fontFamily: 'Montserrat_400Regular',
        fontSize: 16,
        paddingRight: 10,
        paddingBottom: 8,
    },
    secText:{
        fontFamily: 'Montserrat_400Regular',
        fontSize: 16,
        paddingRight: 10,
        paddingBottom: 8,
    },
    secDisp:{
        fontSize: 16,
    },
    lavDisp:{
        fontSize: 16,
    },
    btnSync:{
        flexDirection: 'row',
        margin: 25,
        paddingLeft: 185,
        paddingBottom: 15,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#DEE2E6',
    },
    txtSync:{
        color: '#00AAFF',
        paddingLeft: 10,
        fontSize: 16,
    },
    containerList: {
        paddingLeft: 25,
        paddingRight: 25,
        paddingTop: -10,
        paddingBottom: 25,
    },
    item: {
        height: 50,
        margin: 10,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#DEE2E6',
    },
    title: {
        color: '#002F6E',
        fontWeight: 'bold',
        marginLeft: -81,
        fontSize: 16,

    },
    price: {
        paddingTop: 20,
        paddingRight: 25,
        paddingLeft: -15,
        color: '#868E96',
    },
    iconMaq: {
        width: 25,
        height: 31,
        marginRight: 20,
        marginTop: 6,
    },
    MaqLivre: {
        color: '#2BB673',
        fontWeight: 'bold',
        marginLeft: 'auto',
        marginTop: 15,
        paddingLeft: 100,
    },
    scrollView:{
        horizontal: 20,
        
    },
    footer:{
        backgroundColor: '#2BB673',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: '10%'
    },
    btnQrCode:{
        backgroundColor: '#FFFFFF',
        width: '60%',
        height: '50%',
        marginTop: 15,
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconQrCode:{
        width: '8%',
        height: '45%',
        marginTop: 16,
        marginLeft: 25,
        marginBottom: 16,
    },
    txtQrCode:{
        color: '#2BB673',
        fontWeight: 'bold'
    },
    txtBtnSaldo:{
        flexDirection:'row',
        
    },
    btnIcon:{
        paddingLeft: 5,
        paddingTop: 1,
    },
    
    
})