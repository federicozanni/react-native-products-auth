import React from 'react'
import { Button, View, Alert, TouchableOpacity, Image } from 'react-native';


export const ButtonSave = ( { saveOrUpdate}: any ) => {

return (
  <View>
    <Button 
        title="Save"
        onPress={ () => saveOrUpdate() }
        color="#5856D6"
      />
  </View>
)
}
 

export const ButtonAlertDelete = ( { deleteProductById, nombre }: any ) => {

  const AlertDeleteProduct = () =>
  Alert.alert(
    "Delete Product",
    `You want to remove the product ${nombre}?`,
    [
      { 
        text: "OK", 
        onPress: () => deleteProductById()
      },
      {
        text: "Cancel",
        style: "cancel"
      }
    ]
);
  
  return (
    <View>
      <Button 
          title="Delete Product"
          onPress={ () => AlertDeleteProduct() }
          color="#5856D6"
      />
    </View>
  )
}

export const ButtonTakePhoto = ( { takePhoto}: any ) => {

  return (
    <View>
      <TouchableOpacity 
          onPress={ takePhoto }
          activeOpacity={ 0.8 }
          style={{ marginRight: 15 }}
        >
          <Image 
              source={ require('../assets/Circle-icons-camera.png') }
              style={{
                  width: 60,
                  height: 60,
              }}
          />
    </TouchableOpacity>
    </View>
  )
}

export const ButtonPhotoGalery = ( { takePhotoFromGallery }: any ) => {

  return (
    <View>
      <TouchableOpacity 
          onPress={ takePhotoFromGallery }
          activeOpacity={ 0.8 }
        >
          <Image 
              source={ require('../assets/gallery-icon.png') }
              style={{
                  width: 60,
                  height: 60,
              }}
          />
      </TouchableOpacity>
    </View>
  )
}
