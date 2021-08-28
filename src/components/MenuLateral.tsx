import React, { useContext } from 'react';
import { Image, Text, View, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { menuLat } from '../themes/MenuLateralTheme';
import { AuthContext } from '../context/AuthContext';
import { DrawerContentComponentProps, DrawerContentOptions } from '@react-navigation/drawer';
import { MenuLat } from '../data/MenuLat';


export const MenuInterno = ( { navigation }: DrawerContentComponentProps<DrawerContentOptions>) => {
  
  const { user, logUp } = useContext( AuthContext );
 
  return (
      <>
        <View style={ menuLat.avatarContainer }>
          {
            (user?.img) 
            ? <Image 
                  source={{
                    uri: user?.img,
                  }}
                  style={ menuLat.avatar }
              />
            
            : <Image 
                  source={ require('../assets/profile-avatar.png') }
                  style={ menuLat.avatar }
              /> 
          }
          <View style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
            <Text style={ menuLat.textName } >{ user?.nombre }</Text>
            
            <Text style={ menuLat.textName } >{ user?.correo }</Text>
          </View>
        </View>
            
        <View style={ menuLat.itemSeparator } />

        <FlatList
          data={ MenuLat }
          style={ menuLat.menuContainer }
          keyExtractor={ (item) => item.name }
          renderItem={ ({item}) => (
            <TouchableOpacity 
              style={ menuLat.menuBoton }
              onPress={ () => navigation.navigate( item.component , {id: '', name: ''}) }
            >
              <Icon name={item.icon} size={ 23 } color="black" style={        {marginRight: 5}}/>
                <Text style={ menuLat.menuTexto }>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
       
        <View style={{ flex:1 }} />
        <View style={ menuLat.itemSeparator } />
        
        <View style={ menuLat.buttonLogout } >
          <TouchableOpacity 
            style={{ 
              ...menuLat.menuBoton,
              flexDirection: 'row'
            }}
            onPress={ () => navigation.navigate('ProfileScreen') }
          >
            <Icon name="person-outline" size={ 23 } color="black" style={{marginRight: 5}}/>
            <Text style={ menuLat.menuTexto }>Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={{ 
              ...menuLat.menuBoton,
              flexDirection: 'row'
            }}
            onPress={ logUp }
          >
            <Icon name="log-out-outline" size={ 23 } color="black" style={{marginRight: 5}}/>
            <Text style={ menuLat.menuTexto }>Logout</Text>
          </TouchableOpacity> 

        </View>
      </>
  );
}
