import React, { useContext, useEffect } from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { UpdateUser } from '../interfaces/NavigationInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import { settingTheme } from '../themes/SettingsTheme';
import ImageModal from 'react-native-image-modal';


export const ProfileScreen = ( {navigation}: UpdateUser ) => {

  const { user } = useContext( AuthContext );

  const imageWidth = Dimensions.get('window');

  useEffect(() => {     
    navigation.setOptions({
      headerRight: () => (
          <TouchableOpacity
              activeOpacity={ 0.8 }
              style={{ marginRight: 20 }}
              onPress={ () => navigation.navigate('UpdateUserScreen', {
                id: user?.uid,
                name: user?.nombre,
                email: user?.correo,
              }) }
          >
              <Icon 
                  name="settings-outline"
                  color="#5856D6"
                  size={ 30 }
              />
          </TouchableOpacity>
      )
  })

  }, [])
  

  return (
    <View style={ settingTheme.container } >
      <ScrollView>
        
          {
            (user?.img) 
            ?
             <ImageModal
                swipeToDismiss
                resizeMode="contain"
                style={ settingTheme.avatar }
                source={{
                  uri: user?.img,
                }}
              />
            : <Image 
                  source={ require('../assets/profile-avatar.png') }
                  style={ settingTheme.avatar }
              /> 
          }

        <View style={ settingTheme.titleContainer}>

          <Text style={ settingTheme.title } >
              { user?.nombre }
          </Text>


          <Text style={ settingTheme.title } >
              { user?.correo }
          </Text>
        </View>

      </ScrollView>
      </View>
  )
}
