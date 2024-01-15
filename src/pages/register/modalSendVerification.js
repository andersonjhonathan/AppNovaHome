import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

export function ModalSendVerification({ handleClose }){
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <AntDesign style={styles.icon} size={23} color="#FFF" name="mail"></AntDesign>
                <Text style={styles.txtMensage}>Enviamos uma validação para {'\n'} o e-mail maria@email.com</Text>
                <Text style={styles.txtSubTitle}>Acesse seu e-mail para {'\n'} confirmar a validação</Text>

                <TouchableOpacity style={styles.btnConfirm} onPress={handleClose}>
                    <Text style={styles.textButton}>Ok</Text>
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
        backgroundColor: '#0046FE',
        width: "80%",
        paddingTop: 24,
        paddingBottom: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    txtMensage:{
        color: "#FFF",
        fontSize: 15,
        fontFamily: 'Montserrat',
        marginTop: 10,
    },
    txtSubTitle:{
        color: "#FFF",
        marginTop: 20,
        fontSize: 15,
        fontFamily: 'Montserrat'
        
    },
    btnConfirm:{
        backgroundColor: '#FFF',
        padding: 8,
        width: "60%",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        marginTop: 25,
    },
    icon:{
        marginBottom: 10,
    },
    textButton: {
        color: '#0046FE',
        fontFamily: 'Montserrat'
    }
})

//marginRight: 10}} size={18} color="#FFF" name="mail