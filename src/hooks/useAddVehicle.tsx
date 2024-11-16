import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Alert } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { Vehicle } from '../types';
import { checkOrRequestCameraPermission, checkOrRequestGalleryPermissions } from '../types/checkPermission';
import { CreateNavigation } from '../types/navigationTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';


const useAddVehicle = () => {

    const navigation = useNavigation<CreateNavigation>();
    const [make, onChangeMake] = React.useState('');
    const [model, onChangeModel] = React.useState('');
    const [year, onChangeYear] = React.useState('');
    const [licensePlate, onChangeLicensePlate] = React.useState<string>('');
    const [photo, onChangeFile] = React.useState<string | undefined>(undefined);


    const TakePhoto = async () => {
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

    const ChooseFile = async () => {

        const hasPermission = await checkOrRequestGalleryPermissions(onChangeFile);
        if (!hasPermission) {
            Alert.alert('Permission Required', 'Storage permission is needed to access the gallery.');
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



    const SaveVehicle = async () => {
        try {

            if (!make) {
                Alert.alert('Error', 'Please input a Make');
                return;
            }

            if (!model) {
                Alert.alert('Error', 'Please input a Model');
                return;
            }



            // Obtén el último ID almacenado y conviértelo a un número
            const lastId = await AsyncStorage.getItem('lastId');
            const newId = lastId ? parseInt(lastId, 10) + 1 : 1;


            // Crea un objeto que cumpla con la interfaz Item
            const vehicle: Vehicle = {
                make,
                model,
                year,
                licensePlate,
                photo,
            };


            await AsyncStorage.setItem('lastId', newId.toString());

            // Guarda el vehiculo en AsyncStorage como una cadena JSON

            // await AsyncStorage.setItem( JSON.stringify(vehicle));

            Alert.alert('Success', 'Vehicle saved successfully');
            console.log('Vehicle saved:', vehicle);

            // Navega de vuelta a la pantalla de inicio
            navigation.navigate('Home');

        } catch (error) {
            console.error('Error saving vehicle to local storage:', error);
            Alert.alert('Error', 'Failed to save vehicle');
        }
    };

    return{
        onChangeMake,
        onChangeModel,
        onChangeYear,
        TakePhoto,
        ChooseFile,
        SaveVehicle,
        photo,
        make,
        year,
        licensePlate,
        model,
        onChangeLicensePlate,








    };

};

export default useAddVehicle;
