import { View, StyleSheet, Text, TouchableOpacity, Image, Button, Modal} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { BarCodeScanner } from 'expo-barcode-scanner'
import React, { useEffect, useState } from 'react'
import { ModalCodMaq } from './modalCodMaq'

export function QrCode( {navigation} ){

    function closeQrCode(){
        navigation.navigate('userLav')
        }

    function OpenCodMaq(){
        setModalVisible(true)
        }

    const [modalVisible, setModalVisible] = useState(false);
    

    const[hasPermission, setHasPermission] = useState(false)
    const[scanData, setScanData] = useState()

    useEffect(() => {
        (async() => {
            const {status} = await BarCodeScanner.requestPermissionsAsync()
            setHasPermission(status === "granted")
        })()
    }, [])

    if(!hasPermission){
        return(
            <View>
                <Text>Conceda permissões de câmera ao aplicativo</Text>
            </View>
        )
    }

    const handleBarCodeScanned = ({type, data}) => {
        setScanData(data)
        console.log(`Data: ${data}`)
        console.log(`Type: ${type}`)
    } 

    
    return(
        <View style={styles.container}>
            <View style={styles.containerTxt}>
                <View style={styles.btnTitle}>
                    <Text style={styles.txtTitle}>Ativar máquina</Text>
                    <TouchableOpacity onPress={closeQrCode}>
                        <Ionicons style={{paddingLeft: 55}} name='close-outline' size={48}/>
                    </TouchableOpacity>
                </View>
                
                <Text style={styles.txtSubtitle}>Aponte a câmera para o QR Code que {'\n'}está na máquina</Text>
            </View>
            
            <View style={styles.barcodebox}>
                <BarCodeScanner
                    // style={StyleSheet.absoluteFillObject}
                    style={{height: 400, width: 400}}
                    onBarCodeScanned={scanData ? undefined : handleBarCodeScanned}
                />
                {scanData && <Button title='Digitalize novamente' onPress={() => setScanData(undefined)}/>}
                
            </View>
            <Image
                source={require("../../assets/get_qrcode.png")}
                style={styles.iconGetQrCode}
            />
            
            <TouchableOpacity style={styles.btnCodQrCode} onPress={OpenCodMaq}>
                <Text style={styles.txtCod}>Digitar código do QR Code</Text>
            </TouchableOpacity>
           
            <Modal visible={modalVisible} animationType='fade' transparent={true}>
              <ModalCodMaq 
              handleClose={ () => setModalVisible(false) } />
            </Modal>
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
        marginBottom: 50
    },
    btnCodQrCode:{
        backgroundColor:'#01B1EC',
        height: 75,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 145,
    },
    txtCod:{
        color: '#FFFFFF',
        fontSize: 18,
    },
    iconGetQrCode:{
        position: 'absolute',
        width: 320,
        height: 320,
        marginTop: 230,
        paddingTop: 30,
    },
    btnTitle:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    barcodebox:{
        alignItems: 'center',
        justifyContent: 'center',
        height: 290,
        width: 290,
        overflow: 'hidden',
        borderRadius: 8,
    },
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
    }
    
})