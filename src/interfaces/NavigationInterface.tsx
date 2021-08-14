import { StackScreenProps } from "@react-navigation/stack";
import { ProductsStackParams } from '../navigation/ProductsNavigator';
import { UserStackParams } from '../navigation/Navigator';
import { DrawerScreenProps } from '@react-navigation/drawer';

export interface RegisterNavigation extends StackScreenProps<UserStackParams, 'RegisterScreen'> {};

export interface LoginNavigation extends StackScreenProps<UserStackParams, 'LoginScreen'> {};

export interface ProductNavigation extends StackScreenProps<ProductsStackParams, 'ProductScreen'>{};

export interface ProductsNavigation extends DrawerScreenProps<ProductsStackParams, 'ProductsScreen'> {
  navigate: any;
};

export interface AddUpdateNavigation extends StackScreenProps<ProductsStackParams, 'AddUpdateProductScreen'>{};

export interface UpdateUser extends StackScreenProps<ProductsStackParams, 'UpdateUserScreen'>{};