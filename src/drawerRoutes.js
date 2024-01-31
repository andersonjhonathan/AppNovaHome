import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { UserLav } from './pages/selfService/userLav';
import { Image } from 'react-native'
import { SelfService } from './pages/selfService'


const Drawer = createDrawerNavigator();

export function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={UserLav} 
      options={{
        drawerLabel: 'Olá, Maria' ,
        headerShown: true,
        title: '',
        headerTitle: (props) => <Image 
          style={{width: 68, height: 40, marginLeft: 92}}
          source={require('./assets/logo_icon3.png')}
        /> ,
        headerStyle: {
            backgroundColor: '#01B1EC'
        },
        headerTintColor: '#FFFFFF',
      }}
      />
      <Drawer.Screen name="Mudar de loja" component={SelfService}
      
      />

      <Drawer.Screen name="Meus cartões" component={SelfService}
      
      />

      <Drawer.Screen name="Recarga" component={SelfService}
      
      />

      <Drawer.Screen name="Extrato de consumo" component={SelfService}
      
      />
      <Drawer.Screen name="Ajuda" component={SelfService}
      
      />
      <Drawer.Screen name="Voltar para home" component={SelfService}
      
      />
      
    </Drawer.Navigator>
  );
}