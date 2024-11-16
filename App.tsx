import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import  {List}  from './src/screens/main';
import {VehicleCreate} from './src/screens/addVehicle';
import {VehicleDetails} from './src/screens/vehicleDetails';
import {EditVehicle} from './src/screens/editVehicle';
import { Register } from './src/screens/register';
import { Login } from './src/screens/login';
import { Home } from './src/screens/home';


const Stack = createNativeStackNavigator();

export const App = () => {
  return (
 <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Create" component={VehicleCreate} options={{headerShown: false}}/>
        <Stack.Screen name="VehicleDetails" component={VehicleDetails} options={{headerShown: false}}/>
        <Stack.Screen name="EditVehicle" component={EditVehicle} options={{headerShown: false}}/>
        <Stack.Screen name="Register" component={Register} options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="Main" component={List} options={{headerShown: false}}/>
      </Stack.Navigator>
  </NavigationContainer>
//<Register/>
  // <List/>
 //<VehicleCreate/>

   );
};


