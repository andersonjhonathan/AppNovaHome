import { View, Text, StyleSheet, StatusBar, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context';

export function SelfService( {navigation} ) {

    const [searchText, setSearchText] = useState('')
    const [list, setList] = useState(lojas)

    //Criação da função "Search" em FlatList
    useEffect(()=>{
        if(searchText === '') {
            setList(lojas);
        } else {
            setList(
                lojas.filter(item => {
                    if(item.title.indexOf(searchText) > -1) {
                        return true
                    } else { 
                        return false
                    }
                })
            )
        }
    }, [searchText])

    const Item = ({ title }) => (
        <TouchableOpacity onPress={openUserLav}>
            <View style={styles.item}>
              <Image source={require("../../assets/maq_icon.png")} style={styles.iconMaq} />
              <Text style={styles.subtitle}>Endereço da loja</Text>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.price}>R$ 0,00</Text>
            </View>
        </TouchableOpacity>
    );

    function openUserLav(){
        navigation.navigate('userLav')
        }

    return (
        <SafeAreaView>
            <StatusBar backgroundColor="#01B1EC" barStyle='light-content' />

            <Text style={styles.txtTitle}>Encontre a lavanderia mais próxima de você</Text>
            <View style={styles.btnSearch}>
                <Image source={require("../../assets/search_icon.png")} style={styles.iconSearch} />
                <TextInput 
                    style={styles.txtSearch} 
                    placeholder='Digite um endereço' 
                    value={searchText}
                    onChangeText={(t) => setSearchText(t)}
                    />
            </View>

            <ScrollView style={styles.scrollView} horizontal={true}>
            <View style={styles.containerList}>
                <FlatList
                    data={list}
                    renderItem={({ item }) =>
                        <Item title={item.title} />
                    }
                    keyExtractor={(item) => item.key}
                    showsVerticalScrollIndicator={false}
                />
            </View>
            </ScrollView>
        </SafeAreaView>
    )  
}

const lojas = [
    {
        key: '1',
        title: 'Porto Alegre | RS',
        image: require('../../assets/maq_icon.png')
    },
    {
        key: '2',
        title: 'B. da Tijuca | RJ',
        image: require('../../assets/maq_icon.png')
    },
    {
        key: '3',
        title: 'Niteroí | RJ',
        image: require('../../assets/maq_icon.png')
    },
    {
        key: '4',
        title: 'Belo Horizonte | MG',
        image: require('../../assets/maq_icon.png')
    },
    {
        key: '5',
        title: 'Nome da loja',
        image: require('../../assets/maq_icon.png')
    },
    {
        key: '6',
        title: 'Nome da loja',
        image: require('../../assets/maq_icon.png')
    },
    {
        key: '7',
        title: 'Nome da loja',
        image: require('../../assets/maq_icon.png')
    },
    {
        key: '8',
        title: 'Nome da loja',
        image: require('../../assets/maq_icon.png')
    },
    {
        key: '9',
        title: 'Nome da loja',
        image: require('../../assets/maq_icon.png')
    },
    {
        key: '10',
        title: 'Nome da loja',
        image: require('../../assets/maq_icon.png')
    },
    {
        key: '11',
        title: 'Nome da loja',
        image: require('../../assets/maq_icon.png')
    },
]

const styles = StyleSheet.create({
    containerList: {
        padding: 25,
    },
    item: {
        height: 50,
        margin: 10,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#DEE2E6',
    },
    title: {
        color: '#002F6E',
        fontWeight: 'bold',
        marginLeft: -130,
        fontSize: 16,
    },
    subtitle: {
        paddingTop: 20,
        paddingRight: 25,
        paddingLeft: -15,
        color: '#868E96',
    },
    iconMaq: {
        width: 25,
        height: 31,
        marginRight: 20,
        marginTop: 6,
    },
    iconSearch: {
        width: 20,
        height: 20,
        marginLeft: 13,
    },
    price: {
        color: '#01B1EC',
        fontWeight: 'bold',
        marginLeft: 'auto',
        marginTop: 15,
        paddingLeft: 100,
    },
    txtTitle: {
        fontSize: 16,
        paddingLeft: 15,
        paddingTop: 30,
    },
    btnSearch: {
        backgroundColor: '#FFF',
        width: '92%',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 40,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#FFF',
        marginLeft: 15,
        marginTop: 17,
        flexDirection: 'row'
    },
    txtSearch: {
        marginRight: 195,
    },
    scrollView:{
        horizontal: 20,
        
    }
})