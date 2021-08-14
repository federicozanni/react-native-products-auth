import React from 'react'
import { Image, View } from 'react-native';
import { whiteLogoTheme } from '../themes/WhiteLogoTheme';

export const WhiteLogo = () => {
  return (
    <View style={ whiteLogoTheme.container } >
      
      <Image 
          source={ require('../assets/logo-app.png') }
          style={ whiteLogoTheme.image}
      />

    </View>
  )
}
