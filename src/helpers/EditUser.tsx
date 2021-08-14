import { useContext, useEffect, useState } from 'react'
import { UpdateUser } from '../interfaces/NavigationInterface';
import { AuthContext } from '../context/AuthContext';
import { useForm } from '../hooks/useForm';
import { usePhotoChange } from '../hooks/usePhotoChange';


export const EditUser = ( { navigation, route }: UpdateUser ) => {

  const { id = '', name = '', email = '' } = route.params;
  
  const { updateUser, uploadImagePerfil, user } = useContext( AuthContext );

  const [loading, setLoading] = useState(true);

  const {
    takePhoto,
    takePhotoFromGallery,
    tempUri,
  } = usePhotoChange( uploadImagePerfil, user?.uid )

  const {_id, img, nombre, correo, password, onChange } = useForm({
      _id: id,
      correo: email,
      password: '',
      nombre: name,
      img: '',
  });

  
  useEffect(() => {
      setLoading(false);
  }, [updateUser])


  const UpdateUser = async() => {
    if( id.length > 0 ) {            
      updateUser( { _id, correo, password, nombre}  );
      setLoading(true);
      } return;
  }

  return {
    loading,
    img,
    nombre,
    password,
    onChange,
    UpdateUser,
    takePhoto,
    takePhotoFromGallery,
    tempUri,
  }
}
