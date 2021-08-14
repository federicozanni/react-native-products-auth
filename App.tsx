import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { AuthProvider } from './src/context/AuthContext';
import { ProductsProvider } from './src/context/ProductsContext';
import { Navigator } from './src/navigation/Navigator';
import {LogBox } from 'react-native';

LogBox.ignoreLogs(['Reanimated 2']);


export const AppState = ( {children}: any ) => {
  return(
    <AuthProvider>
      <ProductsProvider>
        { children }
      </ProductsProvider>
    </AuthProvider>
  )
}

export const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <Navigator />
      </AppState>
    </NavigationContainer>
  )
}
