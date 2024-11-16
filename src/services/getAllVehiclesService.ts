import { API_URL } from '@env';
import { Vehicle } from '../types';
import axios from 'axios';
import getToken from '../components/getToken';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(async (config) => {
  const token = await getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export const getAllVehicles = async (): Promise<Vehicle[]> => {
  try {
    const response = await api.get('/vehicles');
    return response.data.data;
  } catch (error) {
    console.error('Error', error);
    throw error;
  }
};
