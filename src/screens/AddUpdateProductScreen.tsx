import React from 'react'
import { Text, View, ScrollView, TextInput, Image, ActivityIndicator, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { productTheme } from '../themes/ProductTheme';
import { AddUpdateProduct } from '../helpers/AddUpdateProduct';
import { AddUpdateNavigation } from '../interfaces/NavigationInterface';
import { AlertError } from '../components/AlertError';
import { ProductsContext } from '../context/ProductsContext';
import { ButtonAlertDelete, ButtonSave } from '../components/ButtonsAction';
import { CustomSwitch } from '../components/CustomSwitch';
import { ModalTakePhoto } from '../components/ModalTakePhoto';
import { ModalImage } from '../components/ImageModal';


export const AddUpdateProductScreen = ( { navigation, route }: AddUpdateNavigation ) => {
  
  const {
    saveOrUpdate,
    deleteProductById,
    tempUri,
    nombre,
    categoriaId,
    precio,
    categories,
    onChange,
    loading,
    loadingCategories,
    id,
    img,
    descripcion,
    disponible,
    takePhoto,
    takePhotoFromGallery,
  } = AddUpdateProduct({ navigation, route });


  AlertError( 'Error', ProductsContext );

  
  return (
      <View style={ productTheme.container }>   
        <ScrollView
          style={{paddingHorizontal: 10}}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        {
          loading || loadingCategories
          ? (<ActivityIndicator 
              size={ 30 }
              color="red"
              style={ productTheme.loadIndicator }
            />)
            
          : <>
          <Text style={ productTheme.label }>Product name:</Text>
          <TextInput 
              placeholder="Product"
              placeholderTextColor="grey"
              style={ productTheme.textInput }
              value={ nombre }
              maxLength={400}
              onChangeText={ ( value )=> onChange( value, 'nombre' )  }
          />

          <Text style={ productTheme.label }>Price:</Text>
          <TextInput
              placeholderTextColor="grey"
              keyboardType="number-pad"
              maxLength={400}
              style={ productTheme.textInput }
              value={ precio.toString() }
              onChangeText={ ( value )=> onChange( value, 'precio' )  }
          />

          <Text style={ productTheme.label }>Description:</Text>
          <TextInput
              placeholder="Describe your product | maximum of 400 characters allowed"
              placeholderTextColor="grey"
              textAlignVertical="auto"
              maxLength={400}
              style={ productTheme.textInput }
              value={ descripcion }
              onChangeText={ ( value )=> onChange( value, 'descripcion' )  }
          />

          <Text style={ productTheme.label }>Category:</Text>
          <View style={{backgroundColor:'#dee2e6', width: 200, borderRadius: 6, marginBottom: 10}} >
            <Picker
                selectedValue={ categoriaId }
                onValueChange={ ( value ) => onChange( value, 'categoriaId' ) }
                mode='dialog'
            >
                {
                    categories.map( c => (
                        <Picker.Item
                            color="black"
                            label={ c.nombre } 
                            value={ c._id }
                            key={ c._id }
                        />
                    ))
                }

            </Picker>
          </View>

          <View style={ productTheme.freeShipping}>
            <Image 
                source={ require( '../assets/free_shipping_logo.png') }
                style={ productTheme.freeShippingImage }
            />

            <CustomSwitch 
              isOn={ disponible } 
              onChange={ (value) => onChange( value, 'disponible' ) } 
            />

          </View>

          <ModalTakePhoto
              title="Product photo"
              buttonTitle="Edit product photo"
              takePhoto={takePhoto}
              takePhotoFromGallery={takePhotoFromGallery}
            />
        
          <View style={{marginHorizontal: 25, marginVertical: 20 }}>

          <ButtonSave 
              saveOrUpdate={saveOrUpdate}
          />

            <View style={{ height: 10 }} />

            {
              (id.length > 0) &&
              <ButtonAlertDelete 
                  deleteProductById={deleteProductById}
                  nombre={nombre}
              />
              
            }

           </View>

            <View style={{ marginVertical: 10, width: '100%' }}>
            {
              (img.length > 0 && !tempUri) && (
                <ModalImage
                  uri={img}
                />
              )
            }

            {
              ( tempUri ) && (
                <ModalImage
                  uri={tempUri}
                />
              )
            }
            </View>
           </>
        }
          </TouchableWithoutFeedback>
        </ScrollView>
      </View>
  )
}