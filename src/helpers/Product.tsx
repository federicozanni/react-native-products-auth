import { useContext, useEffect } from 'react';
import { useCategories } from '../hooks/useCategories';
import { useForm } from '../hooks/useForm';
import { ProductsContext } from '../context/ProductsContext';
import { ProductNavigation } from '../interfaces/NavigationInterface';

export const Product = ( { route }: ProductNavigation ) => {

  const { id = ''} = route.params;
  const { loadProductById, loadProducts } = useContext( ProductsContext );
  const { loadingCategories } = useCategories();
  
  const { _id, img, nombre, descripcion, disponible, creado, precio, categoria, setFormValue, idUser } = useForm({
      _id: id,
      categoria: '',
      nombre: '',
      precio: 0,
      img: '',
      creado: '',
      idUser: '',
      descripcion: '',
      disponible: false,
  });

 useEffect(() => {
    loadProduct();
  }, [loadProducts])


  const loadProduct = async() => {
      if ( id.length === 0 ) return;
      const product = await loadProductById( id );
      setFormValue({
          _id,
          precio: product.precio,
          categoria: product.categoria.nombre,
          img: product.img!,
          creado: product.usuario.nombre,
          nombre: product.nombre,
          idUser: product.usuario._id,
          descripcion: product.descripcion,
          disponible: product.disponible
      })
  } 

  

  return {
    nombre,
    categoria,
    precio,
    _id,
    loadingCategories,
    img,
    idUser,
    creado,
    descripcion,
    disponible,
  }
}
