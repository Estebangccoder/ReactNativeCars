import axios from 'axios';
import { API_URL } from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const loginUserService = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, {
      email,
      password,
    });

    if (response.data && response.data.data && response.data.data.access_token) {
      const token = response.data.data.access_token;
      console.log('Token obtenido:', token);

      // Almacenar el token en AsyncStorage
      await AsyncStorage.setItem('userToken', token);

      return response.data.data;
    } else {
      throw new Error('No se encontró el token en la respuesta');
    }
  } catch (error) {
    console.error('Error en el inicio de sesión:', error);
    throw error;
  }
};
