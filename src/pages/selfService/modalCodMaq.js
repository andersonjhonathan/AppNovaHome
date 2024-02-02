import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'

export function ModalCodMaq({ handleClose }){
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                
                <Text style={styles.txtCodDesb}>Código de desbloqueio</Text>
                <Text style={styles.txtMensage}>Digite os números que aparecem abaixo do {'\n'} QR Code que está na máquina</Text>
                
                <View style={styles.btnContainer}>
                    <TextInput style={styles.btnInputs}/>
                    <TextInput style={styles.btnInputs}/>
                    <TextInput style={styles.btnInputs}/>
                    <TextInput style={styles.btnInputs}/>
                </View>

                <TouchableOpacity style={styles.btnActivateMaq}>
                    <Text style={styles.txtActivateMaq}>Ativar máquina</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnReturnCam} onPress={handleClose}>
                    <Text style={styles.textButton}>Ativar com a câmera</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "rgba(24, 24, 24, 0.6)",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    content:{
        backgroundColor: '#FFFFFF',
        width: "92%",
        paddingTop: 40,
        paddingBottom: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    txtMensage:{
        color: "#343A40",
        fontSize: 14,
        marginTop: 15,
        marginBottom: 10,
        textAlign:'center'
    },
    txtCodDesb:{
        color: "#002F6E",
        fontSize: 20,
        fontWeight: 'bold' 
    },
    btnReturnCam:{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25,
    },
    textButton: {
        color: '#343A40',
        fontWeight: 'bold',
        fontSize: 18,
    },
    btnContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        padding: 10,
        gap: 16
    },
    btnInputs:{
        borderWidth: 1,
        marginBottom: 10,
        fontSize: 24,
        textAlign: 'center',
        borderRadius: 3,
        width: 48,
        height: 60,
        backgroundColor: '#EBF0F1'
    },
    btnActivateMaq:{
        backgroundColor: '#868E96',
        width: '85%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    txtActivateMaq:{
        color: '#FFF',
        fontSize: 18,
    }
})