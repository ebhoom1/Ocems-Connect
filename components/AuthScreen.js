import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform
} from 'react-native';

const AuthScreen = ({ navigation }) => {
  const [credential, setCredential] = useState('');

  const handleVerify = () => {
    // Here you can add your verification logic
    navigation.navigate('Main');
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      enabled={true}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.innerContainer}>
          <Image source={require('../assets/ocems-device.png')} style={styles.image} />
          <View style={styles.inputContainer}>
            <Image source={require('../assets/flag-icon.png')} style={styles.flagIcon} />
            <TextInput
              style={styles.input}
              onChangeText={setCredential}
              value={credential}
              placeholder="Enter Auth Credential"
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={handleVerify}>
            <Text style={styles.buttonText}>Verify</Text>
          </TouchableOpacity>
          <Text style={styles.footerText}>
            By Continuing you agree to our Privacy Policy
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 20
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    borderWidth: 1,
    margin: 12,
  },
  flagIcon: {
    marginLeft: 10,
    marginRight: 5,
    width: 24,
    height: 24,
  },
  input: {
    flex: 1,
    height: 40,
    padding: 10,
  },
  button: {
    backgroundColor: '#236A80',
    padding: 10,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerText: {
    fontSize: 12,
    color: 'grey',
    textAlign: 'center',
  }
});

export default AuthScreen;
