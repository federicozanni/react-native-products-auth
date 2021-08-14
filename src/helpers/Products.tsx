import React, { useContext, useEffect, useState } from 'react'
import { ProductsContext } from '../context/ProductsContext';
import { TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { productsTheme } from '../themes/ProductsTheme';

export const loadHeader = ( {navigation} : any ) => {
    useEffect(() => {     
      navigation.setOptions({
          headerLeft: () => (
              <TouchableOpacity
                  style={{
                      marginLeft: 10
                  }}
                  onPress={ () => navigation.toggleDrawer() }
              >
                  <Icon 
                      name="menu-outline"
                      color="#5856D6"
                      size={ 35 }
                  />
              </TouchableOpacity>
          )
      })
  
      navigation.setOptions({
        headerRight: () => (
            <TouchableOpacity
                activeOpacity={ 0.8 }
                style={ productsTheme.buttonAddProduct }
                onPress={ () => navigation.navigate('AddUpdateProductScreen', {}) }
            >
                <Text style={{ fontWeight: '600', color: 'white' }} >Agregar</Text>
            </TouchableOpacity>
        )
    })
  
  
    }, [])
  
  }

export const Products = () => {

  const { products, loadProductById, loadProducts } = useContext( ProductsContext );
  const [ isRefreshing, setIsRefreshing ] = useState( false );
  
  

  const loadProductsFromBackend = async() => {
      setIsRefreshing(true);
      await loadProducts();
      setIsRefreshing(false);
  }

  return {
    loadProductById,
    isRefreshing,
    loadProductsFromBackend,
    loadProducts,
    products,
  }
}
