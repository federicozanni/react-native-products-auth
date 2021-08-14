import React, { createContext, useEffect, useReducer, useState } from 'react';
import { ImagePickerResponse } from 'react-native-image-picker';
import configApi from '../api/config';
import { Producto, Productos, ProductsState } from '../interfaces/ProductoInterface';
import { productReducer } from '../reducers/ProductReducer';


type ProductsContextProps = {
    products: Producto[];
    errorMessage: string;
    loadProducts: () => Promise<void>;
    addProduct: ( categoryId: string, productName: string, productPrice: number, productDescription: string, productAvailable: boolean ) => Promise<Producto>;
    updateProduct: ( categoryId: string, productName: string, productPrice: number, productId: string, productDescription: string, productAvailable: boolean ) => Promise<void>;
    deleteProduct: ( id: string ) => Promise<Producto>;
    loadProductById: ( id: string ) => Promise<Producto>;
    uploadImage: ( data: ImagePickerResponse, id: string ) => Promise<void>;
    removeError: () => void;
}

const productsInitialState: ProductsState = {
  products: null,
  errorMessage: '',
}


export const ProductsContext = createContext({} as ProductsContextProps);



export const ProductsProvider = ({ children }: any ) => {
    
    const [products, setProducts] = useState<Producto[]>([]);
    const [state, dispatch] = useReducer(productReducer, productsInitialState);

    
    useEffect(() => {
        loadProducts();
    }, [])


    const loadProducts = async() => {
        const resp = await configApi.get<Productos>('/productos?limite=50');
        setProducts([ ...resp.data.productos ]);
    }

    const addProduct = async( categoryId: string, productName: string, productPrice: number, productDescription: string, productAvailable: boolean ): Promise<any> => {
      try {  
        const resp = await configApi.post<Producto>('/productos', {
            nombre: productName,
            precio: productPrice,
            categoria: categoryId,
            descripcion: productDescription,
            disponible: productAvailable
        })
        
        setProducts([ ...products, resp.data ]);
        }
          catch (error) {
            dispatch({
              type: 'addError',
              payload: error.response.data.msg || 'Informacion incorrecta'
            })
      }      
    };

    const updateProduct = async( categoryId: string, productName: string, productPrice: number, productId: string, productDescription: string, productAvailable: boolean ) =>{
      try { 
        const resp = await configApi.put<Producto>(`/productos/${ productId }`, {
            nombre: productName,
            precio: productPrice,
            categoria: categoryId,
            descripcion: productDescription,
            disponible: productAvailable
        });
        setProducts( products.map( prod => {
            return (prod._id === productId )
                    ? resp.data
                    : prod;
        }) )
        ;
      }
        catch (error) {
          dispatch({
            type: 'addError',
            payload: 'Este producto ya existe'
          })
        }
    }

    const deleteProduct = async( id: string ):Promise<Producto> => {
        const resp = await configApi.delete<Producto>(`productos/${ id }`);
        return resp.data;
    }

    const loadProductById = async( id: string ):Promise<Producto> => {
        const resp = await configApi.get<Producto>(`productos/${ id }`);
        return resp.data;
    };

    const uploadImage = async( data: ImagePickerResponse, id: string ) => {

        const fileToUpload = {
            uri: data.assets![0].uri,
            type: data.assets![0].type,
            name: data.assets![0].fileName
        }

        const formData = new FormData();
        formData.append('archivo', fileToUpload);

        try {    
            const resp = await configApi.put(`/uploads/productos/${ id }`, formData )
            console.log(resp);
        } catch (error) {
            console.log({ error })
        }

    }

    const removeError = () => {
      dispatch({ type: 'removeError' })
    };


    return(
        <ProductsContext.Provider value={{
            ...state,
            products,
            loadProducts,
            addProduct,
            updateProduct,
            deleteProduct,
            loadProductById,
            uploadImage,
            removeError,
        }}>
            { children }
        </ProductsContext.Provider>
    )
}
