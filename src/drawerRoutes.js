import { createDrawerNavigator } from '@react-navigation/drawer';
import { UserLav } from './pages/selfService/userLav';
import { SelfService } from './pages/selfService'
import { AddCard } from './pages/selfService/addCard'
import { AddValue } from './pages/selfService/addValue'
import { Extract } from './pages/selfService/extract'
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react'
import { MyTopTabs } from './topTabNavigator';
import { AntDesign, Ionicons } from '@expo/vector-icons'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native'

const Drawer = createDrawerNavigator();

export function MyDrawer() {

  const [name, setName] = useState('')

  async function getDataName() {
    const response = await AsyncStorage.getItem("@names")
    if (response) {
      setName(response)
    }
  }

  useEffect(() => {
    getDataName()
  }, [])

  return (
    <Drawer.Navigator>

      <Drawer.Screen name="Home" component={UserLav}
        options={{
          drawerLabel: 'Olá, ' + [name],
          headerShown: true,
          title: '',
          headerTitle: (props) => <Image
            style={{ width: 68, height: 40, marginLeft: 92 }}
            source={require('./assets/logo_icon3.png')}
          />,
          headerStyle: {
            backgroundColor: '#01B1EC'
          },
          headerTintColor: '#FFFFFF',
        }}
      />

      <Drawer.Screen name="Mudar de loja" component={SelfService}
        options={{
          drawerLabel: 'Mudar de loja',
          headerShown: true,
          title: '',
          // headerTitle: (props) => <Image 
          //   style={{width: 68, height: 40, marginLeft: 92}}
          //   source={require('./assets/logo_icon3.png')}
          // /> ,
          headerStyle: {
            backgroundColor: '#01B1EC'
          },
          headerTintColor: '#FFFFFF',
        }}
      />

      <Drawer.Screen name="Meus cartões" component={AddCard}

      />

      <Drawer.Screen name="Recarga" component={AddValue}

      />

      <Drawer.Screen name="Extrato de consumo" component={MyTopTabs}
        options={{
          drawerLabel: 'Extrato de consumo',
          headerShown: true,
          title: '',
          headerTitle: (props) =>
            <View style={styles.container}>
              <View style={styles.modal}>
                <Text style={styles.txtLocal}>Copan | SP - Centro</Text>
                <View style={styles.header}>
                  <Image
                    source={require("../../AppNovaHome/src/assets/icon_searchNew.png")}
                    style={styles.icon_searchNew}
                  />
                  <Text style={styles.txtInf}>Você tem:{'\n'}<Text style={styles.txtValor}>R$ 127,00</Text></Text>
                  <Ionicons name='reload-outline' size={25} style={styles.iconLoad} />
                </View>
              </View>
            </View>
          ,
          headerStyle: {
            backgroundColor: '#FFFFFF',
            height: 190,
          },
          headerTintColor: '#01B1EC',
        }}
      />
      <Drawer.Screen name="Ajuda" component={SelfService}

      />
      <Drawer.Screen name="Voltar para home" component={SelfService}

      />

    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    marginLeft: 65,
  },
  icon_searchNew: {
    width: 80,
    height: 80,
    marginLeft: 25,
    marginTop: 13,
  },
  txtLocal: {
    color: '#01B1EC',
    fontWeight: '500',
    marginLeft: 8,
    marginTop: 15,
  },
  txtInf: {
    color: '#01B1EC',
    fontSize: 10,
    textAlign: 'right',
    position: 'absolute',
    marginLeft: 150,
  },
  txtValor: {
    fontSize: 16,
    fontWeight: '500'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconLoad: {
    position: 'absolute',
    margin: 225,
    color: '#01B1EC'
  },
})