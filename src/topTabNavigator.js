import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"

const Tab = createMaterialTopTabNavigator()

export function MyTopTabs(){
    return(
        <Tab.Navigator>
            <Tab.Screen name='Fevereiro' component={''}/> 
            <Tab.Screen name='Março' component={''}/>
        </Tab.Navigator>
    )
}