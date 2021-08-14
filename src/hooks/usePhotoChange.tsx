import { useState } from 'react'
import { ImagePickerResponse, launchCamera, launchImageLibrary } from 'react-native-image-picker';

export const usePhotoChange = ( uploadImage: any, id: any) => {

  const [ tempUri, setTempUri ] = useState<string>();

  const takePhotoResp = (resp: ImagePickerResponse) => {
    if ( resp.didCancel ) return;
    if( !resp.assets![0].uri ) return;

    setTempUri( resp.assets![0].uri );
    uploadImage( resp, id );
  }

  const takePhoto = () => {
    launchCamera({
        mediaType: 'photo',
        quality: 0.5
    }, (resp) => {
      takePhotoResp(resp);
    });
  }

  const takePhotoFromGallery = () => {
    launchImageLibrary({
        mediaType: 'photo',
        quality: 0.5
    }, (resp) => {
      takePhotoResp(resp);
    });
  }
  
  return {
    takePhoto,
    takePhotoFromGallery,
    tempUri,
  }
}
