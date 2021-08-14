import React, { useContext, useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/LoginScreen';
import { RegisterScreen } from '../screens/RegisterScreen';
import { AuthContext } from '../context/AuthContext';
import { Loading } from '../components/Loading';
import { MenuLateralNavigator } from './MenuLateralNavigator';

export type UserStackParams = {
  RegisterScreen: undefined;
  LoginScreen: undefined;
}

const Stack = createStackNavigator();


useEffect(() => {
  SplashScreen.hide();
}, [])


export const Navigator = () => {

  const { status } = useContext(AuthContext);

  if ( status === 'checking' ) 
    return (
        <Loading />
    )
    

  return (
      <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
      >

        {
          ( status !== 'authenticated' )
            ? (
              <>
                <Stack.Screen 
                    name="LoginScreen" 
                    component={LoginScreen} />
                <Stack.Screen 
                    name="RegisterScreen" 
                    component={RegisterScreen} />
                
              </>
              )
              
            :(
              <Stack.Screen 
                name="MenuLateralNavigator" 
                component={MenuLateralNavigator} 
              />
            )
        }

      </Stack.Navigator>
  );
}
