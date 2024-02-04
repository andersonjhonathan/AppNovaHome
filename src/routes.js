import { createStackNavigator } from '@react-navigation/stack'
import { Home } from './pages/home'
import { Register } from './pages/register'
import { Login } from './pages/login'
import { Image } from 'react-native'
import { Questions } from './pages/questions'
import { ForgotPassword } from './pages/forgotPassword'
import { MainScreen } from './pages/main/index'
import { SelfService } from './pages/selfService/index'
import { MyDrawer } from './drawerRoutes'
import { BottomTabs } from './bottomTabs'
import { QrCode } from './pages/selfService/qrcode'
import { ConfirmMaq } from './pages/selfService/confirmMaq'
import { AddValue } from './pages/selfService/addValue'
import { Text } from 'react-native'

const Nav = createStackNavigator();

export function Routes(){
    return(
        <Nav.Navigator>
            <Nav.Screen
              name="home"
              component={Home}
              options={{
                headerShown: false,
              }}
            />

            <Nav.Screen
              name="register"
              component={Register}
              options={{
                headerShown: true,
                title: '' ,
                headerTitle: (props) => <Image 
                  style={{width: 60, height: 40, marginLeft: 92}}
                  source={require('./assets/logo_icon.png')}
                /> ,
                headerStyle: {
                    backgroundColor: '#0046FE'
                },
                headerTintColor: '#FFF',
                
              }}
            />

            <Nav.Screen
              name="login"
              component={Login}
              options={{
                headerShown: true,
                title: '',
                headerTitle: (props) => <Image 
                  style={{width: 60, height: 40, marginLeft: 92}}
                  source={require('./assets/logo_icon.png')}
                /> ,
                headerStyle: {
                    backgroundColor: '#0046FE'
                },
                headerTintColor: '#FFF'
              }}
            />

            <Nav.Screen
              name="questions"
              component={Questions}
              options={{
                headerShown: true,
                title: '',
                headerTitle: (props) => <Image 
                  style={{width: 60, height: 40, marginLeft: 92}}
                  source={require('./assets/logo_icon.png')}
                /> ,
                headerStyle: {
                    backgroundColor: '#0046FE'
                },
                headerTintColor: '#FFF'
              }}
            />

            <Nav.Screen
              name="forgotPassword"
              component={ForgotPassword}
              options={{
                headerShown: true,
                title: '',
                headerTitle: (props) => <Image 
                  style={{width: 60, height: 40, marginLeft: 92}}
                  source={require('./assets/logo_icon.png')}
                /> ,
                headerStyle: {
                    backgroundColor: '#0046FE'
                },
                headerTintColor: '#FFF'
              }}
            />

            <Nav.Screen
              name="mainScreen"
              component={BottomTabs}
              options={{
                headerShown: false,
                title: '',
                headerStyle: {
                    backgroundColor: '#0046FE'
                },
                headerTintColor: '#FFF'
              }}
            />

            <Nav.Screen
              name="selfService"
              component={SelfService}
              options={{
                headerShown: true,
                title: '',
                headerTitle: (props) => <Image 
                  style={{width: 68, height: 48, marginLeft: 92}}
                  source={require('./assets/logo_icon2.png')}
                /> ,
                headerStyle: {
                    backgroundColor: '#F5F8FF'
                },
                headerTintColor: '#343A40',
              }}
            />

            <Nav.Screen
              name="userLav"
              component={MyDrawer}
              options={{
                headerShown: false,
                title: '',
                headerTitle: (props) => <Image 
                  style={{width: 68, height: 48, marginLeft: 92}}
                  source={require('./assets/logo_icon2.png')}
                /> ,
                headerStyle: {
                    backgroundColor: '#F5F8FF'
                },
                headerTintColor: '#343A40',
              }}
            />

            <Nav.Screen
              name="addValue"
              component={AddValue}
              options={{
                headerShown: true,
                title: '',
                headerTitle: (props) => 
                  <Text style={{marginLeft: 105, color:'#FFFFFF', fontSize:16, fontWeight: 'bold'}}>Recarga</Text>,
                headerStyle: {
                    backgroundColor: '#01B1EC'
                },
                headerTintColor: '#FFFFFF',
              }}
            />

            <Nav.Screen
              name="qrCode"
              component={QrCode}
              options={{
                headerShown: false,
                title: '',
                headerTitle: (props) => <Image 
                  style={{width: 68, height: 48, marginLeft: 92}}
                  source={require('./assets/logo_icon2.png')}
                /> ,
                headerStyle: {
                    backgroundColor: '#F5F8FF'
                },
                headerTintColor: '#343A40',
              }}
            />

            <Nav.Screen
              name="confirmMaq"
              component={ConfirmMaq}
              options={{
                headerShown: false,
                title: '',
                headerTitle: (props) => <Image 
                  style={{width: 68, height: 48, marginLeft: 92}}
                  source={require('./assets/logo_icon2.png')}
                /> ,
                headerStyle: {
                    backgroundColor: '#F5F8FF'
                },
                headerTintColor: '#343A40',
              }}
            />

        </Nav.Navigator>
    )
}
