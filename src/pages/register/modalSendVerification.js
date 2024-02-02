import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useFonts, Montserrat_400Regular, Montserrat_500Medium } from '@expo-google-fonts/montserrat'
import { AntDesign } from '@expo/vector-icons'

export function ModalSendVerification({ handleClose }){

    const [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_500Medium
      })
  
      if (!fontsLoaded){
        return null
      }

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
        fontFamily: 'Montserrat_400Regular',
        marginTop: 10,
    },
    txtSubTitle:{
        color: "#FFF",
        marginTop: 20,
        fontSize: 15,
        fontFamily: 'Montserrat_400Regular'
        
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
        fontFamily: 'Montserrat_400Regular'
    }
})

//marginRight: 10}} size={18} color="#FFF" name="mail