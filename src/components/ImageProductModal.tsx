import React from 'react'
import ImageModal from 'react-native-image-modal';
import { productTheme } from '../themes/ProductTheme';
import { View } from 'react-native';

export const ImageProductModal = ( img: any ) => {
  return (
    <View style={{ al }} >
        <ImageModal
        resizeMode="contain"
        style={ productTheme.imageProduct }
        swipeToDismiss
        source={{ uri: img }}
      />
    </View>
  )
}
