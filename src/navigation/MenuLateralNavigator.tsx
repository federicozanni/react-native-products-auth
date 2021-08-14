import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useWindowDimensions } from 'react-native';
import { ProductsNavigator } from './ProductsNavigator';
import { MenuInterno } from '../components/MenuLateral';


const Drawer = createDrawerNavigator();


export const MenuLateralNavigator = () => {
  
    const { width } = useWindowDimensions();

    return (
    <Drawer.Navigator
      drawerType={ width >= 768 ? 'permanent' : 'front' }
      drawerContent={ (props) => <MenuInterno { ...props } /> }
    >
      <Drawer.Screen name="ProductsNavigator" component={ ProductsNavigator } />
    </Drawer.Navigator>
  );
}

