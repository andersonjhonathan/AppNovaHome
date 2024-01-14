import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Form from './form'

export function Register(){
    return(
        <View>
            <Form />
            <Image
                 source={require("../../assets/baseboard_white.png")}
                 style={styles.baseboard}
              />
        </View>
    )
}

const styles = StyleSheet.create({
    baseboard:{
        width: 392,
        height: 80,
        marginTop: 645,
        flex: 1,
        justifyContent: 'center',
        position: 'absolute',
        }, 
})