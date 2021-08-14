import { StyleSheet } from 'react-native';

export const menuLat = StyleSheet.create({

  container: {
    flex: 1,
  },

  avatarContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 120,
  },

  avatar: {
    width: 70,
    height: 70,
    borderRadius: 100,
    marginHorizontal: 10
  },

  menuContainer: {
    marginVertical: 10,
    marginHorizontal: 20
  },

  menuBoton: {
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  menuTexto: {
    fontSize: 20,
  },

  avatarChange: {
    width: 200,
    height: 200,
  },

  avatarPosition: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },

  textName:{
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
    textTransform: 'uppercase'
  },

  itemSeparator: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1.5,
    marginVertical: 8,
    borderBottomColor: 'rgba(0,0,0,0.1)',
  },

  buttonLogout: {
    height: 100,
    alignItems:'flex-start',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

});