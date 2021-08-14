import React from 'react';
import { Text, View, TouchableOpacity, Image, FlatList, RefreshControl } from 'react-native';
import { productsTheme } from '../themes/ProductsTheme';
import { FlatListProductsInterface } from '../interfaces/FlatListProductsInterface';
import { Products } from '../helpers/Products';


export const FlatListProducts = ( {data, navigation }: FlatListProductsInterface ) => {

  const {
    isRefreshing,
    loadProductsFromBackend,
  } = Products();

  return (
    <FlatList 
        data={ data }
        keyExtractor={ (p) => p._id }
        
        renderItem={ ({item}) => (
          <TouchableOpacity
            activeOpacity={ 0.8 }
            style={ productsTheme.productsListUser }
            onPress={ () => navigation.navigate('ProductScreen', {
              id: item._id,
              name: item.nombre,
          }) }
          >
            <View>
            {
              (item.img) 
              ? <Image 
                    source={{
                      uri: item.img,
                    }}
                    style={ productsTheme.imageProduct }
                />
              
              : <Image 
                    source={ require('../assets/not-available.png') }
                    style={ productsTheme.imageProduct }
                /> 
            }
            </View>
    
            <View style={ productsTheme.productListDetails} >
              <View style={ productsTheme.nameAndIcon}>
                <Text style={{ fontSize: 20, marginBottom: 15, marginTop: 5 }}>{ item.nombre }</Text>
              {
                (item.disponible)
                ? <Image 
                      source={ require('../assets/free_shipping.png') }
                      style={{
                          width: 50,
                          height: 50
                      }}
                  />
                : null
              }
                
              </View>
              
              <Text style={{ fontSize: 19}}>${ item.precio }</Text>
            </View>
          </TouchableOpacity>
        )}

        refreshControl={
          <RefreshControl 
              refreshing={ isRefreshing }
              onRefresh={ loadProductsFromBackend }
              colors={['orange', 'red', 'blue']}
          />
        }
    />
  )
}
