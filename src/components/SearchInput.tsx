import React, { useEffect, useState } from 'react';
import { View, TextInput } from 'react-native';
import { useDebouncedValue } from '../hooks/useDebouncedValue';
import { Debounce } from '../interfaces/DebounceInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import { searchInputTheme } from '../themes/SearchInputTheme';


export const SearchInput = ( { onDebounce }: Debounce ) => {

  const [textValue, setTextValue] = useState('');
  
  const deboncedValue = useDebouncedValue( textValue );

  useEffect(() => {
    onDebounce(deboncedValue)

  }, [deboncedValue])

  
  return (
    
    <View style={ searchInputTheme.container } 
    >
      <View style={ searchInputTheme.textBackground} >
        <TextInput 
            placeholder="Search product"
            autoCapitalize="none"
            autoCorrect={ false }
            placeholderTextColor="grey"
            style={ searchInputTheme.textInput }
            keyboardType="default"
            value={ textValue }
            onChangeText={ setTextValue }
        />

        <Icon 
            name="search"
            size={ 25 }
            color="grey"
        />

      </View>     
    </View>
  )
}
