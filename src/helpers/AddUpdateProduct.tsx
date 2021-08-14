import { useContext, useEffect, useState } from 'react'
import { useCategories } from '../hooks/useCategories';
import { useForm } from '../hooks/useForm';
import { ProductsContext } from '../context/ProductsContext';
import { AddUpdateNavigation } from '../interfaces/NavigationInterface';
import { Alert } from 'react-native';
import { usePhotoChange } from '../hooks/usePhotoChange';

export const AddUpdateProduct = ( { navigation, route }: AddUpdateNavigation ) => {

  const { id = '', name = '', disabled = false } = route.params;

  const [loading, setLoading] = useState(true);

  const { loadProductById, addProduct, updateProduct, deleteProduct, uploadImage } = useContext( ProductsContext );

  const {
    takePhoto,
    takePhotoFromGallery,
    tempUri,
  } = usePhotoChange( uploadImage, id )
  
  const { categories, loadingCategories } = useCategories();

  const { img, categoriaId, nombre, descripcion, disponible, precio, onChange, setFormValue } = useForm({
      _id: id,
      categoriaId: '',
      categoria: '',
      nombre: name,
      precio: 0,
      img: '',
      descripcion: '',
      disponible: disabled,
  });


  useEffect(() => {
      navigation.setOptions({
          title: ( nombre ) ? nombre : 'No product name'
      });
  }, [nombre])

  useEffect(() => {
      loadProduct();
  }, [])

  useEffect(() => {
      setLoading(false);
  }, [updateProduct])


  const loadProduct = async() => {
    if ( id.length === 0 ) return;
    const product = await loadProductById( id );
    setFormValue({
        _id: id,
        categoriaId: product.categoria._id,
        img: product.img || '',
        precio: product.precio,
        categoria: product.categoria.nombre,
        nombre,
        descripcion: product.descripcion,
        disponible: product.disponible
    })
  }

  const saveOrUpdate = async() => {
    if( id.length > 0 ) {            
      updateProduct( categoriaId, nombre, precio, id, descripcion, disponible );
      setLoading(true);
      } else {
        const tempCategoriaId = categoriaId || categories[0]._id;
        const newProduct = await addProduct(tempCategoriaId, nombre, precio, descripcion, disponible );
        onChange( newProduct?._id, '_id' );
      }
  }

  const deleteProductById = () => {
    try {
      deleteProduct( id );

      Alert.alert( 'Product removed', `The product ${nombre}, was successfully removed`,
        [{
          text: 'Ok',
          onPress: () => navigation.navigate('ProductsScreen')
        }]
      )
    } catch (error) {
      Alert.alert( 'Error', `The product ${nombre}, wasn't removed properly, ${error}`,
        [{
          text: 'Ok',
        }]
      )
      
    }
  }

  return {
    saveOrUpdate,
    deleteProductById,
    takePhoto,
    takePhotoFromGallery,
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
  }
}
