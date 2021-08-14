import React, { useState } from 'react'
import { Text, TouchableOpacity, View, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';
import { loginTheme } from '../themes/LoginTheme';
import { WhiteLogo } from '../components/WhiteLogo';
import { TextInput } from 'react-native-gesture-handler';
import { LoginNavigation } from '../interfaces/NavigationInterface';
import { Login } from '../helpers/Login';
import { AlertError } from '../components/AlertError';
import { AuthContext } from '../context/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';


export const LoginScreen = ( {navigation}: LoginNavigation ) => {

  const {
      onLogin,
      onChange,
      email,
      password,
    } = Login();
    
    const [hidePass, setHidePass] = useState(true);
    
    AlertError('Login incorrecto', AuthContext);


  return (
    <ScrollView
      showsVerticalScrollIndicator={ false }
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        
        <View style={ loginTheme.container }>
          <WhiteLogo />

          <Text style={ loginTheme.textTitle } >Login</Text>

          <View style={ loginTheme.textInputContainer } >
            <View style={loginTheme.textInputSection}>
            <Icon style={loginTheme.inputIcon} name="mail-outline" size={20} color="#000"/>
              <TextInput
                  style={loginTheme.input}
                  placeholder="Email"
                  placeholderTextColor="#001d3d"
                  keyboardType="email-address"
                  scrollEnabled={false}
                  autoCapitalize="none"
                  autoCorrect={ false }
                  maxLength={200}
                  value={ email }
                  onChangeText={ (value) => onChange(value, 'email') }
                  onSubmitEditing={ onLogin }
                  underlineColorAndroid="transparent"
              />
          </View>

            <View style={loginTheme.textInputSection}>
              <Icon style={loginTheme.inputIcon} name="lock-closed-outline" size={20} color="#000"/>
              <TextInput
                  style={loginTheme.input}
                  placeholder="Password"
                  placeholderTextColor="#001d3d"
                  autoCapitalize="none"
                  secureTextEntry={hidePass ? true : false}
                  value={ password }
                  maxLength={200}
                  onChangeText={ (value) => onChange(value, 'password') }
                  onSubmitEditing={ onLogin }
                  underlineColorAndroid="transparent"
              />
              <Icon
                  style={loginTheme.IconHidePassword}
                  name={ hidePass ? 'eye-off' : 'eye' }
                  size={20}
                  color="grey"
                  onPress={ () => setHidePass(!hidePass) }
                />
            </View>
          </View>

          <View style={ loginTheme.buttonLoginContainer } >
              <TouchableOpacity
                  style={ loginTheme.buttonLogin }
                  activeOpacity={ 0.7 }
                  onPress={ onLogin }
              >
                <Text style={{ color:'#001d3d', fontSize: 20, fontWeight: '800' }} >Login</Text>
              </TouchableOpacity>
          </View> 

          <View style={ loginTheme.buttonRegisterContainer } >
            <Text style={ loginTheme.textButtonMessageRegister}>Don't have an account? </Text>
            <TouchableOpacity
                activeOpacity={ 0.7 }
                onPress={ () => navigation.replace('RegisterScreen') }
            >
                <Text style={ loginTheme.textButtonRegister}>Register</Text>
            </TouchableOpacity>
          </View>

        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  )
}
