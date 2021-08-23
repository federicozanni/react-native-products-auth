import { StyleSheet } from "react-native";

export const inputsTheme = StyleSheet.create({

  container: {
    flex: 1,
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 80,
  },

  textTitle: {
    fontSize: 20,
    fontWeight: '700',
    textAlign:'center',
  },

  textInputContainer: {
    marginTop: 15,
    alignItems: 'center',
    paddingVertical: 10,
  },

  textInputSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '700',
    marginBottom: 16,
    width: 300,
    paddingVertical: 6,
  },

  inputIcon: {
    paddingVertical: 10,
    height: 40,
    borderBottomWidth: 0.8,
  },
  
  input: {
    flex:1,
    borderBottomWidth: 0.8,
    fontSize: 16,
    height: 40,
    width: 300,
    paddingHorizontal: 10,
  },

  IconHidePassword: {
    paddingRight: 15,
    paddingVertical: 10,
    height: 40,
    borderBottomWidth: 0.8,
  },

  buttonContainer: {
    alignItems: 'center',
    paddingTop: 15,
  },

  buttonLogin: {
    borderWidth: 2,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 100,
    alignItems: 'center',
    height: 46,
    width: 300,
    justifyContent: 'center'
  },

  buttonLoginContainer: {
    alignItems: 'flex-end',
    paddingTop: 21,
    width: 300,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginEnd: -20,
  },

  textButtonLogin: {
    fontSize: 17,
    fontWeight: 'bold',
  },

  textButtonMessageLogin: {
    fontSize: 16,
    color: '#dcdcdc',
    fontWeight: '200',
  },


})
  
