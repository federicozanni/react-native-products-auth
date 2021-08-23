import React from 'react'
import { View, ScrollView, Image, ActivityIndicator, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { productTheme } from '../themes/ProductTheme';
import { ButtonSave } from '../components/ButtonsAction';
import { EditUser } from '../helpers/EditUser';
import { UpdateUser } from '../interfaces/NavigationInterface';
import { settingTheme } from '../themes/SettingsTheme';
import { ModalTakePhoto } from '../components/ModalTakePhoto';
import { TextInputs } from '../components/TextInputs';

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
          <TextInputs
            onChange={onChange}
            nombre={nombre}
            showNameInput
            showEmailInput={false}
            onlyInput
            password={password}
            colors="black"
            buttonColor="black"
          />

          <View style={ settingTheme.buttonsContainer }>

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
