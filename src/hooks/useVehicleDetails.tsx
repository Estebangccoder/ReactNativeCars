import { useRoute, useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Alert } from 'react-native';
import { HomeNavigation } from '../types/navigationTypes';
import { RouteProp} from '@react-navigation/native';
import { Vehicle } from '../types/index';



type VehicleDetailsRouteProp = RouteProp<{ params: { vehicle: Vehicle } }, 'params'>;


export const useVehicleDetails = ()=> {
    const route = useRoute<VehicleDetailsRouteProp>();
    const { vehicle } = route.params;
    const navigation = useNavigation<HomeNavigation>();
    // Estado para el modal de confirmación
    const [modalVisible, setModalVisible] = useState(false);


    // Función para eliminar el vehiculo de AsyncStorage
    const deleteVehicle = async () => {
        try {
            Alert.alert('Deleted', 'The vehicle has been deleted.');
            navigation.navigate('Home');
        } catch (error) {
            console.error('Error deleting vehicle:', error);
            Alert.alert('Error', 'Failed to delete vehicle.');
        }
    };
    const handleEditItem = () => {
        navigation.navigate('EditVehicle', { vehicle });
    };


    return {
        route,
        navigation,
        modalVisible,
        setModalVisible,
        deleteVehicle,
        handleEditItem,
        vehicle,
   };
};
