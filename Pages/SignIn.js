// SignIn.js

import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput, Button, Snackbar} from 'react-native-paper';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false);

  const onSignInPress = () => {
    // Implement your sign-in logic here
    // You can make API calls or perform authentication as needed
    // Display an error using `showSnackbar` if sign-in fails
    // Redirect to another page on successful sign-in
    // Navigate to the SignUp screen
    if (!email && !password) {
      console.warn('please fill the fields');
    } else {
      navigation.navigate('Home');
      // Alert("error")
    }
    // setVisible(true);
  };

  const onSignUpPress = () => {
    // Navigate to the SignUp screen
    navigation.navigate('SignUp');
  };

  const onDismissSnackbar = () => {
    setVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          color: '#000',
          fontSize: 30,
          textAlign: 'center',
          marginBottom: 15,
        }}>
        SignIn
      </Text>
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
      <Button mode="contained" onPress={onSignInPress} style={styles.button}>
        Sign In
      </Button>
      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackbar}
        action={{
          label: 'Dismiss',
          onPress: onDismissSnackbar,
        }}>
        Sign-in failed. Please try again.
      </Snackbar>
      <Button onPress={onSignUpPress}>SignUp</Button>
      {/* <Button onPress={onSignUpPress}>SignUp</Button> */}
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
    color: '#000',
  },
});

export default SignIn;
