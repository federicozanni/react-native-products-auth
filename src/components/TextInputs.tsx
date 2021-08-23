import React, { useState } from 'react'
import { Text, TouchableOpacity, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { WhiteLogo } from '../components/WhiteLogo';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { inputsTheme } from '../themes/InputsTheme';
import { TextInputsInt } from '../interfaces/TextInoutsInterface';


export const TextInputs = ( {
  onSubmit,
  onChange,
  nombre,
  email,
  password,
  title,
  buttonTitle,
  navigations,
  message,
  colors,
  buttonColor,
  messageColor,
  buttonNext,
  showNameInput,
  showEmailInput,
  onlyInput,
}: TextInputsInt ) => {

  const [hidePass, setHidePass] = useState(true);
  
  
  return (
    <>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <View style={ inputsTheme.container }>
    { 
      (!onlyInput) && 
      <>
        <WhiteLogo />

        <Text style={ {...inputsTheme.textTitle, color:colors} } >{title}</Text>
      </>
    }

    <View style={ inputsTheme.textInputContainer } >
    { (showNameInput)
      &&
      <View style={inputsTheme.textInputSection}>
      <Icon style={{...inputsTheme.inputIcon, color: colors, borderColor:colors}} name="person-outline" size={20} color="#000"/>
        <TextInput
            style={{...inputsTheme.input, color:colors, borderColor: colors}}
            placeholder= "Name"
            keyboardType="default"
            placeholderTextColor="#001d3d"
            autoCapitalize="none"
            autoCorrect={ false }
            value={ nombre }
            onChangeText={ (value) => onChange(value, 'nombre') }
            onSubmitEditing={ onSubmit }
            underlineColorAndroid="transparent"
        />
      </View>
    }

    { (showEmailInput)
      &&
      <View style={inputsTheme.textInputSection}>
      <Icon style={{...inputsTheme.inputIcon, color: colors, borderColor:colors}} name="mail-outline" size={20} color="#000"/>
        <TextInput
            style={{...inputsTheme.input, color:colors, borderColor: colors}}
            placeholder="Email"
            keyboardType="email-address"
            placeholderTextColor="#001d3d"
            autoCapitalize="none"
            autoCorrect={ false }
            value={ email }
            onChangeText={ (value) => onChange(value, 'email') }
            onSubmitEditing={ onSubmit }
            underlineColorAndroid="transparent"
        />
      </View>
    }

      <View style={inputsTheme.textInputSection}>
          <Icon style={{...inputsTheme.inputIcon, color: colors, borderColor:colors}} name="lock-closed-outline" size={20} color="#000"/>
          <TextInput
              style={{...inputsTheme.input, color:colors, borderColor: colors}}
              placeholder="Password"
              placeholderTextColor="#001d3d"
              autoCapitalize="none"
              secureTextEntry={hidePass ? true : false}
              value={ password }
              maxLength={200}
              onChangeText={ (value) => onChange(value, 'password') }
              onSubmitEditing={ onSubmit }
              underlineColorAndroid="transparent"
          />
          <Icon
              style={{...inputsTheme.IconHidePassword, color:colors, borderColor: colors}}
              name={ hidePass ? 'eye-off' : 'eye' }
              size={20}
              color="grey"
              onPress={ () => setHidePass(!hidePass) }
            />
        </View>
      </View>

      { (!onlyInput) &&
        <> 
          <View style={inputsTheme.buttonContainer} >
            <TouchableOpacity
                style={{ ...inputsTheme.buttonLogin, borderColor: buttonColor  }}
                activeOpacity={ 0.7 }
                onPress={ onSubmit }
            >
                <Text style={{ color: colors }} >{title}</Text>
            </TouchableOpacity>
          </View> 

          <View style={ inputsTheme.buttonLoginContainer } >
           <Text style={{ ...inputsTheme.textButtonMessageLogin, color: messageColor}}>{message}</Text>
            <TouchableOpacity
                activeOpacity={ 0.7 }
                onPress={ navigations }
            >
                <Text style={{ ...inputsTheme.textButtonLogin, color: buttonNext}}>{buttonTitle}</Text>
            </TouchableOpacity>
          </View>
          </>
      }
        </View>
      </TouchableWithoutFeedback>
    </>
  )
}
