import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const MainScreen = ({ navigation }) => {
  const [selectedNetwork, setSelectedNetwork] = useState(null);
  const [selectedDevice, setSelectedDevice] = useState(null);

  const handleNetworkPress = (network) => {
    setSelectedNetwork(network);
  };

  const handleDevicePress = (device) => {
    setSelectedDevice(device);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
       
        <Text style={styles.headerTitle}>Ocems Connect</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
  <Ionicons name="settings" size={24} color="black" />
</TouchableOpacity>

      </View>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Network Configuration</Text>
          {['WIFI', 'GSM', 'ETHERNET'].map((network) => (
            <TouchableOpacity 
              key={network}
              style={[styles.button, selectedNetwork === network ? styles.buttonPressed : null]}
              onPress={() => handleNetworkPress(network)}
            >
              <Text style={[styles.buttonText, selectedNetwork === network ? styles.buttonTextPressed : null]}>
                {network}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Device Type</Text>
          {['Venus', 'Mars'].map((type) => (
            <TouchableOpacity 
              key={type}
              style={[styles.button, selectedDevice === type ? styles.buttonPressed : null]}
              onPress={() => handleDevicePress(type)}
            >
              <Text style={[styles.buttonText, selectedDevice === type ? styles.buttonTextPressed : null]}>
                {type}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
<TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('Credentials')}>
  <Text style={styles.nextButtonText}>Next</Text>
</TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  section: {
    marginBottom: 20,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white',
    padding: 15,
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 5,
  },
  buttonPressed: {
    backgroundColor: '#236A80',
  },
  buttonText: {
    fontSize: 16,
    color: 'black',
    fontWeight: '500',
  },
  buttonTextPressed: {
    color: 'white',
  },
  nextButton: {
    backgroundColor: '#236A80',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
    position: 'absolute',
    bottom: 50,
    left: 20,
    right: 20,
  },
  nextButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  }
});

export default MainScreen;
