import { StyleSheet } from "react-native";


export const modalStyle = StyleSheet.create({

  containerModal: {
    flex: 1,
    alignItems: "center",
  },

  modal: {
    flex: 1,
    //backgroundColor: 'rgba(0,0,0,0.2)',
    alignItems: "center",
    flexDirection: "column",
    justifyContent: 'flex-end'
  },

  modalContents: {
    height: 150,
    width: '100%',
    backgroundColor: '#e9ecef',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,

    elevation: 17,
  },

  titleModal: {
    flex: 1,
    textAlign: 'left',
    fontSize: 25,
    color: '#212529',
    fontWeight: '700',
  },


})