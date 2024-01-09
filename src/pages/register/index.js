import { View, Text, StyleSheet, TextInput, CheckBox } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'


export function Register(){
    return(
            <View style={styles.container}>
              <Text style={styles.textCadastro}>Cadastro</Text>

              <Text style={styles.nameInput}>Nome</Text>
                <TextInput
                    placeholder="Insira seu nome"
                    style={styles.input}
                />

              <Text style={styles.cpfInput}>CPF</Text>
              <TextInput
                    placeholder="Insira seu CPF"
                    style={styles.input}
                />
                
                
                <Text>Sou estrangeiro e não possuo CPF</Text>

                <TouchableOpacity style={styles.textNext}>
                    <Text>Próxima</Text>
                </TouchableOpacity>

            </View>
    )
}

const styles = StyleSheet.create({
   container:{
    flex:0,
    justifyContent: 'center',
    alignItems: 'center',
   },
    input:{
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
   textCadastro:{
        marginRight: 260,
        marginTop: 25,
        fontSize: 20,
        color: "#0046FE",
        fontFamily: 'Montserrat'
   },
   textNext:{
    backgroundColor: '#CED4DA',
    width: "90%",
    height: 45,
    alignItems:"center",
    justifyContent: "center",
    borderRadius: 5,
   }
})