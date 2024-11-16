import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Vehicle } from './index';


export type RootStackParamList={
  Home:undefined;
  Create:undefined;
  VehicleDetails: { vehicle: Vehicle };
  EditVehicle:{ vehicle: Vehicle };
  Login:undefined;
  Register:undefined;
  Main:undefined;

}

export type HomeNavigation = NativeStackNavigationProp<RootStackParamList, 'Home'>

export type CreateNavigation = NativeStackNavigationProp<RootStackParamList, 'Create'>

export type VehicleDetailsNavigation = NativeStackNavigationProp<RootStackParamList, 'VehicleDetails'>;

export type EditVehicleNavigation = NativeStackNavigationProp<RootStackParamList, 'EditVehicle'>;

export type Login = NativeStackNavigationProp<RootStackParamList, 'Login'>;

export type Register = NativeStackNavigationProp<RootStackParamList, 'Register'>;

export type Main = NativeStackNavigationProp<RootStackParamList, 'Main'>;
