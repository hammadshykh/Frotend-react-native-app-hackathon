// SignUp.js

import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, Button, Snackbar } from 'react-native-paper';

const SignUp = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false);
  const onSignUpPress = () => {
    console.log("signUp")
    // Implement your sign-up logic here
    // You can make API calls or perform authentication as needed
    // Display an error using `showSnackbar` if sign-up fails
    // Redirect to another page on successful sign-up
    setVisible(true);
  };

  const onSignInPress = () => {
    // Navigate to the SignUp screen
    navigation.navigate('SignIn');
  };

  const onDismissSnackbar = () => {
    setVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={{color:"#000",fontSize:30,textAlign:"center",marginBottom:15}}>Create Account</Text>
      <TextInput
        label="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        mode="outlined"
        style={styles.input}
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
        mode="outlined"
        style={styles.input}
      />
      <Button mode="contained" onPress={onSignUpPress} style={styles.button}>
        Sign Up
      </Button>
      <Button onPress={onSignInPress}>SignIn</Button>

      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackbar}
        action={{
          label: 'Dismiss',
          onPress: onDismissSnackbar,
        }}
        style={styles.colors}
        
      >
        Sign-up failed. Please try again.
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  input: {
    marginBottom: 12,
  },
  button: {
    marginTop: 16,
  },
  colors:{
    color:"#000"
  }
});

export default SignUp;
