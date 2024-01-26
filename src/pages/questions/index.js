import {Text, View, TouchableOpacity, StyleSheet,} from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'




export function Questions(){
    return(
        <View style={styles.container}>

            <Text style={styles.title}>Dúvidas</Text>

            <Text style={styles.subtitle}>Tire suas dúvidas</Text>

            <View style={styles.buttons}>
                <TouchableOpacity style={styles.btnRegister}>
                <AntDesign style={styles.IconRegister} size={37} color="#0046fe" name='filetext1'/>
                  <Text style={styles.txtRegister}>Cadastro</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.btnTermo}>
                <AntDesign style={styles.IconTermo} size={38} color="#0046fe" name='file1'/>
                 <Text style={styles.txtTermo}>Termos {'\n'} de uso</Text>
                </TouchableOpacity>

            </View>

            <TouchableOpacity style={styles.btnFale}>
            <AntDesign style={styles.IconFale} size={21} marginLeft={117} color="#ffffff" name='arrowright'/>
                <Text style={styles.txtFale}>Fale conosco</Text>
            </TouchableOpacity>

        </View> 
        
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff'
        },
    title:{
        marginTop: -385,
        marginBottom: 10,
        marginRight: 300,
        fontSize:20,
        color: "#0046fe",
        },

    subtitle:{
        marginBottom: 25,
        marginRight: 244,
        fontSize:16,
        color:"#0046fe"


    },

    btnRegister:{
        paddingTop: 40,
        paddingBottom: 40,
        paddingRight:60,
        paddingLeft:60,
        marginLeft:16,
        marginRight: 15,
        borderRadius: 8,
        borderColor: '#0046fe',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    btnTermo:{
        paddingTop: 31,
        paddingBottom: 31,
        paddingRight:60,
        paddingLeft:60,
        marginLeft: -6,
        marginRight: 15,
        borderRadius: 8,
        borderColor: '#0046fe',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
        
    }, 
    txtTermo:{
        color: "#0046FE",
        marginTop:10,  
    },
    txtRegister:{
        color: "#0046FE",
        marginTop:10, 
    },
    btnFale:{
        borderRadius: 5,
        height: 43,
        width: 362,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:"#0046fe",
        marginTop:8,
        alignItems:"center",
        flexDirection:'row-reverse'
    
    }, 
    txtFale:{
        color:"#ffffff",
        

    },

    buttons:{
        flexDirection:"row",
        alignItems:'center',
        justifyContent: 'center',
        width: '90%',
        marginBottom: 25,
    },
    IconRegister:{
        
        

        
       

    },
    IconFale:{
        transform:[{rotate:'-45deg'}],
        marginLeft:2,

        
        
    }
})