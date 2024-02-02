import { View , Text, StyleSheet, TouchableOpacity, SafeAreaView, Image  } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useFonts, Montserrat_400Regular, Montserrat_500Medium } from '@expo-google-fonts/montserrat'

export function ExitMain( {navigation} ){

    const [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_500Medium
      })
  
      if (!fontsLoaded){
        return null
      }
  

    function ReturnAppDeslogado(){
        navigation.navigate('home')
    }

    return(
        <View style={styles.container}>


            <SafeAreaView style={styles.header}>
               <Image
                  source={require("../../assets/logo_icon.png")}
                  style={styles.logoIcon}
               />
            </SafeAreaView>

            <Text style={styles.txtExit}>Sair</Text>
            <Text style={styles.txtName}>Olá, Maria!</Text>
            <Text style={styles.txtSubtitle}>Tem certeza que quer sair da sua conta?</Text>

            <TouchableOpacity style={styles.btnEdit} onPress={ReturnAppDeslogado}>
            <Ionicons style={{marginRight: 7}} size={22} color="#FFFFFF" name="log-out-outline"/>
            <Text style={styles.txtEdit}>Sair da conta</Text>
            </TouchableOpacity>

         
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FFF'
    },
     header:{
        backgroundColor: "#0046FE",
        paddingTop: 5,
        paddingBottom: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
     },
     logoIcon:{
        width: 65,
        height: 35,
        alignItems:'center',
        justifyContent: 'center',
        marginBottom: 5,
    },
     txtExit:{
        fontSize: 22,
        color: '#0046FE',
        marginTop: 25,
        marginLeft: 15,
        marginBottom: 10,
        fontFamily: 'Montserrat_500Medium'
    },
    txtName:{
     fontSize: 22,
     color: '#0046FE',
     marginTop: 10,
     marginLeft: 15,
     marginBottom: 10,
     fontFamily: 'Montserrat_400Regular'
    },
    txtSubtitle:{
     fontSize: 16,
     color: '#0046FE',
     marginTop: 10,
     marginLeft: 15,
     marginBottom: 16,
     fontFamily: 'Montserrat_400Regular'
    },
    btnEdit:{
     backgroundColor:'#0046FE',
     width: '92%',
     marginTop: 15,
     marginLeft: 15,
     marginRight: 15,
     marginBottom: 2,
     padding: 13,
     borderRadius: 5,
     alignItems: 'center',
     justifyContent: 'center',
     flexDirection:'row'
    },
    txtEdit:{
     color: '#FFFFFF',
     fontFamily: 'Montserrat_400Regular'
    },
})