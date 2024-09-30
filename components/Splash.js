// Splash.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Splash = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.text}>Ocems Connect</Text>
      <View style={styles.footer}>
        <Text style={styles.version}>V 1.2.0</Text>
        <Text style={styles.companyName}>Ebhoom Solutions</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100, // Adjust size as needed
    height: 100, // Adjust size as needed
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 40, // Give enough space to ensure text does not overlap with footer
  },
  version: {
    fontSize: 16,
  },
  companyName: {
    fontSize: 16,
  },
  footer: {
    position: 'absolute',
    bottom: 20, // Adjust distance from the bottom
    alignItems: 'center',
  }
});

export default Splash;
