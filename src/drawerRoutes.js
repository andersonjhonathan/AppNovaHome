import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text } from 'react-native'
import { UserLav } from './pages/selfService/userLav';
import { Image } from 'react-native'
import { SelfService } from './pages/selfService'
import { AddCard } from './pages/selfService/addCard'
import { AddValue } from './pages/selfService/addValue'
import { Extract } from './pages/selfService/extract'
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react'

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

      <Drawer.Screen name="Extrato de consumo" component={Extract}
        options={{
          drawerLabel: 'Extrato de consumo',
          headerShown: true,
          title: '',
          headerTitle: (props) =>
            <Text style={{ marginLeft: 105, color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' }}>Extrato</Text>,
          headerStyle: {
            backgroundColor: '#01B1EC'
          },
          headerTintColor: '#FFFFFF',
        }}
      />
      <Drawer.Screen name="Ajuda" component={SelfService}

      />
      <Drawer.Screen name="Voltar para home" component={SelfService}

      />

    </Drawer.Navigator>
  );
}