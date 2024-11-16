import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';
import React from 'react';
import { Alert} from 'react-native';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import { Vehicle } from '../types';
import { checkOrRequestGalleryPermissions, checkOrRequestCameraPermission } from '../types/checkPermission';
import { EditVehicleNavigation } from '../types/navigationTypes';

type EditVehicleRouteProp = RouteProp<{ params: { vehicle: Vehicle } }, 'params'>;

export default function useEditVehicle() {
    const route = useRoute<EditVehicleRouteProp>();
    const navigation = useNavigation<EditVehicleNavigation>();
    const { vehicle } = route.params;

    const [make, onChangeMake] = React.useState(vehicle.make);
    const [model, onChangeModel] = React.useState(vehicle.model);
    const [year, onChangeYear] = React.useState(vehicle.year);
    const [licensePlate, onChangeLicensePlate] = React.useState<string>(vehicle.licensePlate);
    const [photo, onChangeFile] = React.useState<string | undefined>(vehicle.photo);




    const saveVehicle = async () => {
        try {

            if (!make){
                Alert.alert('Error','Please input a make');
                return;
            }

            if (!model){
                Alert.alert('Error','Please input a Phone Number');
                return;
            }

            const updatedVehicle: Vehicle = {
                make,
                model,
                year,
                licensePlate,
                photo,
             };

       //logica para actualizar
             Alert.alert('Success', 'Vehicle updated successfully.');
             console.log('Vehicle updated:', updatedVehicle);
             // Navega de vuelta a la pantalla de inicio
            navigation.navigate('Home');

        } catch (error) {
            console.error('Error updating vehicle:', error);
            Alert.alert('Error', 'Failed to update vehicle.');
        }
    };

    const choosePhoto = async () => {
        const hasPermission = await checkOrRequestGalleryPermissions(onChangeFile);
        if (!hasPermission) {
            Alert.alert('Permission Required', 'Library permission is needed to upload a photo.');
            return;
        }
        const response = await launchImageLibrary({ mediaType: 'photo' });
        if (response.assets && response.assets.length > 0) {
            const uri = response.assets[0].uri;
            if (uri) {
                onChangeFile(uri);
            }
        }
    };

    const takePhoto = async () => {
        const hasPermission = await checkOrRequestCameraPermission(onChangeFile);
        if (!hasPermission) {
            Alert.alert('Permission Required', 'Camera permission is needed to take a photo.');
            return;
        }


        const response = await launchCamera({ mediaType: 'photo' });
        if (response.assets && response.assets.length > 0) {
            const uri = response.assets[0].uri;
            if (uri) {
                onChangeFile(uri);
            }
        }
    };
return{
    onChangeFile,
    onChangeMake,
    onChangeModel,
    onChangeYear,
    onChangeLicensePlate,
    saveVehicle,
    choosePhoto,
    takePhoto,
    photo,
    make,
    model,
    licensePlate,
    year,


};

}
