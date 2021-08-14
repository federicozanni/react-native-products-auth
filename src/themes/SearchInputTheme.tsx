import { StyleSheet } from 'react-native';

export const searchInputTheme = StyleSheet.create({

  container: {
    marginVertical: 10
  },

  inputSearch: {
    paddingHorizontal: 20,
  },

  textBackground: {
    backgroundColor: '#F3F1F3',
    borderRadius: 50,
    height: 45,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.30,

    elevation: 13,
  },

  textInput: {
    fontSize: 15,
    flex: 1,
    color: 'black',
  }

})