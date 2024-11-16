import { useState } from 'react';
import { Alert } from 'react-native';
import { registerUserService } from '../services/registerUserService';
import { useNavigation } from '@react-navigation/native';
import {  Register } from '../types/navigationTypes';


export default function useRegister() {
  const navigation = useNavigation<Register>();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [ConfirmPassword, setConfirmPassword] = useState('');


  const handleRegister = async () => {
    try {


      // if (setPassword !== setConfirmPassword){
      //   Alert.alert('Error', 'The password does not match. Please try again');
      //   return;
      // }

      const response = await registerUserService(name, email, password);

      if (response.status === 201) {
        Alert.alert('Succesful!', 'Registered user');
      }

      navigation.navigate('Home');
    } catch (error) {
      console.error('Error while registering:', error);
      Alert.alert('Error', 'The user could not be registered. Please try again');
      navigation.navigate('Home');
    }
  };
  return {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    handleRegister,
    // ConfirmPassword,
    // setConfirmPassword,


  };
}






























// import {useState} from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { registerUserService } from '../services/registerUserService';
// import { Alert } from 'react-native';



// const useRegister = () => {

//   const [isLoading, setIsLoading] = useState<boolean>(false);
//   const [error, setError] = useState<string>('');

//   const handleRegister = async (name:string, email: string, password: string) => {
//     setIsLoading(true);
//     setError('');

//     try {
//       const response = await registerUserService(name,email, password);
//       if (response.code === 201) {
//         const user = {
//           name: response.data.name,
//           email: response.data.email,
//           password: response.data.password,
//           token: response.data.token,
//         };
//         await AsyncStorage.setItem('user', JSON.stringify(user));
//         setIsLoading(false);
//         Alert.alert('Succesful!', 'Registered user');
//         return response;
//       }
//     } catch (catchError: any) {
//       setIsLoading(false);
//       setError(catchError.message);
//     }
//   };

//   return {handleRegister, isLoading, error};
// };

// export default useRegister;
