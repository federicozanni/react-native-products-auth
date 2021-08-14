import { StyleSheet } from "react-native";

export const productsTheme = StyleSheet.create({

  container: {
    flex: 1,
  },

  productsListUser: {
    flexDirection: 'row',
    borderBottomWidth: 1.5,
    paddingVertical: 8,
    borderBottomColor: 'rgba(0,0,0,0.1)',
    marginHorizontal: 10,
  },

  buttonAddProduct: {
    marginHorizontal: 10,
    backgroundColor: '#457b9d',
    width: 70,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },

  imageProduct: {
    width: 120,
    height: 150,
    marginRight: 10,
    borderRadius: 5,
    marginVertical: 7,
    marginHorizontal: 10,
  },

  productListDetails: {
    marginHorizontal: 10,
    flexDirection: 'column',
    flex: 1,
  },

  nameAndIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

})