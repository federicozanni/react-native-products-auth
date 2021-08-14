import { useEffect, useState } from "react"
import configApi from '../api/config';
import { Categoria, CategoriaResponse } from '../interfaces/ProductoInterface';


export const useCategories = () => {
    
    const [ loadingCategories, setLoadingCategories ] = useState( true )
    const [ categories, setCategories ] = useState<Categoria[]>([]);
    
    useEffect(() => {
        getCategories();
    }, [])


    const getCategories = async() => {
        const resp = await configApi.get<CategoriaResponse>('/categorias');
        setCategories( resp.data.categorias );
        setLoadingCategories(false);
    }

    return {
        loadingCategories,
        categories
    }
}
