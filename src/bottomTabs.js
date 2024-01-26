import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { Profile } from './pages/main/profile'
import { MainScreen } from './pages/main/index'
import { ExitMain } from './pages/main/exitMain'

const Tab = createMaterialBottomTabNavigator();

export function BottomTabs(){ 
    return(
      
      <Tab.Navigator>
          <Tab.Screen nome="Início" component={MainScreen}/>
          <Tab.Screen nome="Perfil" component={Profile}/>
          <Tab.Screen nome="Sair" component={ExitMain}/>
      </Tab.Navigator>
      
    )
    
  }