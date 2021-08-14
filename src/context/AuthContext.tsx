import React, { createContext, useEffect, useReducer, useState } from 'react'
import { Usuario, LoginData, SingData, LoginRes, UpdateData } from '../interfaces/UsuarioInterface';
import { authReducer } from '../reducers/AuthReducer';
import configApi from '../api/config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ImagePickerResponse } from 'react-native-image-picker';
import { AuthState } from '../interfaces/AuthStateInterface';


type AuthContextProps = {
  errorMessage: string;
  token: string | null;
  user: Usuario | null;
  status: 'checking' | 'authenticated' | 'not-authenticated';
  loadUsers: () => Promise<void>;
  singUp: ( singData: SingData ) => void;
  singIn: ( loginData: LoginData ) => void;
  updateUser: ( singData: UpdateData ) => void;
  logUp: () => void;
  removeError: () => void;
  uploadImagePerfil: ( data: any, id: string) => Promise<void>;
}


export const AuthContext = createContext({} as AuthContextProps);


const authInitialState: AuthState = {
  status: 'checking',
  token: null,
  user: null,
  errorMessage: '',
}

export const AuthProvider = ( {children}:any ) => {

  const [user, setUser] = useState<Usuario[]>([]);
  const [state, dispatch] = useReducer(authReducer, authInitialState);

  const checkToken = async() => {
    const token = await AsyncStorage.getItem('token')

    if (!token) return dispatch({ type: 'notAuthenticated' });

    const res = await configApi.get('/auth');
    if (res.status !== 200 ) {
      return dispatch({ type:'notAuthenticated' })
    }

    await AsyncStorage.setItem('token', res.data.token);
    dispatch({
      type: 'singUp',
      payload: {
          token: res.data.token,
          user: res.data.usuario,
      }
    })
  }

  useEffect(() => {
      checkToken();
  }, [])



  const loadUsers = async() => {
    const resp = await configApi.get<Usuario[]>('/usuarios?limite=50');
    setUser([ ...resp.data ]);
}


  const singIn = async ( { correo, password }: LoginData ) => {
    try {
      const { data } = await configApi.post<LoginRes>('/auth/login', { correo, password } )
      dispatch({
        type: 'singUp',
        payload: {
            token: data.token,
            user: data.usuario,
        }
      })

      await AsyncStorage.setItem('token', data.token);
      
    } catch (error) {
        dispatch({
          type: 'addError',
          payload: error.response.data.msg || 'Informacion incorrecta'
        })
        
    }
  };
  
  
  const singUp = async( { correo, password, nombre}: SingData ) => {
    try {
      const { data } = await configApi.post<LoginRes>('/usuarios', { correo, password, nombre})
      dispatch({
        type: 'singUp',
        payload: {
            token: data.token,
            user: data.usuario,
        }
      })

      await AsyncStorage.setItem('token', data.token);
      
    } catch (error) {
        dispatch({
          type: 'addError',
          payload: error.response.data.errors[0].msg || 'Completar todos los campos'
        })
    }

  };
  
  
  const logUp = async() => {
    await AsyncStorage.removeItem('token');
    dispatch({ type: 'logout'})
  };


  const removeError = () => {
    dispatch({ type: 'removeError' })
  };

  const updateUser = async( { _id, correo, password, nombre}: UpdateData ) =>{
    try { 
      const resp = await configApi.put<Usuario>(`/usuarios/${ _id }`, {
          nombre,
          password,
          correo,
      });
      setUser( user.map( u => {
          return (  u.uid === _id )
                  ? resp.data
                  : u;
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
  
  const uploadImagePerfil = async( data: ImagePickerResponse, id: string ) => {

    const fileToUpload = {
        uri: data.assets![0].uri,
        type: data.assets![0].type,
        name: data.assets![0].fileName
    }

    const formData = new FormData();
    formData.append('archivo', fileToUpload);

    try {    
        const resp = await configApi.put(`/uploads/usuarios/${ id }`, formData )
        console.log(resp);
    } catch (error) {
        console.log({ error })
    }

  }

  return (
    <AuthContext.Provider value={{
        ...state,
        loadUsers,
        singUp,
        singIn,
        updateUser,
        logUp,
        removeError,
        uploadImagePerfil,
    }} >
      { children }
    </AuthContext.Provider>
  )
}