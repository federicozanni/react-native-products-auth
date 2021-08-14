import React, { useContext } from 'react';
import { Text, View, ScrollView, ActivityIndicator, Image, Button } from 'react-native';
import { Product } from '../helpers/Product';
import { productTheme } from '../themes/ProductTheme';
import { ProductNavigation } from '../interfaces/NavigationInterface';
import { AuthContext } from '../context/AuthContext';
import { ModalImage } from '../components/ImageModal';

export const ProductScreen = ( { navigation, route }: ProductNavigation ) => {

  const {
    nombre,
    categoria,
    precio,
    _id,
    loadingCategories,
    img,
    idUser,
    creado,
    descripcion,
    disponible
  } = Product({ navigation, route });
  
  const { user } = useContext(AuthContext);


  return (
      <View style={ productTheme.container }>   
      <ScrollView
        style={{paddingHorizontal: 15, marginTop: 10}}
        showsVerticalScrollIndicator={false}
      >
        {
          loadingCategories
          ? (<ActivityIndicator 
            size={ 30 }
            color="red"
            style={ productTheme.loadIndicator }
          />)
          
          :( _id.length > 0) && ( 
          <>
            <Text style={{ fontWeight: '600', fontSize: 20, marginBottom: 10 }}>{nombre}</Text>
            
            {
              (img) 
              ? (
                <ModalImage
                  uri={img}
                />
                )

              : (
                  <Image 
                    source={ require('../assets/not-available.png') }
                    style={{
                        marginVertical: 20,
                        width: '100%',
                        height: 300
                    }}
                  /> 
                )
              
            }
            
            <Text style={{ fontWeight: '600', fontSize: 25, marginVertical: 10}}>$ {precio}</Text>

            { (disponible)
              ? <View style={ productTheme.freeShippingIconContainer}>
                  <Image 
                    source={ require('../assets/free_shipping.png') }
                    style={ productTheme.freeShippingIcon }
                  />
                </View>
              : null
            }

            <Text style={ productTheme.label }>Category:</Text>
            <Text style={ productTheme.productDetail }>{categoria}</Text>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
            <Text style={ productTheme.label }>Sold by:</Text>
            <Text style={{ fontSize: 18, fontWeight: "600", marginLeft: 4}}>{creado}</Text>
          </View>
            
            <Text style={ productTheme.label }>Description:</Text>
            <Text style={ productTheme.productDetail }>
              {
                (!descripcion)
                ? <Text style={ productTheme.label }>without description</Text>
                : <Text style={ productTheme.productDetail }>{descripcion}</Text>
              }
            </Text>

            <View style={{ flexDirection: 'column', justifyContent:'center', marginTop: 20, marginHorizontal: 25, marginBottom: 20 }}>  

            {
            (user?.uid === idUser) && (
              <Button 
                  title="Editar"
                  onPress={ () => navigation.navigate('AddUpdateProductScreen', {
                    id: _id,
                    name: nombre,
                    disabled: disponible
                }) }
                  color="#5856D6"
              /> 
              )
            }
             
            </View>
        </>
      )}
          
    </ScrollView>
  </View>
  )
}

