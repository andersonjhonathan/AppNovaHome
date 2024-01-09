
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'
import { AntDesign } from '@expo/vector-icons'

export function Home({ navigation }){

    function openRegister(){
        navigation.navigate('register')
    }

    function openLogin(){
        navigation.navigate('login')
    }

  const [ fontsLoaded ] = useFonts({
    'Montserrat': require('../../assets/fonts/Montserrat/Montserrat.ttf')
  })

  if(!fontsLoaded){
    <AppLoading/>
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
        <AntDesign style={{ marginRight:10 }} size={18} color="#FFF" name="login"/>
        <Text style={styles.buttonText2}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonDoubt}>
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
    fontFamily: 'Montserrat'
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
    fontFamily: 'Montserrat'
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
    fontFamily: 'Montserrat'
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
    fontFamily: 'Montserrat'
  }

})