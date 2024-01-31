import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { UserLav } from './userLav'

export function QrCode( {navigation} ){

    function closeQrCode(){
        navigation.navigate('userLav')
        }

    return(
        <View>
            <View style={styles.containerTxt}>
                <View style={styles.btnTitle}>
                    <Text style={styles.txtTitle}>Ativar máquina</Text>
                    <TouchableOpacity onPress={closeQrCode}>
                        <Ionicons style={{paddingLeft: 55}} name='close-outline' size={48}/>
                    </TouchableOpacity>
                </View>
                
                <Text style={styles.txtSubtitle}>Aponte a câmera para o QR Code que {'\n'}está na máquina</Text>
            </View>

            <View>
                    <Image
                          source={require("../../assets/get_qrcode.png")}
                          style={styles.iconGetQrCode}
                        />
            </View>
            

            <TouchableOpacity style={styles.btnCodQrCode}>
                <Text style={styles.txtCod}>Digitar código do QR Code</Text>
            </TouchableOpacity>
           
            
        </View>
    )
}

const styles = StyleSheet.create({
    containerTxt:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 55,
    },
    txtTitle:{
        fontSize: 20,
        color: '#002F6E',
        fontWeight: 'bold',
        paddingLeft: 90,
        
    },
    txtSubtitle:{
        textAlign: 'center',
        padding: 15,

    },
    btnCodQrCode:{
        backgroundColor:'#01B1EC',
        height: 75,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 145,
    },
    txtCod:{
        color: '#FFFFFF',
        fontSize: 18,
    },
    iconGetQrCode:{
        width: 320,
        height: 320,
        margin: 35,
    },
    btnTitle:{
        flexDirection: 'row',
        alignItems: 'center'
    }
})