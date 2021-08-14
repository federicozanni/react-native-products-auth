import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { ProductsScreen } from '../screens/ProductsScreen';
import { ProductScreen } from '../screens/ProductScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { AddUpdateProductScreen } from '../screens/AddUpdateProductScreen';
import { ProductsByUserScreen } from '../screens/ProductsByUserScreen';
import { UpdateUserScreen } from '../screens/UpdateUserScreen';


export type ProductsStackParams = {
  ProductsScreen: undefined;
  ProfileScreen: undefined;
  ProductScreen: { id?: string, name?: string };
  AddUpdateProductScreen: { id?: string, name?: string, disabled?: boolean};
  ProductsByUserScreen: { id?: string, name?: string };
  UpdateUserScreen: { id?: string, name?: string, email?: string };
}

const Stack = createStackNavigator<ProductsStackParams>();


export const ProductsNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: 'white' },
        headerStyle: {
          shadowColor: 'trasnparent',
          elevation: 0,
        }
      }}
    >
      
      
      <Stack.Screen 
          name="ProductsScreen"
          component={ ProductsScreen }
          options={{ title: 'Products' }}
      />

      <Stack.Screen 
          name="ProductScreen"
          component={ ProductScreen }
          options={{ title: 'Publication' }}
      />

      <Stack.Screen 
          name="AddUpdateProductScreen"
          component={ AddUpdateProductScreen }
      />

      <Stack.Screen 
          name="ProductsByUserScreen"
          component={ ProductsByUserScreen }
          options={{ title: 'Published' }}
      />

      <Stack.Screen 
          name="ProfileScreen"
          component={ ProfileScreen }
          options={{ title: 'Profile' }}
      />

      <Stack.Screen 
          name="UpdateUserScreen"
          component={ UpdateUserScreen }
          options={{ title: 'Edit User' }}
      />
    </Stack.Navigator>
  )
}
