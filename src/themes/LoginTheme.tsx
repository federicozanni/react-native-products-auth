import { StyleSheet } from "react-native";

export const loginTheme = StyleSheet.create({

  container: {
    flex: 1,
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#5856D6',
    textAlign:'center',
  },

  textInputContainer: {
    marginTop: 0,
    alignItems: 'center',
    paddingVertical: 10,
  },

  textInputSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    color: '#5856D6',
    marginBottom: 16,
    width: 300,
    paddingVertical: 6,
  },

  inputIcon: {
    paddingVertical: 5,
    borderColor: '#5856D6',
    height: 40,
    color: '#5856D6',
    borderBottomWidth: 0.9,
  },
  
  input: {
    flex:1,
    color: 'black',
    borderBottomWidth: 0.9,
    fontSize: 16,
    height: 40,
    width: 300,
    paddingHorizontal: 10,
    borderColor: '#5856D6'
  },

  IconHidePassword: {
    paddingRight: 15,
    paddingVertical: 10,
    borderColor: '#5856D6',
    height: 40,
    color: '#5856D6',
    borderBottomWidth: 0.9,
  },

  buttonLoginContainer: {
    alignItems: 'center',
    paddingTop: 15,
  },

  buttonLogin: {
    borderWidth: 2,
    borderColor: '#5856D6',
    paddingHorizontal: 20,
    borderRadius: 100,
    alignItems: 'center',
    height: 46,
    width: 300,
    justifyContent: 'center'
  },

  buttonGoogleLogin: {
    marginTop: 10,
    height: 60,
    width: 200,
  },

  buttonRegisterContainer: {
    alignItems: 'flex-end',
    paddingTop: 21,
    width: 300,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginEnd: -20,
  },

  textButtonRegister: {
    fontSize: 17,
    color: '#5856D6',
    fontWeight: 'bold',
  },

  textButtonMessageRegister: {
    fontSize: 16,
    color: 'grey',
    fontWeight: '200',
  },

})
