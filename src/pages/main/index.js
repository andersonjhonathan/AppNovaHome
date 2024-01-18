import {View, Text, StyleSheet, SafeAreaView, Image} from 'react-native'

export function MainScreen(){
    return(
        <View style={styles.container}>
            <SafeAreaView style={styles.header}>
                <Text style={styles.headerText}>Olá, Maria!</Text>
                <Image
              source={require("../../assets/logo_icon.png")}
              style={styles.logoIcon}
          />

            </SafeAreaView>
            <Text>Tela Principal</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        
    },
    header:{
        backgroundColor: "#0046FE",
        paddingTop: 5,
        paddingBottom: 9,
        paddingLeft: 14,
        paddingRight: 14,
        flexDirection: 'row',
        alignItems: 'center',
        
    },
    headerText:{
        color: '#FFF',
        fontSize: 20,
        fontFamily: 'Montserrat',
        paddingTop: 15,
    },
    logoIcon:{
        width: 90,
        height: 60,
        marginLeft: 160,
        marginBottom: 5,
        
    }
})