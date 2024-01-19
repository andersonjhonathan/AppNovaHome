import {View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity} from 'react-native'
import ListHorizontal from '../../components/ListHorizontal/index'

const slides = [
    {
        key: '1',
        title: 'Texto 1',
        image: require('../../assets/slider_1.png')
    },
    {
        key: '2',
        title: 'Texto 2',
        image: require('../../assets/slider_2.png')
    },
    {
        key: '3',
        title: 'Texto 3',
        image: require('../../assets/slider_3.png')
    },
]

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
            
            <View>
                <ListHorizontal data={slides}/>
            </View>

            <Text style={styles.txtSubtitle}>Qual serviço você quer usar hoje?</Text>

            <TouchableOpacity style={styles.btnCompartilhada}>
                <Text>OMO Lavanderia {'\n'}Compartilhada</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnSelfService}>
                <Text>Self-Service</Text>
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
        
    },
    btnCompartilhada:{
        padding: 20,
        backgroundColor: '#0046FE',
        marginLeft: 15,
        marginRight: 15,
        borderRadius: 8,
    },
    btnSelfService:{
        padding: 20,
        backgroundColor: '#0046FE',
        marginLeft: 15,
        marginRight: 15,
        marginTop: 10,
        borderRadius: 8,
    }
})