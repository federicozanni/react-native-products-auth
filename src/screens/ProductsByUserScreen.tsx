import React from 'react';
import { FlatListProducts } from '../components/FlatListProducts';
import { FlatListProductsInterface } from '../interfaces/FlatListProductsInterface';
import { Header } from '../components/Header';
import { useProductsFiltered } from '../hooks/useProductsFiltered';


export const ProductsByUserScreen = ( { navigation } : FlatListProductsInterface ) => {

  Header({navigation});

  const { productsFiltered } = useProductsFiltered();

  return (  

    <FlatListProducts 
      data={productsFiltered}
      navigation={navigation}
    />
  )
}
