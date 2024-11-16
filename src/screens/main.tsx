
import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Text, StatusBar, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { Main } from '../types/navigationTypes';
import { Vehicle } from '../types';
import { getAllVehicles } from '../services/getAllVehiclesService';

const ItemComponent = ({ make, model, photo, licensePlate }: Vehicle) => (
  <View style={styles.vehicle}>
    <View>
      <Image
        source={{ uri: photo }}
        style={styles.file}
      />
    </View>
    <View>
      <Text style={styles.make}>{licensePlate}</Text>
      <Text style={styles.info}>{model}</Text>
      <Text style={styles.info}>{make}</Text>
    </View>
  </View>
);

export const List = () => {
  const navigation = useNavigation<Main>();
  const [vehicles, onChangeVehicles] = useState<Vehicle[]>([]);

  useEffect(() => {
    const loadVehicles = async () => {
      try {
        const loadedVehicles = await getAllVehicles();
        onChangeVehicles(loadedVehicles);
        console.log('Loaded vehicles:', loadedVehicles);
      } catch (error) {
        console.error('Error loading vehicles:', error);
      }
    };

    loadVehicles();

    const unsubscribe = navigation.addListener('focus', () => {
      loadVehicles();
    });

    return unsubscribe;
  }, [navigation]);

  const handleAddItem = () => {
    navigation.navigate('Create');
  };

  const handleViewVehicle = (vehicle: Vehicle) => {
    navigation.navigate('VehicleDetails', { vehicle });
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
             data={vehicles}
             renderItem={({ item }) => {
               return (
                 <TouchableOpacity onPress={() => handleViewVehicle(item)}>
                   <ItemComponent
                     photo={item.photo}
                     make={item.make}
                     model={item.model}
                     year={item.year}
                     licensePlate={item.licensePlate}
                   />
                 </TouchableOpacity>
               );
             }}
             keyExtractor={(item) => item.licensePlate}
        />

        <View>
          <TouchableOpacity style={styles.add} onPress={handleAddItem}>
            <Icon name="add-circle" size={80} color="#f8f8ff" style={styles.iconStyle} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  vehicle: {
    backgroundColor: '#00bfff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 30,
    flexDirection: 'row',
    flex: 1,
  },
  make: {
    fontSize: 22,
    color: '#f0f8ff',
    fontWeight: '900',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  info: {
    fontSize: 16,
    color: '#f8f8ff',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  file: {
    flex: 1,
    width: 100,
    height: 100,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  add: {
    position: 'absolute',
    bottom: 20,
    left: 300,
    width: 80,
    height: 80,
    borderRadius: 90,
    elevation: 5,
    backgroundColor:'#00bfff',
    shadowColor: '#312bf9',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3.5,
  },
  address:{
    display:'none',
  },
  iconStyle: {
    alignSelf: 'center',
  },
});


