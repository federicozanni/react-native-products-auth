import React from 'react'
import { Text, View, ScrollView, TextInput, Image, ActivityIndicator, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { productTheme } from '../themes/ProductTheme';
import { ButtonSave } from '../components/ButtonsAction';
import { EditUser } from '../helpers/EditUser';
import { UpdateUser } from '../interfaces/NavigationInterface';
import { settingTheme } from '../themes/SettingsTheme';
import { ModalTakePhoto } from '../components/ModalTakePhoto';

export const UpdateUserScreen = ( { navigation, route }: UpdateUser ) => {

  const {
    loading,
    img,
    nombre,
    password,
    onChange,
    UpdateUser,
    takePhoto,
    takePhotoFromGallery,
    tempUri,
  } = EditUser({ navigation, route })

  return (
    <View style={ productTheme.container }>   
      <ScrollView
        style={{paddingHorizontal: 10}}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        {
          loading
          ? (<ActivityIndicator 
              size={ 30 }
              color="red"
              style={ productTheme.loadIndicator }
            />)
            
          : <>
          <Text style={ productTheme.label }>User name:</Text>
          <TextInput 
              placeholder="Name"
              placeholderTextColor="grey"
              style={ productTheme.textInput }
              value={ nombre }
              onChangeText={ ( value )=> onChange( value, 'nombre' )  }
          />

          <Text style={ productTheme.label }>Password:</Text>
          <TextInput 
              placeholder="Password"
              placeholderTextColor="grey"
              style={ productTheme.textInput }
              value={ password }
              onChangeText={ ( value )=> onChange( value, 'password' )  }
          />

          <View style={ settingTheme.buttonsContainer }>
          

          <View style={{ height: 10 }} />

            <ButtonSave 
                saveOrUpdate={UpdateUser}
            />

            <View style={{ height: 10 }} />
            
            <ModalTakePhoto
              title="Profile picture"
              buttonTitle="Edit profile picture"
              takePhoto={takePhoto}
              takePhotoFromGallery={takePhotoFromGallery}
            />

          </View>

          {
              (img.length > 0 && !tempUri) && (
                  <Image 
                      source={{ uri: img }}
                      style={{
                          marginTop: 20,
                          width: '100%',
                          height: 300
                      }}
                  />
              )
            }

            {
              ( tempUri ) && (
                  <Image 
                      source={{ uri: tempUri }}
                      style={{
                          marginTop: 20,
                          width: '100%',
                          height: 300
                      }}
                  />
              )
            }
            <View style={{ height: 20 }} />
           </>
        }
          </TouchableWithoutFeedback>
        </ScrollView>
      </View>
  )
  
}
