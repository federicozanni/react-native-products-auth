import { StyleSheet } from "react-native";


export const switchStyle = StyleSheet.create({

  containerSwitch: {
    margin: 6,
    marginHorizontal: 20,
  },

  switchSize: {
    transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }],
    marginEnd: 5.
  },

  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
  },

  switchText: {
    fontSize: 20,
    fontWeight: 'normal',
    marginLeft: 27,
  },

})
