import { StyleSheet } from "react-native";

export const productTheme = StyleSheet.create({

  container: {
    flex: 1,
  },

  label: {
    fontSize: 18,
    fontWeight: "bold"
  },

  productDetail:{
    fontSize: 18,
    marginBottom: 10,
    marginTop: 5,
    fontWeight: "600"
  },


  textInput: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 0,
    backgroundColor: 'white',
    borderColor: 'rgba(0,0,0,0.2)',
    height: 45,
    marginTop: 5,
    color: 'black',
    marginBottom: 15,
    width: '100%',
  },

  imageProduct: {
    width: 300,
    height: 300,
  },

  loadIndicator: {
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },

  freeShipping: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },

  freeShippingImage: {
    width: 145,
    height: 70,
  },

  freeShippingIconContainer: {
    marginVertical: 10,
  },

  freeShippingIcon: {
    width: 65,
    height: 65,
  },

})