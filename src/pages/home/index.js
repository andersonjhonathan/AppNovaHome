import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { useFonts, Montserrat_400Regular, Montserrat_600SemiBold } from '@expo-google-fonts/montserrat'
import { AntDesign, Ionicons } from '@expo/vector-icons'


export function Home({ navigation }){

    function openRegister(){
        navigation.navigate('register')
    }

    function openLogin(){
        navigation.navigate('login')
    }

    function openQuestions(){
      navigation.navigate('questions')
    }

    const [fontsLoaded] = useFonts({
      Montserrat_400Regular,
      Montserrat_600SemiBold
    })

    if (!fontsLoaded){
      return null
    }

  return(
    <View style={styles.container}>
      <Image
       source={require("../../assets/logo.png")}
       style={styles.logo}
      />
      
      <Text style={styles.subtitle}>Com OMO Lavanderia, você tem {'\n'}
      a garantia de uma rotina mais {'\n'} eficiente e prática.</Text>
      
      <TouchableOpacity style={styles.buttonRegister} onPress={openRegister} >
        <AntDesign style={{ marginRight:6 }} size={25} color="#0046FE" name="adduser"/>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonEnter} onPress={openLogin}>
        <Ionicons style={{ marginRight:10 }} size={26} color="#FFF" name="log-in-outline"/>
        <Text style={styles.buttonText2}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonDoubt} onPress={openQuestions}>
        <AntDesign style={{backgroundColor:"#FFF", borderRadius: 15, marginRight:30}} size={30} color="#0046FE" name="question"/>
        <Text style={styles.buttonDou}>Dúvidas</Text>
      </TouchableOpacity>
      
      <Image
      source={require("../../assets/baseboard.png")}
       style={styles.baseboard}
      />
    </View>
  
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#0046FE",
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo:{
    marginTop:100,
    marginBottom: 60,
    width: "75%",
    height: 190,
  },
  baseboard:{
    width: 392,
    height: 80,
  }, 
  subtitle:{
    textAlign: 'center',
    marginTop: 10,
    color: '#FFFFFF',
    marginBottom: 25,
    fontSize: 18,
    justifyContent: 'center',
    fontFamily: 'Montserrat_400Regular'
  },
  buttonRegister:{
    backgroundColor: "#F5F8FF",
    width: "90%",
    height: 45,
    alignItems:"center",
    justifyContent: "center",
    borderRadius: 5,
    marginBottom: 20,
    flexDirection: "row"
  },
  buttonText:{
    color: "#0046FE",
    fontFamily: 'Montserrat_400Regular'
  },
  buttonEnter:{
    borderColor: "#FFFFFF",
    borderRadius: 5,
    borderWidth: 1,
    width: "90%",
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "row"
  },
  buttonText2:{
    color: "#FFFFFF",
    fontFamily: 'Montserrat_400Regular'
  },

  buttonDoubt:{
    borderColor: "#FFFFFF",
    borderRadius: 15,
    borderWidth: 1,
    width: '35%',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    marginTop: 70,
    flexDirection: "row"
  }, 
  buttonDou:{
    color: "#FFFFFF",
    marginRight: 30,
    marginLeft: -14,
    fontSize: 15,
    fontFamily: 'Montserrat_400Regular'
  }

})