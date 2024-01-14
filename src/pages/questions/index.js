import {Text, View, TouchableOpacity, StyleSheet} from 'react-native'
import React from 'react'

export function Questions(){
    return(
        <View style={styles.container}>
            <Text>Duvidas</Text>
            <Text>Tire suas dúvidas</Text>

            <TouchableOpacity>
                <Text>Cadastro</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})