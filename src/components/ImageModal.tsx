import React from 'react'
import { View, Dimensions } from 'react-native';
import ImageModal from 'react-native-image-modal';

  
export const ModalImage = ({ uri }:any) => {

  const imageWidth = Dimensions.get('window');

  return (
    <View>
      {
        <ImageModal
        swipeToDismiss
        resizeMode="contain"
        style={{
          width: imageWidth.width * 0.95,
          height: 400,
        }}
        source={{
          uri,
        }}
      />
      }
    </View>
  )
}
