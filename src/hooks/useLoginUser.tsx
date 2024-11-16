import { useState } from 'react';
import { Alert } from 'react-native';
import {loginUserService} from '../services/loginUserService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Login } from '../types/navigationTypes';

export default function useLoginUser() {
  const navigation = useNavigation<Login>();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
      try {
        const response = await loginUserService(email, password);

        if (response && response.token) {
          // Guardamos el token en AsyncStorage
          await AsyncStorage.setItem('userToken', response.token);}

        if (response) {
          Alert.alert('¡Welcome!', 'You have successfully logged in');
          navigation.navigate('Main');

        }
      } catch (error) {
        Alert.alert('Error', 'Login failed. Please check your email or password.');
        navigation.navigate('Home');
      }
    };
return{

    email,
    password,
    setEmail,
    setPassword,
    handleLogin,
};
}
