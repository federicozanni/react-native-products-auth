import { StyleSheet } from "react-native";

export const settingTheme = StyleSheet.create({

  container: {
    marginHorizontal: 20,
    alignItems: 'center',
    flex: 1,
  },

  avatar: {
    width: 200,
    height: 200,
  },

  titleContainer: {
    marginTop: 20,
    alignItems: 'center',
  },

  title: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'left',
    alignItems: 'flex-start',
    marginBottom: 10,
  },

  buttonsContainer: {
    flexDirection: 'column', 
    justifyContent:'center', 
    marginTop: 30, 
    marginHorizontal: 25,
  },

  buttonTitle: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },

})