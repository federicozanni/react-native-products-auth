import { useContext, useEffect } from 'react'
import { Alert } from 'react-native';


export const AlertError = ( message: string, context: any ) => {

  const { errorMessage, removeError } = useContext(context);

    useEffect(() => {
      if (errorMessage.length === 0 ) return;
  
        Alert.alert( message , errorMessage,
            [{
              text: 'Ok',
              onPress: removeError
            }]
          )
      
    }, [errorMessage]) 
  
}
