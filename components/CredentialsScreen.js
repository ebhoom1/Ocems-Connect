import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CredentialsScreen = ({ navigation }) => {
  const [ssid, setSsid] = useState('');
  const [password, setPassword] = useState('');
  const [ocppUrl, setOcppUrl] = useState('');
  const [ocppPort, setOcppPort] = useState('');
  const [authKey, setAuthKey] = useState('');
  const [endPoint, setEndPoint] = useState('');

  const handleSubmit = () => {
    // Handle the submission logic here
    console.log('Submit Pressed');
    // Optionally navigate somewhere else upon submission
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.flexOne}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.flexOne}>
            {/* Custom Header */}
            <View style={styles.header}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="black" />
              </TouchableOpacity>
              <Text style={styles.headerTitle}>Ocems Connect</Text>
              <View style={{ width: 24 }} />  
            </View>
            <ScrollView style={styles.scrollView}>
              <Text style={styles.title}>WiFi Credentials</Text>
              <TextInput
                style={styles.input}
                onChangeText={setSsid}
                value={ssid}
                placeholder="SSID"
              />
              <TextInput
                style={styles.input}
                secureTextEntry
                onChangeText={setPassword}
                value={password}
                placeholder="Password"
              />
              <Text style={styles.title}>OCPP Configuration</Text>
              <TextInput
                style={styles.input}
                onChangeText={setOcppUrl}
                value={ocppUrl}
                placeholder="OCPP url"
              />
              <TextInput
                style={styles.input}
                onChangeText={setOcppPort}
                value={ocppPort}
                placeholder="OCPP port"
              />
              <TextInput
                style={styles.input}
                onChangeText={setAuthKey}
                value={authKey}
                placeholder="Auth Key"
              />
              <TextInput
                style={styles.input}
                onChangeText={setEndPoint}
                value={endPoint}
                placeholder="END POINT"
              />
              <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  flexOne: {
    flex: 1
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding:10,
    marginTop: Platform.OS === 'ios' ? 10 : 10,
    marginBottom: Platform.OS === 'ios' ? 10 : 10,  // additional top padding for iOS
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  scrollView: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    padding: 20,
  },
  input: {
    fontSize: 16,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#236A80',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 80,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  }
});

export default CredentialsScreen;
