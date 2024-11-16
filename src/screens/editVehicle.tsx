import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import useEditVehicle from '../hooks/useEditVehicle';



export const EditVehicle: React.FC = () => {

const {
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


} =  useEditVehicle();
    return (
        <SafeAreaProvider style={styles.generalView}>
            <SafeAreaView>
                <ScrollView>
                    <View>
                        <Text style={styles.title}>Edit Vontact</Text>
                        <View style={styles.photoContainer}>
                            {photo ? (
                                <Image style={styles.photo} source={{ uri: photo }} />
                            ) : (
                                <Icon name="account-circle" size={150} />
                            )}
                        </View>
                        <TouchableOpacity style={styles.button} onPress={choosePhoto}>
                            <Icon.Button style={styles.IconButton} name="add-photo-alternate" size={35} onPress={choosePhoto}>
                                Choose from Gallery
                            </Icon.Button>
                        </TouchableOpacity>
                        <View style={styles.button}>
                            <TouchableOpacity>
                                <Icon.Button style={styles.IconButton} name="add-a-photo" size={30} onPress={takePhoto}>
                                    Take Photo
                                </Icon.Button>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
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
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeYear}
                            value={year}
                            placeholder="Year"
                            placeholderTextColor="#f8f8ff"
                            keyboardType="numeric"
                        />
                    </View>
                    <View>
                        <TouchableOpacity style={styles.touchable} onPress={saveVehicle}>
                            <View style={styles.save}>
                                <Icon name="check" size={80} color="#f8f8ff" />
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
        marginBottom: 20,
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
    info: {
        fontSize: 20,
        marginBottom: 10,
        color: '#f0f8ff',
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginRight: 12,
        alignSelf: 'center',

    },
    location: {
        marginTop: 10,
    },
    centerContent: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    centerText: {
        textAlign: 'center',
        color:'#f0f8ff',
        fontSize:20,
    },
});


export default EditVehicle;
