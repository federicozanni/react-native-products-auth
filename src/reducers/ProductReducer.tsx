import { ProductsState } from '../interfaces/ProductoInterface';

type ProductAction = 
  | { type: 'addError', payload: string }
  | { type: 'removeError' }


export const productReducer = ( state: ProductsState, action: ProductAction ): ProductsState => {

  switch (action.type) {
    case 'addError':
      return {
          ...state,
          product: null,
          errorMessage: action.payload,
      }

    case 'removeError':
      return {
          ...state,
          errorMessage: '',
      }
    
    default:
      return state;
  }

}