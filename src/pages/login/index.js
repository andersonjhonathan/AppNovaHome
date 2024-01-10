import { View, Text, StyleSheet, TextInput, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { AntDesign } from '@expo/vector-icons'

export function Login(){
    return(
        <View style={styles.container}>
        <Text style={styles.textLogin}>Login</Text>
            
          <TextInput
              placeholder="Insira seu e-mail"
              style={styles.inputEmail}
          />

          <TextInput
              placeholder="Insira sua senha"
              style={styles.inputSenha}
          />
          <TouchableOpacity>
            <Text style={{color: "#0046FE",
                          fontFamily:'Montserrat',
                          marginRight: 220,
                          marginTop: -5,
                          marginBottom: 55,
                          }}>Esqueceu a senha?</Text>
          </TouchableOpacity>
          

          <TouchableOpacity style={styles.buttonEnter}>
            <AntDesign style={{ marginRight:10}} size={18} color="#FFF" name="login"/>
            <Text style={styles.buttonText2}>Entrar</Text>
          </TouchableOpacity>


          <TouchableOpacity style={styles.btnAutentic}>
            <AntDesign style={{ marginRight: 10}} size={18} color="#0046FE" name="sync" />
              <Text style={styles.btnText}>Reenviar autenticação</Text>
          </TouchableOpacity>

          <Image
              source={require("../../assets/baseboard_white.png")}
              style={styles.baseboard}
          />


      </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
       },
        inputEmail:{
            borderColor: "#D0D5DD",
            borderRadius: 7,
            borderWidth: 1,
            width: "90%",
            height: 45,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10,
            marginBottom: 20,
       },
       inputSenha:{
        borderColor: "#D0D5DD",
        borderRadius: 7,
        borderWidth: 1,
        width: "90%",
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        marginBottom: 10,
        },
       textLogin:{
            marginRight: 290,
            marginTop: 27,
            marginBottom: 20,
            fontSize: 20,
            color: "#0046FE",
            fontFamily: 'Montserrat'
       },
       btnAutentic:{
        borderColor: '#0046FE',
        borderWidth: 1,
        width: 350,
        height: 45,
        alignItems:"center",
        justifyContent: "center",
        borderRadius: 5,
        marginTop: 15,
        flexDirection: "row"
       },
       btnText:{
        color: "#0046FE",
        fontFamily: "Montserrat"
       },
       baseboard:{
        width: 392,
        height: 80,
        marginTop: 270
      }, 
      buttonEnter:{
        backgroundColor: "#0046FE",
        borderRadius: 5,
        borderWidth: 1,
        width: "125%",
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "row",
      },
      buttonText2:{
        color: "#FFFFFF",
        fontFamily: 'Montserrat',
        paddingRight: 135 
      },
})