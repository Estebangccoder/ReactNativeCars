// screens/WelcomeScreen.tsx

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, StatusBar } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import logo from '../../assets/logo.webp';
import useHome from '../hooks/useHome';


export const Home = () => {
    const {
        handleLogin,
        handleRegister,
    } = useHome();
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.imageContainer}>
          <Image
            source={logo}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.title}>Welcome to Belatrix S.A.</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={handleLogin}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={handleRegister}
          >
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
    padding: 20,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
},
  image: {
    width: 400,
    height: 300,
    borderRadius:80,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#00bfff',
    marginBottom: 20,
    textAlign:'center',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#00bfff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginBottom: 15,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#f8f8ff',
    fontWeight: 'bold',
  },
});
