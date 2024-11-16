// import axios from 'axios';
// import {API_URL} from '@env';


// const api = axios.create({
//   baseURL: API_URL,
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });


// export const registerUserService = async (name: string, email: string, password: string) => {
//   try {
//     const response = await api.post('/auth/register', {
//       name,
//       email,
//       password,
//     });
//     return response.data;
//   } catch (error) {
//     console.error('Registration failed:', error);
//     throw error;
//   }
// };



import axios from 'axios';
import { API_URL } from '@env';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const registerUserService = async (name: string, email: string, password: string) => {
  try {
    const response = await api.post('/auth/register', {
      name,
      email,
      password,
    });
    console.log('Response from API:', response);  //
    // Acceder al objeto `data` en la respuesta
    if (response.status === 201) {
      return response.data.data; // Devuelve la parte de `data` que contiene `email` e `id`
    } else {
      throw new Error('Registration failed: ' + response.data.message);
    }
  } catch (error) {
    console.error('Registration failed:', error);
    throw error;
  }
};
