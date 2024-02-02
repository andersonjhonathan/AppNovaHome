import { Text, View, StyleSheet, TouchableOpacity, SafeAreaView, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useFonts, Montserrat_400Regular, Montserrat_500Medium } from '@expo-google-fonts/montserrat'

export function Profile(){

   const [fontsLoaded] = useFonts({
      Montserrat_400Regular,
      Montserrat_500Medium
    })

    if (!fontsLoaded){
      return null
    }


   return(
    
    <View style={styles.container}>
         
         <SafeAreaView style={styles.header}>
               <Image
                  source={require("../../assets/logo_icon.png")}
                  style={styles.logoIcon}
               />
         </SafeAreaView>
         
         <Text style={styles.txtProfile}>Perfil</Text>
         
         
         <Text style={styles.txtName}>Olá, Maria!</Text>

         <View style={styles.containerIcon}>
            <Ionicons size={24} color="#0046FE" name="call-outline"/>
            <Text style={styles.txtNumber}>(11) 12345 7890</Text>
         </View>
         
         <View style={styles.containerIcon}>
            <Ionicons size={24} color="#0046FE" name="mail-outline"/>
            <Text style={styles.txtEmail}>maria@email.com</Text>
         </View>

         <TouchableOpacity style={styles.btnEdit}>
            <Ionicons style={{marginRight: 7}} size={22} color="#FFFFFF" name="person-add-outline"/>
            <Text style={styles.txtEdit}>Editar informações</Text>
         </TouchableOpacity>

         <TouchableOpacity style={styles.btnRedPassword}>
            <Ionicons style={{marginRight: 7}} size={22} color="#0046FE" name="lock-closed-outline"/>
            <Text style={styles.txtRedPassword}>Redefinir senha</Text>
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
   txtProfile:{
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
  txtNumber:{
   fontSize: 22,
   color: '#0046FE',
   marginTop: 10,
   marginLeft: 15,
   marginBottom: 10,
   fontFamily: 'Montserrat_400Regular'
  },
  txtEmail:{
   fontSize: 22,
   color: '#0046FE',
   marginTop: 10,
   marginLeft: 15,
   marginBottom: 10,
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
  btnRedPassword:{
   borderColor: '#0046FE',
   borderWidth: 1,
   width: '92%',
   margin: 15,
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
  txtRedPassword:{
   color: '#0046FE',
   fontFamily: 'Montserrat_400Regular'
  },
  containerIcon:{
   flexDirection: 'row',
   alignItems:'center',
   marginLeft: 15,
  }
})