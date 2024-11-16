import { useNavigation } from '@react-navigation/native';
import { HomeNavigation } from '../types/navigationTypes';

export default function useHome() {
  const navigation = useNavigation<HomeNavigation>();

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  const handleRegister = () => {
    navigation.navigate('Register');
  };

  return{
    handleLogin,
    handleRegister,
  };
}
