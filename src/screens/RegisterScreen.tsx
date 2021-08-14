import React from 'react'
import { Text, TouchableOpacity, View, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { WhiteLogo } from '../components/WhiteLogo';
import { TextInput } from 'react-native-gesture-handler';
import { Register } from '../helpers/Register';
import { AlertError } from '../components/AlertError';
import Icon from 'react-native-vector-icons/Ionicons';
import { registerTheme } from '../themes/RegisterTheme';
import { RegisterNavigation } from '../interfaces/NavigationInterface';

export const RegisterScreen = ( { navigation }: RegisterNavigation ) => {

  const {
      onRegister,
      onChange,
      name,
      email,
      password,
    } = Register();

  AlertError('Registro incorrecto', AuthContext);
  
  
  return (
    <ScrollView 
      style={{ flex: 1, backgroundColor: '#5856D6' }}
      showsVerticalScrollIndicator={ false }
    >     
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={ registerTheme.container }>
          <WhiteLogo />

          <Text style={ registerTheme.textTitle } >Register</Text>

          <View style={ registerTheme.textInputContainer } >

            <View style={registerTheme.textInputSection}>
            <Icon style={registerTheme.inputIcon} name="person-outline" size={20} color="#000"/>
              <TextInput
                  style={registerTheme.input}
                  placeholder= "Name"
                  keyboardType="default"
                  autoCapitalize="none"
                  autoCorrect={ false }
                  value={ name }
                  onChangeText={ (value) => onChange(value, 'name') }
                  onSubmitEditing={ onRegister }
                  underlineColorAndroid="transparent"
              />
            </View>

            <View style={registerTheme.textInputSection}>
            <Icon style={registerTheme.inputIcon} name="mail-outline" size={20} color="#000"/>
              <TextInput
                  style={registerTheme.input}
                  placeholder="Email"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={ false }
                  value={ email }
                  onChangeText={ (value) => onChange(value, 'email') }
                  onSubmitEditing={ onRegister }
                  underlineColorAndroid="transparent"
              />
          </View>

            <View style={registerTheme.textInputSection}>
              <Icon style={registerTheme.inputIcon} name="lock-closed-outline" size={20} color="#000"/>
              <TextInput
                  style={registerTheme.input}
                  placeholder="Password"
                  autoCapitalize="none"
                  value={ password }
                  onChangeText={ (value) => onChange(value, 'password') }
                  onSubmitEditing={ onRegister }
                  underlineColorAndroid="transparent"
              />
             
            </View>
          </View>

          <View style={ registerTheme.buttonContainer } >
            <TouchableOpacity
                style={ registerTheme.buttonLogin }
                activeOpacity={ 0.7 }
                onPress={ onRegister }
            >
                <Text style={{ color:'white' }} >Register</Text>
            </TouchableOpacity>
          </View> 

          <View style={ registerTheme.buttonLoginContainer } >
           <Text style={ registerTheme.textButtonMessageLogin}>Already have an account? </Text>
            <TouchableOpacity
                activeOpacity={ 0.7 }
                onPress={ () => navigation.navigate('LoginScreen') }
            >
                <Text style={ registerTheme.textButtonLogin}>Login</Text>
            </TouchableOpacity>
          </View>

        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  )
}
