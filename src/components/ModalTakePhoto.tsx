import React, { useState } from 'react'
import { Text, View, Modal, TouchableOpacity, Button } from 'react-native';
import { ButtonTakePhoto, ButtonPhotoGalery } from '../components/ButtonsAction';
import { modalStyle } from '../themes/ModalStyle';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  takePhoto: () => void,
  takePhotoFromGallery: () => void,
  title: string,
  buttonTitle: string,
}

export const ModalTakePhoto = ( n: Props) => {

  const [state, setstate] = useState(false);

  const {
  takePhoto,
  takePhotoFromGallery,
  title,
  buttonTitle,
  } = n;

  return (
    <>
      <View style={modalStyle.containerModal} >
        <Modal
          animationType='slide'
          visible={ state }
          transparent
        >
          <View style={modalStyle.modal} >   

            <View style={modalStyle.modalContents}>

              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10,  }} >
              <Text style={modalStyle.titleModal} >{title}</Text>
              <TouchableOpacity 
                    onPress={ () => setstate(false) }
                    activeOpacity={ 0.8 }
                    style={{ marginRight: 15 }}
                  >
                    <Icon  
                      name="close-outline" 
                      size={30} 
                      color="#000"
                    />
              </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', marginBottom: 10 }} >

                <ButtonTakePhoto 
                  takePhoto={takePhoto}
                />  

                <ButtonPhotoGalery 
                    takePhotoFromGallery={takePhotoFromGallery}
                />
              </View>
            </View>
            
          </View>
        </Modal>
      </View>

      <View style={{ marginHorizontal:25, marginTop: 15  }}>
        <Button 
          title={buttonTitle}
          onPress={ () => setstate(true) }
          color="#5856D6"
        />
      </View>
    </>
  )
}
