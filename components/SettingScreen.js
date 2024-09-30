import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SettingsScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
        <View style={{ width: 24 }} /> 
      </View>
      
      <View style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.title}>Ocems Connect</Text>
          <Text style={styles.info}>version: 1.2.0</Text>
          <Text style={styles.info}>Firmware Version:</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>Device ID:</Text>
          <Text style={styles.info}>YourDeviceIDHere</Text>
        </View>
        <View style={styles.section}>
          <TouchableOpacity style={styles.iconButton} onPress={() => console.log('Device Reset')}>
            <Ionicons name="reload" size={30} color="#236A80" />
            <Text style={styles.iconText}>Device Reset</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton} onPress={() => console.log('Logout')}>
            <Ionicons name="power" size={30} color="#236A80" />
            <Text style={styles.iconText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
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
    padding: 20,
    
  },
  section: {
    marginBottom: 20,
    marginTop:20,
    padding: 30,
    borderRadius: 5,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    alignItems:'center'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    marginBottom: 10,
  },
  iconButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  iconText: {
    marginLeft: 10,
    fontSize: 16,
  }
});

export default SettingsScreen;
