import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { February } from "./pages/selfService/months/february"
import { March } from "./pages/selfService/months/march"

const Tab = createMaterialTopTabNavigator()

export function MyTopTabs(){
    return(
        <Tab.Navigator>
            <Tab.Screen name='Fevereiro' component={February}/> 
            <Tab.Screen name='Março' component={March}/>
        </Tab.Navigator>
    )
}