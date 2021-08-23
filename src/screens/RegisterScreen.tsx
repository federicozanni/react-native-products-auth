import React from 'react'
import { ScrollView } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { Register } from '../helpers/Register';
import { AlertError } from '../components/AlertError';
import { RegisterNavigation } from '../interfaces/NavigationInterface';
import { TextInputs } from '../components/TextInputs';

export const RegisterScreen = ( { navigation }: RegisterNavigation ) => {

  const {
      onRegister,
      onChange,
      nombre,
      email,
      password,
    } = Register();

  AlertError('Registro incorrecto', AuthContext);
  
  
  return (
    <ScrollView 
      style={{ flex: 1, backgroundColor: '#5856D6' }}
      showsVerticalScrollIndicator={ false }
    > 

        <TextInputs
          onSubmit={onRegister}
          onChange={onChange}
          nombre={nombre}
          email={email}
          showNameInput
          showEmailInput
          onlyInput={false}
          password={password}
          title="Register"
          buttonTitle="Login"
          navigations={ () => navigation.navigate('LoginScreen') }
          message="Already have an account? "
          colors="white"
          buttonColor="white"
          messageColor="grey"
          buttonNext="white"
        />

    </ScrollView>
  )
}
