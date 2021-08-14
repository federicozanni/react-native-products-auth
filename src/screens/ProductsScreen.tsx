import React from 'react';
import { View } from 'react-native';
import { productsTheme } from '../themes/ProductsTheme';
import { useSearchProducts } from '../hooks/useSearchProducts';
import { searchInputTheme } from '../themes/SearchInputTheme';
import { SearchInput } from '../components/SearchInput';
import { FlatListProducts } from '../components/FlatListProducts';
import { Header } from '../components/Header';


export const ProductsScreen = ( { navigation }: any ) => {
  
  Header({navigation});

  const { productsFiltered, setTerm } = useSearchProducts();

    return (
      <View style={ productsTheme.container }>

        <View style={ searchInputTheme.inputSearch } >
          <SearchInput 
              onDebounce={ setTerm }
          />
        </View>

        <FlatListProducts 
          data={productsFiltered}
          navigation={navigation}
        />
      </View>
    )
}