import { Text, View, StyleSheet, TouchableOpacity, SafeAreaView, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useFonts, Montserrat_400Regular, Montserrat_500Medium } from '@expo-google-fonts/montserrat'
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react'
import { FloatingLabelInput } from 'react-native-floating-label-input'
import { AntDesign } from '@expo/vector-icons'

export function NewPassword(){
    return(
        <View>
            <Text>Nova senha</Text>
        </View>
    )
}

const styles = StyleSheet.create({

})