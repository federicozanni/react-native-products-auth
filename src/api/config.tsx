import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseURL = 'https://react-native-cafe.herokuapp.com/api';

const configApi = axios.create({ baseURL });

configApi.interceptors.request.use(

  async(config) => {
    const token = await AsyncStorage.getItem('token');

    if (token) {
        config.headers['x-token'] = token;
    }
    
    return config;
  }
)

export default configApi;