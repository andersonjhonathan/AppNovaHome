import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { Profile } from './pages/main/profile'
import { MainScreen } from './pages/main'
import { ExitMain } from './pages/main/exitMain'
import { Ionicons } from '@expo/vector-icons'

const Tab = createMaterialBottomTabNavigator();

export function BottomTabs() { 
    return(
      
      <Tab.Navigator
        barStyle={{ backgroundColor: '#0046FE'}}
        activeColor="#f0edf6"
        inactiveColor="#f0edf6"
      >
          <Tab.Screen 
            name="Início" 
            component={MainScreen}
            options={{
              tabBarIcon: ({ focused }) => {
                if(focused){
                  return <Ionicons size={24} color="#0046FE" name="home-outline"/>
                }
                return <Ionicons size={24} color="#FFFFFF" name="home-outline"/>
              }
            }}
            />

          <Tab.Screen 
            name="Perfil" 
            component={Profile}
            options={{
              tabBarIcon: ({ focused }) => {
                if(focused){
                  return <Ionicons size={24} color="#0046FE" name="person-outline"/>
                }
                return <Ionicons size={24} color="#FFFFFF" name="person-outline"/>
              }
            }}
          />


          <Tab.Screen 
            name="Sair" 
            component={ExitMain}
            options={{
              tabBarIcon: ({ focused }) => {
                if(focused){
                  return <Ionicons size={24} color="#0046FE" name="log-out-outline"/>
                }
                return <Ionicons size={24} color="#FFFFFF" name="log-out-outline"/>
              }
            }}
          />
      </Tab.Navigator>
      
    )
    
  }