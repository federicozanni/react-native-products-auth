import { Usuario } from '../interfaces/UsuarioInterface';
import { AuthState } from '../interfaces/AuthStateInterface';


type AuthAction = 
  | { type: 'singUp', payload: { token: string, user: Usuario } }
  | { type: 'addError', payload: string }
  | { type: 'removeError' }
  | { type: 'notAuthenticated' }
  | { type: 'logout' }


export const authReducer = ( state: AuthState, action: AuthAction ): AuthState => {

  switch (action.type) {
    case 'addError':
      return {
          ...state,
          user: null,
          status: 'not-authenticated',
          token: null,
          errorMessage: action.payload,
      }

    case 'removeError':
      return {
          ...state,
          errorMessage: '',
      }
    
    case 'singUp':
      return {
          ...state,
          errorMessage: '',
          status: 'authenticated',
          token: action.payload.token,
          user: action.payload.user,
      }

    case 'notAuthenticated':
      return {
          ...state,
          errorMessage: '',
          status: 'not-authenticated',
          token: null,
          user: null,
      }

    case 'logout':
      return {
          ...state,
          errorMessage: '',
          status: 'not-authenticated',
          token: null,
          user: null,
      }
  
    default:
      return state;
  }

}