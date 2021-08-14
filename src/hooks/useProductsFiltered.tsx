import { useContext, useEffect, useRef, useState } from 'react'
import { Producto } from '../interfaces/ProductoInterface';
import { ProductsContext } from '../context/ProductsContext';
import { AuthContext } from '../context/AuthContext';

export const useProductsFiltered = () => {

  const { user } = useContext(AuthContext);
  const { products, loadProducts } = useContext( ProductsContext );

  const [productsFiltered, setProductsFiltered] = useState<Producto[]>([])
  const term = useRef('')

  useEffect(() => {
    setProductsFiltered(
      products.filter( 
            p => p.usuario._id === user?.uid
            )
        );
  }, [term, loadProducts])


  return {
    productsFiltered
  }
}
