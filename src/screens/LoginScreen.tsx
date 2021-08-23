import React from 'react'
import { ScrollView } from 'react-native';
import { LoginNavigation } from '../interfaces/NavigationInterface';
import { Login } from '../helpers/Login';
import { AlertError } from '../components/AlertError';
import { AuthContext } from '../context/AuthContext';
import { TextInputs } from '../components/TextInputs';


export const LoginScreen = ( {navigation}: LoginNavigation ) => {

  const {
      onLogin,
      onChange,
      email,
      password,
    } = Login();
    
    AlertError('Login incorrecto', AuthContext);


  return (
    <ScrollView
      showsVerticalScrollIndicator={ false }
    >
      <TextInputs
        onSubmit={onLogin}
        onChange={onChange}
        email={email}
        password={password}
        showNameInput={false}
        showEmailInput
        onlyInput={false}
        title="Login"
        buttonTitle="Register"
        navigations={ () => navigation.navigate('RegisterScreen') }
        message="Don't have an account? "
        colors="black"
        buttonColor="#5856D6"
        messageColor="grey"
        buttonNext="#5856D6"
      />
    </ScrollView>
  )
}
