import React from 'react'
import { ActivityIndicator, Text, View } from 'react-native';
import { loadingTheme } from '../themes/LoadingTheme';

export const Loading = () => {
  return (
    <View style={ loadingTheme.container } >
      <ActivityIndicator 
          size={ 50 }
          color="5856D6"
      />
      
      <View style={{ marginVertical: 8 }} />

      <Text style={ loadingTheme.text } >Loading...</Text>
    </View>
  )
}
