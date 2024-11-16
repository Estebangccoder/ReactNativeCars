import React from 'react';
import { StyleSheet, TextInput, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import Icons from 'react-native-vector-icons/MaterialIcons';
import useAddVehicle from '../hooks/useAddVehicle';



export const VehicleCreate = () => {
    const {
        onChangeMake,
        onChangeModel,
        onChangeYear,
        onChangeLicensePlate,
        TakePhoto,
        ChooseFile,
        SaveVehicle,
        photo,
        make,
        year,
        licensePlate,
        model,

    } = useAddVehicle();


    return (
        <SafeAreaProvider style={styles.generalView}>
            <SafeAreaView >
                <ScrollView>
                    <View>
                        <Text style={styles.title}>New Vehicle</Text>
                        <View style={styles.photoContainer}>
                            {photo ?
                                <Image style={styles.photo} source={{ uri: photo }} />
                                :
                                <Icons name="car-rental" size={140} />}
                        </View>
                        <View style={styles.button}>
                            <TouchableOpacity >
                            <Icons.Button style={styles.IconButton} name="add-photo-alternate" size={35} onPress={ChooseFile}>Choose from Gallery</Icons.Button>
                        </TouchableOpacity>
                        </View>

                        <View style={styles.button}>
                            <TouchableOpacity >
                                <Icons.Button style={styles.IconButton} name="add-a-photo" size={30} onPress={TakePhoto}> Take Photo</Icons.Button>
                            </TouchableOpacity>
                        </View>

                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeLicensePlate}
                            value={licensePlate}
                            placeholder="License Plate"
                            placeholderTextColor="#f8f8ff"
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeMake}
                            value={make}
                            placeholder="Make"
                            placeholderTextColor="#f8f8ff"
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeModel}
                            value={model}
                            placeholder="Model"
                            placeholderTextColor="#f8f8ff"
                            keyboardType="numeric"
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeYear}
                            value={year}
                            placeholder="Year"
                            placeholderTextColor="#f8f8ff"
                        />

                    </View>
                    <View>
                        <TouchableOpacity style={styles.touchable} onPress={SaveVehicle}>
                            <View style={styles.save}>
                                <Icons name="add-circle" size={80} color="#f8f8ff" />
                            </View>
                        </TouchableOpacity>

                    </View>

                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    generalView: {
        backgroundColor: '#00bfff',
    },
    input: {
        height: 50,
        margin: 12,
        borderWidth: 3,
        padding: 10,
        color: '#f8f8ff',
        borderColor: '#f8f8ff',
        fontSize: 25,
        borderRadius: 15,
    },

    title: {
        fontSize: 50,
        color: '#f8f8ff',
        textAlign: 'center',
        margin: 50,
        fontWeight: '600',

    },

    save: {
        padding: 8,
        color: '#f8f8ff',
        fontSize: 25,
        borderRadius: 25,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontWeight: '700',
    },

    touchable: {
        marginTop: 30,
        alignItems: 'center',
    },
    photoContainer: {
        width: 150,
        height: 150,
        borderRadius: 75,
        alignSelf: 'center',
        overflow: 'hidden',
        backgroundColor: '#ebebfe',
    },
    photo: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    IconButton: {
        color: '#f8f8ff',
        fontWeight: '600',
        backgroundColor: '#312bf9',
    },
    button: {
        backgroundColor: '#312bf9',
        padding: 10,
        borderRadius: 10,
        marginVertical: 5,
        alignItems: 'center',
        height: 70,
        width: 200,
        alignSelf: 'center',

    },
});

