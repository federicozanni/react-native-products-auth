import React, { useState } from 'react'
import { Platform, View, Switch } from 'react-native';
import { TonggleSwitch } from '../interfaces/TonggleSwitchInterface';
import { switchStyle } from '../themes/SwitchStyle';

export const CustomSwitch = ( { isOn, onChange }: TonggleSwitch ) => {

  const [ isEnabled, setIsEnabled ] = useState(isOn);

  const toggleSwitch = () => { 
    setIsEnabled( !isEnabled );
    onChange( !isEnabled );
  };

  const thumb = (Platform.OS === 'android' ? '#5856D6' : '' );
  

  return (
    <View style={ switchStyle.containerSwitch } >
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={ thumb }
        onValueChange={ toggleSwitch }
        value={ isEnabled }
        style={ switchStyle.switchSize }
      />   
    </View>
  )
}
