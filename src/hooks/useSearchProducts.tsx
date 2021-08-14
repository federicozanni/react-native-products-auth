import { useContext, useEffect, useState } from 'react'
import { ProductsContext } from '../context/ProductsContext';
import { Producto } from '../interfaces/ProductoInterface';

export const useSearchProducts = () => {
  const { products, loadProducts } = useContext( ProductsContext );
  const [productsFiltered, setProductsFiltered] = useState<Producto[]>([])
  const [term, setTerm] = useState('')

  useEffect(() => {
    setProductsFiltered(
      products.filter( 
            p => p.nombre
            .toLocaleLowerCase()
            .includes( term.toLocaleLowerCase() )
            )
        );
  }, [loadProducts, term])
  

  return {
    productsFiltered,
    setTerm,
  }
}
