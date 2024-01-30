import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { UserLav } from './pages/selfService/userLav';
import { Image } from 'react-native'

const Drawer = createDrawerNavigator();

export function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={UserLav} 
      options={{
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
      
    </Drawer.Navigator>
  );
}